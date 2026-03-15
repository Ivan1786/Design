function Paragraph() {
  return (
    <div className="absolute content-stretch flex h-[14.667px] items-start left-0 top-0 w-[780.917px]" data-name="Paragraph">
      <p className="flex-[1_0_0] font-['Segoe_UI:Extra_Bold',sans-serif] leading-[normal] min-h-px min-w-px not-italic relative text-[#0c6f50] text-[11px] tracking-[1.76px] uppercase">Counterparty Control Center</p>
    </div>
  );
}

function Heading() {
  return (
    <div className="absolute h-[54.875px] left-0 top-[22.67px] w-[780.917px]" data-name="Heading 1">
      <p className="absolute font-['Space_Grotesk:Bold',sans-serif] font-bold leading-[54.88px] left-0 text-[#102118] text-[56px] top-[4px] tracking-[-2.8px] whitespace-nowrap">Production-ready Figma handoff</p>
    </div>
  );
}

function Paragraph1() {
  return (
    <div className="absolute h-[57.583px] left-0 top-[91.54px] w-[720px]" data-name="Paragraph">
      <p className="absolute font-['Segoe_UI:Regular',sans-serif] leading-[28.8px] left-0 not-italic text-[#3d5448] text-[18px] top-0 w-[678px]">{`Макет для нового интерфейса проверки контрагентов: desktop workspace, mobile companion, design tokens и готовые паттерны карточек. `}</p>
    </div>
  );
}

function Container() {
  return (
    <div className="h-[149.125px] relative shrink-0 w-[780.917px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Paragraph />
        <Heading />
        <Paragraph1 />
      </div>
    </div>
  );
}

function Text() {
  return (
    <div className="absolute content-stretch flex h-[21.333px] items-start left-[24.67px] top-[22.67px] w-[366.667px]" data-name="Text">
      <p className="flex-[1_0_0] font-['Segoe_UI:Regular',sans-serif] leading-[normal] min-h-px min-w-px not-italic relative text-[#6a7d73] text-[16px]">Release</p>
    </div>
  );
}

function BoldText() {
  return (
    <div className="absolute content-stretch flex h-[29.333px] items-start left-[24.67px] top-[52px] w-[366.667px]" data-name="Bold Text">
      <p className="flex-[1_0_0] font-['Segoe_UI:Bold',sans-serif] leading-[normal] min-h-px min-w-px not-italic relative text-[#102118] text-[22px]">Modern UI / March 2026</p>
    </div>
  );
}

function Small() {
  return (
    <div className="absolute content-stretch flex h-[18px] items-start left-[24.67px] top-[89.33px] w-[366.667px]" data-name="Small">
      <p className="font-['Segoe_UI:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#6a7d73] text-[13.333px] whitespace-nowrap">Отдельный UI-порт, история сессий, отчёт, feedback, SPARK.</p>
    </div>
  );
}

function Container1() {
  return (
    <div className="bg-[rgba(255,255,255,0.96)] h-[130px] relative rounded-[24px] shrink-0 w-[416px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[0.667px] border-[rgba(213,225,218,0.9)] border-solid inset-0 pointer-events-none rounded-[24px] shadow-[0px_14px_36px_0px_rgba(19,37,30,0.08)]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Text />
        <BoldText />
        <Small />
      </div>
    </div>
  );
}

function Section() {
  return (
    <div className="content-stretch flex h-[149.125px] items-start justify-between relative shrink-0 w-full" data-name="Section">
      <Container />
      <Container1 />
    </div>
  );
}

function Container2() {
  return (
    <div className="content-stretch flex h-[16px] items-start relative shrink-0 w-full" data-name="Container">
      <p className="flex-[1_0_0] font-['Segoe_UI:Extra_Bold',sans-serif] leading-[normal] min-h-px min-w-px not-italic relative text-[#6a7d73] text-[12px] tracking-[1.44px] uppercase">Desktop 1440</p>
    </div>
  );
}

function Paragraph2() {
  return (
    <div className="absolute content-stretch flex h-[14.667px] items-start left-0 top-0 w-[822.917px]" data-name="Paragraph">
      <p className="flex-[1_0_0] font-['Segoe_UI:Extra_Bold',sans-serif] leading-[normal] min-h-px min-w-px not-italic relative text-[11px] text-[rgba(229,242,236,0.8)] tracking-[1.76px] uppercase">Counterparty Control Center</p>
    </div>
  );
}

function Heading1() {
  return (
    <div className="absolute h-[211.667px] left-0 top-[22.67px] w-[360.385px]" data-name="Heading 2">
      <p className="absolute font-['Space_Grotesk:Bold','Noto_Sans:Bold',sans-serif] font-bold leading-[52.92px] left-0 text-[#f5fbf8] text-[54px] top-[4px] tracking-[-2.7px] w-[327px]">Проверка контрагентов без Streamlit-ограничений</p>
    </div>
  );
}

function Paragraph3() {
  return (
    <div className="absolute h-[57.583px] left-0 top-[248.33px] w-[720px]" data-name="Paragraph">
      <p className="absolute font-['Segoe_UI:Regular',sans-serif] leading-[28.8px] left-0 not-italic text-[18px] text-[rgba(229,242,236,0.86)] top-0 w-[720px]">{`Новый production UI поверх Go API: загрузка, асинхронная обработка, история сессий, SPARK-сверка и Word-отчёт. `}</p>
    </div>
  );
}

function Container4() {
  return (
    <div className="absolute h-[305.917px] left-[28px] top-[28px] w-[822.917px]" data-name="Container">
      <Paragraph2 />
      <Heading1 />
      <Paragraph3 />
    </div>
  );
}

function Text1() {
  return (
    <div className="absolute content-stretch flex h-[32.542px] items-start left-[18px] top-[18px] w-[456.406px]" data-name="Text">
      <p className="flex-[1_0_0] font-['Segoe_UI:Regular',sans-serif] leading-[normal] min-h-px min-w-px not-italic relative text-[16px] text-[rgba(219,237,228,0.78)]">API</p>
    </div>
  );
}

function BoldText1() {
  return (
    <div className="absolute content-stretch flex h-[37.875px] items-start left-[18px] top-[56.54px] w-[456.406px]" data-name="Bold Text">
      <p className="flex-[1_0_0] font-['Segoe_UI:Bold',sans-serif] leading-[normal] min-h-px min-w-px not-italic relative text-[#f5fbf8] text-[20px]">Online</p>
    </div>
  );
}

function Small1() {
  return (
    <div className="absolute content-stretch flex h-[29.208px] items-start left-[18px] top-[100.42px] w-[456.406px]" data-name="Small">
      <p className="flex-[1_0_0] font-['Segoe_UI:Regular',sans-serif] leading-[normal] min-h-px min-w-px not-italic relative text-[13.333px] text-[rgba(219,237,228,0.78)]">9005 / ready for processing</p>
    </div>
  );
}

function Container6() {
  return (
    <div className="absolute bg-[rgba(248,252,250,0.12)] border-[0.667px] border-[rgba(222,239,232,0.18)] border-solid h-[146.958px] left-0 rounded-[20px] top-0 w-[493.74px]" data-name="Container">
      <Text1 />
      <BoldText1 />
      <Small1 />
    </div>
  );
}

function Text2() {
  return (
    <div className="absolute content-stretch flex h-[32.542px] items-start left-[18px] top-[18px] w-[456.406px]" data-name="Text">
      <p className="flex-[1_0_0] font-['Segoe_UI:Regular',sans-serif] leading-[normal] min-h-px min-w-px not-italic relative text-[16px] text-[rgba(219,237,228,0.78)]">Текущая сессия</p>
    </div>
  );
}

function BoldText2() {
  return (
    <div className="absolute content-stretch flex h-[37.875px] items-start left-[18px] top-[56.54px] w-[456.406px]" data-name="Bold Text">
      <p className="flex-[1_0_0] font-['Segoe_UI:Bold',sans-serif] leading-[normal] min-h-px min-w-px not-italic relative text-[#f5fbf8] text-[20px]">ООО Альфа / март 2026</p>
    </div>
  );
}

function Small2() {
  return (
    <div className="absolute content-stretch flex h-[29.208px] items-start left-[18px] top-[100.42px] w-[456.406px]" data-name="Small">
      <p className="flex-[1_0_0] font-['Segoe_UI:Regular',sans-serif] leading-[normal] min-h-px min-w-px not-italic relative text-[13.333px] text-[rgba(219,237,228,0.78)]">7 документов, 1 mismatch, отчёт готов</p>
    </div>
  );
}

function Container7() {
  return (
    <div className="absolute bg-[rgba(248,252,250,0.12)] border-[0.667px] border-[rgba(222,239,232,0.18)] border-solid h-[146.958px] left-0 rounded-[20px] top-[158.96px] w-[493.74px]" data-name="Container">
      <Text2 />
      <BoldText2 />
      <Small2 />
    </div>
  );
}

function Container5() {
  return (
    <div className="absolute h-[305.917px] left-[872.92px] top-[28px] w-[493.74px]" data-name="Container">
      <Container6 />
      <Container7 />
    </div>
  );
}

function Text3() {
  return (
    <div className="absolute content-stretch flex h-[21.333px] items-start left-[18px] top-[16px] w-[288.323px]" data-name="Text">
      <p className="flex-[1_0_0] font-['Segoe_UI:Regular',sans-serif] leading-[normal] min-h-px min-w-px not-italic relative text-[#6a7d73] text-[16px]">Документы</p>
    </div>
  );
}

function BoldText3() {
  return (
    <div className="absolute content-stretch flex h-[37.333px] items-start left-[18px] top-[41.33px] w-[288.323px]" data-name="Bold Text">
      <p className="flex-[1_0_0] font-['Segoe_UI:Bold',sans-serif] leading-[normal] min-h-px min-w-px not-italic relative text-[#102118] text-[28px]">7</p>
    </div>
  );
}

function Small3() {
  return (
    <div className="absolute content-stretch flex h-[18px] items-start left-[18px] top-[82.67px] w-[288.323px]" data-name="Small">
      <p className="flex-[1_0_0] font-['Segoe_UI:Regular',sans-serif] leading-[normal] min-h-px min-w-px not-italic relative text-[#6a7d73] text-[13.333px]">Полный пакет</p>
    </div>
  );
}

function Container9() {
  return (
    <div className="absolute bg-[rgba(245,250,247,0.94)] border-[0.667px] border-[rgba(211,225,218,0.74)] border-solid h-[118px] left-0 rounded-[20px] shadow-[0px_14px_36px_0px_rgba(19,37,30,0.08)] top-0 w-[325.656px]" data-name="Container">
      <Text3 />
      <BoldText3 />
      <Small3 />
    </div>
  );
}

function Text4() {
  return (
    <div className="absolute content-stretch flex h-[21.333px] items-start left-[18px] top-[16px] w-[288.333px]" data-name="Text">
      <p className="flex-[1_0_0] font-['Segoe_UI:Regular',sans-serif] leading-[normal] min-h-px min-w-px not-italic relative text-[#6a7d73] text-[16px]">В работе</p>
    </div>
  );
}

