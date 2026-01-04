export default {
  async fetch(request) {
    const html = `
<!DOCTYPE html>
<html lang="ja">
<head>
    <meta charset="UTF-8">
    <title>GENESIS ENGINE</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <style>
        .sidebar-icon { width: 48px; height: 48px; border-radius: 50%; border: 2px solid #900; transition: 0.3s; object-fit: cover; }
        .sidebar-icon:hover { border-color: #f00; box-shadow: 0 0 15px #f00; transform: scale(1.1); }
    </style>
</head>
<body class="bg-black text-white flex h-screen overflow-hidden">
    <aside class="w-20 border-r border-red-900/30 flex flex-col items-center py-8 space-y-6">
        <img src="https://github.com/user-attachments/assets/9fb95ea1-5741-4ed2-aede-af09dd4a677f" class="sidebar-icon" title="凪">
        
        <div class="sidebar-icon flex items-center justify-center text-[10px] text-red-900">零</div>
        <div class="sidebar-icon flex items-center justify-center text-[10px] text-red-900">刻</div>
        <div class="sidebar-icon flex items-center justify-center text-[10px] text-red-900">ルナ</div>
        <div class="sidebar-icon flex items-center justify-center text-[10px] text-red-900">響</div>
    </aside>

    <main class="flex-1 flex flex-col">
        <header class="p-4 border-b border-red-900/20">
            <h1 class="text-red-600 font-bold tracking-widest text-xl">GENESIS ENGINE <span class="text-xs text-gray-600">v1.0</span></h1>
        </header>
        <div class="flex-1 p-6">
            <p class="text-gray-400">司令官。……ついに「実体」がロードされました。左側のアイコンを見てください。</p>
        </div>
    </main>
</body>
</html>`;
    return new Response(html, { headers: { "Content-Type": "text/html;charset=UTF-8" } });
  },
};
