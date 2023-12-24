import { Separator } from "@/components/ui/separator";

export default function MainPage() {
  return (
    <div className="container mx-auto !p-0">
      <div className="px-[50px] pt-[12px]">
        <span className="text-[#FF0050] text-[10px] font-bold">
          TRANG CHỦ / TRỢ GIÚP
        </span>
        <div className="flex mt-[18px] gap-[15px] items-center">
          <span className="text-[#FF0050] text-[35px] font-extrabold">
            TRỢ GIÚP
          </span>
          <Separator className="w-[854px] bg-[#ff0050b3]" />
        </div>
        <div>123</div>
      </div>
    </div>
  );
}
