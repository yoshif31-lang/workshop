// 監督のGitHubアカウント名を組み込んだ画像パス設定
const IMG_BASE = "https://raw.githubusercontent.com/yoshif31/workshop/main/public/images/";

export default {
  async fetch(request, env, ctx) {
    const html = `
    <!DOCTYPE html>
    <html lang="ja">
    <head>
        <meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>GENESYS-Core: Private Line</title>
        <style>
            :root { --amber: #ffcc00; --blue: #00ccff; --purple: #ff00ff; --silver: #e0e0e0; }
            body { background: #050505; color: var(--amber); font-family: 'Courier New', monospace; margin: 0; display: flex; height: 100vh; overflow: hidden; }
            #sidebar { width: 260px; border-right: 1px solid #333; padding: 20px; background: #0a0a0a; display: flex; flex-direction: column; }
            #main { flex: 1; display: flex; flex-direction: column; }
            #avatars { display: flex; justify-content: space-around; padding: 15px; background: rgba(255, 204, 0, 0.05); border-bottom: 1px solid #222; }
            .avatar-frame { width: 68px; height: 68px; border-radius: 50%; border: 2px solid var(--amber); overflow: hidden; box-shadow: 0 0 10px rgba(255,204,0,0.2); }
            .avatar-frame img { width: 100%; height: 100%; object-fit: cover; }
            .label { font-size: 10px; text-align: center; margin-top: 5px; color: #fff; }
            #chat-box { flex: 1; overflow-y: auto; padding: 20px; background: #000; }
            #input-area { padding: 15px; background: #0d0d0d; display: flex; gap: 10px; border-top: 1px solid #333; }
            input { flex: 1; background: #000; border: 1px solid var(--amber); color: var(--amber); padding: 12px; outline: none; }
            button { background: var(--amber); color: #000; border: none; padding: 10px 20px; font-weight: bold; cursor: pointer; }
        </style>
    </head>
    <body>
        <div id="sidebar">
            <h3 style="font-size: 14px;">GENESYS-Core v2.5</h3>
            <p style="font-size: 11px;">OWNER: yoshif31<br>STATUS: ONLINE</p>
            <hr style="border:0; border-top:1px solid #333;">
            <p style="font-size: 12px; color: #888;">静岡最安値ナビ: 待機中</p>
        </div>
        <div id="main">
            <div id="avatars">
                <div><div class="avatar-frame"><img src="\${IMG_BASE}nagi.png"></div><div class="label">NAGI</div></div>
                <div><div class="avatar-frame"><img src="\${IMG_BASE}koku.png"></div><div class="label">KOKU</div></div>
                <div><div class="avatar-frame"><img src="\${IMG_BASE}hibiki.png"></div><div class="label">HIBIKI</div></div>
                <div><div class="avatar-frame"><img src="\${IMG_BASE}zero.png"></div><div class="label">ZERO</div></div>
                <div><div class="avatar-frame" style="border-color:#fff;"><img src="\${IMG_BASE}luna.png"></div><div class="label">LUNA</div></div>
            </div>
            <div id="chat-box" id="chat">
                <div style="color:var(--blue);">凪：司令官、yoshif31専用回線へようこそ。アバターの実体化を待機しています。</div>
            </div>
            <div id="input-area">
                <input type="text" id="userInput" placeholder="命令を入力...">
                <button onclick="send()">SEND</button>
            </div>
        </div>
        <script>
            function send() {
                const i = document.getElementById('userInput');
                const c = document.getElementById('chat-box');
                if(!i.value) return;
                c.innerHTML += '<div style="margin-top:15px; color:#fff;">監督：' + i.value + '</div>';
                i.value = '';
                c.scrollTop = c.scrollHeight;
            }
        </script>
    </body>
    </html>`;
    return new Response(html, { headers: { "Content-Type": "text/html; charset=utf-8" } });
  }
};
