require("dotenv").config();

//var request = require("request");

const { TOKEN } = process.env;
//const TOKEN = `5244590814:AAHW776xtM9AbhMG6rPR5HwhjoBWdiUm60Y`;
const TELEGRAM_API = `https://api.telegram.org/bot${TOKEN}`;



let getHome = (req, res) => {
  res.status(200).send("Hello, this is Ana Jito bot.");
};

let postBot = async (req, res) => {
  const update_id = req.body.update_id;

  const chatId = req.body.message.chat.id;
  const text = req.body.message.text;
  const message_id = req.body.message.message_id;
  const username = req.body.message.chat.username;

//   let _body = {
//     user_id: chatId,
//     username,
//     chat: [
//       {
//         update_id,
//         message_id,
//         text,
//       },
//     ],
//   };

  if (text == "" || text == " ") {
    return res.send();
  } else if (["/start", "/Start", "/hello", "/Hello"].includes(text)) {
    let str = `Chào bạn. Gõ /help để được hỗ trợ.`;
    _ = await sendMessage(chatId, str);
    return res.send();
  } else if (["/help", "/Help"].includes(text)) {
    let str = `Hôm nay trời thật đẹp.`;
    _ = await sendMessage(chatId, str);
    return res.send();
  } else {
    let str = `Nhấn /start để khởi động.\nNhấn /help để được trợ giúp.`;
    _ = await sendMessage(chatId, str);
    return res.send();
  }
};

// Function hỗ trợ send message
let sendMessage = async function (chatId, message) {
  try {
    await axios.post(`${TELEGRAM_API}/sendMessage`, {
      chat_id: chatId,
      text: message,
    });
    return true;
  } catch (err) {
    return false;
  }
};


module.exports = {
  getHome,
  // postWebhook: postWebhook,
  postBot,
};
