// This program generates quotes randomly for a user who is needing motivation in their life

const quote = ["If opportunity doesn't knock, build a door -Milton Berle", 
"“The secret of success is to do the common thing uncommonly well.” -John D. Rockefeller Jr.", 
"Be uncommon amongst uncommon people. David Goggins", 
"“Where there is no struggle, there is no strength.” -Oprah Winfrey",
"“Only those who are asleep make no mistakes.” -Ingvar Kamprad", 
"“If your actions inspire others to dream more, learn more, do more and become more, you are a leader.” -John Quincy Adams",
"“The fastest way to change yourself is to hang out with people who are already the way you want to be.” -Reid Hoffman",
"Hard Work Beats Talent When Talent Doesn't Work Hard -Tim Notke"];


// generates random quote using the quote array
const quoteGenerator = arr => {
    let random = Math.floor(Math.random() * (arr.length - 1));
    return quote[random];
    };



console.log(quoteGenerator(quote));


