import React from "react";
import { AlertCircle, CheckCircle, ShieldAlert } from "lucide-react";

export function ReportSummary() {
  return (
    <div className="bg-white/90 border border-[#D2DED7] rounded-[28px] p-6 shadow-sm flex flex-col gap-6">
      <div className="flex justify-between items-start">
        <div className="flex flex-col gap-1">
          <p className="text-[#0C6F50] text-xs font-extrabold uppercase tracking-widest">
            Отчёт
          </p>
          <h2 className="text-[#102118] text-2xl font-bold font-['Manrope',sans-serif]">
            Итоговые секции
          </h2>
        </div>
        <p className="text-[#102118] text-sm hidden sm:block">
          4 ключевых вывода
        </p>
      </div>

      <div className="flex flex-col gap-4">
        {/* Item 1 */}
        <div className="bg-[#FBFDFC] border border-[#DDE6E0] rounded-[20px] p-5 hover:shadow-md transition-shadow">
          <div className="flex items-start gap-3">
            <CheckCircle className="text-[#0F8F67] mt-0.5 shrink-0" size={20} />
            <div>
              <p className="text-[#102118] text-base font-bold mb-1">1. Юридический профиль</p>
              <p className="text-[#3D5448] text-sm leading-relaxed">
                ИНН, ОГРН, адрес и статус компании совпадают по основным документам.
              </p>
            </div>
          </div>
        </div>

        {/* Item 2 - Warning */}
        <div className="bg-gradient-to-b from-[#FFFDF9] to-[#FFF7EC] border border-[#E4C399] rounded-[20px] p-5 hover:shadow-md transition-shadow">
          <div className="flex items-start gap-3">
            <AlertCircle className="text-[#CA7B27] mt-0.5 shrink-0" size={20} />
            <div>
              <p className="text-[#102118] text-base font-bold mb-1">2. SPARK mismatch</p>
              <p className="text-[#5A4126] text-sm leading-relaxed">
                В уставе краткое наименование отличается от реестрового значения.
              </p>
            </div>
          </div>
        </div>

        {/* Item 3 */}
        <div className="bg-[#FBFDFC] border border-[#DDE6E0] rounded-[20px] p-5 hover:shadow-md transition-shadow">
          <div className="flex items-start gap-3">
            <ShieldAlert className="text-[#6A7D73] mt-0.5 shrink-0" size={20} />
            <div>
              <p className="text-[#102118] text-base font-bold mb-1">3. Риски</p>
              <p className="text-[#3D5448] text-sm leading-relaxed">
                Критичных рисков не обнаружено, требуется ручная проверка одного поля.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
