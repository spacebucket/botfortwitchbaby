$.on('command', function(event) {
    var sender = event.getSender();
    var command = event.getCommand();
    var num2 = $.users.length;    
    var rnd = $.rand(num2);
    var randomPerson = $.users[rnd][0];
    var argsString = event.getArguments().trim();
    var argsString2 = argsString.substring(argsString.indexOf(" ") + 1, argsString.length());
    var args = event.getArgs();
    var num_drink = parseInt($.inidb.get("drink", "num_drink"));
    var drinkNum = $.randRange(1, 100);
    var num;
    
    if(command.equalsIgnoreCase("drink")) {
         if (!$.isMod(sender)) {
            num = $.rand(num_drink);
        } else {
            if (argsString.length() > 0) {
                num = parseInt(argsString);
        } else {
                num = $.rand(num_drink);
            }
        }


        if (isNaN(num_drink) || num_drink == 0) {
            $.say("There are no drinks at this time");
            return;
        }

        if ($.inidb.get("drink", "drink_" + num) == null) {
            $.say("There are only " + num_drink + " drinks right now! Remember that drinks are numbered from 0 to " + (num_drink - 1) + "!");

        } 
        
    }
    
    if (command.equalsIgnoreCase("adddrink")) {
        if (!$.isMod(sender)) {
            $.say($.modmsg);
            return;
        }
        
        if (num_drink == null || isNaN(num_drink)) {
            num_drink = 0;
        } 

        if (argsString.isEmpty()) {
            $.say("Usage: !adddrink <message>");
            return;
        }
        
      
        $.inidb.incr("drink", "num_drink", 1);
        $.inidb.set("drink", "drink_" + num_drink, argsString);

        
        $.say("Drink added! There are now " + (num_drink + 1) + " drinks!");
    }

     if (command.equalsIgnoreCase("editdrink")) {
        if (!$.isMod(sender)) {
            $.say($.modmsg);
            return;
        }
        
        num = parseInt(args[0]);

        if (num > num_drink) {
            $.say("There is no drinks under that ID, " + sender + "!");
            return;
        }

        if (argsString2.isEmpty() || argsString.isEmpty() || args[1] == null) {
            $.say("Usage: !editdrink <ID> <message>");
            return;
        }


        
        $.inidb.set("drink", "drink_" + num, argsString2);
        
        $.say("Drink #" + num + " changed to: " + $.inidb.get("drink", "drink_" + num));
        return;
    }

    if (command.equalsIgnoreCase("deldrink")) {
        if (!$.isMod(sender)) {
            $.say($.modmsg);
            return;
        }
        
        if (num_drink == null || isNaN(num_drink) || num_drink == 0) {
            $.say("There are no drinks at this time");
            return;
        }
        
        if (argsString.isEmpty()) {
            $.say("Usage: !deldrink <id>");
            return;
        }
        
        if (num_drink > 1) {
            for (i = 0; i < num_drink; i++) {
                if (i > parseInt(argsString)) {
                    $.inidb.set('drink', 'drink_' + (i - 1), $.inidb.get('drink', 'drink_' + i))
                }
            }
        }

        $.inidb.del('drink', 'drink_' + (num_drink - 1));
        
        $.inidb.decr("drink", "num_drink", 1);
        
        $.say("Drink removed! There are now " + (num_drink - 1) + " drinks!");
    }
    var commandCount = $.inidb.get('counter', 'drink');
    var messageCommand = $.inidb.get('drink', 'drink_' + num);
    var a = 0;



    if (messageCommand) {
        for (var i = 0; i < args.length; i++) {
            while (messageCommand.contains('(' + (i + 1) + ')')) {
                messageCommand = messageCommand.replace('(' + (i + 1) + ')', args[i]);
            }
        }

        while (messageCommand.contains('(sender)')) {
            messageCommand = messageCommand.replace('(sender)', $.username.resolve(sender));
        }

        while (messageCommand.contains('(user)')) {
            messageCommand = messageCommand.replace('(user)', $.username.resolve(sender));
        }

        while (messageCommand.indexOf('(count)') != -1) {
            messageCommand = messageCommand.replace('(count)', $.inidb.get('counter', command));
        }

        while (messageCommand.indexOf('(random)') != -1) {
            messageCommand = messageCommand.replace('(random)', $.username.resolve(randomPerson));
        }
        while (messageCommand.indexOf('(#)') != -1) {
            messageCommand = messageCommand.replace('(#)', drinkNum);
        }

        $.say(messageCommand);
    }
});
    var ar = new Array(0);
        ar.push("(sender) was welcomed to the JAM so now it's time for (sender) to get SLAMMED!");
        ar.push("(sender) was thrown into a large pit of PJSalt.");
        ar.push("Oh my, (sender) you make me just want to *SLURP SLURP SLURP*");
        ar.push("(sender) was thrown into a pit of tentacle pleasure.");
	ar.push("(sender) was thrown into a pit of genetically modified super lions.");
	ar.push("(sender) was thrown into a pit of explosive prinnys.");
        ar.push("I want you (sender).");
        ar.push("/me threw (sender) into a pit of PJSalt!" );
        ar.push("Dango, dango, dango, dango, big (sender) family~\u266B");
        ar.push("What are we gonna do on the bed (sender)?");
        ar.push("Your mother was a hamster and your father smelt of elderberries!");
        ar.push("I would rather not acknowledge that (sender) typed '!random'");
        ar.push("(sender) was standing in the park wondering why a Frisbee got bigger as it got closer. Then it hit 'em.");
        ar.push("When life gives you lemons (sender), make orange juice and leave the world wondering how the hell you did it.");
        ar.push("(sender) was violated by a tentacle monster on stream.");
        ar.push("/me licked (sender). . .");
        ar.push("THIS JUST IN! (sender)'s waifu is actually in a ahegao doujin!");
        ar.push("This is the first time (sender) has noticed the scent of a woman.");
        ar.push("(sender) you're a beautiful strong black woman.");
        ar.push("/me licking intensifies!");
        ar.push("༼ つ ◕_◕ ༽=ε̵͇̿̿'̿'̿ ̿ ̿̿  " + " I has a gun, Gimme yo money (sender)!");
        ar.push("I hope (sender)-senpai notices me..");
        ar.push("(sender) is so awesome because (sender) can trip over flat surfaces, fall up the stair and also fall up!!");
        ar.push("(sender) looks good enough to dress like the grim reaper and go to a retirement home and tap on the windows!");
        ar.push("Ok everyone shhhhh. The rice crispies are telling me what to do next.");
        ar.push("(sender) made eye contact with (random) while eating a banana!");
        ar.push("It's weird, (sender) just doesn't have enough sax appeal.");
        ar.push("(random) mysteriously died.");
		ar.push("(random) stopped existing.");
	    ar.push("All 7 of the Dragon Balls have been gathered! Now to wish (sender) to become a sloth!");
		ar.push("The ocean is so salty because everyone pees in it.");
		ar.push("Real men know when to run like a little bitch");
		ar.push("If I get reincarnated…. I wanna become a clam.");
		ar.push("Why don’t we drink to me and my reflection in your lovely eyes?");
		ar.push("I can show you what color your brain is.");
		ar.push("And while you’re waiting for us to kill you, we highly recommend p*ssing yourself, Followed by a course of praying to your impudent god. And cowarding in the corner and begging, always good. But if you act now, theres still time for an old-fashioned Suicide!! Thank you London! We love you! goodnight!!");
		ar.push("If you die, don’t come crying to me about it.");
		ar.push("From this point on, all you opinions will be rejected!");
		ar.push("Kakarot! Is That A Vegetable?! I Hate Vegetables.");
		ar.push("You have no effect on me because you are flast chested!");
		ar.push("I see. (sender) is the type of person who is thinking positively to the extent of being stupid.");
		ar.push("I know as much of games as hugs and puppies, and care for them even less.");
		ar.push("I’m not just a pervert…I’M A SUPER PERVERT");
		ar.push("When you meet with scary people, you must always protect your wallet and asshole!");
		ar.push("Women’s minds and Autumn Winds Change Often.");
		ar.push("I’m literally hemorrhage generosity.");
		ar.push("They were traps? I thought they were attractions.");
		ar.push("Okay, here’s the plan: We go in, start hitting people, and see where it takes us.");
		ar.push("The key in turning people on is a girl with a lolita face and big breasts.");
		ar.push("When a woman says something cute, a man just can’t trust it.");
		ar.push("A life without gambling is like sushi without wasabi.");
		ar.push("Stress makes you bald, but it’s stressful to avoid stress, so you end up stressed out anyway, so in the end there’s nothing you can do.");
		ar.push("Do evil, get caught, then claim demons were brainwashing you. A common way that human politicians evade responsibility.");
		ar.push("I have one last request. Please slap me in the face with that wad of cash.");
		ar.push("Why do people have to work? I just want to eat and sleep. I should have been born as a panda at the zoo.");
		ar.push("Right, I have something I have to apologize to (random) for. Sometimes, when we were playing, you’d suddenly start crying, and then you’d run home. You probably thought you’d fooled us, but everyone knew… that you had pooped your pants! Sorry.");
		ar.push("What I want to do most? Let’s see… Just once, I really want to let loose and pee in my pants.");
		ar.push("Dude! Christmas rocks! We know how to do it right, here! First, we X out the ‘Christ’ part to make it extreme! Then we shop and eat stuff ’til we’re sick! Wanna shovel down some X-Mas cake to get in the spirit?");
		ar.push("My name is Duck. Yes, like the bird. Take it up with my parents. They never loved me!");
		ar.push("Boobs that don’t shake, aren’t boobs at all.");
		ar.push("(sender), during your last physical it was discovered you have Athletes Foot, and we now believe it is affecting your brain.");
		ar.push("When you have a swimsuit tan. You could jump in the pool naked and no one would know you weren’t wearing anything.");


    if ($.inidb.get("drink", "num_drink") == null || $.inidb.get("drink", "num_drink") == 0 ) {
        
		$.inidb.set("drink", "num_drink", ar.length);
                for (var i=0; i< ar.length; ++i) {
                    $.inidb.set('drink', 'drink_' + i, ar[i]);
                }
    }


$.registerChatCommand("./commands/drinkCommand.js", "drink");