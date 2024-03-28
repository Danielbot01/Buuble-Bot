// TheMystic-Bot-MD@BrunoSobrino - _antiprivado.js

export async function before(m, {conn, isAdmin, isBotAdmin, isOwner, isROwner}) {
  if (m.isBaileys && m.fromMe) return !0;
  if (m.isGroup) return !1;
  if (!m.message) return !0;
  if (m.text.includes('PIEDRA') || m.text.includes('PAPEL') || m.text.includes('TIJERA') || m.text.includes('serbot') || m.text.includes('jadibot')) return !0;
  const chat = global.db.data.chats[m.chat];
  const bot = global.db.data.settings[this.user.jid] || {};
  if (bot.antiPrivate && !isOwner && !isROwner) {
    await m.reply(`_*< ANTI-PRIVADO />*_\n\n*Hola... Soy Bubblebot bot para whatsapp, te recuerdo que esta prohibido enviar msj al privado.

Si quieres comprarme comunicate con mi creador Andriiu +52 55 7608 8952 ó ingresa al siguiente grupo para probar mis funciones: https://chat.whatsapp.com/BjsGGECLMui1pl4L0GOxkH`, false, {mentions: [m.sender]});
    await this.updateBlockStatus(m.chat, 'block');
  }
  return !1;
}
