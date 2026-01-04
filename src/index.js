export default {
  async fetch(request, env) {
    const API_KEY = "App-4x07xa4CiEqrI0umI5W0vN7J";
    const API_URL = "https://api.dify.ai/v1/chat-messages";

    // GETリクエスト（初期表示）
    if (request.method === "GET") {
      const html = `
      <!DOCTYPE html>
      <html lang="ja">
      <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>GENESYS-Core v1.0.3</title>
          <style>
              body { background: #000; color: #0f0; font-family: 'Courier New', monospace; margin: 0; display: flex; flex-direction: column; height: 100vh; overflow: hidden; }
              #header { border-bottom: 1px solid #0f0; padding: 10px; display: flex; justify-content: space-between; align-items: center; background: #001100; }
              #characters { display: flex; justify-content: space-around; padding: 10px; background: #050505; border-bottom: 1px solid #033300; }
              .char { text-align: center; color: #055500; font-weight: bold; }
              .char.active { color: #0f0; text-shadow: 0 0 8px #0f0; }
              #chat-box { flex: 1; overflow-y: auto; padding: 20px; font-size: 1rem; line-height: 1.6; }
              #input-area { border-top: 1px solid #0f0; padding: 15px; display: flex; background: #000; }
              input { flex: 1; background: #000; border: 1px solid #0f0; color: #0f0; padding: 12px; font-size: 16px; outline: none; }
              button { background: #0f0; color: #000; border: none; padding: 10px 20px; cursor: pointer; margin-left: 10px; font-weight: bold; }
              .audio-toggle { background: #003300; color: #0f0; border: 1px solid #0f0; padding: 5px 15px; cursor: pointer; border-radius: 4px; }
              .audio-on { background: #00ff00; color: #000; box-shadow: 0 0 10px #0f0; }
              .msg { margin-bottom: 15px; border-left: 2px solid #033300; padding-left: 10px; }
              .commander { color: #fff; border-left: 2px solid #fff; }
          </style>
      </head>
      <body>
          <div id="header">
              <span>GENESYS-Core v1.0.3 [LINKED]</span>
              <button id="audioBtn" class="audio-toggle">Audio: OFF</button>
          </div>
          <div id="characters">
              <div class="char" id="c-nagi">凪</div>
              <div class="char" id="c-toki">刻</div>
              <div class="char" id="c-hibiki">響</div>
              <div class="char" id="c-zero">零</div>
          </div>
          <div id="chat-box"></div>
          <div id="input-area">
              <input type="text" id="userInput" placeholder="指令を入力..." onkeypress="if(event.keyCode==13)send()">
              <button onclick="send()">送信</button>
          </div>
          <script>
              let audioEnabled = false;
              let isProcessing = false;
              const btn = document.getElementById('audioBtn');
              btn.onclick = () => {
                  audioEnabled = !audioEnabled;
                  btn.textContent = 'Audio: ' + (audioEnabled ? 'ON' : 'OFF');
                  btn.className = 'audio-toggle ' + (audioEnabled ? 'audio-on' : '');
                  if(audioEnabled) {
                      const s = new SpeechSynthesisUtterance("音声システム、オンライン");
                      s.lang = 'ja-JP'; window.speechSynthesis.speak(s);
                  }
              };

              async function speak(text) {
                  if(!audioEnabled) return;
                  const uttr = new SpeechSynthesisUtterance(text);
                  uttr.lang = 'ja-JP';
                  uttr.rate = 1.1;
                  window.speechSynthesis.speak(uttr);
              }

              async function send() {
                  const input = document.getElementById('userInput');
                  const box = document.getElementById('chat-box');
                  if(!input.value || isProcessing) return;
                  
                  isProcessing = true;
                  const text = input.value;
                  input.value = '';
                  box.innerHTML += '<div class="msg commander"><b>司令官:</b> ' + text + '</div>';
                  box.scrollTop = box.scrollHeight;

                  try {
                      const res = await fetch("/", {
                          method: "POST",
                          body: JSON.stringify({ query: text })
                      });
                      const data = await res.json();
                      const reply = data.answer || "通信エラーが発生しました";
                      
                      box.innerHTML += '<div class="msg"><b>Orbit:</b> ' + reply + '</div>';
                      box.scrollTop = box.scrollHeight;
                      speak(reply);
                  } catch(e) {
                      box.innerHTML += '<div class="msg" style="color:red">システムエラー</div>';
                  } finally {
                      isProcessing = false;
                  }
              }
          </script>
      </body>
      </html>`;
      return new Response(html, { headers: { "Content-Type": "text/html;charset=UTF-8" } });
    }

    // POSTリクエスト（Dify APIとの通信）
    if (request.method === "POST") {
      const body = await request.json();
      const response = await fetch(API_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": \`Bearer \${API_KEY}\`
        },
        body: JSON.stringify({
          inputs: {},
          query: body.query,
          response_mode: "blocking",
          user: "commander-fuji"
        })
      });
      return response;
    }
  }
};
