import { create } from "zustand";
export type ModalType = "snedVerificationLink";

interface ModalStore {
  type: ModalType | null;
  data: string | null;
  isOpen: boolean;
  onOpen: (type: ModalType, data?: string) => void;
  onClose: () => void;
}

export const useModal = create<ModalStore>((set) => ({
  type: null,
  data: null,
  isOpen: false,
  onOpen: (type, data) => set({ isOpen: true, type, data: data }),
  onClose: () => set({ type: null, isOpen: false }),
}));