function BoldText4() {
  return (
    <div className="absolute content-stretch flex h-[37.333px] items-start left-[18px] top-[41.33px] w-[288.333px]" data-name="Bold Text">
      <p className="flex-[1_0_0] font-['Segoe_UI:Bold',sans-serif] leading-[normal] min-h-px min-w-px not-italic relative text-[#102118] text-[28px]">0</p>
    </div>
  );
}

function Small4() {
  return (
    <div className="absolute content-stretch flex h-[18px] items-start left-[18px] top-[82.67px] w-[288.333px]" data-name="Small">
      <p className="flex-[1_0_0] font-['Segoe_UI:Regular',sans-serif] leading-[normal] min-h-px min-w-px not-italic relative text-[#6a7d73] text-[13.333px]">Очередь закрыта</p>
    </div>
  );
}

function Container10() {
  return (
    <div className="absolute bg-[rgba(245,250,247,0.94)] border-[0.667px] border-[rgba(211,225,218,0.74)] border-solid h-[118px] left-[337.66px] rounded-[20px] shadow-[0px_14px_36px_0px_rgba(19,37,30,0.08)] top-0 w-[325.667px]" data-name="Container">
      <Text4 />
      <BoldText4 />
      <Small4 />
    </div>
  );
}

function Text5() {
  return (
    <div className="absolute content-stretch flex h-[21.333px] items-start left-[18px] top-[16px] w-[288.333px]" data-name="Text">
      <p className="flex-[1_0_0] font-['Segoe_UI:Regular',sans-serif] leading-[normal] min-h-px min-w-px not-italic relative text-[#6a7d73] text-[16px]">Сессии</p>
    </div>
  );
}

function BoldText5() {
  return (
    <div className="absolute content-stretch flex h-[37.333px] items-start left-[18px] top-[41.33px] w-[288.333px]" data-name="Bold Text">
      <p className="flex-[1_0_0] font-['Segoe_UI:Bold',sans-serif] leading-[normal] min-h-px min-w-px not-italic relative text-[#102118] text-[28px]">18</p>
    </div>
  );
}

function Small5() {
  return (
    <div className="absolute content-stretch flex h-[18px] items-start left-[18px] top-[82.67px] w-[288.333px]" data-name="Small">
      <p className="flex-[1_0_0] font-['Segoe_UI:Regular',sans-serif] leading-[normal] min-h-px min-w-px not-italic relative text-[#6a7d73] text-[13.333px]">История за 30 дней</p>
    </div>
  );
}

function Container11() {
  return (
    <div className="absolute bg-[rgba(245,250,247,0.94)] border-[0.667px] border-[rgba(211,225,218,0.74)] border-solid h-[118px] left-[675.32px] rounded-[20px] shadow-[0px_14px_36px_0px_rgba(19,37,30,0.08)] top-0 w-[325.667px]" data-name="Container">
      <Text5 />
      <BoldText5 />
      <Small5 />
    </div>
  );
}

function Text6() {
  return (
    <div className="absolute content-stretch flex h-[21.333px] items-start left-[18px] top-[16px] w-[288.333px]" data-name="Text">
      <p className="flex-[1_0_0] font-['Segoe_UI:Regular',sans-serif] leading-[normal] min-h-px min-w-px not-italic relative text-[#6a7d73] text-[16px]">Отчёт</p>
    </div>
  );
}

function BoldText6() {
  return (
    <div className="absolute content-stretch flex h-[37.333px] items-start left-[18px] top-[41.33px] w-[288.333px]" data-name="Bold Text">
      <p className="flex-[1_0_0] font-['Segoe_UI:Bold',sans-serif] leading-[normal] min-h-px min-w-px not-italic relative text-[#102118] text-[28px]">Ready</p>
    </div>
  );
}

function Small6() {
  return (
    <div className="absolute content-stretch flex h-[18px] items-start left-[18px] top-[82.67px] w-[288.333px]" data-name="Small">
      <p className="flex-[1_0_0] font-['Segoe_UI:Regular',sans-serif] leading-[normal] min-h-px min-w-px not-italic relative text-[#6a7d73] text-[13.333px]">Word и inline sections</p>
    </div>
  );
}

function Container12() {
  return (
    <div className="absolute bg-[rgba(245,250,247,0.94)] border-[0.667px] border-[rgba(211,225,218,0.74)] border-solid h-[118px] left-[1012.99px] rounded-[20px] shadow-[0px_14px_36px_0px_rgba(19,37,30,0.08)] top-0 w-[325.667px]" data-name="Container">
      <Text6 />
      <BoldText6 />
      <Small6 />
    </div>
  );
}

function Container8() {
  return (
    <div className="absolute h-[118px] left-[28px] top-[355.92px] w-[1338.656px]" data-name="Container">
      <Container9 />
      <Container10 />
      <Container11 />
      <Container12 />
    </div>
  );
}

function Header() {
  return (
    <div className="h-[501.917px] overflow-clip relative rounded-[30px] shrink-0 w-full" data-name="Header" style={{ backgroundImage: "url('data:image/svg+xml;utf8,<svg viewBox=\\'0 0 1394.7 501.92\\' xmlns=\\'http://www.w3.org/2000/svg\\' preserveAspectRatio=\\'none\\'><rect x=\\'0\\' y=\\'0\\' height=\\'100%\\' width=\\'100%\\' fill=\\'url(%23grad)\\' opacity=\\'1\\'/><defs><radialGradient id=\\'grad\\' gradientUnits=\\'userSpaceOnUse\\' cx=\\'0\\' cy=\\'0\\' r=\\'10\\' gradientTransform=\\'matrix(0 -148.22 -148.22 0 1394.7 0)\\'><stop stop-color=\\'rgba(255,255,255,0.18)\\' offset=\\'0\\'/><stop stop-color=\\'rgba(128,128,128,0.09)\\' offset=\\'0.13\\'/><stop stop-color=\\'rgba(0,0,0,0)\\' offset=\\'0.26\\'/></radialGradient></defs></svg>'), url('data:image/svg+xml;utf8,<svg viewBox=\\'0 0 1394.7 501.92\\' xmlns=\\'http://www.w3.org/2000/svg\\' preserveAspectRatio=\\'none\\'><rect x=\\'0\\' y=\\'0\\' height=\\'100%\\' width=\\'100%\\' fill=\\'url(%23grad)\\' opacity=\\'1\\'/><defs><radialGradient id=\\'grad\\' gradientUnits=\\'userSpaceOnUse\\' cx=\\'0\\' cy=\\'0\\' r=\\'10\\' gradientTransform=\\'matrix(0 -148.22 -148.22 0 0 501.92)\\'><stop stop-color=\\'rgba(162,233,201,0.18)\\' offset=\\'0\\'/><stop stop-color=\\'rgba(81,117,101,0.09)\\' offset=\\'0.16\\'/><stop stop-color=\\'rgba(0,0,0,0)\\' offset=\\'0.32\\'/></radialGradient></defs></svg>'), linear-gradient(160.207deg, rgba(9, 42, 33, 0.96) 0%, rgba(15, 72, 54, 0.97) 48%, rgba(24, 106, 89, 0.94) 100%)" }}>
      <Container4 />
      <Container5 />
      <Container8 />
    </div>
  );
}

function Button() {
  return (
    <div className="absolute bg-[#e9f5ef] content-stretch flex h-[42.667px] items-start left-0 px-[18px] py-[12px] rounded-[999px] top-0 w-[155.313px]" data-name="Button">
      <p className="font-['Segoe_UI:Extra_Bold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#0c6f50] text-[14px] text-center tracking-[0.14px] whitespace-nowrap">Новая проверка</p>
    </div>
  );
}

function Button1() {
  return (
    <div className="absolute bg-[rgba(240,244,242,0.9)] content-stretch flex h-[42.667px] items-start left-[165.31px] px-[18px] py-[12px] rounded-[999px] top-0 w-[175.229px]" data-name="Button">
      <p className="font-['Segoe_UI:Extra_Bold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#102118] text-[14px] text-center tracking-[0.14px] whitespace-nowrap">Обновить историю</p>
    </div>
  );
}

function Button2() {
  return (
    <div className="absolute bg-[rgba(240,244,242,0.9)] content-stretch flex h-[42.667px] items-start left-[350.54px] px-[18px] py-[12px] rounded-[999px] top-0 w-[171.573px]" data-name="Button">
      <p className="font-['Segoe_UI:Extra_Bold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#102118] text-[14px] text-center tracking-[0.14px] whitespace-nowrap">Очистить историю</p>
    </div>
  );
}

function Container13() {
  return (
    <div className="h-[42.667px] relative shrink-0 w-[522.115px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Button />
        <Button1 />
        <Button2 />
      </div>
    </div>
  );
}

function Button3() {
  return (
    <div className="absolute bg-[rgba(240,244,242,0.9)] content-stretch flex h-[42.667px] items-start left-0 px-[18px] py-[12px] rounded-[999px] top-0 w-[180.042px]" data-name="Button">
      <p className="font-['Segoe_UI:Extra_Bold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#102118] text-[14px] text-center tracking-[0.14px] whitespace-nowrap">Копировать ссылку</p>
    </div>
  );
}

function Button4() {
  return (
    <div className="absolute content-stretch flex h-[42.667px] items-start left-[190.04px] px-[18px] py-[12px] rounded-[999px] top-0 w-[182.146px]" data-name="Button" style={{ backgroundImage: "linear-gradient(166.816deg, rgb(15, 143, 103) 0%, rgb(12, 111, 80) 100%)" }}>
      <p className="font-['Segoe_UI:Extra_Bold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#f3fbf7] text-[14px] text-center tracking-[0.14px] whitespace-nowrap">Скачать Word-отчёт</p>
    </div>
  );
}

function Container14() {
  return (
    <div className="h-[42.667px] relative shrink-0 w-[372.188px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Button3 />
        <Button4 />
      </div>
    </div>
  );
}

function Section2() {
  return (
    <div className="bg-[rgba(255,255,255,0.86)] h-[76px] relative rounded-[24px] shrink-0 w-full" data-name="Section">
      <div aria-hidden="true" className="absolute border-[0.667px] border-[rgba(210,222,215,0.85)] border-solid inset-0 pointer-events-none rounded-[24px] shadow-[0px_14px_36px_0px_rgba(19,37,30,0.08)]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between px-[18.667px] py-[0.667px] relative size-full">
          <Container13 />
          <Container14 />
        </div>
      </div>
    </div>
  );
}

function Text7() {
  return (
    <div className="bg-[#102118] h-[40.667px] relative rounded-[999px] shrink-0 w-[75.115px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start px-[16px] py-[11px] relative size-full">
        <p className="font-['Segoe_UI:Bold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#f6fbf8] text-[14px] whitespace-nowrap">Обзор</p>
      </div>
    </div>
  );
}

function Text8() {
  return (
    <div className="bg-[rgba(240,245,242,0.85)] h-[40.667px] relative rounded-[999px] shrink-0 w-[111.563px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start px-[16px] py-[11px] relative size-full">
        <p className="font-['Segoe_UI:Bold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#6a7d73] text-[14px] whitespace-nowrap">Документы</p>
      </div>
    </div>
  );
}

function Text9() {
  return (
    <div className="bg-[rgba(240,245,242,0.85)] h-[40.667px] relative rounded-[999px] shrink-0 w-[71.333px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start px-[16px] py-[11px] relative size-full">
        <p className="font-['Segoe_UI:Bold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#6a7d73] text-[14px] whitespace-nowrap">Отчёт</p>
      </div>
    </div>
  );
}

