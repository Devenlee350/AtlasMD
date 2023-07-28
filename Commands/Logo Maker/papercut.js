const maker = require('mumaker')

module.exports = {
    name: "papercut",
    alias: ["pcut"],
    desc: "Make text logo.",
    react: "🍁",
    category: "Logo Maker",
    start: async(Miku, m,{pushName,prefix,text}) => {
        if(!text) return m.reply(`Example: *${prefix}papercut Atlas Bot*`);
        maker.textpro("https://textpro.me/create-art-paper-cut-text-effect-online-1022.html", [
`${text}`,]).then((data) => Miku.sendMessage(m.from, { image: { url: data }, caption: `Made by ${botName}` }, { quoted: m }))
    .catch((err) => m.reply('An Error occued !'));
    }
}