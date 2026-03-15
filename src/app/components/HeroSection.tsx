import React from "react";

export function HeroSection() {
  return (
    <div className="relative rounded-[30px] overflow-hidden bg-gradient-to-br from-[#092A21] via-[#0F4836] to-[#186A59] text-white p-8 md:p-10 flex flex-col gap-10 border border-[#186A59]/30 shadow-lg">
      {/* Decorative background shapes can be added here if needed */}
      
      <div className="flex flex-col xl:flex-row justify-between items-start gap-8 z-10 relative">
        {/* Left Side: Title and Intro */}
        <div className="max-w-2xl flex flex-col gap-4 pt-2">
          <p className="text-[#A2E9C9] text-xs tracking-widest font-extrabold uppercase uppercase">
            Counterparty Control Center
          </p>
          <h1 className="text-4xl md:text-5xl lg:text-[54px] leading-[1.05] font-bold font-['Space_Grotesk',sans-serif] tracking-tight text-[#F5FBF8]">
            Проверка контрагентов без Streamlit-ограничений
          </h1>
          <p className="text-[#DBEDE4] text-lg leading-relaxed mt-2 opacity-90 max-w-xl">
            Новый production UI поверх Go API: загрузка, асинхронная обработка, история сессий, SPARK-сверка и Word-отчёт.
          </p>
        </div>

        {/* Right Side: Status Cards */}
        <div className="flex flex-col gap-4 w-full xl:w-[460px] shrink-0">
          <div className="bg-[#F8FCFA]/10 border border-[#DEEFE8]/20 rounded-2xl p-5 flex flex-col gap-1 backdrop-blur-sm">
            <p className="text-[#DBEDE4]/80 text-sm mb-1">API</p>
            <p className="text-[#F5FBF8] text-xl font-bold">Online</p>
            <p className="text-[#DBEDE4]/80 text-sm mt-1">9005 / ready for processing</p>
          </div>
          <div className="bg-[#F8FCFA]/10 border border-[#DEEFE8]/20 rounded-2xl p-5 flex flex-col gap-1 backdrop-blur-sm">
            <p className="text-[#DBEDE4]/80 text-sm mb-1">Текущая сессия</p>
            <p className="text-[#F5FBF8] text-xl font-bold">ООО Альфа / март 2026</p>
            <p className="text-[#DBEDE4]/80 text-sm mt-1">7 документов, 1 mismatch, отчёт готов</p>
          </div>
        </div>
      </div>

      {/* Bottom Stats Row */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-2 z-10 relative">
        <StatCard title="Документы" value="7" subtitle="Полный пакет" />
        <StatCard title="В работе" value="0" subtitle="Очередь закрыта" />
        <StatCard title="Сессии" value="18" subtitle="История за 30 дней" />
        <StatCard title="Отчёт" value="Ready" subtitle="Word и inline sections" />
      </div>
    </div>
  );
}

function StatCard({ title, value, subtitle }: { title: string; value: string; subtitle: string }) {
  return (
    <div className="bg-[#F5FAF7]/95 border border-[#D3E1DA]/80 rounded-2xl p-5 shadow-sm backdrop-blur-md">
      <p className="text-[#6A7D73] text-sm mb-2">{title}</p>
      <p className="text-[#102118] text-3xl font-bold font-['Space_Grotesk',sans-serif] tracking-tight">{value}</p>
      <p className="text-[#6A7D73] text-xs mt-2">{subtitle}</p>
    </div>
  );
}
