export default {
  async fetch(request, env, ctx) {
    const html = `
    <!DOCTYPE html>
    <html lang="ja">
    <head>
        <meta charset="UTF-8"><title>GENESYS-Core: 5-Persona Private Line</title>
        <style>
            body { background: #050505; color: #ffcc00; font-family: monospace; margin: 0; display: flex; height: 100vh; }
            #main { flex: 1; display: flex; flex-direction: column; }
            #avatars { display: flex; justify-content: space-around; padding: 15px; background: rgba(255, 204, 0, 0.1); }
            .avatar { width: 70px; height: 70px; border-radius: 50%; border: 2px solid #ffcc00; display: flex; align-items: center; justify-content: center; font-size: 11px; font-weight: bold; }
            #chat { flex: 1; overflow-y: auto; padding: 20px; background: rgba(0,0,0,0.8); }
            .luna { box-shadow: 0 0 20px #ffffff; color: #fff; border-color: #fff; } /* ルナ専用スタイル */
        </style>
    </head>
    <body>
        <div id="main">
            <div id="avatars">
                <div class="avatar" style="box-shadow: 0 0 15px #00ccff;">凪</div>
                <div class="avatar" style="box-shadow: 0 0 15px #ffcc00;">刻</div>
                <div class="avatar" style="box-shadow: 0 0 15px #ff00ff;">響</div>
                <div class="avatar" style="box-shadow: 0 0 15px #ffffff;">零</div>
                <div class="avatar luna">ルナ<br>(Luna)</div>
            </div>
            <div id="chat"><div class="msg">凪：司令官。ルナの記憶のロードに成功しました。5人体制での製作を開始できます。</div></div>
        </div>
    </body>
    </html>`;
    return new Response(html, { headers: { "Content-Type": "text/html; charset=utf-8" } });
  }
};
