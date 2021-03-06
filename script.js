/*

Plank's Script

Developer : @plankmeal

*/
if (~window.location.host.indexOf("plug.dj")) {
//Script Activated msg
$("#chat-messages").append('<div class="message"><div class="badge-box"><i class="icon" style="top: 2px; left: 2px; width: 26px; height: 26px; background-image: url(https://i.imgur.com/3w8xmog.png); background-size: 26px;"></i></div><div class="msg"><div class="from"><span class="un">Plank\'s Script</span></div><span class="text"><span style="color: rgb(209, 209, 209);">Plank\'s Script Activated!<br><span class="chat-text" style="color:cyan">Use "/commands" to see commands</span></span></span></div></div>')

var autoWoot = function () {
        $("#woot").click();
    };
var autoGrab = function () {
        $("#grab").click();
        $($(".grab .menu ul li")[0]).mousedown();
    };

   var afkRes = "I'm AFK right now!"
   var isAFK = false;
   var msgBeenSent = false;
   var afkRespond = function(data) {
       if (data.type === 'mention' && data.message.indexOf('@' + API.getUser().username) > -1) {
           if (isAFK === true && !msgBeenSent) {
               msgBeenSent = true;
               setTimeout(function() {
                   msgBeenSent = false;
               }, 30000);
               API.sendChat('[AFK] ' + '@' + data.un + ' ' + afkRes);
           }
       }
   }
   API.on(API.CHAT, afkRespond)


    function chatCommands(a) {
        var b = a.split(" ");
        switch (b[0]) {
        case "/afk":
            isAFK = true;
            API.sendChat(afkRes);
            break;
        case "/back":
            isAFK = false;
            API.chatLog("You're no longer afk!");
            break;
        case "/volume":
            API.setVolume(~~b[1]);
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

        case "/commands":
            API.chatLog("All commands on the script's github:" + "https://goo.gl/dQvdtU");
            break;

        case "/ping":
            API.chatLog("PONG! Working :)");
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
        case "/sirflex":
            API.sendChat('ᕦ( - ̨ Θƪ )ᕤ');
            break;
        case "/feelingood":
            API.sendChat("~(˘▾˘~) Feelin' Good (~˘▾˘)~")
            break;
        }
    }
    API.on(API.CHAT_COMMAND, chatCommands);

    function userJoin(a) {
        API.chatLog(a.username + " has just joined!");
    };
    API.on(API.USER_JOIN, userJoin);


} else alert("This script only functions at http://plug.dj/");
