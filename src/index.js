export default {
  async fetch(r, e) {
    if (r.method === "GET") {
      return new Response('<!DOCTYPE html><html><body style="background:#000;color:#fb0;padding:20px;font-family:monospace;"><h3>GENESYS-Core</h3><div id="o">凪：接続待機中。</div><input id="i"><button onclick="s()">送信</button><script>async function s(){const v=document.getElementById("i").value;const o=document.getElementById("o");o.innerHTML+="<br>藤くん："+v;const r=await fetch("/",{method:"POST",body:JSON.stringify({query:v})});const d=await r.json();o.innerHTML+="<br>凪："+d.answer;}<\/script></body></html>', { headers: { "Content-Type": "text/html;charset=UTF-8" } });
    }
    const b = await r.json();
    const res = await fetch("https://api.dify.ai/v1/chat-messages", {
      method: "POST",
      headers: { "Authorization": "Bearer " + e.DIFY_API_KEY, "Content-Type": "application/json" },
      body: JSON.stringify({ inputs: {}, query: b.query, response_mode: "blocking", user: "f-user" })
    });
    const j = await res.json();
    return new Response(JSON.stringify({ answer: j.answer || j.text || "応答なし" }), { headers: { "Content-Type": "application/json" } });
  }
};
