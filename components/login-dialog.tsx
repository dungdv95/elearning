"use client";
import { create } from "zustand";
import { Dialog, DialogContent } from "./ui/dialog";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { persist, createJSONStorage } from "zustand/middleware";
import Image from "next/image";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "./ui/form";
import { Lock, User } from "lucide-react";
import { Separator } from "./ui/separator";
import { Checkbox } from "./ui/checkbox";
import { Button } from "./ui/button";

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

const FormSchema = z.object({
  accName: z.string().min(1, "Bạn chưa nhập tài khoản đăng nhập"),
  password: z.string().min(1, `Bạn chưa nhập mật khẩu`),
});

type CreateForm = z.infer<typeof FormSchema>;

export function LoginDialog() {
  const open = useStoreDialog((state) => state.open);
  const setOpen = useStoreDialog((state) => state.setOpen);
  const form = useForm<CreateForm>({
    resolver: zodResolver(FormSchema),
    mode: "all",
    defaultValues: {
      accName: "",
      password: "",
    },
  });

  const onSubmit = form.handleSubmit(async (data: CreateForm) => {});

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="sm:max-w-[757px] pt-7 px-20">
        <div className="flex flex-col gap-5">
          <div className="flex items-center justify-center">
            <Image src="/asset/logo.png" alt="" width={102} height={102} />
          </div>
          <Form {...form}>
            <form onSubmit={onSubmit}>
              <div className="flex flex-col gap-8">
                <FormField
                  control={form.control}
                  name="accName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-base">
                        Email / Số điện thoại
                      </FormLabel>
                      <div className="relative mt-2 rounded-md shadow-sm">
                        <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center px-3 my-3 border-r">
                          <User className="h-[22px] w-[22px]" />
                        </div>
                        <FormControl>
                          <Input className="h-12 pl-[55px]" {...field} />
                        </FormControl>
                      </div>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="password"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-base">Mật khẩu</FormLabel>
                      <div className="relative mt-2 rounded-md shadow-sm">
                        <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center px-3 my-3 border-r">
                          <Lock className="h-[22px] w-[22px]" />
                        </div>
                        <FormControl>
                          <Input className="h-12 pl-[55px]" {...field} />
                        </FormControl>
                      </div>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <div className="mt-5 flex justify-between items-center">
                <div className="flex items-center space-x-2">
                  <Checkbox id="terms" />
                  <Label
                    htmlFor="terms"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-[#FF0050]"
                  >
                    Ghi nhớ tài khoản
                  </Label>
                </div>
                <span className="text-[#FF0050]">Quên mật khẩu ?</span>
              </div>
              <div className="flex flex-col mt-[34px] gap-5">
                <Button type="submit" className="h-12">
                  Đăng nhập
                </Button>
                <Button
                  type="button"
                  className="h-12 text-[#FF0050] hover:text-[#f92567]"
                  variant="outline"
                >
                  Đăng ký
                </Button>
              </div>
            </form>
          </Form>
        </div>
      </DialogContent>
    </Dialog>
  );
}