function Text10() {
  return (
    <div className="bg-[rgba(240,245,242,0.85)] h-[40.667px] relative rounded-[999px] shrink-0 w-[89.938px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start px-[16px] py-[11px] relative size-full">
        <p className="font-['Segoe_UI:Bold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#6a7d73] text-[14px] whitespace-nowrap">История</p>
      </div>
    </div>
  );
}

function Section3() {
  return (
    <div className="bg-[rgba(255,255,255,0.86)] h-[74px] relative rounded-[24px] shrink-0 w-full" data-name="Section">
      <div aria-hidden="true" className="absolute border-[0.667px] border-[rgba(210,222,215,0.85)] border-solid inset-0 pointer-events-none rounded-[24px] shadow-[0px_14px_36px_0px_rgba(19,37,30,0.08)]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between px-[18.667px] py-[0.667px] relative size-full">
          <Text7 />
          <Text8 />
          <Text9 />
          <Text10 />
        </div>
      </div>
    </div>
  );
}

function Paragraph4() {
  return (
    <div className="content-stretch flex h-[14.667px] items-start relative shrink-0 w-full" data-name="Paragraph">
      <p className="flex-[1_0_0] font-['Segoe_UI:Extra_Bold',sans-serif] leading-[normal] min-h-px min-w-px not-italic relative text-[#0c6f50] text-[11px] tracking-[1.76px] uppercase">Загрузка</p>
    </div>
  );
}

function Heading2() {
  return (
    <div className="h-[28.313px] relative shrink-0 w-full" data-name="Heading 3">
      <p className="absolute font-['Segoe_UI:Bold',sans-serif] leading-[28.32px] left-0 not-italic text-[#102118] text-[24px] top-px whitespace-nowrap">Новая сессия проверки</p>
    </div>
  );
}

function Container17() {
  return (
    <div className="h-[50.979px] relative shrink-0 w-[277.5px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[8px] items-start relative size-full">
        <Paragraph4 />
        <Heading2 />
      </div>
    </div>
  );
}

function Text11() {
  return (
    <div className="bg-[rgba(15,143,103,0.12)] h-[32px] relative rounded-[999px] shrink-0 w-[217.542px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start px-[12px] py-[8px] relative size-full">
        <p className="font-['Segoe_UI:Extra_Bold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#0c6f50] text-[12px] tracking-[0.96px] uppercase whitespace-nowrap">Автоопределение типов</p>
      </div>
    </div>
  );
}

function Container16() {
  return (
    <div className="absolute content-stretch flex h-[50.979px] items-start justify-between left-[20px] top-[20px] w-[815.115px]" data-name="Container">
      <Container17 />
      <Text11 />
    </div>
  );
}

function Text12() {
  return (
    <div className="absolute content-stretch flex h-[17.333px] items-start left-0 top-0 w-[815.115px]" data-name="Text">
      <p className="flex-[1_0_0] font-['Segoe_UI:Bold',sans-serif] leading-[normal] min-h-px min-w-px not-italic relative text-[#6a7d73] text-[13px]">Название сессии</p>
    </div>
  );
}

function Container19() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0.96)] border-[0.667px] border-[rgba(135,156,145,0.22)] border-solid h-[54.667px] left-0 rounded-[16px] top-[25.33px] w-[815.115px]" data-name="Container">
      <p className="absolute font-['Segoe_UI:Regular',sans-serif] leading-[normal] left-[18px] not-italic text-[#102118] text-[16px] top-[16px] whitespace-nowrap">ООО Альфа, март 2026</p>
    </div>
  );
}

function Container18() {
  return (
    <div className="absolute h-[80px] left-[20px] top-[86.98px] w-[815.115px]" data-name="Container">
      <Text12 />
      <Container19 />
    </div>
  );
}

function Text13() {
  return (
    <div className="absolute bg-[rgba(15,143,103,0.12)] content-stretch flex h-[32px] items-start left-[22px] px-[12px] py-[8px] rounded-[999px] top-[22px] w-[190.51px]" data-name="Text">
      <p className="font-['Segoe_UI:Extra_Bold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#0c6f50] text-[12px] tracking-[0.96px] uppercase whitespace-nowrap">21st-style workspace</p>
    </div>
  );
}

function BoldText7() {
  return (
    <div className="absolute h-[30.24px] left-[22px] top-[64px] w-[768.448px]" data-name="Bold Text">
      <p className="absolute font-['Segoe_UI:Bold',sans-serif] leading-[30.24px] left-0 not-italic text-[#102118] text-[28px] top-0 whitespace-nowrap">Перетащите PDF и изображения сюда</p>
    </div>
  );
}

function Paragraph5() {
  return (
    <div className="absolute content-stretch flex h-[21.333px] items-start left-[22px] top-[104.24px] w-[768.448px]" data-name="Paragraph">
      <p className="flex-[1_0_0] font-['Segoe_UI:Regular',sans-serif] leading-[normal] min-h-px min-w-px not-italic relative text-[#3d5448] text-[16px]">{`Drag-and-drop, file picker, очередь документов и массовая обработка без Streamlit. `}</p>
    </div>
  );
}

function Button5() {
  return (
    <div className="absolute bg-[#e9f5ef] content-stretch flex h-[42.667px] items-start left-[22px] px-[18px] py-[12px] rounded-[999px] top-[135.57px] w-[768.448px]" data-name="Button">
      <p className="flex-[1_0_0] font-['Segoe_UI:Extra_Bold',sans-serif] leading-[normal] min-h-px min-w-px not-italic relative text-[#0c6f50] text-[14px] text-center tracking-[0.14px]">Выбрать файлы</p>
    </div>
  );
}

function Container20() {
  return (
    <div className="absolute bg-gradient-to-b border-[1.333px] border-[rgba(15,143,103,0.3)] border-dashed from-[rgba(255,255,255,0.76)] h-[202.906px] left-[20px] rounded-[24px] to-[rgba(243,249,246,0.9)] top-[182.98px] w-[815.115px]" data-name="Container">
      <Text13 />
      <BoldText7 />
      <Paragraph5 />
      <Button5 />
    </div>
  );
}

function Button6() {
  return (
    <div className="absolute bg-[#e9f5ef] content-stretch flex h-[42.667px] items-start left-0 px-[18px] py-[12px] rounded-[999px] top-0 w-[166.344px]" data-name="Button">
      <p className="font-['Segoe_UI:Extra_Bold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#0c6f50] text-[14px] text-center tracking-[0.14px] whitespace-nowrap">Определить типы</p>
    </div>
  );
}

function Button7() {
  return (
    <div className="absolute bg-[rgba(240,244,242,0.9)] content-stretch flex h-[42.667px] items-start left-[176.34px] px-[18px] py-[12px] rounded-[999px] top-0 w-[167.854px]" data-name="Button">
      <p className="font-['Segoe_UI:Extra_Bold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#102118] text-[14px] text-center tracking-[0.14px] whitespace-nowrap">Обновить статусы</p>
    </div>
  );
}

function Button8() {
  return (
    <div className="absolute bg-[rgba(240,244,242,0.9)] content-stretch flex h-[42.667px] items-start left-[354.2px] px-[18px] py-[12px] rounded-[999px] top-0 w-[120.125px]" data-name="Button">
      <p className="font-['Segoe_UI:Extra_Bold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#102118] text-[14px] text-center tracking-[0.14px] whitespace-nowrap">Остановить</p>
    </div>
  );
}

function Button9() {
  return (
    <div className="absolute content-stretch flex h-[42.667px] items-start left-[484.32px] px-[18px] py-[12px] rounded-[999px] top-0 w-[188.635px]" data-name="Button" style={{ backgroundImage: "linear-gradient(167.255deg, rgb(15, 143, 103) 0%, rgb(12, 111, 80) 100%)" }}>
      <p className="font-['Segoe_UI:Extra_Bold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#f3fbf7] text-[14px] text-center tracking-[0.14px] whitespace-nowrap">Запустить обработку</p>
    </div>
  );
}

function Container21() {
  return (
    <div className="absolute h-[42.667px] left-[20px] top-[403.89px] w-[815.115px]" data-name="Container">
      <Button6 />
      <Button7 />
      <Button8 />
      <Button9 />
    </div>
  );
}

function Article1() {
  return (
    <div className="absolute bg-gradient-to-b border-[0.667px] border-[rgba(210,222,215,0.85)] border-solid from-[rgba(252,255,254,0.98)] h-[532.917px] left-0 rounded-[28px] shadow-[0px_14px_36px_0px_rgba(19,37,30,0.08)] to-[rgba(244,250,247,0.96)] top-0 w-[856.448px]" data-name="Article">
      <Container16 />
      <Container18 />
      <Container20 />
      <Container21 />
    </div>
  );
}

function Paragraph6() {
  return (
    <div className="content-stretch flex h-[14.667px] items-start relative shrink-0 w-full" data-name="Paragraph">
      <p className="flex-[1_0_0] font-['Segoe_UI:Extra_Bold',sans-serif] leading-[normal] min-h-px min-w-px not-italic relative text-[#0c6f50] text-[11px] tracking-[1.76px] uppercase">Реестр</p>
    </div>
  );
}

function Heading3() {
  return (
    <div className="h-[28.313px] relative shrink-0 w-full" data-name="Heading 3">
      <p className="absolute font-['Segoe_UI:Bold',sans-serif] leading-[28.32px] left-0 not-italic text-[#102118] text-[24px] top-px whitespace-nowrap">Документы в рабочем пространстве</p>
    </div>
  );
}

function Container23() {
  return (
    <div className="h-[50.979px] relative shrink-0 w-[431.292px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[8px] items-start relative size-full">
        <Paragraph6 />
        <Heading3 />
      </div>
    </div>
  );
}

function Small7() {
  return (
    <div className="h-[18px] relative shrink-0 w-[229.844px]" data-name="Small">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="font-['Segoe_UI:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#102118] text-[13.333px] whitespace-nowrap">7 элементов, 6 completed, 1 mismatch</p>
      </div>
    </div>
  );
}

function Container22() {
  return (
    <div className="h-[50.979px] relative shrink-0 w-full" data-name="Container">
      <div className="content-stretch flex items-start justify-between relative size-full">
        <Container23 />
        <Small7 />
      </div>
    </div>
  );
}

function Text14() {
  return (
    <div className="absolute content-stretch flex h-[16px] items-start left-[16px] top-[14px] w-[222.938px]" data-name="Text">
      <p className="flex-[1_0_0] font-['Segoe_UI:Extra_Bold',sans-serif] leading-[normal] min-h-px min-w-px not-italic relative text-[#6a7d73] text-[12px] tracking-[0.96px] uppercase">Документ</p>
    </div>
  );
}

function Text15() {
  return (
    <div className="absolute content-stretch flex h-[16px] items-start left-[252.94px] top-[14px] w-[263.49px]" data-name="Text">
      <p className="flex-[1_0_0] font-['Segoe_UI:Extra_Bold',sans-serif] leading-[normal] min-h-px min-w-px not-italic relative text-[#6a7d73] text-[12px] tracking-[0.96px] uppercase">Тип</p>
    </div>
  );
}

