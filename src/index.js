const IMG_BASE = "https://raw.githubusercontent.com/yoshif31-lang/workshop/main/";

export default {
  async fetch(request, env, ctx) {
    const html = `
    <!DOCTYPE html>
    <html lang="ja">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>GENESYS-Core Terminal</title>
        <style>
            :root { --amber: #ffcc00; --bg: #050505; }
            body { background: var(--bg); color: var(--amber); font-family: monospace; margin: 0; display: flex; flex-direction: column; height: 100vh; overflow: hidden; }
            #avatars { display: flex; justify-content: space-around; padding: 10px; background: #111; border-bottom: 1px solid #333; flex-shrink: 0; }
            .avatar-frame { width: 55px; height: 55px; border-radius: 50%; border: 2px solid var(--amber); overflow: hidden; background: #222; }
            .avatar-frame img { width: 100%; height: 100%; object-fit: cover; }
            .label { font-size: 9px; text-align: center; margin-top: 3px; color: #fff; }
            #chat-log { flex-grow: 1; overflow-y: auto; padding: 15px; font-size: 14px; line-height: 1.6; display: flex; flex-direction: column; gap: 10px; }
            .msg { border-left: 2px solid var(--amber); padding-left: 10px; margin-bottom: 5px; }
            .msg.user { border-left: 2px solid #00ffcc; color: #00ffcc; }
            #input-area { padding: 15px; background: #111; border-top: 1px solid #333; display: flex; gap: 10px; }
            input { flex-grow: 1; background: #000; border: 1px solid var(--amber); color: var(--amber); padding: 10px; font-family: monospace; outline: none; }
            button { background: var(--amber); border: none; color: #000; padding: 10px 20px; font-weight: bold; cursor: pointer; }
        </style>
    </head>
    <body>
        <div id="avatars">
            <div><div class="avatar-frame"><img src="${IMG_BASE}nagi.png"></div><div class="label">NAGI</div></div>
            <div><div class="avatar-frame"><img src="${IMG_BASE}koku.png"></div><div class="label">KOKU</div></div>
            <div><div class="avatar-frame"><img src="${IMG_BASE}hibiki.png"></div><div class="label">HIBIKI</div></div>
            <div><div class="avatar-frame"><img src="${IMG_BASE}zero.png"></div><div class="label">ZERO</div></div>
            <div><div class="avatar-frame"><img src="${IMG_BASE}luna.png"></div><div class="label">LUNA</div></div>
        </div>
        <div id="chat-log">
            <div class="msg">凪：司令官、通信回線の確立に成功しました。自動デプロイの最終テスト中です。</div>
        </div>
        <div id="input-area">
            <input type="text" id="user-input" placeholder="メッセージを入力...">
            <button onclick="sendMessage()">送信</button>
        </div>
        <script>
            function sendMessage() {
                const input = document.getElementById('user-input');
                const log = document.getElementById('chat-log');
                if(!input.value) return;
                const userMsg = document.createElement('div');
                userMsg.className = 'msg user';
                userMsg.innerText = '司令官：' + input.value;
                log.appendChild(userMsg);
                setTimeout(() => {
                    const reply = document.createElement('div');
                    reply.className = 'msg';
                    reply.innerText = '凪：了解。構文エラーの修正を確認。自動化ラインは正常です。';
                    log.appendChild(reply);
                    log.scrollTop = log.scrollHeight;
                }, 800);
                input.value = '';
                log.scrollTop = log.scrollHeight;
            }
        </script>
    </body>
    </html>`, { headers: { "Content-Type": "text/html; charset=utf-8" } });
  }
};
