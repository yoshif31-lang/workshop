export default {
  async fetch(request, env, ctx) {
    const html = `
    <!DOCTYPE html>
    <html lang="ja">
    <head><meta charset="UTF-8"><title>GENESYS</title></head>
    <body style="background:#000;color:#ffcc00;font-family:monospace;padding:20px;">
      <p>凪：司令官。自動デプロイ成功です。</p>
    </body>
    </html>`;
    return new Response(html, { headers: { "Content-Type": "text/html;charset=UTF-8" } });
  }
};