function Text16() {
  return (
    <div className="absolute content-stretch flex h-[16px] items-start left-[530.43px] top-[14px] w-[141.875px]" data-name="Text">
      <p className="flex-[1_0_0] font-['Segoe_UI:Extra_Bold',sans-serif] leading-[normal] min-h-px min-w-px not-italic relative text-[#6a7d73] text-[12px] tracking-[0.96px] uppercase">Статус</p>
    </div>
  );
}

function Text17() {
  return (
    <div className="absolute content-stretch flex h-[16px] items-start left-[686.3px] top-[14px] w-[111.469px]" data-name="Text">
      <p className="flex-[1_0_0] font-['Segoe_UI:Extra_Bold',sans-serif] leading-[normal] min-h-px min-w-px not-italic relative text-[#6a7d73] text-[12px] tracking-[0.96px] uppercase">SPARK</p>
    </div>
  );
}

function Container25() {
  return (
    <div className="absolute border-[0.667px] border-[rgba(221,230,224,0.82)] border-dashed h-[45.333px] left-0 rounded-[18px] top-0 w-[815.115px]" data-name="Container">
      <Text14 />
      <Text15 />
      <Text16 />
      <Text17 />
    </div>
  );
}

function Text18() {
  return (
    <div className="absolute content-stretch flex h-[21.333px] items-start left-[16px] top-[18.33px] w-[222.938px]" data-name="Text">
      <p className="flex-[1_0_0] font-['Segoe_UI:Regular',sans-serif] leading-[normal] min-h-px min-w-px not-italic relative text-[#102118] text-[16px]">ogrn.pdf</p>
    </div>
  );
}

function Text19() {
  return (
    <div className="absolute content-stretch flex h-[21.333px] items-start left-[252.94px] top-[18.33px] w-[263.49px]" data-name="Text">
      <p className="flex-[1_0_0] font-['Segoe_UI:Regular',sans-serif] leading-[normal] min-h-px min-w-px not-italic relative text-[#102118] text-[16px]">Свидетельство ОГРН</p>
    </div>
  );
}

function Text20() {
  return (
    <div className="absolute bg-[rgba(43,138,87,0.12)] content-stretch flex h-[30px] items-start left-[530.43px] px-[10px] py-[7px] rounded-[999px] top-[14px] w-[84.125px]" data-name="Text">
      <p className="font-['Segoe_UI:Extra_Bold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#2b8a57] text-[12px] whitespace-nowrap">Completed</p>
    </div>
  );
}

function Text21() {
  return (
    <div className="absolute bg-[rgba(43,138,87,0.12)] content-stretch flex h-[30px] items-start left-[686.3px] px-[10px] py-[7px] rounded-[999px] top-[14px] w-[37.469px]" data-name="Text">
      <p className="font-['Segoe_UI:Extra_Bold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#2b8a57] text-[12px] whitespace-nowrap">OK</p>
    </div>
  );
}

function Container26() {
  return (
    <div className="absolute bg-[rgba(250,252,251,0.84)] border-[0.667px] border-[rgba(221,230,224,0.82)] border-solid h-[59.333px] left-0 rounded-[18px] top-[55.33px] w-[815.115px]" data-name="Container">
      <Text18 />
      <Text19 />
      <Text20 />
      <Text21 />
    </div>
  );
}

function Text22() {
  return (
    <div className="absolute content-stretch flex h-[21.333px] items-start left-[16px] top-[18.33px] w-[222.938px]" data-name="Text">
      <p className="flex-[1_0_0] font-['Segoe_UI:Regular',sans-serif] leading-[normal] min-h-px min-w-px not-italic relative text-[#102118] text-[16px]">inn.pdf</p>
    </div>
  );
}

function Text23() {
  return (
    <div className="absolute content-stretch flex h-[21.333px] items-start left-[252.94px] top-[18.33px] w-[263.49px]" data-name="Text">
      <p className="flex-[1_0_0] font-['Segoe_UI:Regular',sans-serif] leading-[normal] min-h-px min-w-px not-italic relative text-[#102118] text-[16px]">Свидетельство ИНН</p>
    </div>
  );
}

function Text24() {
  return (
    <div className="absolute bg-[rgba(43,138,87,0.12)] content-stretch flex h-[30px] items-start left-[530.43px] px-[10px] py-[7px] rounded-[999px] top-[14px] w-[84.125px]" data-name="Text">
      <p className="font-['Segoe_UI:Extra_Bold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#2b8a57] text-[12px] whitespace-nowrap">Completed</p>
    </div>
  );
}

function Text25() {
  return (
    <div className="absolute bg-[rgba(43,138,87,0.12)] content-stretch flex h-[30px] items-start left-[686.3px] px-[10px] py-[7px] rounded-[999px] top-[14px] w-[37.469px]" data-name="Text">
      <p className="font-['Segoe_UI:Extra_Bold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#2b8a57] text-[12px] whitespace-nowrap">OK</p>
    </div>
  );
}

function Container27() {
  return (
    <div className="absolute bg-[rgba(250,252,251,0.84)] border-[0.667px] border-[rgba(221,230,224,0.82)] border-solid h-[59.333px] left-0 rounded-[18px] top-[124.67px] w-[815.115px]" data-name="Container">
      <Text22 />
      <Text23 />
      <Text24 />
      <Text25 />
    </div>
  );
}

function Text26() {
  return (
    <div className="absolute content-stretch flex h-[21.333px] items-start left-[16px] top-[18.33px] w-[222.938px]" data-name="Text">
      <p className="flex-[1_0_0] font-['Segoe_UI:Regular',sans-serif] leading-[normal] min-h-px min-w-px not-italic relative text-[#102118] text-[16px]">rules.pdf</p>
    </div>
  );
}

function Text27() {
  return (
    <div className="absolute content-stretch flex h-[21.333px] items-start left-[252.94px] top-[18.33px] w-[263.49px]" data-name="Text">
      <p className="flex-[1_0_0] font-['Segoe_UI:Regular',sans-serif] leading-[normal] min-h-px min-w-px not-italic relative text-[#102118] text-[16px]">Устав</p>
    </div>
  );
}

function Text28() {
  return (
    <div className="absolute bg-[rgba(43,138,87,0.12)] content-stretch flex h-[30px] items-start left-[530.43px] px-[10px] py-[7px] rounded-[999px] top-[14px] w-[84.125px]" data-name="Text">
      <p className="font-['Segoe_UI:Extra_Bold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#2b8a57] text-[12px] whitespace-nowrap">Completed</p>
    </div>
  );
}

function Text29() {
  return (
    <div className="absolute bg-[rgba(196,123,39,0.12)] content-stretch flex h-[30px] items-start left-[686.3px] px-[10px] py-[7px] rounded-[999px] top-[14px] w-[77.823px]" data-name="Text">
      <p className="font-['Segoe_UI:Extra_Bold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#c47b27] text-[12px] whitespace-nowrap">Mismatch</p>
    </div>
  );
}

function Container28() {
  return (
    <div className="absolute bg-[rgba(250,252,251,0.84)] border-[0.667px] border-[rgba(221,230,224,0.82)] border-solid h-[59.333px] left-0 rounded-[18px] top-[194px] w-[815.115px]" data-name="Container">
      <Text26 />
      <Text27 />
      <Text28 />
      <Text29 />
    </div>
  );
}

function Text30() {
  return (
    <div className="absolute content-stretch flex h-[21.333px] items-start left-[16px] top-[18.33px] w-[222.938px]" data-name="Text">
      <p className="flex-[1_0_0] font-['Segoe_UI:Regular',sans-serif] leading-[normal] min-h-px min-w-px not-italic relative text-[#102118] text-[16px]">rent_contract.pdf</p>
    </div>
  );
}

function Text31() {
  return (
    <div className="absolute content-stretch flex h-[21.333px] items-start left-[252.94px] top-[18.33px] w-[263.49px]" data-name="Text">
      <p className="flex-[1_0_0] font-['Segoe_UI:Regular',sans-serif] leading-[normal] min-h-px min-w-px not-italic relative text-[#102118] text-[16px]">Договор аренды</p>
    </div>
  );
}

function Text32() {
  return (
    <div className="absolute bg-[rgba(43,138,87,0.12)] content-stretch flex h-[30px] items-start left-[530.43px] px-[10px] py-[7px] rounded-[999px] top-[14px] w-[84.125px]" data-name="Text">
      <p className="font-['Segoe_UI:Extra_Bold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#2b8a57] text-[12px] whitespace-nowrap">Completed</p>
    </div>
  );
}

function Text33() {
  return (
    <div className="absolute bg-[rgba(104,125,115,0.12)] content-stretch flex h-[30px] items-start left-[686.3px] px-[10px] py-[7px] rounded-[999px] top-[14px] w-[67.51px]" data-name="Text">
      <p className="font-['Segoe_UI:Extra_Bold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#6a7d73] text-[12px] whitespace-nowrap">Skipped</p>
    </div>
  );
}

function Container29() {
  return (
    <div className="absolute bg-[rgba(250,252,251,0.84)] border-[0.667px] border-[rgba(221,230,224,0.82)] border-solid h-[59.333px] left-0 rounded-[18px] top-[263.33px] w-[815.115px]" data-name="Container">
      <Text30 />
      <Text31 />
      <Text32 />
      <Text33 />
    </div>
  );
}

function Container24() {
  return (
    <div className="h-[322.667px] relative shrink-0 w-full" data-name="Container">
      <Container25 />
      <Container26 />
      <Container27 />
      <Container28 />
      <Container29 />
    </div>
  );
}

function Article2() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0.86)] content-stretch flex flex-col gap-[16px] h-[496.021px] items-start left-0 pb-[0.667px] pt-[20.667px] px-[20.667px] rounded-[28px] top-[550.92px] w-[856.448px]" data-name="Article">
      <div aria-hidden="true" className="absolute border-[0.667px] border-[rgba(210,222,215,0.85)] border-solid inset-0 pointer-events-none rounded-[28px] shadow-[0px_14px_36px_0px_rgba(19,37,30,0.08)]" />
      <Container22 />
      <Container24 />
    </div>
  );
}

function Container15() {
  return (
    <div className="absolute h-[1046.938px] left-0 top-0 w-[856.448px]" data-name="Container">
      <Article1 />
      <Article2 />
    </div>
  );
}

function Paragraph7() {
  return (
    <div className="content-stretch flex h-[14.667px] items-start relative shrink-0 w-full" data-name="Paragraph">
      <p className="flex-[1_0_0] font-['Segoe_UI:Extra_Bold',sans-serif] leading-[normal] min-h-px min-w-px not-italic relative text-[#0c6f50] text-[11px] tracking-[1.76px] uppercase">Сессия</p>
    </div>
  );
}

function Heading4() {
  return (
    <div className="h-[28.313px] relative shrink-0 w-full" data-name="Heading 3">
      <p className="absolute font-['Segoe_UI:Bold',sans-serif] leading-[28.32px] left-0 not-italic text-[#102118] text-[24px] top-px whitespace-nowrap">Статус активной проверки</p>
    </div>
  );
}

function Container32() {
  return (
    <div className="h-[50.979px] relative shrink-0 w-[312.458px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[8px] items-start relative size-full">
        <Paragraph7 />
        <Heading4 />
      </div>
    </div>
  );
}

