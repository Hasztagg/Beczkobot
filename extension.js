(function () {

    //Change this to your GitHub username so you don't have to modify so many things.
    var fork = "Hasztagg";

    //Define our function responsible for extending the bot.
    function extend() {
        //If the bot hasn't been loaded properly, try again in 1 second(s).
        if (!window.bot) {
            return setTimeout(extend, 1 * 1000);
        }

        //Precaution to make sure it is assigned properly.
        var bot = window.bot;

        //Load custom settings set below
        bot.retrieveSettings();

        /*
         Extend the bot here, either by calling another function or here directly.
         Model code for a bot command:

         bot.commands.commandCommand = {
         command: 'cmd',
         rank: 'user/bouncer/mod/manager',
         type: 'startsWith/exact',
         functionality: function(chat, cmd){
         if(this.type === 'exact' && chat.message.length !== cmd.length) return void (0);
         if( !bot.commands.executable(this.rank, chat) ) return void (0);
         else{
         //Commands functionality goes here.
         }
         }
         }

         */

        bot.commands.baconCommand = {
            command: 'bacon',  //The command to be called. With the standard command literal this would be: !bacon
            rank: 'user', //Minimum user permission to use the command
            type: 'exact', //Specify if it can accept variables or not (if so, these have to be handled yourself through the chat.message
            functionality: function (chat, cmd) {
                if (this.type === 'exact' && chat.message.length !== cmd.length) return void (0);
                if (!bot.commands.executable(this.rank, chat)) return void (0);
                else {
                    API.sendChat("/me Bacon!!!");
                }
            }
        };
        
        bot.commands.commandCommand = {
            command: 'awans',  //The command to be called. With the standard command literal this would be: !bacon
            rank: 'user', //Minimum user permission to use the command
            type: 'exact', //Specify if it can accept variables or not (if so, these have to be handled yourself through the chat.message
            functionality: function (chat, cmd) {
                if (this.type === 'exact' && chat.message.length !== cmd.length) return void (0);
                if (!bot.commands.executable(this.rank, chat)) return void (0);
                else {
                    API.sendChat("/me Użyj tego linku aby otrzymać awans: http:\/\/bit.ly\/1e1TmUO");
                }
            }
        },
        
        bot.commands.commandCommand = {
            command: 'dns',  //The command to be called. With the standard command literal this would be: !bacon
            rank: 'user', //Minimum user permission to use the command
            type: 'exact', //Specify if it can accept variables or not (if so, these have to be handled yourself through the chat.message
            functionality: function (chat, cmd) {
                if (this.type === 'exact' && chat.message.length !== cmd.length) return void (0);
                if (!bot.commands.executable(this.rank, chat)) return void (0);
                else {
                    API.sendChat("/me Wyst\u0119puj\u0105 problemy z DNS z powodu luki (wi\u0119cej o tym tutaj: http://bit.ly/1E4O9CI). Aby to naprawić zmień DNS na googlowskie (http:\/\/bit.ly\/1K17w1m) i od\u015bwie\u017a przegl\u0105dark\u0119.");
                }
            }
        };

        //Load the chat package again to account for any changes
        bot.loadChat();

    }

    //Change the bots default settings and make sure they are loaded on launch

    localStorage.setItem("basicBotsettings", JSON.stringify({
        botName: "Beczkobot",
        language: "polish",
        chatLink: "https://raw.githubusercontent.com/Hasztagg/basicBot-customization/master/lang/pl.json",
        startupCap: 1, // 1-200
        startupVolume: 0, // 0-100
        startupEmoji: false, // true or false
        autowoot: true,
        autoskip: false,
        smartSkip: true,
        cmdDeletion: true,
        maximumAfk: 120,
        afkRemoval: false,
        maximumDc: 60,
        bouncerPlus: true,
        blacklistEnabled: true,
        lockdownEnabled: false,
        lockGuard: false,
        maximumLocktime: 10,
        cycleGuard: true,
        maximumCycletime: 10,
        voteSkip: false,
        voteSkipLimit: 10,
        historySkip: true,
        timeGuard: true,
        maximumSongLength: 12,
        autodisable: false,
        commandCooldown: 30,
        usercommandsEnabled: true,
        skipPosition: null,
        skipReasons: [
            ["muzyka", "Utw\u00f3r, kt\u00f3ry pu\u015bci\u0142e\u015b nie jest muzyk\u0105. "],
            ["ban", "Utw\u00f3r, kt\u00f3ry pu\u015bci\u0142e\u015b jest zbanowanym utworem.  "],
            ["bylo", "Utw\u00f3r, kt\u00f3ry pu\u015bci\u0142e\u015b znajduje si\u0119 w historii. "],
            ["mix", "Utw\u00f3r, kt\u00f3ry pu\u015bci\u0142e\u015b jest mixem, kt\u00f3ry nie jest dozwolony w tych godzinach. "],
            ["sound", "Utw\u00f3r, kt\u00f3ry pu\u015bci\u0142e\u015b ma s\u0142ab\u0105 jako\u015b\u0107 d\u017awi\u0119ku. "],
            ["earrape", "Utw\u00f3r, kt\u00f3ry pu\u015bci\u0142e\u015b jest earrapem. "],
            ["niedostepne", "Utw\u00f3r, kt\u00f3ry pu\u015bci\u0142e\u015b jest niedost\u0119pny dla niekt\u00f3rych u\u017cytkownik\u00f3w. "],
            ["zadlugie", "Utw\u00f3r, kt\u00f3ry pu\u015bci\u0142e\u015b jest zbyt d\u0142ugi, potrzebujesz pozwolenia na puszczanie utwor\u00f3w d\u0142u\u017cszych ni\u017c 6 minut. "],
            ["meh", "Utw\u00f3r, kt\u00f3ry pu\u015bci\u0142e\u015b osi\u0105gn\u0105\u0142 limit meh\u00f3w. "]
            ],
        afkpositionCheck: 15,
        afkRankCheck: "user",
        motdEnabled: true,
        motdInterval: 8,
        motd: "Już DZISIAJ event z okazji 1. miesiąca naszej społeczności! Dołącz do grupy po więcej informacji: https://www.facebook.com/groups/512230408941643",
        filterChat: false,
        etaRestriction: false,
        welcome: true,
        opLink: null,
        rulesLink: "http://tinyurl.com/regulamin-beczki",
        themeLink: null,
        fbLink: "https://www.facebook.com/groups/beczkownicyofficial/",
        youtubeLink: "https://youtube.com/TheUwagaPies https://youtube.com/wybuchajacebeczki oraz https://youtube.com/TheBeeczka",
        website: "https://www.facebook.com/groups/beczkownicyofficial/",
        intervalMessages: ["RADA: jeżeli roz\u0142\u0105czysz si\u0119 przez przypadek, u\u017cyj !dc aby wr\u00f3ci\u0107 na swoje miejsce w kolejce.","RADA: U\u017cyj !rules aby otrzyma\u0107 link do zasad.", "RADA: Wpisz !fb albo !website aby otrzyma\u0107 link do naszej grupy na facebooku.", "RADA: Wpisz !help, aby otrzyma\u0107 link do obrazka t\u0142umacz\u0105cego pluga."],
        messageInterval: 5,
        songstats: false,
        commandLiteral: "!",
        blacklists: {
            NSFW: "https://rawgit.com/Hasztagg/basicBot-customization/master/blacklists/NSFWlist.json",
            OP: "https://rawgit.com/Hasztagg/basicBot-customization/master/blacklists/OPlist.json",
            BANNED: "https://rawgit.com/Hasztagg/basicBot-customization/master/blacklists/BANNEDlist.json"
        }
    }));

    //Start the bot and extend it when it has loaded.
    $.getScript("https://rawgit.com/Yemasthui/basicBot/master/basicBot.js", extend);

}).call(this);
