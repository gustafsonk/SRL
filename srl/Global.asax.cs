using System;
using System.Collections.Generic;
using System.Globalization;
using System.IO;
using System.Linq;
using System.Net;
using System.Web;

namespace srl
{
    // Page-specific information to place in the template.
    public class Page
    {
        public string Title { get; set; }
        public string Description { get; set; }
        public string Keywords { get; set; }

        public Page(string title, string description, string keywords)
        {
            Title = title;
            Description = description;
            Keywords = keywords;
        }
    }

    // Handles any server-side logic needed.
    public class Global : HttpApplication
    {
        private static readonly Random Random = new Random();

        private static string _templateHtml;

        private static readonly Dictionary<string, Page> Pages = new Dictionary<string, Page>
            {
                {"/pages/404.html", new Page("404 - SpeedRunsLive", "404 Error", "404, error")},
                {"/pages/about.html", new Page("About SpeedRunsLive", "About SpeedRunsLive.", "cosmo, jiano, puchiedarcy, bmn")},
                {"/pages/channel.html", new Page("Channel - SpeedRunsLive", "The IRC channel of SpeedRunsLive", "irc, channel")},
                {"/pages/faq.html", new Page("Frequently Asked Questions - SpeedRunsLive", "Frequently asked questions", "speedrunning, faq")},
                {"/pages/faq/commandlist.html", new Page("RaceBot Command List - SpeedRunsLive", "The Complete RaceBot Command List for racing on SpeedRunsLive", "racebot, command list")},
                {"/pages/faq/commandlist/fr.html", new Page("RaceBot Command List - SpeedRunsLive", "The Complete RaceBot Command List for racing on SpeedRunsLive", "racebot, command list")},
                {"/pages/faq/commandlist/jp.html", new Page("RaceBot Command List - SpeedRunsLive", "The Complete RaceBot Command List for racing on SpeedRunsLive", "racebot, command list")},
                {"/pages/faq/glossary.html", new Page("Glossary - SpeedRunsLive", "Speedrunning Glossary", "speedrunning, glossary")},
                {"/pages/index.html", new Page("Streams - SpeedRunsLive", "Speedrunning live-streams.", "stream, live")},
                {"/pages/profiles.html", new Page("Profiles - SpeedRunsLive", "SRL Profile Page", "speedrun, profile, user")},
                // Skip /pages/promotion.html.
                {"/pages/race.html", new Page("Race Viewer - SpeedRunsLive", "Live races & streams", "speedruns, speedrunslive")},
                {"/pages/races.html", new Page("Races - SpeedRunsLive", "Live races & streams", "speedruns, speedrunslive")},
                {"/pages/races/game.html", new Page("Game list - SpeedRunsLive", "The complete Game List", "speedrun, game, list")},
                {"/pages/races/result.html", new Page("Race Result - SpeedRunsLive", "A past race result.", "individual, race")},
                {"/pages/races/seasons.html", new Page("Game list - SpeedRunsLive", "The complete Game List", "speedrun, game, list")},
                {"/pages/tools.html", new Page("Tools - SpeedRunsLive", "Streaming software, timers, etc.", "wsplit, scfh dsf")},
                // Skip /pages/tools/bingo-popout.html
                {"/pages/tools/crystal-bingo.html", new Page("Pokémon Crystal Bingo - SpeedRunsLive", "Generates 'Bingo' boards for Pokémon Crystal", "pokemon, bingo")},
                {"/pages/tools/mm-bingo.html", new Page("Majora's Mask Bingo - SpeedRunsLive", "Generates 'Bingo' boards for Zelda: Majora's Mask", "mm bingo, zelda bingo")},
                {"/pages/tools/oot-bingo.html", new Page("Ocarina of Time Bingo - SpeedRunsLive", "Generates 'Bingo' boards for Zelda: Ocarina of Time", "oot bingo, zelda bingo")},
                {"/pages/tools/oot-restriction.html", new Page("Ocarina of Time Restriction Race - SpeedRunsLive", "Generates random goals and restrictions in Ocarina of Time", "oot generator")},
                {"/pages/tools/redblue-bingo.html", new Page("Pokémon Red/Blue Bingo - SpeedRunsLive", "Generates 'Bingo' boards for Pokémon Red/Blue", "pokemon, bingo")},
                {"/pages/tools/sm64-bingo.html", new Page("Super Mario 64 Bingo - SpeedRunsLive", "Generates 'Bingo' boards for Super Mario 64", "sm64 bingo, mario bingo")},
                {"/pages/tools/smw-bingo.html", new Page("Super Mario World Bingo - SpeedRunsLive", "Generates 'Bingo' boards for Super Mario World", "smw bingo, mario bingo")},
                {"/pages/tools/sotn-bingo.html", new Page("Symphony of the Night Bingo - SpeedRunsLive", "Generates 'Bingo' boards for Symphony of the Night", "sotn, bingo")},
                {"/pages/tools/sotn-equipment.html", new Page("Symphony of the Night Inventory Race - SpeedRunsLive", "Generates random sets of equipment to find and equip in Castlevania: Symphony of the Night", "sotn, inventory, generator")},
                {"/pages/tools/supermetroid-bingo.html", new Page("Super Metroid Bingo - SpeedRunsLive", "Generates 'Bingo' boards for Super Metroid", "super metroid, bingo")},
            };

        protected void Application_Start(object sender, EventArgs e)
        {
            // Cache the template file's HTML.
            _templateHtml = GetLocalHtml("/pages/template.html");
        }

