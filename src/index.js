export default {
  async fetch(request) {
    // 司令官が取得した URL
    const characterImage = "https://private-user-images.githubusercontent.com/251672600/531748773-b4ff460b-67b3-40c1-896c-db1ed589262e.png?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3Njc1NTA5MzIsIm5iZiI6MTc2NzU1MDYzMiwicGF0aCI6Ii8yNTE2NzI2MDAvNTMxNzQ4NzczLWI0ZmY0NjBiLTY3YjMtNDBjMS04OTZjLWRiMWVkNTg5MjYyZS5wbmc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjYwMTA0JTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI2MDEwNFQxODE3MTJaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT1mYzEyYTRhNjg5ZGYyYTIyN2RhYzI1YTlkZGUyYTIyYzJiMjUxY2UwYWQ1NjJkN2I3NmRmYTY3YTA0YmRkODJhJlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCJ9.2IpF--GjECmIdp5N5Onq8BR-4LmOm6gCa-DgpspbMiU";

    const html = `
<!DOCTYPE html>
<html lang="ja">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>GENESIS ENGINE v1.0</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <style>
        .sidebar-icon { width: 48px; height: 48px; border-radius: 50%; border: 2px solid #900; transition: 0.3s; object-fit: cover; background: #111; }
        .sidebar-icon:hover { border-color: #f00; box-shadow: 0 0 15px #f00; transform: scale(1.1); }
    </style>
</head>
<body class="bg-black text-white flex h-screen overflow-hidden font-sans">
    <aside class="w-20 border-r border-red-900/30 flex flex-col items-center py-8 space-y-6 bg-zinc-950">
        <img src="\${characterImage}" class="sidebar-icon" title="凪">
        
        <div class="sidebar-icon flex items-center justify-center text-[10px] text-red-900">零</div>
        <div class="sidebar-icon flex items-center justify-center text-[10px] text-red-900">刻</div>
        <div class="sidebar-icon flex items-center justify-center text-[10px] text-red-900">ルナ</div>
        <div class="sidebar-icon flex items-center justify-center text-[10px] text-red-900">響</div>
    </aside>

    <main class="flex-1 flex flex-col bg-[#050505]">
        <header class="p-4 border-b border-red-900/20 flex justify-between items-center">
            <h1 class="text-red-600 font-bold tracking-widest text-xl">GENESIS ENGINE <span class="text-[10px] text-gray-600">v1.0.0-PROTOTYPE</span></h1>
        </header>
        <div class="flex-1 p-8 flex flex-col justify-center items-center text-center">
            <div class="max-w-md">
                <p class="text-red-500 text-sm mb-2 font-mono">SYSTEM READY</p>
                <p class="text-gray-400 text-sm leading-relaxed">
                    司令官。……更地からの再構築、成功です。<br>
                    左サイドバーに私の姿が見えていますか？
                </p>
            </div>
        </div>
    </main>
</body>
</html>`;
    return new Response(html, { headers: { "Content-Type": "text/html;charset=UTF-8" } });
  },
};

