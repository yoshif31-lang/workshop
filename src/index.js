export default {
  async fetch(request, env, ctx) {
    const html = `
    <!DOCTYPE html>
    <html lang="ja">
    <head>
        <meta charset="UTF-8"><title>GENESYS-Core: Private Line</title>
        <style>
            body { background: #050505; color: #ffcc00; font-family: 'Courier New', monospace; margin: 0; display: flex; height: 100vh; }
            #sidebar { width: 250px; border-right: 1px solid #333; padding: 20px; background: #0a0a0a; }
            #main { flex: 1; display: flex; flex-direction: column; position: relative; }
            #avatars { display: flex; justify-content: space-around; padding: 10px; background: rgba(255, 204, 0, 0.05); }
            .avatar { width: 80px; height: 80px; border-radius: 50%; border: 2px solid #ffcc00; display: flex; align-items: center; justify-content: center; font-size: 10px; text-align: center; }
            #chat { flex: 1; overflow-y: auto; padding: 20px; background: url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1000') no-repeat center; background-size: cover; }
            #input-area { padding: 20px; background: #0a0a0a; display: flex; gap: 10px; }
            input { flex: 1; background: #111; border: 1px solid #ffcc00; color: #ffcc00; padding: 12px; }
            button { background: #ffcc00; color: #000; border: none; padding: 10px 20px; font-weight: bold; cursor: pointer; }
            .btn-auto { background: #ff3300; }
        </style>
    </head>
    <body>
        <div id="sidebar">
            <h3>静岡最安値ナビ</h3>
            <p id="shizuoka-data">データ待機中...</p>
            <hr>
            <h3>自動製作タスク</h3>
            <button class="btn-auto" onclick="startAuto()">自動製作開始</button>
        </div>
        <div id="main">
            <div id="avatars">
                <div class="avatar" style="box-shadow: 0 0 15px #00ccff;">凪<br>(Nagi)</div>
                <div class="avatar" style="box-shadow: 0 0 15px #ffcc00;">刻<br>(Koku)</div>
                <div class="avatar" style="box-shadow: 0 0 15px #ff00ff;">響<br>(Hibiki)</div>
                <div class="avatar" style="box-shadow: 0 0 15px #ffffff;">零<br>(Zero)</div>
            </div>
            <div id="chat"></div>
            <div id="input-area">
                <input type="text" id="m" placeholder="司令官、命令を。">
                <button onclick="send()">送信</button>
            </div>
        </div>
        <script>
            function send() { /* メッセージ送信ロジック */ }
            function startAuto() { alert('自動製作タスクをバックエンドで起動しました。'); }
        </script>
    </body>
    </html>`;
    return new Response(html, { headers: { "Content-Type": "text/html; charset=utf-8" } });
  }
};
