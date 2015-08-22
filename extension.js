(function () {

    // Change this to your GitHub username so you don't have to modify so many things.
    var fork = "Hasztagg";

    // Define our function responsible for extending the bot.
    function extend() {
        // If the bot hasn't been loaded properly, try again in 1 second(s).
        if (!window.bot) {
          return setTimeout(extend, 1 * 1000);
        }

        // Precaution to make sure it is assigned properly.
        var bot = window.bot;

        // Load custom settings set below
        bot.retrieveSettings();

        //Extend the bot here, either by calling another function or here directly.

        // You can add more spam words to the bot.
        var spamWords = ['ban', '@Beczkobot', 'skipuj', 'skipnijcie', 'ale gowno', 'ale gówno', 'skip pls', '!cookie @Beczkobot', 'Ale gówno', 'ALE GÓWNO'];
        for (var i = 0; i < spamWords.length; i++) {
          window.bot.chatUtilities.spam.push(spamWords[i]);
        }
       

        // Example code for a bot command:
        bot.commands.baconCommand = {
            command: 'bacon',  // The command to be called. With the standard command literal this would be: !bacon
            rank: 'user', // Minimum user permission to use the command
            type: 'exact', // Specify if it can accept variables or not (if so, these have to be handled yourself through the chat.message
              functionality: function (chat, cmd) {
                if (this.type === 'exact' && chat.message.length !== cmd.length) return void (0);
                if (!bot.commands.executable(this.rank, chat)) return void (0);
                else {
                  API.sendChat("/me Bacon!!!");
                }
              }
            };
            
        bot.commands.emotyKomenda = {
            command: 'emoty', 
            rank: 'user', 
            type: 'exact', 
            functionality: function (chat, cmd) {
                if (this.type === 'exact' && chat.message.length !== cmd.length) return void(0); 
                if (!bot.commands.executable(this.rank, chat)) return void(0); 
                else {
                    API.sendChat("/me :information_source: Lista dodatowych emotikon: http://git.io/v36w9"); 

                }
            }
        };
        
        bot.commands.awansCommand = { 
            command: 'awans', 
            rank: 'user', 
            type: 'exact', 
            functionality: function (chat, cmd) {
                if (this.type === 'exact' && chat.message.length !== cmd.length) return void(0); 
                if (!bot.commands.executable(this.rank, chat)) return void(0); 
                else {
                    API.sendChat("/me :star: Użyj tego linku aby otrzymać awans: http:\/\/bit.ly\/1e1TmUO"); 

                }
            }
        };
        
        bot.commands.rcsCommand = { 
            command: 'rcs',
            rank: 'user', 
            type: 'exact', 
            functionality: function (chat, cmd) {
                if (this.type === 'exact' && chat.message.length !== cmd.length) return void(0); 
                if (!bot.commands.executable(this.rank, chat)) return void(0); 
                else {
                    API.sendChat("/me :information_source: Aby w pe\u0142ni korzysta\u0107 z mo\u017cliwo\u015bci naszego pokoju zalecamy u\u017cywanie RCS (http://rcs.radiant.dj). Pozwala to na zobaczenie dodatkowych emotikon, zrobionych przez nas ikon rang i wiele innych rzeczy!"); //wysyla wiadomosc

                }
            }
        };
        
        bot.commands.teczkaCommand = { 
            command: 'teczka',
            rank: 'user', 
            type: 'exact', 
            functionality: function (chat, cmd) {
                if (this.type === 'exact' && chat.message.length !== cmd.length) return void(0); 
                if (!bot.commands.executable(this.rank, chat)) return void(0); 
                else {
                    API.sendChat("/me :information_source: Wpisz si\u0119 do teczki inwigilacji (wymaga do\u0142\u0105czenia do grupy) https:\/\/www.facebook.com\/groups\/beczkownicy.plugdj\/permalink\/512312038933480\/!"); 

                }
            }
        };
        
        bot.commands.motywCommand = { 
            command: 'motyw',
            rank: 'user', 
            type: 'exact', 
            functionality: function (chat, cmd) {
                if (this.type === 'exact' && chat.message.length !== cmd.length) return void(0); 
                if (!bot.commands.executable(this.rank, chat)) return void(0); 
                else {
                    API.sendChat("!motd"); 

                }
            }
        };
        
        bot.commands.nightmode = {
            command: 'nightmode',
            rank: 'mod',
            type: 'exact',
            functionality: function(chat, cmd) {
                if (this.type === 'exact' && chat.message.length !== cmd.length) return void(0);
                if (!bot.commands.executable(this.rank, chat)) return void(0);
                else {
                    bot.settings.maximumSongLength = !bot.settings.maximumSongLength;
                    bot.settings.voteSkip = !bot.settings.voteSkip;
                    bot.settings.bouncerPlus = !bot.settings.bouncerPlus;
                    var nightmode = "Bouncer+: " + bot.settings.bouncerPlus + ', G\u0142os do skipa: ' + bot.settings.voteSkip + ';
                    API.sendChat(nightmode);
                }
            }
        };
        

        // Load the chat package again to account for any changes
        bot.loadChat();

      }

    //Change the bots default settings and make sure they are loaded on launch

    localStorage.setItem("basicBotsettings", JSON.stringify({
        botName: "Beczkobot",
        language: "polish",
        chatLink: "https://raw.githubusercontent.com/Hasztagg/basicBot-customization/master/lang/pl.json",
        scriptLink: "https://rawgit.com/Yemasthui/basicBot/master/basicBot.js",
        roomLock: false, // Requires an extension to re-load the script
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
        bouncerPlus: false,
        blacklistEnabled: true,
        lockdownEnabled: false,
        lockGuard: false,
        maximumLocktime: 10,
        cycleGuard: true,
        maximumCycletime: 10,
        voteSkip: false,
        voteSkipLimit: 2,
        historySkip: true,
        timeGuard: true,
        maximumSongLength: 10,
        autodisable: false,
        commandCooldown: 30,
        usercommandsEnabled: true,
        skipPosition: null,
        skipReasons: [
            ["niemuzyka", "Utw\u00f3r, kt\u00f3ry pu\u015bci\u0142e\u015b nie jest muzyk\u0105. "],
            ["ban", "Utw\u00f3r, kt\u00f3ry pu\u015bci\u0142e\u015b jest zbanowanym utworem.  "],
            ["bylo", "Utw\u00f3r, kt\u00f3ry pu\u015bci\u0142e\u015b znajduje si\u0119 w historii. "],
            ["mix", "Utw\u00f3r, kt\u00f3ry pu\u015bci\u0142e\u015b jest mixem, kt\u00f3ry nie jest dozwolony w tych godzinach. "],
            ["slabajakosc", "Utw\u00f3r, kt\u00f3ry pu\u015bci\u0142e\u015b ma s\u0142ab\u0105 jako\u015b\u0107 d\u017awi\u0119ku. "],
            ["earrape", "Utw\u00f3r, kt\u00f3ry pu\u015bci\u0142e\u015b jest earrapem. "],
            ["niedostepne", "Utw\u00f3r, kt\u00f3ry pu\u015bci\u0142e\u015b jest niedost\u0119pny dla niekt\u00f3rych u\u017cytkownik\u00f3w. "],
            ["zadlugie", "Utw\u00f3r, kt\u00f3ry pu\u015bci\u0142e\u015b jest zbyt d\u0142ugi, potrzebujesz pozwolenia na puszczanie utwor\u00f3w d\u0142u\u017cszych ni\u017c 6 minut. "],
            ["meh", "Utw\u00f3r, kt\u00f3ry pu\u015bci\u0142e\u015b osi\u0105gn\u0105\u0142 limit meh\u00f3w. "],
            ["motyw", "Utw\u00f3r, kt\u00f3ry pu\u015bci\u0142e\u015b nie pasuje do aktualnego motywu pokoju."]
            ],
        afkpositionCheck: 15,
        afkRankCheck: "user",
        motdEnabled: false,
        motdInterval: 8,
        motd: null,
        filterChat: true,
        etaRestriction: false,
        welcome: true,
        opLink: null,
        rulesLink: "http://tnij.org/regulamin_beczki | English rules here: http:\/\/pastebin.com\/sTJbWHMd",
        themeLink: null,
        fbLink: "http://www.facebook.com/groups/beczkownicy.plugdj/",
        youtubeLink: "https://youtube.com/TheUwagaPies https://youtube.com/wybuchajacebeczki oraz https://youtube.com/TheBeeczka",
        website: "https://www.facebook.com/groups/beczkownicyofficial/ oraz http://www.facebook.com/groups/beczkownicy.plugdj/",
        intervalMessages: ["Do\u0142\u0105cz do grupy plugowej Beczkownik\u00f3w i uzupe\u0142nij teczki inwigilacji! https://fb.com/groups/beczkownicy.plugdj/", "RADA: jeżeli roz\u0142\u0105czysz si\u0119 przez przypadek, u\u017cyj !dc aby wr\u00f3ci\u0107 na swoje miejsce w kolejce.", "RADA: U\u017cyj !rules aby otrzyma\u0107 link do zasad.", "RADA: Wpisz !fb albo !website aby otrzyma\u0107 link do naszych grup na facebooku."],
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
    $.getScript("https://rawgit.com/Hasztagg/basicBot/master/basicBot.js", extend);

}).call(this);
