import React from "react";
import { Download, Link as LinkIcon, Plus, RefreshCw, Trash2 } from "lucide-react";
import { useAppStore, TabType } from "../store";

export function ControlToolbar() {
  const { activeTab, setActiveTab } = useAppStore();

  const tabs: TabType[] = ["Обзор", "Документы", "Отчёт", "История"];

  return (
    <div className="flex flex-col gap-4">
      {/* Top Toolbar: Action Buttons */}
      <div className="bg-white/90 backdrop-blur-sm border border-[#D2DED7] rounded-3xl p-2 shadow-sm flex flex-col md:flex-row items-center justify-between gap-3 md:gap-0">
        <div className="flex flex-wrap items-center gap-2 w-full md:w-auto">
          <button className="bg-[#E9F5EF] text-[#0C6F50] hover:bg-[#DDF0E6] transition-colors font-bold text-sm px-5 py-2.5 rounded-full flex items-center gap-2">
            <Plus size={16} />
            Новая проверка
          </button>
          <button className="bg-[#F0F4F2] text-[#102118] hover:bg-[#E5EBE8] transition-colors font-semibold text-sm px-5 py-2.5 rounded-full flex items-center gap-2">
            <RefreshCw size={16} />
            Обновить историю
          </button>
          <button className="bg-[#F0F4F2] text-[#102118] hover:bg-[#FEECEB] hover:text-[#B91C1C] transition-colors font-semibold text-sm px-5 py-2.5 rounded-full flex items-center gap-2">
            <Trash2 size={16} />
            Очистить историю
          </button>
        </div>

        <div className="flex items-center gap-2 w-full md:w-auto mt-2 md:mt-0">
          <button className="bg-[#F0F4F2] text-[#102118] hover:bg-[#E5EBE8] transition-colors font-semibold text-sm px-5 py-2.5 rounded-full flex items-center gap-2 w-full md:w-auto justify-center">
            <LinkIcon size={16} />
            Копировать ссылку
          </button>
          <button className="bg-gradient-to-br from-[#0F8F67] to-[#0C6F50] text-[#F3FBF7] hover:opacity-90 transition-opacity shadow-md font-bold text-sm px-5 py-2.5 rounded-full flex items-center gap-2 w-full md:w-auto justify-center">
            <Download size={16} />
            Скачать Word-отчёт
          </button>
        </div>
      </div>

      {/* Bottom Navigation Tabs */}
      <div className="bg-white/90 backdrop-blur-sm border border-[#D2DED7] rounded-3xl p-2 shadow-sm flex items-center gap-2 overflow-x-auto no-scrollbar">
        {tabs.map((tab) => (
          <TabButton 
            key={tab} 
            label={tab} 
            active={activeTab === tab} 
            onClick={() => setActiveTab(tab)} 
          />
        ))}
      </div>
    </div>
  );
}

function TabButton({ label, active = false, onClick }: { label: string; active?: boolean; onClick: () => void }) {
  if (active) {
    return (
      <button 
        onClick={onClick}
        className="bg-[#102118] text-[#F6FBF8] font-bold text-sm px-5 py-2.5 rounded-full whitespace-nowrap"
      >
        {label}
      </button>
    );
  }
  return (
    <button 
      onClick={onClick}
      className="bg-[#F0F5F2] hover:bg-[#E4EBE7] transition-colors text-[#6A7D73] font-bold text-sm px-5 py-2.5 rounded-full whitespace-nowrap"
    >
      {label}
    </button>
  );
}
