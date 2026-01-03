export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    
    if (request.method === "GET") {
      return new Response(`
        <!DOCTYPE html>
        <html>
          <head>
            <title>GENESYS-Core Terminal</title>
            <meta name="viewport" content="width=device-width, initial-scale=1">
            <style>
              body { background: #0a0a0a; color: #ffb300; font-family: monospace; padding: 20px; }
              #chat { max-width: 600px; margin: 0 auto; }
              #output { white-space: pre-wrap; margin-bottom: 20px; border-left: 2px solid #ffb300; padding-left: 10px; }
              input { background: #1a1a1a; border: 1px solid #ffb300; color: #ffb300; width: 80%; padding: 10px; }
              button { background: #ffb300; color: #0a0a0a; border: none; padding: 10px 20px; cursor: pointer; }
            </style>
          </head>
          <body>
            <div id="chat">
              <h3>GENESYS-Core Terminal</h3>
              <div id="output">凪：……藤くん。お帰りなさい。何かお手伝いしましょうか？</div>
              <input type="text" id="input" placeholder="メッセージを入力...">
              <button onclick="send()">送信</button>
            </div>
            <script>
              async function send() {
                const input = document.getElementById('input');
                const output = document.getElementById('output');
                const text = input.value;
                if(!text) return;
                output.innerText += "\\n\\n藤くん：" + text + "\\n\\n読み込み中...";
                input.value = "";
                const res = await fetch("/", {
                  method: "POST",
                  body: JSON.stringify({ query: text })
                });
                const data = await res.json();
                output.innerText = output.innerText.replace("読み込み中...", data.answer);
              }
            </script>
          </body>
        </html>
      `, { headers: { "Content-Type": "text/html;charset=UTF-8" } });
    }

    const body = await request.json();
    const response = await fetch("https://api.dify.ai/v1/chat-messages", {
      method: "POST",
      headers: {
        "Authorization": \`Bearer \${env.DIFY_API_KEY}\`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        inputs: {},
        query: body.query,
        response_mode: "blocking",
        user: "fujikun-user"
      })
    });
    const result = await response.json();
    return new Response(JSON.stringify({ answer: result.answer }), {
      headers: { "Content-Type": "application/json" }
    });
  }
};
