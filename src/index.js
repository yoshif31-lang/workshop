export default {
  async fetch(request, env) {
    if (request.method === "GET") {
      return new Response('<!DOCTYPE html><html><body style="background:#000;color:#fb0;padding:20px;font-family:monospace;"><h3>GENESYS-Core</h3><div id="o">凪：藤くん、通信成功。</div><input id="i"><button onclick="s()">送信</button><script>async function s(){const v=document.getElementById("i").value;const o=document.getElementById("o");const r=await fetch("/",{method:"POST",body:JSON.stringify({query:v})});const d=await r.json();o.innerText+="\\n凪："+d.answer;}</script></body></html>', { headers: { "Content-Type": "text/html;charset=UTF-8" } });
    }
    const body = await request.json();
    const response = await fetch("https://api.dify.ai/v1/chat-messages", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${env.DIFY_API_KEY}`,
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