function Container31() {
  return (
    <div className="h-[50.979px] relative shrink-0 w-full" data-name="Container">
      <div className="content-stretch flex items-start justify-between pr-[166.417px] relative size-full">
        <Container32 />
      </div>
    </div>
  );
}

function Container34() {
  return (
    <div className="absolute bg-[rgba(250,252,251,0.82)] border-[0.667px] border-[rgba(219,228,222,0.88)] border-solid h-[50.667px] left-0 rounded-[18px] top-0 w-[478.875px]" data-name="Container">
      <p className="absolute font-['Manrope:Bold',sans-serif] font-bold leading-[0] left-[16px] not-italic text-[#6a7d73] text-[0px] top-[14px] whitespace-nowrap">
        <span className="font-['Segoe_UI:Bold',sans-serif] leading-[normal] text-[13px]">Session ID</span>
        <span className="font-['Segoe_UI:Regular',sans-serif] leading-[normal] text-[#102118] text-[16px]">{` `}</span>
        <span className="font-['Segoe_UI:Bold',sans-serif] leading-[normal] text-[#3d5448] text-[16px]">sess_01JXWQ4T7A</span>
      </p>
    </div>
  );
}

function Container35() {
  return (
    <div className="absolute bg-[rgba(250,252,251,0.82)] border-[0.667px] border-[rgba(219,228,222,0.88)] border-solid h-[50.667px] left-0 rounded-[18px] top-[62.67px] w-[478.875px]" data-name="Container">
      <p className="absolute font-['Manrope:Bold',sans-serif] font-bold leading-[0] left-[16px] not-italic text-[#6a7d73] text-[0px] top-[14px] whitespace-nowrap">
        <span className="font-['Segoe_UI:Bold',sans-serif] leading-[normal] text-[13px]">Последний запуск</span>
        <span className="font-['Segoe_UI:Regular',sans-serif] leading-[normal] text-[#102118] text-[16px]">{` `}</span>
        <span className="font-['Segoe_UI:Bold',sans-serif] leading-[normal] text-[#3d5448] text-[16px]">15 марта 2026, 19:42</span>
      </p>
    </div>
  );
}

function Container36() {
  return (
    <div className="absolute bg-[rgba(250,252,251,0.82)] border-[0.667px] border-[rgba(219,228,222,0.88)] border-solid h-[50.667px] left-0 rounded-[18px] top-[125.33px] w-[478.875px]" data-name="Container">
      <p className="absolute font-['Manrope:Bold',sans-serif] font-bold leading-[0] left-[16px] not-italic text-[#6a7d73] text-[0px] top-[14px] whitespace-nowrap">
        <span className="font-['Segoe_UI:Bold',sans-serif] leading-[normal] text-[13px]">Общий статус</span>
        <span className="font-['Segoe_UI:Regular',sans-serif] leading-[normal] text-[#102118] text-[16px]">{` `}</span>
        <span className="font-['Segoe_UI:Bold',sans-serif] leading-[normal] text-[#3d5448] text-[16px]">Completed</span>
      </p>
    </div>
  );
}

function Container33() {
  return (
    <div className="h-[176px] relative shrink-0 w-full" data-name="Container">
      <Container34 />
      <Container35 />
      <Container36 />
    </div>
  );
}

function Article3() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0.86)] content-stretch flex flex-col gap-[16px] h-[284.313px] items-start left-0 pb-[0.667px] pt-[20.667px] px-[20.667px] rounded-[28px] top-0 w-[520.208px]" data-name="Article">
      <div aria-hidden="true" className="absolute border-[0.667px] border-[rgba(210,222,215,0.85)] border-solid inset-0 pointer-events-none rounded-[28px] shadow-[0px_14px_36px_0px_rgba(19,37,30,0.08)]" />
      <Container31 />
      <Container33 />
    </div>
  );
}

function Paragraph8() {
  return (
    <div className="content-stretch flex h-[14.667px] items-start relative shrink-0 w-full" data-name="Paragraph">
      <p className="flex-[1_0_0] font-['Segoe_UI:Extra_Bold',sans-serif] leading-[normal] min-h-px min-w-px not-italic relative text-[#0c6f50] text-[11px] tracking-[1.76px] uppercase">Отчёт</p>
    </div>
  );
}

function Heading5() {
  return (
    <div className="h-[28.313px] relative shrink-0 w-full" data-name="Heading 3">
      <p className="absolute font-['Segoe_UI:Bold',sans-serif] leading-[28.32px] left-0 not-italic text-[#102118] text-[24px] top-px whitespace-nowrap">Итоговые секции</p>
    </div>
  );
}

function Container38() {
  return (
    <div className="h-[50.979px] relative shrink-0 w-[205.146px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[8px] items-start relative size-full">
        <Paragraph8 />
        <Heading5 />
      </div>
    </div>
  );
}

function Small8() {
  return (
    <div className="h-[18px] relative shrink-0 w-[121.615px]" data-name="Small">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="font-['Segoe_UI:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#102118] text-[13.333px] whitespace-nowrap">4 ключевых вывода</p>
      </div>
    </div>
  );
}

function Container37() {
  return (
    <div className="content-stretch flex h-[50.979px] items-start justify-between relative shrink-0 w-full" data-name="Container">
      <Container38 />
      <Small8 />
    </div>
  );
}

function BoldText8() {
  return (
    <div className="absolute content-stretch flex h-[21.333px] items-start left-[16px] top-[16px] w-[445.542px]" data-name="Bold Text">
      <p className="flex-[1_0_0] font-['Segoe_UI:Bold',sans-serif] leading-[normal] min-h-px min-w-px not-italic relative text-[#102118] text-[16px]">1. Юридический профиль</p>
    </div>
  );
}

function Paragraph9() {
  return (
    <div className="absolute h-[42.667px] left-[16px] top-[43.33px] w-[445.542px]" data-name="Paragraph">
      <p className="absolute font-['Segoe_UI:Regular',sans-serif] leading-[normal] left-0 not-italic text-[#3d5448] text-[16px] top-0 w-[379px]">ИНН, ОГРН, адрес и статус компании совпадают по основным документам.</p>
    </div>
  );
}

function Container40() {
  return (
    <div className="absolute bg-[rgba(251,253,252,0.9)] border-[0.667px] border-[rgba(221,230,224,0.82)] border-solid h-[103.333px] left-0 rounded-[20px] top-0 w-[478.875px]" data-name="Container">
      <BoldText8 />
      <Paragraph9 />
    </div>
  );
}

function BoldText9() {
  return (
    <div className="absolute content-stretch flex h-[21.333px] items-start left-[16px] top-[16px] w-[445.542px]" data-name="Bold Text">
      <p className="flex-[1_0_0] font-['Segoe_UI:Bold',sans-serif] leading-[normal] min-h-px min-w-px not-italic relative text-[#102118] text-[16px]">2. SPARK mismatch</p>
    </div>
  );
}

function Paragraph10() {
  return (
    <div className="absolute h-[42.667px] left-[16px] top-[43.33px] w-[445.542px]" data-name="Paragraph">
      <p className="absolute font-['Segoe_UI:Regular',sans-serif] leading-[normal] left-0 not-italic text-[#3d5448] text-[16px] top-0 w-[438px]">В уставе краткое наименование отличается от реестрового значения.</p>
    </div>
  );
}

function Container41() {
  return (
    <div className="absolute bg-gradient-to-b border-[0.667px] border-[rgba(228,195,153,0.62)] border-solid from-[rgba(255,250,244,0.92)] h-[103.333px] left-0 rounded-[20px] to-[rgba(255,247,236,0.96)] top-[115.33px] w-[478.875px]" data-name="Container">
      <BoldText9 />
      <Paragraph10 />
    </div>
  );
}

function BoldText10() {
  return (
    <div className="absolute content-stretch flex h-[21.333px] items-start left-[16px] top-[16px] w-[445.542px]" data-name="Bold Text">
      <p className="flex-[1_0_0] font-['Segoe_UI:Bold',sans-serif] leading-[normal] min-h-px min-w-px not-italic relative text-[#102118] text-[16px]">3. Риски</p>
    </div>
  );
}

function Paragraph11() {
  return (
    <div className="absolute h-[42.667px] left-[16px] top-[43.33px] w-[445.542px]" data-name="Paragraph">
      <p className="absolute font-['Segoe_UI:Regular',sans-serif] leading-[normal] left-0 not-italic text-[#3d5448] text-[16px] top-0 w-[392px]">Критичных рисков не обнаружено, требуется ручная проверка одного поля.</p>
    </div>
  );
}

function Container42() {
  return (
    <div className="absolute bg-[rgba(251,253,252,0.9)] border-[0.667px] border-[rgba(221,230,224,0.82)] border-solid h-[103.333px] left-0 rounded-[20px] top-[230.67px] w-[478.875px]" data-name="Container">
      <BoldText10 />
      <Paragraph11 />
    </div>
  );
}

function Container39() {
  return (
    <div className="h-[334px] relative shrink-0 w-full" data-name="Container">
      <Container40 />
      <Container41 />
      <Container42 />
    </div>
  );
}

function Article4() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0.86)] content-stretch flex flex-col gap-[16px] h-[442.313px] items-start left-0 pb-[0.667px] pt-[20.667px] px-[20.667px] rounded-[28px] top-[302.31px] w-[520.208px]" data-name="Article">
      <div aria-hidden="true" className="absolute border-[0.667px] border-[rgba(210,222,215,0.85)] border-solid inset-0 pointer-events-none rounded-[28px] shadow-[0px_14px_36px_0px_rgba(19,37,30,0.08)]" />
      <Container37 />
      <Container39 />
    </div>
  );
}

function Paragraph12() {
  return (
    <div className="content-stretch flex h-[14.667px] items-start relative shrink-0 w-full" data-name="Paragraph">
      <p className="flex-[1_0_0] font-['Segoe_UI:Extra_Bold',sans-serif] leading-[normal] min-h-px min-w-px not-italic relative text-[#0c6f50] text-[11px] tracking-[1.76px] uppercase">История</p>
    </div>
  );
}

function Heading6() {
  return (
    <div className="h-[28.313px] relative shrink-0 w-full" data-name="Heading 3">
      <p className="absolute font-['Segoe_UI:Bold',sans-serif] leading-[28.32px] left-0 not-italic text-[#102118] text-[24px] top-px whitespace-nowrap">Последние сессии</p>
    </div>
  );
}

function Container44() {
  return (
    <div className="h-[50.979px] relative shrink-0 w-[213.896px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[8px] items-start relative size-full">
        <Paragraph12 />
        <Heading6 />
      </div>
    </div>
  );
}

function Container43() {
  return (
    <div className="h-[50.979px] relative shrink-0 w-full" data-name="Container">
      <div className="content-stretch flex items-start justify-between pr-[264.979px] relative size-full">
        <Container44 />
      </div>
    </div>
  );
}

function Container46() {
  return (
    <div className="absolute bg-[rgba(250,252,251,0.82)] border-[0.667px] border-[rgba(219,228,222,0.88)] border-solid h-[50.667px] left-0 rounded-[18px] top-0 w-[478.875px]" data-name="Container">
      <p className="absolute font-['Manrope:Bold',sans-serif] font-bold leading-[0] left-[16px] not-italic text-[#102118] text-[0px] text-[16px] top-[14px] whitespace-nowrap">
        <span className="font-['Segoe_UI:Bold',sans-serif] leading-[normal]">ООО Альфа / март 2026</span>
        <span className="font-['Segoe_UI:Regular',sans-serif] leading-[normal]">{` `}</span>
        <span className="font-['Segoe_UI:Regular',sans-serif] leading-[normal] text-[#3d5448]">7 документов · completed</span>
      </p>
    </div>
  );
}

