const { MessageType } = require('@adiwajshing/baileys')
const PhoneNumber = require('awesome-phonenumber')
let handler = async (m, { conn, args, usedPrefix, command }) => {
  await conn.sendMessage(m.chat, {
    contacts: [{
    "displayName": "Ariel SP",
      "vcard": "BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:Ariel SP\nitem1.TEL;waid=6282118022072:6282118022072\nitem1.X-ABLabel:๐ Creator\nitem2.EMAIL;type=INTERNET:arielsandypermana1@gmail.com\nitem2.X-ABLabel:๐ Email\nitem3.URL:https://saweria.co/arielsp\nitem3.X-ABLabel:๐ฎ Rest Api\nitem4.ADR:;;๐ฎ๐ฉ Indonesia;;;;\nitem4.X-ABADR:ac\nitem4.X-ABLabel:๐ Region | Sunda Empire ๐ฎ๐ฉ\nitem5.X-ABLabel:โโโโโโโ[ ARIEL SP ]โโโโโโโ\nEND:VCARD"
  }, {
    "displayName": "Whatsapp",
      "vcard": "BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:Whatsapp\nitem1.TEL;waid=0:0\nitem1.X-ABLabel:๐ Whatsapp\nitem2.EMAIL;type=INTERNET:Whatsapp@gmail.com\nitem2.X-ABLabel:๐ Email\nitem3.URL:https://faq.whatsapp.com/\nitem3.X-ABLabel:โ๏ธ Rest Api\nitem4.ADR:;;โฉ๏ธ Whatsapp;;;;\nitem4.X-ABADR:ac\nitem4.X-ABLabel:๐ Official Bot Whatsapp\nitem5.X-ABLabel:โโโโโโโ[ แดกสแดแดsแดแดแด ]โโโโโโโ\nEND:VCARD"
    }]
  }, MessageType.contactsArray, { quoted: m })
}
handler.help = ['owner', 'creator']
handler.tags = ['info']

handler.command = /^(nowner)$/i

module.exports = handler
