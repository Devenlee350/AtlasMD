const maker = require('mumaker')

module.exports = {
    name: "sparklechristmas",
    alias: ["schristmas"],
    desc: "Make text logo.",
    react: "🍁",
    category: "Logo Maker",
    start: async(Miku, m,{pushName,prefix,text}) => {
        if(!text) return m.reply(`Example: *${prefix}schristmas Atlas Bot*`);
        maker.textpro("https://textpro.me/sparkles-merry-christmas-text-effect-1054.html", [
    `${text}`,]).then((data) => Miku.sendMessage(m.from, { image: { url: data }, caption: `Made by ${botName}` }, { quoted: m }))
    .catch((err) => m.reply('An Error occued !'));
    }
}