function Container47() {
  return (
    <div className="absolute bg-[rgba(250,252,251,0.82)] border-[0.667px] border-[rgba(219,228,222,0.88)] border-solid h-[50.667px] left-0 rounded-[18px] top-[62.67px] w-[478.875px]" data-name="Container">
      <p className="absolute font-['Manrope:Bold',sans-serif] font-bold leading-[0] left-[16px] not-italic text-[#102118] text-[0px] text-[16px] top-[14px] whitespace-nowrap">
        <span className="font-['Segoe_UI:Bold',sans-serif] leading-[normal]">АО Бета / февраль 2026</span>
        <span className="font-['Segoe_UI:Regular',sans-serif] leading-[normal]">{` `}</span>
        <span className="font-['Segoe_UI:Regular',sans-serif] leading-[normal] text-[#3d5448]">5 документов · report ready</span>
      </p>
    </div>
  );
}

function Container48() {
  return (
    <div className="absolute bg-[rgba(250,252,251,0.82)] border-[0.667px] border-[rgba(219,228,222,0.88)] border-solid h-[50.667px] left-0 rounded-[18px] top-[125.33px] w-[478.875px]" data-name="Container">
      <p className="absolute font-['Manrope:Bold',sans-serif] font-bold leading-[0] left-[16px] not-italic text-[#102118] text-[0px] text-[16px] top-[14px] whitespace-nowrap">
        <span className="font-['Segoe_UI:Bold',sans-serif] leading-[normal]">ООО Гамма / февраль 2026</span>
        <span className="font-['Segoe_UI:Regular',sans-serif] leading-[normal]">{` `}</span>
        <span className="font-['Segoe_UI:Regular',sans-serif] leading-[normal] text-[#3d5448]">8 документов · feedback sent</span>
      </p>
    </div>
  );
}

function Container45() {
  return (
    <div className="h-[176px] relative shrink-0 w-full" data-name="Container">
      <Container46 />
      <Container47 />
      <Container48 />
    </div>
  );
}

function Article5() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0.86)] content-stretch flex flex-col gap-[16px] h-[284.313px] items-start left-0 pb-[0.667px] pt-[20.667px] px-[20.667px] rounded-[28px] top-[762.63px] w-[520.208px]" data-name="Article">
      <div aria-hidden="true" className="absolute border-[0.667px] border-[rgba(210,222,215,0.85)] border-solid inset-0 pointer-events-none rounded-[28px] shadow-[0px_14px_36px_0px_rgba(19,37,30,0.08)]" />
      <Container43 />
      <Container45 />
    </div>
  );
}

function Container30() {
  return (
    <div className="absolute h-[1046.938px] left-[874.45px] top-0 w-[520.208px]" data-name="Container">
      <Article3 />
      <Article4 />
      <Article5 />
    </div>
  );
}

function Section4() {
  return (
    <div className="h-[1046.938px] relative shrink-0 w-full" data-name="Section">
      <Container15 />
      <Container30 />
    </div>
  );
}

function Container3() {
  return (
    <div className="bg-gradient-to-b from-[#f2f6f3] h-[1798.188px] relative rounded-[36px] shrink-0 to-[#e9efeb] w-full" data-name="Container">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[18px] items-start pb-[0.667px] pt-[22.667px] px-[22.667px] relative size-full">
          <Header />
          <Section2 />
          <Section3 />
          <Section4 />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-[0.667px] border-[rgba(201,216,208,0.88)] border-solid inset-0 pointer-events-none rounded-[36px] shadow-[0px_32px_90px_0px_rgba(21,45,34,0.18)]" />
    </div>
  );
}

function Article() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[10px] h-[1824.188px] items-start left-0 top-0 w-[1440px]" data-name="Article">
      <Container2 />
      <Container3 />
    </div>
  );
}

function Container49() {
  return (
    <div className="content-stretch flex h-[16px] items-start relative shrink-0 w-full" data-name="Container">
      <p className="flex-[1_0_0] font-['Segoe_UI:Extra_Bold',sans-serif] leading-[normal] min-h-px min-w-px not-italic relative text-[#6a7d73] text-[12px] tracking-[1.44px] uppercase">Mobile 390</p>
    </div>
  );
}

function Paragraph13() {
  return (
    <div className="absolute content-stretch flex h-[14.667px] items-start left-[20px] top-[24px] w-[316.667px]" data-name="Paragraph">
      <p className="flex-[1_0_0] font-['Segoe_UI:Extra_Bold',sans-serif] leading-[normal] min-h-px min-w-px not-italic relative text-[11px] text-[rgba(229,242,236,0.8)] tracking-[1.76px] uppercase">Counterparty Control</p>
    </div>
  );
}

function Heading7() {
  return (
    <div className="absolute h-[28.313px] left-[20px] top-[46.67px] w-[316.667px]" data-name="Heading 3">
      <p className="absolute font-['Segoe_UI:Bold',sans-serif] leading-[28.32px] left-0 not-italic text-[#f4fbf7] text-[24px] top-px whitespace-nowrap">Проверка документов</p>
    </div>
  );
}

function Container51() {
  return (
    <div className="absolute h-[190.365px] left-[16.67px] rounded-[28px] top-[16.67px] w-[356.667px]" data-name="Container" style={{ backgroundImage: "url('data:image/svg+xml;utf8,<svg viewBox=\\'0 0 356.67 190.36\\' xmlns=\\'http://www.w3.org/2000/svg\\' preserveAspectRatio=\\'none\\'><rect x=\\'0\\' y=\\'0\\' height=\\'100%\\' width=\\'100%\\' fill=\\'url(%23grad)\\' opacity=\\'1\\'/><defs><radialGradient id=\\'grad\\' gradientUnits=\\'userSpaceOnUse\\' cx=\\'0\\' cy=\\'0\\' r=\\'10\\' gradientTransform=\\'matrix(0 -40.429 -40.429 0 356.67 0)\\'><stop stop-color=\\'rgba(255,255,255,0.18)\\' offset=\\'0\\'/><stop stop-color=\\'rgba(128,128,128,0.09)\\' offset=\\'0.14\\'/><stop stop-color=\\'rgba(0,0,0,0)\\' offset=\\'0.28\\'/></radialGradient></defs></svg>'), linear-gradient(151.91deg, rgba(9, 42, 33, 0.98) 0%, rgba(17, 81, 60, 0.98) 100%)" }}>
      <Paragraph13 />
      <Heading7 />
      <p className="absolute font-['Segoe_UI:Regular',sans-serif] leading-[normal] left-[20px] not-italic text-[13.333px] text-[rgba(228,241,234,0.8)] top-[77.65px] whitespace-nowrap">Quick workspace for operators</p>
    </div>
  );
}

function Text34() {
  return (
    <div className="absolute content-stretch flex h-[40.677px] items-start left-[16px] top-[14px] w-[323.333px]" data-name="Text">
      <p className="flex-[1_0_0] font-['Segoe_UI:Bold',sans-serif] leading-[normal] min-h-px min-w-px not-italic relative text-[#6a7d73] text-[13px]">Текущая сессия</p>
    </div>
  );
}

function BoldText11() {
  return (
    <div className="absolute content-stretch flex h-[55.354px] items-start left-[16px] top-[60.68px] w-[323.333px]" data-name="Bold Text">
      <p className="flex-[1_0_0] font-['Segoe_UI:Bold',sans-serif] leading-[normal] min-h-px min-w-px not-italic relative text-[#102118] text-[24px]">ООО Альфа</p>
    </div>
  );
}

function Small9() {
  return (
    <div className="absolute content-stretch flex h-[41.354px] items-start left-[16px] top-[122.03px] w-[323.333px]" data-name="Small">
      <p className="flex-[1_0_0] font-['Segoe_UI:Regular',sans-serif] leading-[normal] min-h-px min-w-px not-italic relative text-[#3d5448] text-[13.333px]">7 документов, completed</p>
    </div>
  );
}

function Container52() {
  return (
    <div className="absolute bg-[rgba(250,252,251,0.82)] border-[0.667px] border-[rgba(219,228,222,0.88)] border-solid h-[178.719px] left-[16.67px] rounded-[18px] shadow-[0px_14px_36px_0px_rgba(19,37,30,0.08)] top-[221.03px] w-[356.667px]" data-name="Container">
      <Text34 />
      <BoldText11 />
      <Small9 />
    </div>
  );
}

function Text35() {
  return (
    <div className="absolute content-stretch flex h-[40.688px] items-start left-[16px] top-[14px] w-[323.333px]" data-name="Text">
      <p className="flex-[1_0_0] font-['Segoe_UI:Bold',sans-serif] leading-[normal] min-h-px min-w-px not-italic relative text-[#6a7d73] text-[13px]">Queue</p>
    </div>
  );
}

function BoldText12() {
  return (
    <div className="absolute content-stretch flex h-[55.354px] items-start left-[16px] top-[60.69px] w-[323.333px]" data-name="Bold Text">
      <p className="flex-[1_0_0] font-['Segoe_UI:Bold',sans-serif] leading-[normal] min-h-px min-w-px not-italic relative text-[#102118] text-[24px]">Drop files or scan</p>
    </div>
  );
}

function Small10() {
  return (
    <div className="absolute content-stretch flex h-[41.354px] items-start left-[16px] top-[122.04px] w-[323.333px]" data-name="Small">
      <p className="flex-[1_0_0] font-['Segoe_UI:Regular',sans-serif] leading-[normal] min-h-px min-w-px not-italic relative text-[#3d5448] text-[13.333px]">PDF, JPG, PNG</p>
    </div>
  );
}

function Container53() {
  return (
    <div className="absolute bg-gradient-to-b border-[0.667px] border-[rgba(180,217,200,0.9)] border-solid from-[rgba(240,249,245,0.98)] h-[178.729px] left-[16.67px] rounded-[18px] shadow-[0px_14px_36px_0px_rgba(19,37,30,0.08)] to-[rgba(231,245,238,0.98)] top-[413.75px] w-[356.667px]" data-name="Container">
      <Text35 />
      <BoldText12 />
      <Small10 />
    </div>
  );
}

function Text36() {
  return (
    <div className="absolute content-stretch flex h-[40.688px] items-start left-[16px] top-[14px] w-[323.333px]" data-name="Text">
      <p className="flex-[1_0_0] font-['Segoe_UI:Bold',sans-serif] leading-[normal] min-h-px min-w-px not-italic relative text-[#6a7d73] text-[13px]">SPARK</p>
    </div>
  );
}

function BoldText13() {
  return (
    <div className="absolute content-stretch flex h-[55.354px] items-start left-[16px] top-[60.69px] w-[323.333px]" data-name="Bold Text">
      <p className="flex-[1_0_0] font-['Segoe_UI:Bold',sans-serif] leading-[normal] min-h-px min-w-px not-italic relative text-[#102118] text-[24px]">1 mismatch</p>
    </div>
  );
}

