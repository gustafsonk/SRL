﻿//NOTICE: As of version 6, this script will only generate cards correctly for Ocarina of Time bingo
//and as shuch should be saved alongside the regular bingo script.
srl.ootbingo = function (bingoList, size) {

    function gup(name) {
        name = name.replace(/[\[]/, "\\\[").replace(/[\]]/, "\\\]");
        var regexS = "[\\?&]" + name + "=([^&#]*)";
        var regex = new RegExp(regexS);
        var results = regex.exec(window.location.href);
        if (results == null)
            return "";
        else
            return results[1];
    }

    var LANG = gup('lang');
    if (LANG == '') LANG = 'name';
    var SEED = gup('seed');
    if (SEED == "") {
        window.location = '?seed=' + Math.ceil(999999 * Math.random());
    } else {
        var MODE = gup('mode');
        var cardtype = "string";

        if (MODE == "short") { cardtype = "Short"; }
        else if (MODE == "long") { cardtype = "Long"; }
        else { cardtype = "Normal"; }

        if (typeof size == 'undefined') size = 5;

        Math.seedrandom(SEED); //sets up the RNG
        var MAX_SEED = 999999; //1 million cards
        var results = $("#results");
        results.append("<p>OoT Bingo <strong>v7.1</strong>&emsp;Seed: <strong>" +
        SEED + "</strong>&emsp;Card type: <strong>" + cardtype + "</strong></p>");

        //giuocob 16-8-12: lineCheckList[] has been replaced to allow for removal of all-child rows
        //Note: the rowElements relation is simply the inverse of the rowCheckList relation

        var rowCheckList = [];
        var rowElements = new Object();
        if (size == 5) {
            rowElements["row1"] = [1, 2, 3, 4, 5];
            rowElements["row2"] = [6, 7, 8, 9, 10];
            rowElements["row3"] = [11, 12, 13, 14, 15];
            rowElements["row4"] = [16, 17, 18, 19, 20];
            rowElements["row5"] = [21, 22, 23, 24, 25];
            rowElements["col1"] = [1, 6, 11, 16, 21];
            rowElements["col2"] = [2, 7, 12, 17, 22];
            rowElements["col3"] = [3, 8, 13, 18, 23];
            rowElements["col4"] = [4, 9, 14, 19, 24];
            rowElements["col5"] = [5, 10, 15, 20, 25];
            rowElements["tlbr"] = [1, 7, 13, 19, 25];
            rowElements["bltr"] = [5, 9, 13, 17, 21];

            rowCheckList[1] = ["row1", "col1", "tlbr"];
            rowCheckList[2] = ["row1", "col2"];
            rowCheckList[3] = ["row1", "col3"];
            rowCheckList[4] = ["row1", "col4"];
            rowCheckList[5] = ["row1", "col5", "bltr"];

            rowCheckList[6] = ["row2", "col1"];
            rowCheckList[7] = ["row2", "col2", "tlbr"];
            rowCheckList[8] = ["row2", "col3"];
            rowCheckList[9] = ["row2", "col4", "bltr"];
            rowCheckList[10] = ["row2", "col5"];

            rowCheckList[11] = ["row3", "col1"];
            rowCheckList[12] = ["row3", "col2"];
            rowCheckList[13] = ["row3", "col3", "tlbr", "bltr"];
            rowCheckList[14] = ["row3", "col4"];
            rowCheckList[15] = ["row3", "col5"];

            rowCheckList[16] = ["row4", "col1"];
            rowCheckList[17] = ["row4", "col2", "bltr"];
            rowCheckList[18] = ["row4", "col3"];
            rowCheckList[19] = ["row4", "col4", "tlbr"];
            rowCheckList[20] = ["row4", "col5"];

            rowCheckList[21] = ["row5", "col1", "bltr"];
            rowCheckList[22] = ["row5", "col2"];
            rowCheckList[23] = ["row5", "col3"];
            rowCheckList[24] = ["row5", "col4"];
            rowCheckList[25] = ["row5", "col5", "tlbr"];
        }


        $('.popout').click(function () {
            var mode = null;
            var line = $(this).attr('id');
            var name = $(this).html();
            var items = [];
            var cells = $('#bingo .' + line);
            for (var i = 0; i < 5; i++) {
                items.push($(cells[i]).html());
            };
            if (mode == 'simple-stream') {
                window.open('/tools/bingo-popout-basic.html#' + name + '=' + items.join(';;;'), "_blank", "toolbar=no, location=no, directories=no, status=no, menubar=no, scrollbars=no, resizable=no, copyhistory=no, width=420, height=180");
            }
            else {
                window.open('/tools/bingo-popout.html#' + name + '=' + items.join(';;;'), "_blank", "toolbar=no, location=no, directories=no, status=no, menubar=no, scrollbars=no, resizable=no, copyhistory=no, width=220, height=460");
            }
        });

        $("#bingo tr td:not(.popout), #selected td").toggle(
          function () {
              $(this).addClass("greensquare");
          },
          function () {
              $(this).addClass("redsquare").removeClass("greensquare");
          },
          function () {
              $(this).removeClass("redsquare");
          }

        );

        $("#row1").hover(function () { $(".row1").addClass("hover"); }, function () { $(".row1").removeClass("hover"); });
        $("#row2").hover(function () { $(".row2").addClass("hover"); }, function () { $(".row2").removeClass("hover"); });
        $("#row3").hover(function () { $(".row3").addClass("hover"); }, function () { $(".row3").removeClass("hover"); });
        $("#row4").hover(function () { $(".row4").addClass("hover"); }, function () { $(".row4").removeClass("hover"); });
        $("#row5").hover(function () { $(".row5").addClass("hover"); }, function () { $(".row5").removeClass("hover"); });

        $("#col1").hover(function () { $(".col1").addClass("hover"); }, function () { $(".col1").removeClass("hover"); });
        $("#col2").hover(function () { $(".col2").addClass("hover"); }, function () { $(".col2").removeClass("hover"); });
        $("#col3").hover(function () { $(".col3").addClass("hover"); }, function () { $(".col3").removeClass("hover"); });
        $("#col4").hover(function () { $(".col4").addClass("hover"); }, function () { $(".col4").removeClass("hover"); });
        $("#col5").hover(function () { $(".col5").addClass("hover"); }, function () { $(".col5").removeClass("hover"); });

        $("#tlbr").hover(function () { $(".tlbr").addClass("hover"); }, function () { $(".tlbr").removeClass("hover"); });
        $("#bltr").hover(function () { $(".bltr").addClass("hover"); }, function () { $(".bltr").removeClass("hover"); });

        function mirror(i) {
            if (i == 0) { i = 4; }
            else if (i == 1) { i = 3; }
            else if (i == 3) { i = 1; }
            else if (i == 4) { i = 0; }
            return i;
        }

        function difficulty(i) {
            // To create the magic square we need 2 random orderings of the numbers 0, 1, 2, 3, 4.
            // The following creates those orderings and calls them Table5 and Table1

            var Num3 = SEED % 1000;	// Table5 will use the ones, tens, and hundreds digits.

            var Rem8 = Num3 % 8;
            var Rem4 = Math.floor(Rem8 / 2);
            var Rem2 = Rem8 % 2;
            var Rem5 = Num3 % 5;
            var Rem3 = Num3 % 3;	// Note that Rem2, Rem3, Rem4, and Rem5 are mathematically independent.
            var RemT = Math.floor(Num3 / 120);	// This is between 0 and 8		

            // The idea is to begin with an array containing a single number, 0.
            // Each number 1 through 4 is added in a random spot in the array's current size.
            // The result - the numbers 0 to 4 are in the array in a random (and uniform) order.
            var Table5 = [0];
            Table5.splice(Rem2, 0, 1);
            Table5.splice(Rem3, 0, 2);
            Table5.splice(Rem4, 0, 3);
            Table5.splice(Rem5, 0, 4);

            Num3 = Math.floor(SEED / 1000);	// Table1 will use the next 3 digits.
            Num3 = Num3 % 1000;

            Rem8 = Num3 % 8;
            Rem4 = Math.floor(Rem8 / 2);
            Rem2 = Rem8 % 2;
            Rem5 = Num3 % 5;
            Rem3 = Num3 % 3;
            RemT = RemT * 8 + Math.floor(Num3 / 120);	 // This is between 0 and 64.

            var Table1 = [0];
            Table1.splice(Rem2, 0, 1);
            Table1.splice(Rem3, 0, 2);
            Table1.splice(Rem4, 0, 3);
            Table1.splice(Rem5, 0, 4);

            i--;
            RemT = RemT % 5;		//  Between 0 and 4, fairly uniformly.
            x = (i + RemT) % 5;		//  RemT is horizontal shift to put any diagonal on the main diagonal.
            y = Math.floor(i / 5);

            // The Tables are set into a single magic square template
            // Some are the same up to some rotation, reflection, or row permutation.
            // However, all genuinely different magic squares can arise in this fashion.
            var e5 = Table5[(x + 3 * y) % 5];
            var e1 = Table1[(3 * x + y) % 5];

            // Table5 controls the 5* part and Table1 controls the 1* part.
            value = 5 * e5 + e1;

            if (MODE == "short") { value = Math.floor(value / 2); } // if short mode, limit difficulty
            else if (MODE == "long") { value = Math.floor((value + 25) / 2); }
            value++;
            return value;
        }

        //Uniformly shuffles an array (note: the original array will be changed)
        function shuffle(toShuffle) {
            for (var i = 0; i < toShuffle.length; i++) {
                var randElement = Math.floor(Math.random() * (i + 1));
                var temp = toShuffle[i];
                toShuffle[i] = toShuffle[randElement];
                toShuffle[randElement] = temp;
            }
        }

        //Get a uniformly shuffled array of all the goals of a given difficulty tier
        function getShuffledGoals(difficulty) {
            var newArray = bingoList[difficulty].slice();
            shuffle(newArray);
            return newArray;
        }

        //Given a difficulty as an argument, find the square that contains that difficulty
        function getDifficultyIndex(difficulty) {
            for (var i = 1; i <= 25; i++) {
                if (bingoBoard[i].difficulty == difficulty) {
                    return i;
                }
            }
            return 0;
        }



        function checkLine(i, testsquare) {
            var typesA = testsquare.types;
            var synergy = 0;
            var rows = rowCheckList[i], elements = [];
            var childCount = 0;
            for (var k = 0; k < rows.length; k++) {
                elements = rowElements[rows[k]];
                childCount = 0;
                for (var m = 0; m < elements.length; m++) {
                    var typesB = bingoBoard[elements[m]].types;
                    if (typeof typesB != 'undefined') {
                        for (var n = 0; n < typesA.length; n++) {
                            for (var p = 0; p < typesB.length; p++) {
                                if (typesA[n] == typesB[p]) {
                                    synergy++; //if match increase
                                    if (n == 0) { synergy++ }; //if main type increase
                                    if (p == 0) { synergy++ }; //if main type increase
                                }
                            }
                        }
                    }
                    if (bingoBoard[elements[m]].child == "yes") {
                        childCount++;
                    }
                }
                //Remove child-only rows, remove adult goals from short
                if (MODE == "short") {
                    if (testsquare.child == "no") {
                        childCount--;
                    }
                    console.debug(rows[k]);
                    console.debug(childCount);
                    if (childCount < 5) {
                        synergy += 3;
                    }
                }
                else {
                    if (testsquare.child == "yes") {
                        childCount++;
                    }
                    if (childCount > 4) {
                        synergy += 3;
                    }
                }
            }
            return synergy;
        }



        var bingoBoard = []; //the board itself stored as an array first
        for (var i = 1; i <= 25; i++) {
            if (MODE == "short") {
                bingoBoard[i] = { difficulty: difficulty(i), child: "yes" };
            }
            else {
                bingoBoard[i] = { difficulty: difficulty(i), child: "no" };
            }
        }                                          // in order 1-25


        //giuocob 19-2-13: bingoBoard is no longer populated left to right:
        //It is now populated mostly randomly, with high difficult goals and
        //goals on the diagonals out in front
        var populationOrder = [];
        populationOrder[1] = 13;   //Populate center first
        var diagonals = [1, 7, 19, 25, 5, 9, 17, 21];
        shuffle(diagonals);
        populationOrder = populationOrder.concat(diagonals);   //Next populate diagonals
        var nondiagonals = [2, 3, 4, 6, 8, 10, 11, 12, 14, 15, 16, 18, 20, 22, 23, 24];
        shuffle(nondiagonals);
        populationOrder = populationOrder.concat(nondiagonals);   //Finally add the rest of the squares
        //Lastly, find location of difficulty 23,24,25 elements and put them out front
        for (var k = 23; k <= 25; k++) {
            var currentSquare = getDifficultyIndex(k);
            if (currentSquare == 0) continue;
            for (var i = 1; i < 25; i++) {
                if (populationOrder[i] == currentSquare) {
                    populationOrder.splice(i, 1);
                    break;
                }
            }
            populationOrder.splice(1, 0, currentSquare);
        }



        //Populate the bingo board in the array
        //giuocob 16-8-12: changed this section to:
        //1. Support uniform goal selection by shuffling arrays before checking goals
        //2. Remove all child rows by checking child tag
        //3. If no goal is suitable, instead of choosing goal with lowest synergy, now next difficulty up is checked
        for (var i = 1; i <= 25; i++) {
            var sq = populationOrder[i];
            var getDifficulty = bingoBoard[sq].difficulty;
            var goalArray = getShuffledGoals(getDifficulty);
            var j = 0, synergy = 0, currentObj = null, minSynObj = null;
            do {
                currentObj = goalArray[j];
                synergy = checkLine(sq, currentObj);
                if (minSynObj == null || synergy < minSynObj.synergy) {
                    minSynObj = { synergy: synergy, value: currentObj };
                }
                j++;
                if (j >= goalArray.length) {
                    getDifficulty++;
                    if (getDifficulty > 25) {
                        break;
                    }
                    else {
                        goalArray = getShuffledGoals(getDifficulty);
                        j = 0;
                    }
                }
            } while (synergy != 0);   //Perhaps increase to 1 if difficulty increases happen too often


            bingoBoard[sq].types = minSynObj.value.types;
            bingoBoard[sq].name = minSynObj.value[LANG] || minSynObj.value.name;
            bingoBoard[sq].child = minSynObj.value.child;
            bingoBoard[sq].synergy = minSynObj.synergy;
        }

        //populate the actual table on the page
        for (i = 1; i <= 25; i++) {
            $('#slot' + i).append(bingoBoard[i].name);
            //$('#slot'+i).append("<br/>" + bingoBoard[i].types.toString());
            //$('#slot'+i).append("<br/>" + bingoBoard[i].synergy);
        }


    }

} // setup