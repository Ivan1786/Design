import React, { useCallback } from "react";
import { Play, UploadCloud } from "lucide-react";
import { useDropzone } from "react-dropzone";
import { useAppStore } from "../store";

export function UploadSection() {
  const addDocuments = useAppStore(state => state.addDocuments);

  const onDrop = useCallback((acceptedFiles: File[]) => {
    if (acceptedFiles.length > 0) {
      addDocuments(acceptedFiles);
    }
  }, [addDocuments]);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  return (
    <div className="bg-white/95 border border-[#D2DED7] rounded-[28px] p-6 md:p-8 shadow-sm flex flex-col gap-6">
      <div className="flex justify-between items-start">
        <div className="flex flex-col gap-1">
          <p className="text-[#0C6F50] text-xs font-extrabold uppercase tracking-widest">
            Загрузка
          </p>
          <h2 className="text-[#102118] text-2xl font-bold font-['Manrope',sans-serif]">
            Новая сессия проверки
          </h2>
        </div>
        <div className="bg-[#0F8F67]/10 text-[#0C6F50] px-3 py-1.5 rounded-full text-xs font-extrabold uppercase tracking-wider hidden sm:block">
          Автоопределение типов
        </div>
      </div>

      {/* Session Name Input */}
      <div className="flex flex-col gap-2">
        <label className="text-[#6A7D73] text-sm font-bold">Название сессии</label>
        <input 
          type="text"
          defaultValue="ООО Альфа, март 2026"
          className="w-full bg-white border border-[#879C91]/30 rounded-2xl px-4 py-3.5 text-[#102118] text-base focus:outline-none focus:ring-2 focus:ring-[#0F8F67]/50"
        />
      </div>

      {/* Drag & Drop Zone */}
      <div 
        {...getRootProps()}
        className={`border-2 border-dashed rounded-3xl p-8 flex flex-col items-center justify-center text-center gap-4 transition-colors cursor-pointer ${
          isDragActive 
            ? 'border-[#0F8F67] bg-[#E9F5EF]' 
            : 'border-[#0F8F67]/30 bg-gradient-to-b from-[#FFFFFF]/80 to-[#F3F9F6]/90 hover:bg-gradient-to-b hover:from-[#F0F7F4] hover:to-[#E5F2EC]'
        }`}
      >
        <input {...getInputProps()} />
        <div className="bg-[#0F8F67]/10 text-[#0C6F50] px-3 py-1.5 rounded-full text-xs font-extrabold uppercase tracking-wider mb-2">
          21st-style workspace
        </div>
        <UploadCloud className={`${isDragActive ? 'text-[#0C6F50]' : 'text-[#0C6F50]/80'} mb-2 w-12 h-12 transition-colors`} strokeWidth={1.5} />
        <h3 className="text-[#102118] text-xl sm:text-2xl font-bold">
          {isDragActive ? "Отпустите файлы здесь..." : "Перетащите PDF и изображения сюда"}
        </h3>
        <p className="text-[#3D5448] text-sm sm:text-base max-w-md">
          Drag-and-drop, file picker, очередь документов и массовая обработка без Streamlit.
        </p>
        <button 
          type="button"
          className="bg-[#E9F5EF] text-[#0C6F50] hover:bg-[#DDF0E6] transition-colors font-bold text-sm px-6 py-3 rounded-full mt-2 pointer-events-none"
        >
          Выбрать файлы
        </button>
      </div>

      {/* Action Buttons */}
      <div className="flex flex-wrap items-center gap-3 mt-2">
        <button className="bg-[#E9F5EF] text-[#0C6F50] hover:bg-[#DDF0E6] transition-colors font-bold text-sm px-5 py-2.5 rounded-full">
          Определить типы
        </button>
        <button className="bg-[#F0F4F2] text-[#102118] hover:bg-[#E5EBE8] transition-colors font-semibold text-sm px-5 py-2.5 rounded-full">
          Обновить статусы
        </button>
        <button className="bg-[#F0F4F2] text-[#102118] hover:bg-[#FEECEB] hover:text-[#B91C1C] transition-colors font-semibold text-sm px-5 py-2.5 rounded-full">
          Остановить
        </button>
        <button className="bg-gradient-to-br from-[#0F8F67] to-[#0C6F50] text-[#F3FBF7] hover:opacity-90 shadow-md transition-opacity font-bold text-sm px-6 py-2.5 rounded-full ml-auto flex items-center gap-2 w-full sm:w-auto justify-center">
          <Play size={16} fill="currentColor" />
          Запустить обработку
        </button>
      </div>
    </div>
  );
}