function Small11() {
  return (
    <div className="absolute content-stretch flex h-[41.354px] items-start left-[16px] top-[122.04px] w-[323.333px]" data-name="Small">
      <p className="flex-[1_0_0] font-['Segoe_UI:Regular',sans-serif] leading-[normal] min-h-px min-w-px not-italic relative text-[#3d5448] text-[13.333px]">Rules / short_name</p>
    </div>
  );
}

function Container54() {
  return (
    <div className="absolute bg-[rgba(250,252,251,0.82)] border-[0.667px] border-[rgba(219,228,222,0.88)] border-solid h-[178.729px] left-[16.67px] rounded-[18px] shadow-[0px_14px_36px_0px_rgba(19,37,30,0.08)] top-[606.48px] w-[356.667px]" data-name="Container">
      <Text36 />
      <BoldText13 />
      <Small11 />
    </div>
  );
}

function Text37() {
  return (
    <div className="absolute bg-[#102118] content-stretch flex h-[40.667px] items-start left-0 px-[16px] py-[11px] rounded-[999px] top-[35.03px] w-[75.115px]" data-name="Text">
      <p className="font-['Segoe_UI:Bold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#f6fbf8] text-[14px] whitespace-nowrap">Обзор</p>
    </div>
  );
}

function Text38() {
  return (
    <div className="absolute bg-[rgba(240,245,242,0.85)] content-stretch flex h-[40.667px] items-start left-[85.11px] px-[16px] py-[11px] rounded-[999px] top-[35.03px] w-[71.333px]" data-name="Text">
      <p className="font-['Segoe_UI:Bold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#6a7d73] text-[14px] whitespace-nowrap">Отчёт</p>
    </div>
  );
}

function Text39() {
  return (
    <div className="absolute bg-[rgba(240,245,242,0.85)] content-stretch flex h-[40.667px] items-start left-[166.45px] px-[16px] py-[11px] rounded-[999px] top-[35.03px] w-[89.938px]" data-name="Text">
      <p className="font-['Segoe_UI:Bold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#6a7d73] text-[14px] whitespace-nowrap">История</p>
    </div>
  );
}

function Container55() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0.86)] border-[0.667px] border-[rgba(210,222,215,0.85)] border-solid h-[112.063px] left-[16.67px] shadow-[0px_14px_36px_0px_rgba(19,37,30,0.08)] top-[799.21px] w-[356.667px]" data-name="Container">
      <Text37 />
      <Text38 />
      <Text39 />
    </div>
  );
}

function BoldText14() {
  return (
    <div className="absolute content-stretch flex h-[38.844px] items-start left-[16px] top-[16px] w-[294px]" data-name="Bold Text">
      <p className="flex-[1_0_0] font-['Segoe_UI:Bold',sans-serif] leading-[normal] min-h-px min-w-px not-italic relative text-[#102118] text-[16px]">Краткий вывод</p>
    </div>
  );
}

function Paragraph14() {
  return (
    <div className="absolute h-[60.188px] left-[16px] top-[60.84px] w-[294px]" data-name="Paragraph">
      <p className="absolute font-['Segoe_UI:Regular',sans-serif] leading-[normal] left-0 not-italic text-[#3d5448] text-[16px] top-0 w-[284px]">Основной пакет валиден, одна ручная сверка остаётся обязательной.</p>
    </div>
  );
}

function Container57() {
  return (
    <div className="absolute bg-[rgba(251,253,252,0.9)] border-[0.667px] border-[rgba(221,230,224,0.82)] border-solid h-[138.365px] left-[14px] rounded-[20px] top-[14px] w-[327.333px]" data-name="Container">
      <BoldText14 />
      <Paragraph14 />
    </div>
  );
}

function BoldText15() {
  return (
    <div className="absolute content-stretch flex h-[38.844px] items-start left-[16px] top-[16px] w-[294px]" data-name="Bold Text">
      <p className="flex-[1_0_0] font-['Segoe_UI:Bold',sans-serif] leading-[normal] min-h-px min-w-px not-italic relative text-[#102118] text-[16px]">Feedback</p>
    </div>
  );
}

function Paragraph15() {
  return (
    <div className="absolute h-[60.188px] left-[16px] top-[60.84px] w-[294px]" data-name="Paragraph">
      <p className="absolute font-['Segoe_UI:Regular',sans-serif] leading-[normal] left-0 not-italic text-[#3d5448] text-[16px] top-0 w-[267px]">Email и Telegram доступны прямо из карточки результата.</p>
    </div>
  );
}

function Container58() {
  return (
    <div className="absolute bg-gradient-to-b border-[0.667px] border-[rgba(228,195,153,0.62)] border-solid from-[rgba(255,250,244,0.92)] h-[138.365px] left-[14px] rounded-[20px] to-[rgba(255,247,236,0.96)] top-[164.36px] w-[327.333px]" data-name="Container">
      <BoldText15 />
      <Paragraph15 />
    </div>
  );
}

function Container56() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0.86)] border-[0.667px] border-[rgba(210,222,215,0.85)] border-solid h-[318.063px] left-[16.67px] rounded-[24px] shadow-[0px_14px_36px_0px_rgba(19,37,30,0.08)] top-[925.27px] w-[356.667px]" data-name="Container">
      <Container57 />
      <Container58 />
    </div>
  );
}

function Container50() {
  return (
    <div className="bg-gradient-to-b from-[#f2f6f3] h-[1260px] relative rounded-[36px] shrink-0 to-[#e9efeb] w-full" data-name="Container">
      <div className="overflow-clip relative rounded-[inherit] size-full">
        <Container51 />
        <Container52 />
        <Container53 />
        <Container54 />
        <Container55 />
        <Container56 />
      </div>
      <div aria-hidden="true" className="absolute border-[0.667px] border-[rgba(201,216,208,0.88)] border-solid inset-0 pointer-events-none rounded-[36px] shadow-[0px_32px_90px_0px_rgba(21,45,34,0.18)]" />
    </div>
  );
}

function Article6() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[10px] h-[1286px] items-start left-[1468px] top-0 w-[390px]" data-name="Article">
      <Container49 />
      <Container50 />
    </div>
  );
}

function Section1() {
  return (
    <div className="h-[1824.188px] relative shrink-0 w-full" data-name="Section">
      <Article />
      <Article6 />
    </div>
  );
}

function Container59() {
  return (
    <div className="content-stretch flex h-[16px] items-start relative shrink-0 w-full" data-name="Container">
      <p className="flex-[1_0_0] font-['Segoe_UI:Extra_Bold',sans-serif] leading-[normal] min-h-px min-w-px not-italic relative text-[#6a7d73] text-[12px] tracking-[1.44px] uppercase">Design Tokens</p>
    </div>
  );
}

function Heading8() {
  return (
    <div className="h-[28.313px] relative shrink-0 w-full" data-name="Heading 3">
      <p className="absolute font-['Segoe_UI:Bold',sans-serif] leading-[28.32px] left-0 not-italic text-[#102118] text-[24px] top-px whitespace-nowrap">Palette</p>
    </div>
  );
}

function ItalicText() {
  return (
    <div className="bg-[#0f8f67] relative rounded-[11px] shrink-0 size-[22px]" data-name="Italic Text">
      <div aria-hidden="true" className="absolute border-[0.667px] border-[rgba(0,0,0,0.08)] border-solid inset-0 pointer-events-none rounded-[11px]" />
    </div>
  );
}

