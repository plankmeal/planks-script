/*

Plank's Script
Developer : @plankmeal
TO BE UPDATED MORE AND MORE!

*/
if (~window.location.host.indexOf("plug.dj")) {

  $('body').append('<style> [data-cid^="15978109"] .msg .from .un { color: #42A5DC !important; } </style>');
  $('#chat-messages').append('<div style="width:300px;height:35px;border-left:3px solid cyan;"</div><i style="width:33px;height:30px;margin-left:5px;" class="icon icon-site-logo"></i><div style="color:cyan;height:15px;padding-left:45px;padding-top:10px;">You are using Plank\'s script. - /cmds</div>');

    var autoWoot = function () {
        $("#woot").click();
    };

    var autoGrab = function () {
        $("#grab").click();
        $($(".grab .menu ul li")[0]).mousedown();
    };

    function userJoin(a) {
        API.chatLog(a.username + " has just joined!");
    }
    API.on(API.USER_JOIN, userJoin);


    function chatCommands(a) {
        var b = a.split(" ");
        switch (b[0]) {
        case "/volume":
            API.setVolume(~~b[1]);
            break;

        case "/lenny":
            API.sendChat("( ͡° ͜ʖ ͡°)");
            break;

        case "/shrug":
            API.sendChat("¯\\_(ツ)_/¯");
            break;

        case "/tableflip":
            API.sendChat("(ノಠ益ಠ)ノ彡┻━┻");
            break;

        case "/tablereset":
            API.sendChat("┬──┬◡ﾉ(° -°ﾉ)");
            break;

        case "/autograb":
            if ("on" === b[1]) {
                API.chatLog("AutoGrab enabled!");
                API.on("advance", autoGrab);
            } else if ("off" === b[1]) {
                API.chatLog("AutoGrab disabled!");
                API.off("advance", autoGrab);
            }
            break;

        case "/autowoot":
            if ("on" === b[1]) {
                API.chatLog("Autowoot enabled!");
                API.on("advance", autoWoot);
            } else if ("off" === b[1]) {
                API.chatLog("Autowoot disabled!");
                API.off("advance", autoWoot);
            }
            break;

        case "/ping":
            API.chatLog("PONG! Working :)");
            break;

        case "/commands": 
            API.chatLog("");
            break;
        }
    }
    API.on(API.CHAT_COMMAND, chatCommands);
} else alert("This script only functions at http://plug.dj/");
