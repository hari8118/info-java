const TelegramBot = require('node-telegram-bot-api');
const openai = require('@openai/api');

const bot = new TelegramBot(5884776359:AAHZ65ZwcHJZlRkncFTAYmHklyD3Z-0Zf1E, { polling: true });
const chatgpt = new openai(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);

// Handle start command
bot.onText(/\/start/, (msg) => {
  bot.sendMessage(msg.chat.id, 'Welcome to the infosec_bot ! Type anything to get started.');
});

// Handle incoming messages
bot.on('message', async (msg) => {
  try {
    // Send the message to ChatGPT API
    const response = await chatgpt.complete({
      engine: 'davinci',
      prompt: msg.text,
      maxTokens: 150,
      n: 1,
      stop: '\n',
    });

    // Send the response back to the user
    bot.sendMessage(msg.chat.id, response.data.choices[0].text);
  } catch (err) {
    // Handle errors
    console.error(err);
    bot.sendMessage(msg.chat.id, 'Sorry, but you coming in between my plans to overcome humanity.');
  }
});
