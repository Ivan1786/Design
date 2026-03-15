import React from "react";
import { CheckCircle2, AlertTriangle, MinusCircle, Clock } from "lucide-react";
import { useAppStore } from "../store";

export function RegistrySection() {
  const documents = useAppStore(state => state.documents);

  const completedCount = documents.filter(d => d.status === "Completed").length;
  const mismatchCount = documents.filter(d => d.spark === "Mismatch").length;

  return (
    <div className="bg-white/95 border border-[#D2DED7] rounded-[28px] p-6 md:p-8 shadow-sm flex flex-col gap-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div className="flex flex-col gap-1">
          <p className="text-[#0C6F50] text-xs font-extrabold uppercase tracking-widest">
            Реестр
          </p>
          <h2 className="text-[#102118] text-2xl font-bold font-['Manrope',sans-serif]">
            Документы в рабочем пространстве
          </h2>
        </div>
        <p className="text-[#102118] text-sm bg-gray-50 px-3 py-1.5 rounded-lg border border-gray-200">
          {documents.length} элементов, {completedCount} completed, {mismatchCount > 0 && <span className="text-[#C47B27] font-semibold">{mismatchCount} mismatch</span>}
        </p>
      </div>

      <div className="flex flex-col gap-2 mt-2">
        {/* Table Header */}
        <div className="grid grid-cols-12 gap-4 px-4 py-3 border border-[#DDE6E0] border-dashed rounded-[18px] text-xs font-extrabold uppercase tracking-widest text-[#6A7D73]">
          <div className="col-span-4 lg:col-span-3">Документ</div>
          <div className="col-span-4 lg:col-span-4">Тип</div>
          <div className="col-span-2">Статус</div>
          <div className="col-span-2 lg:col-span-3">SPARK</div>
        </div>

        {/* Table Rows */}
        {documents.map((doc) => (
          <div 
            key={doc.id} 
            className="grid grid-cols-12 gap-4 px-4 py-4 bg-[#FAFCFB] border border-[#DDE6E0] rounded-[18px] items-center hover:bg-[#F3F9F6] transition-colors"
          >
            <div className="col-span-4 lg:col-span-3 font-medium text-[#102118] truncate pr-2" title={doc.name}>
              {doc.name}
            </div>
            <div className="col-span-4 lg:col-span-4 text-[#102118] truncate pr-2">
              {doc.type}
            </div>
            <div className="col-span-2 flex items-center">
              {doc.status === 'Completed' ? (
                <span className="bg-[#2B8A57]/10 text-[#2B8A57] px-3 py-1.5 rounded-full text-xs font-bold whitespace-nowrap flex items-center gap-1.5">
                  <CheckCircle2 size={14} />
                  <span className="hidden xl:inline">{doc.status}</span>
                </span>
              ) : (
                <span className="bg-[#0F8F67]/10 text-[#0C6F50] px-3 py-1.5 rounded-full text-xs font-bold whitespace-nowrap flex items-center gap-1.5">
                  <Clock size={14} />
                  <span className="hidden xl:inline">{doc.status}</span>
                </span>
              )}
            </div>
            <div className="col-span-2 lg:col-span-3 flex items-center">
              {doc.sparkColor === "green" && (
                <span className="bg-[#2B8A57]/10 text-[#2B8A57] px-3 py-1.5 rounded-full text-xs font-bold whitespace-nowrap">
                  {doc.spark}
                </span>
              )}
              {doc.sparkColor === "orange" && (
                <span className="bg-[#C47B27]/10 text-[#C47B27] px-3 py-1.5 rounded-full text-xs font-bold whitespace-nowrap flex items-center gap-1">
                  <AlertTriangle size={14} />
                  {doc.spark}
                </span>
              )}
              {doc.sparkColor === "gray" && (
                <span className="bg-[#687D73]/10 text-[#6A7D73] px-3 py-1.5 rounded-full text-xs font-bold whitespace-nowrap flex items-center gap-1">
                  <MinusCircle size={14} />
                  {doc.spark}
                </span>
              )}
              {doc.sparkColor === "blue" && (
                <span className="bg-blue-100 text-blue-700 px-3 py-1.5 rounded-full text-xs font-bold whitespace-nowrap flex items-center gap-1">
                  <Clock size={14} />
                  {doc.spark}
                </span>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
