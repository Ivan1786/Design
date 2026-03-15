import { create } from 'zustand';

export type TabType = 'Обзор' | 'Документы' | 'Отчёт' | 'История';

export interface DocumentItem {
  id: string;
  name: string;
  type: string;
  status: string;
  spark: string;
  sparkColor: 'green' | 'orange' | 'gray' | 'blue';
}

interface AppState {
  activeTab: TabType;
  setActiveTab: (tab: TabType) => void;
  documents: DocumentItem[];
  addDocuments: (files: File[]) => void;
}

export const useAppStore = create<AppState>((set) => ({
  activeTab: 'Обзор',
  setActiveTab: (tab) => set({ activeTab: tab }),
  documents: [
    { id: '1', name: "ogrn.pdf", type: "Свидетельство ОГРН", status: "Completed", spark: "OK", sparkColor: "green" },
    { id: '2', name: "inn.pdf", type: "Свидетельство ИНН", status: "Completed", spark: "OK", sparkColor: "green" },
    { id: '3', name: "rules.pdf", type: "Устав", status: "Completed", spark: "Mismatch", sparkColor: "orange" },
    { id: '4', name: "rent_contract.pdf", type: "Договор аренды", status: "Completed", spark: "Skipped", sparkColor: "gray" },
  ],
  addDocuments: (files) => set((state) => {
    const newDocs: DocumentItem[] = files.map(f => ({
      id: Math.random().toString(36).substring(7),
      name: f.name,
      type: "Неизвестно",
      status: "В очереди",
      spark: "Pending",
      sparkColor: "blue"
    }));
    return { documents: [...newDocs, ...state.documents] };
  })
}));
