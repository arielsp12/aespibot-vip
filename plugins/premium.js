let handler  = async (m, { conn, usedPrefix: _p }) => {
let fetch = require('node-fetch')
let botol = global.botwm
let pp = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextType=1&fillTextPattern=Warning!&text=Premium'
let info = `
╭═══ *〘 BUY PREMIUM 〙*
║ ┅ ๑————————————๑                                         
║┊ ⌲ *Buy* = _5k/minggu (7 Hari)_
║┊ ⌲ *Buy* = _2k Permanent_
║┊ ⌲ *Buy* = _35k/tahun (12 bulan)_
║┊ ⌲ *VIP* = _50k/Permanent_
╰═ ┅ ═══════

༅ _*KEUNTUNGAN USER PREMIUM*_

✧ *Fitur Premium Terbuka*
✧ *Limit UNLIMITED*
✧ *Bisa Menyuruh Bot Buka/Tutup Group*
✧ *Kick Orang*
✧ *Add Orang*
✧ *Anti Link On*
✧ *Fitur Game Banyak Sepuas Nya Main*
✧ *Bisa Memasukkan Bot Ke dalam Grup*
✧ *Fitur Nsfw Terbuka*


◪ *Jika Minat Hubungi owner kami*
◪ *Atau Masuk Group Official Bot*
_https://chat.whatsapp.com/IqDLCmrbKAM1W9BEDdPZ9Q_
╭━━━┳━━━┳━━┳━━━┳╮
┃╭━╮┃╭━╮┣┫┣┫╭━━┫┃
┃┃╱┃┃╰━╯┃┃┃┃╰━━┫┃
┃╰━╯┃╭╮╭╯┃┃┃╭━━┫┃╱╭╮
┃╭━╮┃┃┃╰┳┫┣┫╰━━┫╰━╯┃
╰╯╱╰┻╯╰━┻━━┻━━━┻━━━╯
`.trim()
conn.send2ButtonLoc(m.chat,await (await fetch(fla + 'Premium')).buffer(), info, `${botol}`, `🐾 Owner`, `.owner`, 'Payment','.payment', m)
} 
handler.help = ['premium']
handler.tags = ['info']
handler.command = /^premium$/i

handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.fail = null
handler.exp = 100

module.exports = handler
