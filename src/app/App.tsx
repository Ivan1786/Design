import React from "react";
import { HeroSection } from "./components/HeroSection";
import { ControlToolbar } from "./components/ControlToolbar";
import { UploadSection } from "./components/UploadSection";
import { RegistrySection } from "./components/RegistrySection";
import { SessionStatus } from "./components/SessionStatus";
import { ReportSummary } from "./components/ReportSummary";
import { HistorySection } from "./components/HistorySection";
import { useAppStore } from "./store";

export default function App() {
  const activeTab = useAppStore(state => state.activeTab);

  return (
    <div className="min-h-screen bg-[#EEF2EF] font-['Manrope',sans-serif] text-[#102118] selection:bg-[#0F8F67] selection:text-white pb-24 flex flex-col">
      {/* Top Banner (Header area) */}
      <header className="w-full flex justify-between items-center px-6 lg:px-12 py-6 max-w-[1440px] mx-auto">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#0F8F67] to-[#0C6F50] shadow-md flex items-center justify-center">
            <div className="w-3 h-3 bg-white rounded-full"></div>
          </div>
          <span className="font-bold text-lg tracking-tight text-[#102118]">Figma Handoff</span>
        </div>
        
        <div className="bg-white/90 backdrop-blur-md border border-[#D5E1DA] rounded-[24px] px-6 py-4 shadow-sm max-w-sm hidden md:block">
          <p className="text-[#6A7D73] text-xs font-bold uppercase tracking-wider mb-1">Release</p>
          <h3 className="text-[#102118] text-lg font-bold mb-1 leading-tight">Modern UI / March 2026</h3>
          <p className="text-[#6A7D73] text-xs leading-relaxed">Отдельный UI-порт, история сессий, отчёт, feedback, SPARK.</p>
        </div>
      </header>

      <main className="max-w-[1440px] w-full mx-auto px-6 lg:px-12 flex flex-col gap-8 flex-1">
        {/* Header with Stats */}
        <HeroSection />

        {/* Toolbar & Navigation */}
        <ControlToolbar />

        {/* Main Content Layout based on active tab */}
        {activeTab === 'Обзор' && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start mt-4">
            <div className="lg:col-span-7 flex flex-col gap-6">
              <UploadSection />
              <RegistrySection />
            </div>
            <div className="lg:col-span-5 flex flex-col gap-6">
              <SessionStatus />
              <ReportSummary />
              <HistorySection />
            </div>
          </div>
        )}

        {activeTab === 'Документы' && (
          <div className="flex flex-col gap-6 items-start mt-4 w-full">
            <div className="w-full">
              <UploadSection />
            </div>
            <div className="w-full">
              <RegistrySection />
            </div>
          </div>
        )}

        {activeTab === 'Отчёт' && (
          <div className="flex flex-col gap-6 items-start mt-4 w-full max-w-3xl">
            <ReportSummary />
          </div>
        )}

        {activeTab === 'История' && (
          <div className="flex flex-col gap-6 items-start mt-4 w-full max-w-3xl">
            <HistorySection />
          </div>
        )}
      </main>
    </div>
  );
}
