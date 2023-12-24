"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { Lock, User } from "lucide-react";
import Image from "next/image";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { create } from "zustand";
import { Button } from "./ui/button";
import { Checkbox } from "./ui/checkbox";
import { Dialog, DialogContent } from "./ui/dialog";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "./ui/form";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Textarea } from "./ui/textarea";

interface StateDialog {
  open: boolean;
  setOpen: (open: boolean) => void;
}

export const useStoreRegisterDialog = create<StateDialog>((set: any) => ({
  open: false,
  setOpen(open: boolean) {
    set({ open });
  },
}));

const FormSchema = z.object({
  fullName: z.string().min(1, "Bạn chưa nhập họ và tên"),
  phone: z.string().min(1, `Bạn chưa nhập số điện thoại`),
  email: z.string().min(1, `Bạn chưa nhập email`),
  note: z.string(),
});

type CreateForm = z.infer<typeof FormSchema>;

export function RegisterDialog() {
  const open = useStoreRegisterDialog((state) => state.open);
  const setOpen = useStoreRegisterDialog((state) => state.setOpen);
  const form = useForm<CreateForm>({
    resolver: zodResolver(FormSchema),
    mode: "all",
    defaultValues: {
      fullName: "",
      phone: "",
      email: "",
      note: "",
    },
  });

  const onSubmit = form.handleSubmit(async (data: CreateForm) => {});

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="sm:max-w-[757px] pt-[25px] pb-[42px] px-[80px]">
        <div className="flex flex-col gap-5">
          <div className="flex items-center justify-center">
            <Image src="/asset/logo.png" alt="" width={120} height={120} />
          </div>
          <Form {...form}>
            <form onSubmit={onSubmit}>
              <FormField
                control={form.control}
                name="fullName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-[20px] font-bold">
                      Họ và tên{" "}
                      <span className="ml-[3px] text-[#F00]">(*)</span>
                    </FormLabel>
                    <FormControl>
                      <Input className="h-12 !mt-[5px]" {...field} />
                    </FormControl>

                    <FormMessage />
                  </FormItem>
                )}
              />
              <div className="flex gap-[12px] mt-[17px]">
                <div className="w-1/2">
                  <FormField
                    control={form.control}
                    name="phone"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-[20px] font-bold">
                          Số điện thoại{" "}
                          <span className="ml-[3px] text-[#F00]">(*)</span>
                        </FormLabel>
                        <FormControl>
                          <Input className="h-12 !mt-[5px]" {...field} />
                        </FormControl>

                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <div className="w-1/2">
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-[20px] font-bold">
                          Email{" "}
                          <span className="ml-[3px] text-[#F00]">(*)</span>
                        </FormLabel>
                        <FormControl>
                          <Input className="h-12 !mt-[5px]" {...field} />
                        </FormControl>

                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
              </div>
              <FormField
                control={form.control}
                name="note"
                render={({ field }) => (
                  <FormItem className="mt-[17px]">
                    <FormLabel className="text-[20px] font-bold">
                      Ghi chú
                    </FormLabel>
                    <FormControl>
                      <Textarea rows={6} className="resize-none" {...field} />
                    </FormControl>

                    <FormMessage />
                  </FormItem>
                )}
              />
              <div className="flex mt-[34px] mb-[19px]">
                <Button
                  type="submit"
                  className="h-12 w-full rounded text-[20px] font-semibold"
                >
                  Đăng ký
                </Button>
              </div>
              <span className="text-[15px] font-normal text-[#FF0050]">
                Bạn đã có tài khoản ? Đăng nhập ngay
              </span>
            </form>
          </Form>
          {/* <Form {...form}>
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
          </Form> */}
        </div>
      </DialogContent>
    </Dialog>
  );
}
