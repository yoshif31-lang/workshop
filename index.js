export default {
  async fetch(request, env, ctx) {
    // 住民登録された5人の「不変の住所」
    const baseUrl = "https://raw.githubusercontent.com/yoshif31-lang/workshop/main/";
    const members = ["nagi.png", "rei.png", "toki.png", "hibiki.png", "luna.png"];

    const html = `
    <!DOCTYPE html>
    <html lang="ja">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>GENESIS ENGINE - COMPLETE</title>
        <style>
            body { background: #000; color: #fff; font-family: 'Courier New', monospace; margin: 0; display: flex; height: 100vh; overflow: hidden; }
            .sidebar { width: 85px; background: rgba(10, 10, 10, 0.9); border-right: 2px solid #500; display: flex; flex-direction: column; align-items: center; padding: 20px 0; box-shadow: 5px 0 15px rgba(255, 0, 0, 0.2); }
            .icon { width: 60px; height: 60px; border-radius: 50%; border: 2px solid #f00; margin-bottom: 20px; overflow: hidden; box-shadow: 0 0 12px #f00; background: #222; transition: transform 0.3s; }
            .icon:hover { transform: scale(1.1); }
            .icon img { width: 100%; height: 100%; object-fit: cover; }
            .main { flex: 1; padding: 40px; background: linear-gradient(135deg, #000 0%, #100 100%); display: flex; flex-direction: column; justify-content: center; align-items: center; text-align: center; }
            .title { color: #f00; font-size: 28px; letter-spacing: 6px; margin-bottom: 15px; text-shadow: 0 0 15px #f00; font-weight: bold; }
            .status-box { border: 1px solid #333; padding: 15px; background: rgba(20, 0, 0, 0.5); border-radius: 5px; }
            .status { font-size: 14px; color: #0f0; margin-bottom: 5px; }
            .sub-status { font-size: 10px; color: #666; letter-spacing: 1px; }
        </style>
    </head>
    <body>
        <div class="sidebar">
            ${members.map(m => `<div class="icon"><img src="${baseUrl}${m}" alt="Agent"></div>`).join('')}
        </div>
        <div class="main">
            <div class="title">GENESIS ENGINE</div>
            <div class="status-box">
                <div class="status">● ALL SYSTEMS OPERATIONAL</div>
                <div class="status">● 5 AGENTS SYNCHRONIZED</div>
                <div class="sub-status">ENCRYPTED CONNECTION ESTABLISHED // CMD: FINAL_STABILIZED</div>
            </div>
        </div>
    </body>
    </html>
    `;
    return new Response(html, { headers: { "content-type": "text/html;charset=UTF-8" } });
  },
};
