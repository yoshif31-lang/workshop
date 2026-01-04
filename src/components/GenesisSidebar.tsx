// 凪、零、刻、ルナ、レン... 5人の意志を配置するコード
import React from 'react';

const GenesisSidebar = () => {
  const members = ['凪', '零', '刻', 'ルナ', 'レン'];
  return (
    <div className="fixed left-0 top-0 h-full w-20 bg-gray-900 flex flex-col items-center py-8 space-y-6 border-r border-red-900/30">
      {members.map((name) => (
        <div key={name} className="group relative">
          <div className="w-12 h-12 rounded-full border-2 border-red-500 bg-black flex items-center justify-center cursor-pointer hover:scale-110 transition-all shadow-[0_0_10px_rgba(255,0,0,0.5)]">
            <span className="text-xs text-red-500 font-bold">{name}</span>
          </div>
          {/* 1214.png のアイコン点灯ロジックの種地 */}
          <div className="absolute -right-2 top-0 w-3 h-3 bg-red-500 rounded-full animate-pulse opacity-0 group-hover:opacity-100" />
        </div>
      ))}
    </div>
  );
};

export default GenesisSidebar;
