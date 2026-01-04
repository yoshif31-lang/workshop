// Cloudflare Workers Emergency UI Code
export default {
  async fetch(request, env) {
    const html = `
    <!DOCTYPE html>
    <html lang="ja">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>GENESYS-Core / Team Orbit</title>
        <style>
            body { background: #000; color: #0f0; font-family: 'Courier New', monospace; margin: 0; display: flex; flex-direction: column; height: 100vh; }
            #header { border-bottom: 1px solid #0f0; padding: 10px; display: flex; justify-content: space-between; align-items: center; }
            #characters { display: flex; justify-content: space-around; padding: 20px; background: #050505; }
            .char { text-align: center; opacity: 0.5; transition: 0.3s; }
            .char.active { opacity: 1; transform: scale(1.1); text-shadow: 0 0 10px #0f0; }
            #chat-box { flex: 1; overflow-y: auto; padding: 20px; font-size: 1.2rem; }
            #input-area { border-top: 1px solid #0f0; padding: 20px; display: flex; }
            input { flex: 1; background: #000; border: 1px solid #0f0; color: #0f0; padding: 10px; }
            button { background: #0f0; color: #000; border: none; padding: 10px 20px; cursor: pointer; margin-left: 10px; }
            .audio-toggle { background: #003300; color: #0f0; border: 1px solid #0f0; padding: 5px 10px; cursor: pointer; }
            .audio-on { background: #00ff00; color: #000; }
        </style>
    </head>
    <body>
        <div id="header">
            <span>GENESYS-Core v1.0.2</span>
            <button id="audioBtn" class="audio-toggle">Audio: OFF</button>
        </div>
        <div id="characters">
            <div class="char" id="nagi">凪</div>
            <div class="char" id="toki">刻</div>
            <div class="char" id="hibiki">響</div>
            <div class="char">零</div>
            <div class="char">？</div>
        </div>
        <div id="chat-box">司令官、接続を待機中...</div>
        <div id="input-area">
            <input type="text" id="userInput" placeholder="指令を入力...">
            <button onclick="send()">送信</button>
        </div>
        <script>
            let audioEnabled = false;
            document.getElementById('audioBtn').onclick = function() {
                audioEnabled = !audioEnabled;
                this.textContent = 'Audio: ' + (audioEnabled ? 'ON' : 'OFF');
                this.className = 'audio-toggle ' + (audioEnabled ? 'audio-on' : '');
            };
            async function send() {
                const input = document.getElementById('userInput');
                const box = document.getElementById('chat-box');
                if(!input.value) return;
                box.innerHTML += '<div><b>司令官:</b> ' + input.value + '</div>';
                // ここに Dify API へのフェッチロジックを統合する
                input.value = '';
            }
        </script>
    </body>
    </html>`;
    return new Response(html, { headers: { "Content-Type": "text/html;charset=UTF-8" } });
  }
};
