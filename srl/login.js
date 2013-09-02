function postdata(name, pw) {
    $.ajax({
        type: "PUT",
        url: apiUrl + "/token/" + name,
        data: '{"password" : "' + pw + '"}',
        dataType: "json",
        processData: false,
        success: function (data) {
            if (data.token) {
                setToken(data.token, data.player.name, data.channel);
            }
            else {
                $('#loginfail').fadeIn().delay(3500).fadeOut();
            }
        }
    });
}

function getTwitchAvatar(channel) {
    $.ajax({
        type: "GET",
        url: "https://api.twitch.tv/kraken/users/" + channel,
        processData: true,
        data: {},
        dataType: "jsonp",
        jsonpCallback: "checkAvatar"
    });
}

function checkAvatar(data) {
    if (data.logo) {
        setTwitch(data.logo);
    }
    else {
        location.reload();
    }
}

function setToken(token, name, channel) {
    $.ajax({
        type: "POST",
        url: "/settoken.php",
        data: '{"token" : "' + token + '", "name" : "' + name + '", "channel" : "' + channel + '"}',
        dataType: "json",
        processData: false,
        complete: function () {
            getTwitchAvatar(channel);
            //location.reload(); this might be needed later if twitch dependency is fail
        }
    });
}

function setTwitch(avatar) {
    $.ajax({
        type: "POST",
        url: "/settwitch.php",
        data: '{"avatar" : "' + avatar + '"}',
        dataType: "json",
        processData: false,
        complete: function () {
            location.reload();
        }
    });
}

function logout() {
    $.ajax({
        type: "GET",
        url: "/logout.php",
        complete: function () {
            location.reload();
        }
    });
}

function submitLogin() {
    var user = $('#headerusername').val()
    var pw = $('#headerpassword').val()
    postdata(user, pw);
}

function buttons() {
    $("#headerusername").keypress(function (event) {
        if (event.which == 13) {
            submitLogin();
        }
    });

    $("#headerpassword").keypress(function (event) {
        if (event.which == 13) {
            submitLogin();
        }
    });
}
$(document).ready(function () {
    buttons();
});