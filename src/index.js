const IMG_BASE = "https://raw.githubusercontent.com/yoshif31/workshop/main/";

export default {
  async fetch(request, env, ctx) {
    const html = `
    <!DOCTYPE html>
    <html lang="ja">
    <head>
        <meta charset="UTF-8"><title>GENESYS-Core</title>
        <style>
            :root { --amber: #ffcc00; }
            body { background: #050505; color: var(--amber); font-family: monospace; margin: 0; }
            #avatars { display: flex; justify-content: space-around; padding: 15px; background: #111; border-bottom: 1px solid #333; }
            .avatar-frame { width: 68px; height: 68px; border-radius: 50%; border: 2px solid var(--amber); overflow: hidden; background: #222; }
            .avatar-frame img { width: 100%; height: 100%; object-fit: cover; }
            .label { font-size: 10px; text-align: center; margin-top: 5px; color: #fff; }
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
        <div style="padding:20px;">凪：司令官。バックスラッシュを排除し、同期を再確立しました。</div>
    </body>
    </html>`;
    return new Response(html, { headers: { "Content-Type": "text/html; charset=utf-8" } });
  }
};
