import React from "react";

export function SessionStatus() {
  return (
    <div className="bg-white/90 border border-[#D2DED7] rounded-[28px] p-6 shadow-sm flex flex-col gap-6">
      <div className="flex flex-col gap-1">
        <p className="text-[#0C6F50] text-xs font-extrabold uppercase tracking-widest">
          Сессия
        </p>
        <h2 className="text-[#102118] text-2xl font-bold font-['Manrope',sans-serif]">
          Статус активной проверки
        </h2>
      </div>

      <div className="flex flex-col gap-3">
        <div className="bg-[#FAFCFB] border border-[#DBE4DE] rounded-[18px] p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-1">
          <span className="text-[#6A7D73] text-sm font-bold">Session ID</span>
          <span className="text-[#3D5448] text-base font-bold bg-white px-3 py-1 rounded-md border border-[#E9F0EC] shadow-sm">
            sess_01JXWQ4T7A
          </span>
        </div>
        <div className="bg-[#FAFCFB] border border-[#DBE4DE] rounded-[18px] p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-1">
          <span className="text-[#6A7D73] text-sm font-bold">Последний запуск</span>
          <span className="text-[#3D5448] text-base font-bold">
            15 марта 2026, 19:42
          </span>
        </div>
        <div className="bg-[#FAFCFB] border border-[#DBE4DE] rounded-[18px] p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-1">
          <span className="text-[#6A7D73] text-sm font-bold">Общий статус</span>
          <span className="text-[#0C6F50] text-base font-bold flex items-center gap-2">
            <span className="w-2.5 h-2.5 bg-[#0F8F67] rounded-full animate-pulse"></span>
            Completed
          </span>
        </div>
      </div>
    </div>
  );
}