        protected void Application_BeginRequest(object sender, EventArgs e)
        {
            var requestedPath = Context.Request.FilePath;

            // If it's missing a period for a file extension, assume a redirect to a .html file is needed.
            if (!requestedPath.Contains("."))
            {
                var localHtml = MapRequestToLocalHtml(requestedPath);

                HandleLocalHtml(localHtml);
            }
            // Only for bingo links pointing to pages/tools/bingo-popout.html.
            else if (requestedPath.Contains(".html"))
            {
                var localHtml = MapRequestToLocalHtml(requestedPath.Replace(".html", ""));

                HandleLocalHtml(localHtml);
            }
            // Use the original source for the 1 server-side PHP script.
            else if (requestedPath.Contains("bboard.php"))
            {
                var remoteUri = new Uri("http://speedrunslive.com/races/bboard.php");

                HandleRemoteHtml(remoteUri);
            }
        }

        private static string MapRequestToLocalHtml(string requestedPath)
        {
            // Maintain the directory structure of client-side links inside a single folder.
            var directories = requestedPath.Split(new[] { '/' }, StringSplitOptions.RemoveEmptyEntries);
            var pagePath = directories.Length == 0 ? "/index" : directories.Aggregate("", (current, directory) => current + ("/" + directory));
            return "/pages" + pagePath + ".html";
        }

        private void HandleLocalHtml(string filePath)
        {
            // Get the local page's content, or the 404 page if it's not found.
            string response;
            try
            {
                response = GetLocalHtml(filePath);
            }
            catch (Exception)
            {
                filePath = "/pages/404.html";
                response = GetLocalHtml(filePath);
            }

            // Perform server-side logic on various pages.
            switch (filePath)
            {
                // 1 page uses server-side logic for 1 spot.
                case "/pages/race.html":
                    {
                        var id = Context.Request.QueryString["id"];
                        response = response.Replace("REPLACE_RACE_ID", id);
                    }
                    break;
                // The tools page uses server-side logic to generate seeds for each listed bingo card.
                case "/pages/tools.html":
                    {
                        response = response
                            .Replace("REPLACE_BINGO_SEED_1", GetRandomSeed())
                            .Replace("REPLACE_BINGO_SEED_2", GetRandomSeed())
                            .Replace("REPLACE_BINGO_SEED_3", GetRandomSeed())
                            .Replace("REPLACE_BINGO_SEED_4", GetRandomSeed())
                            .Replace("REPLACE_BINGO_SEED_5", GetRandomSeed())
                            .Replace("REPLACE_BINGO_SEED_6", GetRandomSeed())
                            .Replace("REPLACE_BINGO_SEED_7", GetRandomSeed())
                            .Replace("REPLACE_BINGO_SEED_8", GetRandomSeed());
                    }
                    break;
                // 2 bingo pages use server-side logic for language switching and generating seeds for each bingo length.
                case "/pages/tools/oot-bingo.html":
                case "/pages/tools/mm-bingo.html":
                    {
                        var seed = Context.Request.QueryString["seed"];
                        response = response
                            .Replace("REPLACE_BINGO_SEED_NORMAL", GetRandomSeed())
                            .Replace("REPLACE_BINGO_SEED_SHORT", GetRandomSeed())
                            .Replace("REPLACE_BINGO_SEED_LONG", GetRandomSeed())
                            .Replace("REPLACE_BINGO_SEED_CURRENT", seed);
                    }
                    break;
                // 6 bingo pages use server-side logic for generating a single seed.
                case "/pages/tools/crystal-bingo.html":
                case "/pages/tools/redblue-bingo.html":
                case "/pages/tools/sm64-bingo.html":
                case "/pages/tools/smw-bingo.html":
                case "/pages/tools/sotn-bingo.html":
                case "/pages/tools/supermetroid-bingo.html":
                    {
                        response = response.Replace("REPLACE_BINGO_SEED", GetRandomSeed());
                    }
                    break;
            }

            // Ignore pages that don't follow the template.
            if (Pages.ContainsKey(filePath))
            {
                // Merge the page-specific information with the template.
                response = _templateHtml
                    .Replace("REPLACE_TITLE", Pages[filePath].Title)
                    .Replace("REPLACE_DESCRIPTION", Pages[filePath].Description)
                    .Replace("REPLACE_KEYWORDS", Pages[filePath].Keywords)
                    .Replace("REPLACE_BODY", response);
            }

            // Return the response to the client.
            WriteResponse(response);
        }

        private void HandleRemoteHtml(Uri uri)
        {
            // Get the remote page's content.
            var response = GetRemoteHtml(uri);

            // Return the response to the client.
            WriteResponse(response);
        }

        private string GetLocalHtml(string filePath)
        {
            // Map the virtual path to the physical path.
            var mappedFilePath = Context.Server.MapPath(filePath);

            // Read the entire file.
            var streamReader = new StreamReader(mappedFilePath);
            var html = streamReader.ReadToEnd();
            return html;
        }

        private static string GetRemoteHtml(Uri uri)
        {
            // Make a request on behalf of the client.
            var request = WebRequest.Create(uri);
            var response = request.GetResponse();
            var responseStream = response.GetResponseStream();

            // Read the entire file.
            var streamReader = new StreamReader(responseStream);
            var html = streamReader.ReadToEnd();
            return html;
        }

        private void WriteResponse(string html)
        {
            // Return the response to the client.
            Context.Response.Write(html);
            Context.Response.End();
        }

        private static string GetRandomSeed()
        {
            // Generate one of a million seeds.
            var randomSeed = Random.Next(0, 1000000);
            return randomSeed.ToString(CultureInfo.InvariantCulture);
        }
    }
}