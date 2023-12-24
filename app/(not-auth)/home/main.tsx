export default function MainPage() {
  return (
    <div className="container mx-auto !p-0">
      <section>
        <div className="relative overflow-hidden bg-[url('/asset/home/home-gradient.png')]">
          <img
            src="/asset/home/home1.png"
            alt=""
            className="absolute inset-0 -z-10 h-full w-full object-cover"
          />

          <div className="flex flex-col mt-[104px] mb-[82px]">
            <span className="text-center text-[50px] leading-[30px] font-black text-white uppercase">
              10UP.VN
            </span>
            <span className="mt-[20px] text-center text-[23px] leading-[30px] font-extrabold text-white uppercase">
              HỌC BÀI BẢN – LÀM TẬN TÂM – NÂNG TẦM HIỆU QUẢ
            </span>
            <div className="mt-[28px]">3</div>
            <div className="mt-[12px]">4</div>
            <div className="mt-[12px]">5</div>
          </div>
        </div>
      </section>
    </div>
  );
}
