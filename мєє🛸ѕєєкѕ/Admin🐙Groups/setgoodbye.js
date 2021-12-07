const {
  MessageType,
  Mimetype
} = require(`@adiwajshing/baileys`);
const ℓιєηт = require("../../ᴍᴇᴇ6/catch");
const ꜱɪɢɴ = require(`../../ᴍᴇᴇ6/ꜱɪɢɴ`);
const Greetings = require(`../../ᴍᴇᴇ6/ɠɠᴍᴇᴇ6`);
module.exports = {
  name: `setgoodbye`,
  commandType: "Admin🐙Groups",
  description: `A setgoodbye message will be sent when any member leaves the group. It can be an image, video, gif with caption or just a text message.\n\nUse this command to either set, update or delete the existing message.\n\nThe setgoodbye option can be disabled but saved using the  *${ꜱɪɢɴ.Mee6IX}setgoodbye  off*  command. In order to delete the existing message, use  *${ꜱɪɢɴ.Mee6IX}setgoodbye  delete*${ꜱɪɢɴ.Mee6IX}  Do note, the setgoodbye option is still enabled after you use the delete option.`,
  async handle(υℓтяσηℓιєηт, chat, ᴍᴇᴇ6, Arc) {
    if (!ᴍᴇᴇ6.isSenderGroupAdmin) {
      return await υℓтяσηℓιєηт
        .sendMessage(
          ᴍᴇᴇ6.chatId, {
            url: ꜱɪɢɴ.ERROR,
          },
          MessageType.image, {
            mimetype: Mimetype.png,
            caption: `
⚠️𝗘𝗿𝗿𝗼𝗿: 
➛ ʜᴇʏ ᴛʜᴇʀᴇ ɴɪʙʙᴀ!💩

ʏᴏᴜ ᴅᴏɴ'ᴛ ꜱᴇᴇᴍ ᴛᴏ ʙᴇ ᴀᴅᴍɪɴ..
ʏᴏᴜ ᴄᴀɴɴᴏᴛ ᴜꜱᴇ ᴄᴏᴍᴍᴀɴᴅ ʜᴇʀᴇ..
`,
          }
        )
        .catch((error) => ℓιєηт.catch(error, υℓтяσηℓιєηт, ᴍᴇᴇ6));
    }
    if (!ᴍᴇᴇ6.isGroup) {
      υℓтяσηℓιєηт
        .sendMessage(ᴍᴇᴇ6.chatId, `This is not a group`, MessageType.text)
        .catch((error) => ℓιєηт.catch(error, υℓтяσηℓιєηт, ᴍᴇᴇ6));
      return;
    }
    if (Arc.length == 0) {
      var enabled = await Greetings.checkSettings(ᴍᴇᴇ6.chatId, `setgoodbye`);
      var Msg = await Greetings.getMessage(ᴍᴇᴇ6.chatId, `setgoodbye`);
      try {
        if (enabled === false || enabled === undefined) {
          υℓтяσηℓιєηт
            .sendMessage(
              ᴍᴇᴇ6.chatId,
              `Set a setgoodbye message first.`,
              MessageType.text
            )
            .catch((cᴇʀʀᴏʀ) => {
              ℓιєηт.catch((cᴇʀʀᴏʀ, υℓтяσηℓιєηт, ᴍᴇᴇ6));
            });
          return;
        } else if (enabled === `OFF`) {
          υℓтяσηℓιєηт
            .sendMessage(
              ᴍᴇᴇ6.chatId,
              `Greetings are enabled: True \nCurrently greeting new members with:`,
              MessageType.text
            )
            .catch((cᴇʀʀᴏʀ) => {
              ℓιєηт.catch((cᴇʀʀᴏʀ, υℓтяσηℓιєηт, ᴍᴇᴇ6));
            });
          υℓтяσηℓιєηт
            .sendMessage(ᴍᴇᴇ6.chatId, Msg.message, MessageType.text)
            .catch((cᴇʀʀᴏʀ) => {
              ℓιєηт.catch((cᴇʀʀᴏʀ, υℓтяσηℓιєηт, ᴍᴇᴇ6));
            });
          return;
        }

        υℓтяσηℓιєηт
          .sendMessage(ᴍᴇᴇ6.chatId, GOODBYE.CURRENTLY_ENABLED, MessageType.text)
          .catch((cᴇʀʀᴏʀ) => {
            ℓιєηт.catch((cᴇʀʀᴏʀ, υℓтяσηℓιєηт, ᴍᴇᴇ6));
          });
        υℓтяσηℓιєηт.sendMessage(ᴍᴇᴇ6.chatId, Msg.message, MessageType.text);
      } catch (cᴇʀʀᴏʀ) {
        throw cᴇʀʀᴏʀ;
      }
    } else {
      try {
        if (Arc[0] === `OFF` || Arc[0] === `off` || Arc[0] === `Off`) {
          switched = `OFF`;
          await Greetings.changeSettings(ᴍᴇᴇ6.chatId, switched);
          υℓтяσηℓιєηт
            .sendMessage(
              ᴍᴇᴇ6.chatId,
              `Goodbye message has been disabled.`,
              MessageType.text
            )
            .catch((cᴇʀʀᴏʀ) => {
              ℓιєηт.catch((cᴇʀʀᴏʀ, υℓтяσηℓιєηт, ᴍᴇᴇ6));
            });
          return;
        }
        if (Arc[0] === `ON` || Arc[0] === `on` || Arc[0] === `On`) {
          switched = `ON`;
          await Greetings.changeSettings(ᴍᴇᴇ6.chatId, switched);
          υℓтяσηℓιєηт
            .sendMessage(
              ᴍᴇᴇ6.chatId,
              `Goodbye message has been enabled.`,
              MessageType.text
            )
            .catch((cᴇʀʀᴏʀ) => {
              ℓιєηт.catch((cᴇʀʀᴏʀ, υℓтяσηℓιєηт, ᴍᴇᴇ6));
            });
          return;
        }
        if (Arc[0] === `delete`) {
          var Msg = await Greetings.deleteMessage(ᴍᴇᴇ6.chatId, `setgoodbye`);
          if (Msg === false || Msg === undefined) {
            υℓтяσηℓιєηт
              .sendMessage(
                ᴍᴇᴇ6.chatId,
                `Set a setgoodbye message first.`,
                MessageType.text
              )
              .catch((cᴇʀʀᴏʀ) => {
                ℓιєηт.catch((cᴇʀʀᴏʀ, υℓтяσηℓιєηт, ᴍᴇᴇ6));
              });
            return;
          }
          await υℓтяσηℓιєηт
            .sendMessage(
              ᴍᴇᴇ6.chatId,
              `Goodbye message deleted.`,
              MessageType.text
            )
            .catch((cᴇʀʀᴏʀ) => {
              ℓιєηт.catch((cᴇʀʀᴏʀ, υℓтяσηℓιєηт, ᴍᴇᴇ6));
            });
          return;
        }
        text = ᴍᴇᴇ6.body.replace(ᴍᴇᴇ6.body[0] + ᴍᴇᴇ6.commandName + ` `, ``);

        var Msg = await Greetings.getMessage(ᴍᴇᴇ6.chatId, `setgoodbye`);
        if (Msg === false || Msg === undefined) {
          await Greetings.setGoodbye(ᴍᴇᴇ6.chatId, text);
          await υℓтяσηℓιєηт
            .sendMessage(
              ᴍᴇᴇ6.chatId,
              `Goodbye message updated and enabled.`,
              MessageType.text
            )
            .catch((cᴇʀʀᴏʀ) => {
              ℓιєηт.catch((cᴇʀʀᴏʀ, υℓтяσηℓιєηт, ᴍᴇᴇ6));
            });

          return;
        } else {
          await Greetings.deleteMessage(ᴍᴇᴇ6.chatId, `setgoodbye`);
          await Greetings.setGoodbye(ᴍᴇᴇ6.chatId, text);
          await υℓтяσηℓιєηт
            .sendMessage(
              ᴍᴇᴇ6.chatId,
              `Goodbye message updated and enabled.`,
              MessageType.text
            )
            .catch((cᴇʀʀᴏʀ) => {
              ℓιєηт.catch((cᴇʀʀᴏʀ, υℓтяσηℓιєηт, ᴍᴇᴇ6));
            });
          return;
        }
      } catch (cᴇʀʀᴏʀ) {
        throw cᴇʀʀᴏʀ;
      }
    }
  },
};
// ===============================================================================
// 🎮ᴍᴇᴇ6™ ᴀᴅᴠᴀɴᴄᴇᴅ ᴡʜᴀᴛꜱᴀᴘᴘ ᴜꜱᴇʀʙᴏᴛ ᴡɪᴛʜ 80+ ᴄᴏᴍᴍᴀɴᴅꜱ ꜰᴏʀ ʙᴏᴛʜ ᴘʀɪᴠᴀᴛᴇ ᴀɴᴅ ɢʀᴏᴜᴘ-ᴜꜱᴀɢᴇ
// ===============================================================================