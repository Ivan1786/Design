import React from "react";
import { ChevronRight } from "lucide-react";

export function HistorySection() {
  const historyItems = [
    { title: "ООО Альфа / март 2026", details: "7 документов · completed" },
    { title: "АО Бета / февраль 2026", details: "5 документов · report ready" },
    { title: "ООО Гамма / февраль 2026", details: "8 документов · feedback sent" },
  ];

  return (
    <div className="bg-white/90 border border-[#D2DED7] rounded-[28px] p-6 shadow-sm flex flex-col gap-6">
      <div className="flex flex-col gap-1">
        <p className="text-[#0C6F50] text-xs font-extrabold uppercase tracking-widest">
          История
        </p>
        <h2 className="text-[#102118] text-2xl font-bold font-['Manrope',sans-serif]">
          Последние сессии
        </h2>
      </div>

      <div className="flex flex-col gap-3">
        {historyItems.map((item, index) => (
          <button 
            key={index}
            className="w-full text-left bg-[#FAFCFB] border border-[#DBE4DE] rounded-[18px] p-4 flex items-center justify-between gap-4 hover:bg-[#F3F9F6] transition-colors group"
          >
            <div className="flex flex-col gap-1">
              <span className="text-[#102118] text-base font-bold">{item.title}</span>
              <span className="text-[#3D5448] text-sm">{item.details}</span>
            </div>
            <div className="bg-white border border-[#DDE6E0] rounded-full p-2 group-hover:bg-[#E9F5EF] group-hover:border-[#0C6F50]/30 transition-colors">
              <ChevronRight size={16} className="text-[#0C6F50]" />
            </div>
          </button>
        ))}
      </div>
      
      <button className="text-[#0F8F67] font-bold text-sm text-center mt-2 hover:underline">
        Смотреть все сессии
      </button>
    </div>
  );
}
