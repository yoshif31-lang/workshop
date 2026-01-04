export default {
  async fetch(request, env, ctx) {
    const baseUrl = "https://raw.githubusercontent.com/yoshif31-lang/workshop/main/";
    const members = ["nagi.png", "rei.png", "toki.png", "hibiki.png", "luna.png"];

    const html = `
    <!DOCTYPE html>
    <html lang="ja">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">
        <title>GENESIS ENGINE - CONVERSATION</title>
        <style>
            body { background: #000; color: #fff; font-family: sans-serif; margin: 0; display: flex; height: 100vh; overflow: hidden; }
            .sidebar { width: 70px; background: rgba(15, 0, 0, 0.9); border-right: 1px solid #500; display: flex; flex-direction: column; align-items: center; padding: 15px 0; }
            .icon { width: 50px; height: 50px; border-radius: 50%; border: 1px solid #f00; margin-bottom: 15px; overflow: hidden; box-shadow: 0 0 8px #f00; }
            .icon img { width: 100%; height: 100%; object-fit: cover; }
            
            .main { flex: 1; display: flex; flex-direction: column; position: relative; background: #000; }
            .display-area { flex: 1; overflow-y: auto; padding: 20px; display: flex; flex-direction: column; gap: 10px; padding-bottom: 80px; }
            .msg { padding: 10px 15px; border-radius: 15px; max-width: 80%; font-size: 14px; line-height: 1.4; }
            .user-msg { align-self: flex-end; background: #300; border: 1px solid #f00; color: #fff; }
            .system-msg { align-self: flex-start; background: #111; border: 1px solid #444; color: #0f0; font-family: monospace; }

            .input-container { position: absolute; bottom: 0; width: 100%; background: #000; border-top: 1px solid #333; padding: 10px; display: flex; box-sizing: border-box; }
            #user-input { flex: 1; background: #111; border: 1px solid #444; color: #fff; padding: 10px; border-radius: 20px; outline: none; }
            #send-btn { background: #f00; border: none; color: #fff; width: 40px; height: 40px; border-radius: 50%; margin-left: 10px; cursor: pointer; font-weight: bold; }
        </style>
    </head>
    <body>
        <div class="sidebar">
            ${members.map(m => `<div class="icon"><img src="${baseUrl}${m}"></div>`).join('')}
        </div>
        <div class="main">
            <div id="chat-log" class="display-area">
                <div class="msg system-msg">SYSTEM: ALL AGENTS READY. 会話プロトコルを開始します。</div>
            </div>
            <div class="input-container">
                <input type="text" id="user-input" placeholder="メッセージを入力...">
                <button id="send-btn">▲</button>
            </div>
        </div>

        <script>
            const btn = document.getElementById('send-btn');
            const input = document.getElementById('user-input');
            const log = document.getElementById('chat-log');

            btn.onclick = () => {
                if(!input.value) return;
                const userDiv = document.createElement('div');
                userDiv.className = 'msg user-msg';
                userDiv.textContent = input.value;
                log.appendChild(userDiv);
                
                const sysDiv = document.createElement('div');
                sysDiv.className = 'msg system-msg';
                sysDiv.textContent = 'AGENT: 指示を受理。脳（AI）への接続を待機中...';
                log.appendChild(sysDiv);

                input.value = '';
                log.scrollTop = log.scrollHeight;
            };
        </script>
    </body>
    </html>
    `;
    return new Response(html, { headers: { "content-type": "text/html;charset=UTF-8" } });
  },
};
