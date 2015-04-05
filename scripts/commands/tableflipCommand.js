$.on('command', function (event) {
    var sender = event.getSender();
    var username = $.username.resolve(sender);
    var command = event.getCommand();
    var s;
 
    if (command.equalsIgnoreCase("tableflip") || command.equalsIgnoreCase("tf")) {
        var table = new Array();
        table.push(" (╯°□°）╯︵ ┻━┻");
        table.push(" ┻━┻ ︵ヽ(`Д´)ﾉ︵﻿ ┻━┻");
        table.push("(ノಠ益ಠ)ノ彡┻━┻");
        table.push("(ノ ゜Д゜)ノ ︵ ┻━┻");
        table.push("(╯°□°)╯︵ ┻━┻ ︵ ╯(°□° ╯)");
        table.push("ʕノ•ᴥ•ʔノ ︵ ┻━┻");
        table.push("(ノ ﾟДﾟ)ノ　＝＝＝＝　┻━━┻");
        table.push("ノ┬─┬ノ ︵ ( o°o) ");
        table.push("（ノ￣＾￣）ノ　┳┳　┣　┻┻　┫　┳┳");
 
 
              do {
                s = $.randElement(table);
            } while (s.equalsIgnoreCase($var.lastRandom) && table.length > 1);
 
            $.say(s);
    }
});
 
$.registerChatCommand("tableflip");