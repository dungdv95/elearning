"use client";
import { create } from "zustand";
import { Dialog, DialogContent } from "./ui/dialog";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { persist, createJSONStorage } from "zustand/middleware";
import Image from "next/image";

interface StateDialog {
  open: boolean;
  setOpen: (open: boolean) => void;
}

export const useStoreDialog = create<StateDialog>((set: any) => ({
  open: false,
  setOpen(open: boolean) {
    set({ open });
  },
}));

interface User {
  id: number | null;
  username: string | null;
  email: string | null;
  phoneNumber: string | null;
  address: string | null;
}

interface StateLogin {
  isLogged: boolean;
  accessToken: string;
  urlCurrent: string;
  user: User;
  login: ({ accessToken, user }: { accessToken: string; user: User }) => void;
  logout: () => void;
  setUrlCurrent: (urlCurrent: string) => void;
}

export const useLoginStore = create<StateLogin>()(
  persist(
    (set) => ({
      urlCurrent: "",
      isLogged: false,
      accessToken: "",
      user: {
        id: null,
        username: null,
        email: null,
        phoneNumber: null,
        address: null,
      },
      login: ({ accessToken, user }: { accessToken: string; user: User }) =>
        set({
          isLogged: true,
          accessToken: accessToken,
          user: user,
        }),
      logout: () =>
        set({
          isLogged: false,
          accessToken: "",
          user: {
            id: null,
            username: null,
            email: null,
            phoneNumber: null,
            address: null,
          },
        }),
      setUrlCurrent: (urlCurrent: string) => set({ urlCurrent }),
    }),
    {
      name: "10UP_STORE",
      storage: createJSONStorage(() => localStorage),
    }
  )
);

export function LoginDialog() {
  const open = useStoreDialog((state) => state.open);
  const setOpen = useStoreDialog((state) => state.setOpen);
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="sm:max-w-[757px] pt-7 px-20">
        <div className="flex flex-col gap-5">
          <div className="flex items-center justify-center">
            <Image src="/asset/logo.png" alt="" width={102} height={102} />
          </div>
          <div>form</div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
