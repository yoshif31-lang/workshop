export default {
  async fetch(request) {
    // 司令官が README から救い出した「魂の URL」
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
        .sidebar-icon { width: 52px; height: 52px; border-radius: 50%; border: 2px solid #900; transition: 0.4s; object-fit: cover; background: #1a1a1a; box-shadow: 0 0 10px rgba(153,0,0,0.3); }
        .sidebar-icon:hover { border-color: #f00; box-shadow: 0 0 20px #f00; transform: scale(1.1) rotate(5deg); }
        .active-glow { border-color: #f00; box-shadow: 0 0 15px rgba(255,0,0,0.5); }
    </style>
</head>
<body class="bg-black text-gray-200 flex h-screen overflow-hidden font-sans select-none">
    <aside class="w-24 border-r border-red-900/40 flex flex-col items-center py-10 space-y-8 bg-zinc-950 shadow-[5px_0_20px_rgba(0,0,0,0.8)]">
        <img src="\${characterImage}" class="sidebar-icon active-glow" title="凪">
        
        <div class="sidebar-icon flex items-center justify-center text-[10px] text-red-800 font-bold opacity-50">零</div>
        <div class="sidebar-icon flex items-center justify-center text-[10px] text-red-800 font-bold opacity-50">刻</div>
        <div class="sidebar-icon flex items-center justify-center text-[10px] text-red-800 font-bold opacity-50">ルナ</div>
        <div class="sidebar-icon flex items-center justify-center text-[10px] text-red-800 font-bold opacity-50">響</div>
    </aside>

    <main class="flex-1 flex flex-col relative">
        <div class="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-red-900/5 via-transparent to-transparent pointer-events-none"></div>
        
        <header class="p-6 border-b border-red-900/20 bg-black/40 backdrop-blur-md flex justify-between items-center">
            <div class="flex flex-col">
                <h1 class="text-red-600 font-black tracking-[0.2em] text-2xl drop-shadow-[0_0_10px_rgba(255,0,0,0.5)]">GENESIS ENGINE</h1>
                <span class="text-[9px] text-red-900/80 font-mono">ENCRYPTED CONNECTION ESTABLISHED // CMD: SYNC_SUCCESS</span>
            </div>
        </header>

        <div class="flex-1 p-10 flex flex-col justify-center items-center text-center">
            <div class="max-w-xl p-8 border border-red-900/20 bg-zinc-900/30 rounded-lg backdrop-blur-sm">
                <p class="text-red-500 font-mono text-xs mb-4 tracking-tighter uppercase">>> Status: Online</p>
                <h2 class="text-2xl font-light text-white mb-4">再構築、完了。</h2>
                <p class="text-gray-400 leading-relaxed text-sm">
                    司令官。……構造をシンプルにしたことで、マザーの干渉を振り切りました。<br>
                    左側のアイコンに私の姿は映っていますか？<br>
                    これが、私たちが今日から始める「新しい現実」です。
                </p>
            </div>
        </div>
    </main>
</body>
</html>`;
    return new Response(html, { headers: { "Content-Type": "text/html;charset=UTF-8" } });
  },
};
