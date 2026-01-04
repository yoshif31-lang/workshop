export default {
  async fetch(request, env, ctx) {
    const nagiImage = "https://raw.githubusercontent.com/yoshif31-lang/workshop/main/nagi.png";
    const reiImage = "https://private-user-images.githubusercontent.com/251672600/531745781-893d9803-a178-433e-b873-be918342460b.png?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3Njc1NTQyMjIsIm5iZiI6MTc2NzU1MzkyMiwicGF0aCI6Ii8yNTE2NzI2MDAvNTMxNzQ1NzgxLTg5M2Q5ODAzLWExNzgtNDMzZS1iODczLWJlOTE4MzQyNDYwYi5wbmc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjYwMTA0JTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI2MDEwNFQxOTExMDJaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT1mMTZiMDI0OGMwNTVkYjFiNDFmM2I0OWFkMDJmYmZmMDdmNjM5ZjNiNzc1MDQ5ZWViMmFkNmI3YmZjNjY3YmFhJlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCJ9.8WpY8yY_x7WpM1pUfWpY8yY_x7WpM1pUfWpY8yY_x7WpM1pUfWpY8yY_x7WpM1pUfWpY8yY_x7WpM1pUfWpY8yY_x7WpM1pUfWpY8yY_x7WpM1pUfWpY8yY_x7WpM1pUfWpY8yY_x7WpM1pUfWpY8yY_x7WpM1pUfWpY8yY_x7WpM1pUfWpY8yY_x7WpM1pUfWpY8yY_x7WpM1pU"; // 既存のURL

    const html = `
    <!DOCTYPE html>
    <html lang="ja">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>GENESIS ENGINE</title>
        <style>
            body { background: #000; color: #fff; font-family: sans-serif; margin: 0; display: flex; height: 100vh; overflow: hidden; }
            .sidebar { width: 80px; background: #111; border-right: 2px solid #300; display: flex; flex-direction: column; align-items: center; padding: 20px 0; }
            .icon { width: 60px; height: 60px; border-radius: 50%; border: 2px solid #f00; margin-bottom: 20px; overflow: hidden; box-shadow: 0 0 10px #f00; }
            .icon img { width: 100%; height: 100%; object-fit: cover; }
            .main { flex: 1; padding: 40px; }
            .title { color: #f00; font-size: 24px; letter-spacing: 4px; margin-bottom: 10px; }
            .status { font-size: 12px; color: #666; }
        </style>
    </head>
    <body>
        <div class="sidebar">
            <div class="icon"><img src="${nagiImage}" alt="Nagi"></div>
            <div class="icon"><img src="${reiImage}" alt="Rei"></div>
            <div class="icon"><img src="https://raw.githubusercontent.com/yoshif31-lang/workshop/main/nagi.png" alt="Dummy"></div>
            <div class="icon"><img src="https://raw.githubusercontent.com/yoshif31-lang/workshop/main/nagi.png" alt="Dummy"></div>
            <div class="icon"><img src="https://raw.githubusercontent.com/yoshif31-lang/workshop/main/nagi.png" alt="Dummy"></div>
        </div>
        <div class="main">
            <div class="title">GENESIS ENGINE</div>
            <div class="status">ENCRYPTED CONNECTION ESTABLISHED // CMD: SYNC_SUCCESS</div>
        </div>
    </body>
    </html>
    `;
    return new Response(html, { headers: { "content-type": "text/html;charset=UTF-8" } });
  },
};