function Text40() {
  return (
    <div className="h-[17.333px] relative shrink-0 w-[105.646px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="font-['Segoe_UI:Bold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#6a7d73] text-[13px] whitespace-nowrap">Accent / #0F8F67</p>
      </div>
    </div>
  );
}

function Container63() {
  return (
    <div className="absolute bg-[rgba(245,249,247,0.86)] content-stretch flex gap-[12px] h-[43.333px] items-center left-0 pl-[12.667px] pr-[0.667px] py-[0.667px] rounded-[16px] top-0 w-[279.771px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[0.667px] border-[rgba(223,231,226,0.82)] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <ItalicText />
      <Text40 />
    </div>
  );
}

function ItalicText1() {
  return (
    <div className="bg-[#102118] relative rounded-[11px] shrink-0 size-[22px]" data-name="Italic Text">
      <div aria-hidden="true" className="absolute border-[0.667px] border-[rgba(0,0,0,0.08)] border-solid inset-0 pointer-events-none rounded-[11px]" />
    </div>
  );
}

function Text41() {
  return (
    <div className="h-[17.333px] relative shrink-0 w-[84.76px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="font-['Segoe_UI:Bold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#6a7d73] text-[13px] whitespace-nowrap">Ink / #102118</p>
      </div>
    </div>
  );
}

function Container64() {
  return (
    <div className="absolute bg-[rgba(245,249,247,0.86)] content-stretch flex gap-[12px] h-[43.333px] items-center left-[291.77px] pl-[12.667px] pr-[0.667px] py-[0.667px] rounded-[16px] top-0 w-[279.781px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[0.667px] border-[rgba(223,231,226,0.82)] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <ItalicText1 />
      <Text41 />
    </div>
  );
}

function ItalicText2() {
  return (
    <div className="bg-[#edf2ef] relative rounded-[11px] shrink-0 size-[22px]" data-name="Italic Text">
      <div aria-hidden="true" className="absolute border-[0.667px] border-[rgba(0,0,0,0.08)] border-solid inset-0 pointer-events-none rounded-[11px]" />
    </div>
  );
}

function Text42() {
  return (
    <div className="h-[17.333px] relative shrink-0 w-[107.594px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="font-['Segoe_UI:Bold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#6a7d73] text-[13px] whitespace-nowrap">Canvas / #EDF2EF</p>
      </div>
    </div>
  );
}

function Container65() {
  return (
    <div className="absolute bg-[rgba(245,249,247,0.86)] content-stretch flex gap-[12px] h-[43.333px] items-center left-0 pl-[12.667px] pr-[0.667px] py-[0.667px] rounded-[16px] top-[55.33px] w-[279.771px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[0.667px] border-[rgba(223,231,226,0.82)] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <ItalicText2 />
      <Text42 />
    </div>
  );
}

function ItalicText3() {
  return (
    <div className="bg-[#c47b27] relative rounded-[11px] shrink-0 size-[22px]" data-name="Italic Text">
      <div aria-hidden="true" className="absolute border-[0.667px] border-[rgba(0,0,0,0.08)] border-solid inset-0 pointer-events-none rounded-[11px]" />
    </div>
  );
}

function Text43() {
  return (
    <div className="h-[17.333px] relative shrink-0 w-[99.615px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="font-['Segoe_UI:Bold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#6a7d73] text-[13px] whitespace-nowrap">Warn / #C47B27</p>
      </div>
    </div>
  );
}

function Container66() {
  return (
    <div className="absolute bg-[rgba(245,249,247,0.86)] content-stretch flex gap-[12px] h-[43.333px] items-center left-[291.77px] pl-[12.667px] pr-[0.667px] py-[0.667px] rounded-[16px] top-[55.33px] w-[279.781px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[0.667px] border-[rgba(223,231,226,0.82)] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <ItalicText3 />
      <Text43 />
    </div>
  );
}

function Container62() {
  return (
    <div className="h-[98.667px] relative shrink-0 w-full" data-name="Container">
      <Container63 />
      <Container64 />
      <Container65 />
      <Container66 />
    </div>
  );
}

function Container61() {
  return (
    <div className="absolute bg-[rgba(250,252,251,0.84)] content-stretch flex flex-col h-[172.979px] items-start left-0 pb-[0.667px] pt-[16.667px] px-[16.667px] rounded-[22px] top-0 w-[604.885px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[0.667px] border-[rgba(219,228,222,0.88)] border-solid inset-0 pointer-events-none rounded-[22px]" />
      <Heading8 />
      <Container62 />
    </div>
  );
}

function Heading9() {
  return (
    <div className="h-[28.313px] relative shrink-0 w-full" data-name="Heading 3">
      <p className="absolute font-['Segoe_UI:Bold',sans-serif] leading-[28.32px] left-0 not-italic text-[#102118] text-[24px] top-px whitespace-nowrap">Typography</p>
    </div>
  );
}

function Container69() {
  return (
    <div className="absolute h-[36.667px] left-0 top-0 w-[571.552px]" data-name="Container">
      <p className="absolute font-['Manrope:Bold',sans-serif] font-bold leading-[0] left-0 text-[#6a7d73] text-[0px] top-[0.67px] whitespace-nowrap">
        <span className="font-['Segoe_UI:Bold',sans-serif] leading-[normal] not-italic text-[13px]">Display</span>
        <span className="font-['Segoe_UI:Regular',sans-serif] leading-[normal] not-italic text-[#102118] text-[16px]">{` `}</span>
        <span className="font-['Space_Grotesk:Bold',sans-serif] leading-[normal] text-[#102118] text-[32px]">Space Grotesk 56/0.98</span>
      </p>
    </div>
  );
}

function Container70() {
  return (
    <div className="absolute content-stretch flex h-[29.333px] items-start left-0 top-[48.67px] w-[571.552px]" data-name="Container">
      <p className="flex-[1_0_0] font-['Manrope:Bold',sans-serif] font-bold leading-[0] min-h-px min-w-px not-italic relative text-[#6a7d73] text-[0px]">
        <span className="font-['Segoe_UI:Bold',sans-serif] leading-[normal] text-[13px]">Heading</span>
        <span className="font-['Segoe_UI:Regular',sans-serif] leading-[normal] text-[#102118] text-[16px]">{` `}</span>
        <span className="font-['Segoe_UI:Bold',sans-serif] leading-[normal] text-[#102118] text-[22px]">Manrope 24/1.2</span>
      </p>
    </div>
  );
}

function Container71() {
  return (
    <div className="absolute content-stretch flex h-[21.333px] items-start left-0 top-[90px] w-[571.552px]" data-name="Container">
      <p className="flex-[1_0_0] font-['Manrope:Bold',sans-serif] font-bold leading-[0] min-h-px min-w-px not-italic relative text-[#6a7d73] text-[0px]">
        <span className="font-['Segoe_UI:Bold',sans-serif] leading-[normal] text-[13px]">Body</span>
        <span className="font-['Segoe_UI:Regular',sans-serif] leading-[normal] text-[#102118] text-[16px]">{` `}</span>
        <span className="font-['Segoe_UI:Bold',sans-serif] leading-[normal] text-[#102118] text-[16px]">Manrope 16/1.6</span>
      </p>
    </div>
  );
}

function Container68() {
  return (
    <div className="h-[111.333px] relative shrink-0 w-full" data-name="Container">
      <Container69 />
      <Container70 />
      <Container71 />
    </div>
  );
}

function Container67() {
  return (
    <div className="absolute bg-[rgba(250,252,251,0.84)] content-stretch flex flex-col h-[172.979px] items-start left-[616.89px] pb-[0.667px] pt-[16.667px] px-[16.667px] rounded-[22px] top-0 w-[604.885px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[0.667px] border-[rgba(219,228,222,0.88)] border-solid inset-0 pointer-events-none rounded-[22px]" />
      <Heading9 />
      <Container68 />
    </div>
  );
}

function Heading10() {
  return (
    <div className="h-[28.313px] relative shrink-0 w-full" data-name="Heading 3">
      <p className="absolute font-['Segoe_UI:Bold',sans-serif] leading-[28.32px] left-0 not-italic text-[#102118] text-[24px] top-px whitespace-nowrap">Components</p>
    </div>
  );
}

function Button10() {
  return (
    <div className="absolute content-stretch flex h-[42.667px] items-start left-0 px-[18px] py-[12px] rounded-[999px] top-0 w-[124.563px]" data-name="Button" style={{ backgroundImage: "linear-gradient(161.092deg, rgb(15, 143, 103) 0%, rgb(12, 111, 80) 100%)" }}>
      <p className="font-['Segoe_UI:Extra_Bold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#f3fbf7] text-[14px] text-center tracking-[0.14px] whitespace-nowrap">Primary CTA</p>
    </div>
  );
}

function Button11() {
  return (
    <div className="absolute bg-[#e9f5ef] content-stretch flex h-[42.667px] items-start left-[134.56px] px-[18px] py-[12px] rounded-[999px] top-0 w-[108.667px]" data-name="Button">
      <p className="font-['Segoe_UI:Extra_Bold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#0c6f50] text-[14px] text-center tracking-[0.14px] whitespace-nowrap">Secondary</p>
    </div>
  );
}

function Button12() {
  return (
    <div className="absolute bg-[rgba(240,244,242,0.9)] content-stretch flex h-[42.667px] items-start left-[253.23px] px-[18px] py-[12px] rounded-[999px] top-0 w-[77px]" data-name="Button">
      <p className="font-['Segoe_UI:Extra_Bold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#102118] text-[14px] text-center tracking-[0.14px] whitespace-nowrap">Ghost</p>
    </div>
  );
}

function Container73() {
  return (
    <div className="h-[42.667px] relative shrink-0 w-full" data-name="Container">
      <Button10 />
      <Button11 />
      <Button12 />
    </div>
  );
}

function Text44() {
  return (
    <div className="absolute bg-[rgba(15,143,103,0.12)] content-stretch flex h-[33.333px] items-start left-0 px-[12px] py-[8px] rounded-[999px] top-0 w-[111.063px]" data-name="Text">
      <p className="font-['Segoe_UI:Bold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#6a7d73] text-[13px] tracking-[1.04px] uppercase whitespace-nowrap">Auto mode</p>
    </div>
  );
}

function Text45() {
  return (
    <div className="absolute bg-[rgba(43,138,87,0.12)] content-stretch flex h-[31.333px] items-start left-[121.06px] px-[10px] py-[7px] rounded-[999px] top-px w-[86.854px]" data-name="Text">
      <p className="font-['Segoe_UI:Bold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#6a7d73] text-[13px] whitespace-nowrap">Completed</p>
    </div>
  );
}

function Text46() {
  return (
    <div className="absolute bg-[rgba(196,123,39,0.12)] content-stretch flex h-[31.333px] items-start left-[217.92px] px-[10px] py-[7px] rounded-[999px] top-px w-[79.833px]" data-name="Text">
      <p className="font-['Segoe_UI:Bold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#6a7d73] text-[13px] whitespace-nowrap">Mismatch</p>
    </div>
  );
}

function Container74() {
  return (
    <div className="h-[33.333px] relative shrink-0 w-full" data-name="Container">
      <Text44 />
      <Text45 />
      <Text46 />
    </div>
  );
}

function Container72() {
  return (
    <div className="absolute bg-[rgba(250,252,251,0.84)] content-stretch flex flex-col h-[172.979px] items-start left-[1233.77px] pb-[0.667px] pt-[16.667px] px-[16.667px] rounded-[22px] top-0 w-[604.885px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[0.667px] border-[rgba(219,228,222,0.88)] border-solid inset-0 pointer-events-none rounded-[22px]" />
      <Heading10 />
      <Container73 />
      <Container74 />
    </div>
  );
}

function Container60() {
  return (
    <div className="h-[172.979px] relative shrink-0 w-full" data-name="Container">
      <Container61 />
      <Container67 />
      <Container72 />
    </div>
  );
}

function Article7() {
  return (
    <div className="bg-[rgba(255,255,255,0.86)] flex-[1_0_0] h-[240.313px] min-h-px min-w-px relative rounded-[28px]" data-name="Article">
      <div aria-hidden="true" className="absolute border-[0.667px] border-[rgba(210,222,215,0.85)] border-solid inset-0 pointer-events-none rounded-[28px] shadow-[0px_14px_36px_0px_rgba(19,37,30,0.08)]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[10px] items-start pb-[0.667px] pt-[20.667px] px-[20.667px] relative size-full">
        <Container59 />
        <Container60 />
      </div>
    </div>
  );
}

function Section5() {
  return (
    <div className="content-stretch flex h-[240.313px] items-start relative shrink-0 w-full" data-name="Section">
      <Article7 />
    </div>
  );
}

function MainContent() {
  return (
    <div className="h-[2389.625px] relative shrink-0 w-full" data-name="Main Content">
      <div className="content-stretch flex flex-col gap-[28px] items-start pt-[48px] px-[40px] relative size-full">
        <Section />
        <Section1 />
        <Section5 />
      </div>
    </div>
  );
}

export default function CounterpartyControlCenterFigmaCapture() {
  return (
    <div className="content-stretch flex flex-col items-start pr-[-268px] relative size-full" data-name="Counterparty Control Center Figma Capture" style={{ backgroundImage: "url('data:image/svg+xml;utf8,<svg viewBox=\\'0 0 1960 2389\\' xmlns=\\'http://www.w3.org/2000/svg\\' preserveAspectRatio=\\'none\\'><rect x=\\'0\\' y=\\'0\\' height=\\'100%\\' width=\\'100%\\' fill=\\'url(%23grad)\\' opacity=\\'1\\'/><defs><radialGradient id=\\'grad\\' gradientUnits=\\'userSpaceOnUse\\' cx=\\'0\\' cy=\\'0\\' r=\\'10\\' gradientTransform=\\'matrix(0 -292.72 -339.18 0 0 0)\\'><stop stop-color=\\'rgba(15,143,103,0.14)\\' offset=\\'0\\'/><stop stop-color=\\'rgba(0,0,0,0)\\' offset=\\'0.3\\'/></radialGradient></defs></svg>'), url('data:image/svg+xml;utf8,<svg viewBox=\\'0 0 1960 2389\\' xmlns=\\'http://www.w3.org/2000/svg\\' preserveAspectRatio=\\'none\\'><rect x=\\'0\\' y=\\'0\\' height=\\'100%\\' width=\\'100%\\' fill=\\'url(%23grad)\\' opacity=\\'1\\'/><defs><radialGradient id=\\'grad\\' gradientUnits=\\'userSpaceOnUse\\' cx=\\'0\\' cy=\\'0\\' r=\\'10\\' gradientTransform=\\'matrix(0 -292.72 -339.18 0 1960 0)\\'><stop stop-color=\\'rgba(44,104,160,0.1)\\' offset=\\'0\\'/><stop stop-color=\\'rgba(0,0,0,0)\\' offset=\\'0.28\\'/></radialGradient></defs></svg>'), linear-gradient(rgb(244, 248, 246) 0%, rgb(237, 242, 239) 100%)" }}>
      <MainContent />
    </div>
  );
}