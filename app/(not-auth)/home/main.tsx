import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function MainPage() {
  return (
    <div className="container mx-auto !p-0 text-white ">
      <section>
        <div className="relative overflow-hidden bg-[url('/asset/home/home-gradient.png')]">
          <img
            src="/asset/home/home1.png"
            alt=""
            className="absolute inset-0 -z-10 h-full w-full object-cover"
          />

          <div className="flex flex-col mt-[104px] mb-[82px]">
            <span className="text-center text-[50px] leading-[30px] font-black uppercase">
              10UP.VN
            </span>
            <span className="mt-[20px] text-center text-[23px] leading-[30px] font-extrabold uppercase">
              HỌC BÀI BẢN - LÀM TẬN TÂM - NÂNG TẦM HIỆU QUẢ
            </span>
            <div className="flex mt-[28px] gap-[5px] justify-center items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="22"
                height="22"
                viewBox="0 0 22 22"
                fill="none"
              >
                <path
                  d="M6.08062 9.99994L10.1451 1C10.9536 1 11.729 1.31607 12.3006 1.87867C12.8723 2.44128 13.1935 3.20434 13.1935 3.99998V7.99996H18.9447C19.2393 7.99667 19.5311 8.05646 19.7999 8.17517C20.0687 8.29389 20.308 8.46869 20.5013 8.68747C20.6946 8.90624 20.8373 9.16377 20.9194 9.4422C21.0016 9.72063 21.0212 10.0133 20.977 10.2999L19.5747 19.2999C19.5012 19.7768 19.2551 20.2115 18.8816 20.5239C18.5082 20.8363 18.0326 21.0053 17.5425 20.9999H6.08062M6.08062 9.99994V20.9999M6.08062 9.99994H3.03225C2.49326 9.99994 1.97635 10.2107 1.59523 10.5857C1.21411 10.9608 1 11.4695 1 11.9999V18.9999C1 19.5303 1.21411 20.039 1.59523 20.4141C1.97635 20.7892 2.49326 20.9999 3.03225 20.9999H6.08062"
                  stroke="white"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <div className="text-[20px] leading-[30px] font-semibold ">
                Giáo trình Livestream của trường{" "}
                <span className="font-extrabold">Đại Học Thanh Hoa</span> Trung
                Quốc danh tiếng.
              </div>
            </div>
            <div className="mt-[12px] text-center text-[20px] leading-[30px] font-semibold">
              Đội ngũ giảng viên chất lượng hàng đầu{" "}
              <span className="font-black">Việt Nam.</span>
            </div>
            <div className="flex mt-[12px] gap-[5px] justify-center items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="22"
                height="22"
                viewBox="0 0 22 22"
                fill="none"
              >
                <path
                  d="M6.08062 9.99994L10.1451 1C10.9536 1 11.729 1.31607 12.3006 1.87867C12.8723 2.44128 13.1935 3.20434 13.1935 3.99998V7.99996H18.9447C19.2393 7.99667 19.5311 8.05646 19.7999 8.17517C20.0687 8.29389 20.308 8.46869 20.5013 8.68747C20.6946 8.90624 20.8373 9.16377 20.9194 9.4422C21.0016 9.72063 21.0212 10.0133 20.977 10.2999L19.5747 19.2999C19.5012 19.7768 19.2551 20.2115 18.8816 20.5239C18.5082 20.8363 18.0326 21.0053 17.5425 20.9999H6.08062M6.08062 9.99994V20.9999M6.08062 9.99994H3.03225C2.49326 9.99994 1.97635 10.2107 1.59523 10.5857C1.21411 10.9608 1 11.4695 1 11.9999V18.9999C1 19.5303 1.21411 20.039 1.59523 20.4141C1.97635 20.7892 2.49326 20.9999 3.03225 20.9999H6.08062"
                  stroke="white"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <div className="text-[20px] leading-[30px] font-semibold ">
                Khóa học Livestream đa nền tảng với{" "}
                <span className="font-extrabold">100 video</span> chất lượng kèm
                bài tập thực hành.
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="relative overflow-hidden bg-[url('/asset/home/caro-bg.png')]">
          <div className="mt-[48px] mb-[57px]">
            <div className="flex justify-center">
              <span className="text-center text-[25px] leading-[40px] font-extrabold text-[#FF0050] max-w-[835px]">
                KHÓA HỌC TẠI 10UP CUNG CẤP TOÀN DIỆN KỸ NĂNG LIVESTREAM CẦM TAY
                CHỈ VIỆC TỪ “KHÔNG” ĐẾN “THÀNH CÔNG”
              </span>
            </div>
            <div className="mt-[35px] flex gap-[60px]">
              <div className="w-1/2 pl-[121px]">
                <div className="h-[409px] rounded-[5px] bg-cover pt-[26px] pb-[36px] bg-[linear-gradient(0deg,#000000cc,#000000cc),url('/asset/home/home2.png')]">
                  <div className="text-center text-[18px] font-extrabold leading-[30px]">
                    KHÓA HỌC LIVESTREAM TOÀN DIỆN
                  </div>
                  <div className="mt-[10px] mx-[14px] flex flex-col gap-[5px]">
                    <span className="text-[15px] font-extrabold leading-[30px]">
                      Chương trình học giúp học viên nắm được toàn bộ:
                    </span>
                    <div className="font-medium text-[15px] leading-[30px] space-y-1.5">
                      <p>- Lựa chọn lĩnh vực phù hợp với bản thân</p>
                      <p>
                        - Cần chuẩn bị gì cho một phiên livestream chuyên nghiệp
                      </p>
                      <p>
                        - Làm thế nào để xây dựng thương hiệu cá nhân, kiến mình
                        trở lên nổi bật
                      </p>
                      <p>- Hướng dẫn set-up phiên live đa lĩnh vực</p>
                    </div>
                  </div>
                  <div className="flex justify-center mt-[22px]">
                    <Button
                      className="h-[51px] w-[180px] py-[10px] px-[34px] text-[#FF0050] text-[18px] font-extrabold leading-[30px] hover:text-[#FF0050]"
                      variant="outline"
                    >
                      Xem chi tiết
                    </Button>
                  </div>
                </div>
              </div>
              <div className="w-1/2 pr-[121px]">
                <div className="h-[409px] rounded-[5px] bg-cover pt-[26px] pb-[36px] bg-[linear-gradient(0deg,#000000cc,#000000cc),url('/asset/home/home2.png')]">
                  <div className="flex justify-center">
                    <span className="text-[18px] font-extrabold leading-[30px] w-[384px]">
                      KHÓA NÂNG CAO CHUYÊN SÂU TỪNG NGÀNH HÀNG
                    </span>
                  </div>
                  <div className="mt-[10px] mx-[14px] flex flex-col gap-[5px]">
                    <span className="text-[15px] font-extrabold leading-[30px]">
                      Đến với khóa học chuyên sâu cho từng ngành hàng, học viên
                      sẽ nắm được:
                    </span>
                    <div className="font-medium text-[15px] leading-[30px] space-y-1.5">
                      <p>- Học tập với giảng viên đầu ngành</p>
                      <p>- Tham gia vào cộng đồng</p>
                      <p>- …….</p>
                    </div>
                  </div>
                  <div className="flex justify-center mt-[58px]">
                    <Button
                      className="h-[51px] w-[180px] py-[10px] px-[34px] text-[#FF0050] text-[18px] font-extrabold leading-[30px] hover:text-[#FF0050]"
                      variant="outline"
                    >
                      Xem chi tiết
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="relative overflow-hidden bg-[linear-gradient(0deg,#000000cc,#000000cc),url('/asset/home/home3.png')]">
          <div className="my-[50px] flex gap-[5px]">
            <div className="w-1/2 ml-[50px]">
              <Image
                src="/asset/home/home4.png"
                alt=""
                width={519}
                height={494}
              />
            </div>
            <div className="w-1/2 mr-[42px]">
              <div className="h-full flex flex-col justify-center items-center space-y-[30px]">
                <div className="text-[25px] font-extrabold leading-[40px] text-center">
                  10UP.VN ĐÃ PHÁT TRIỂN GIAO DIỆN THÔNG MINH HỌC “LƯỚT” TRÊN
                  ĐIỆN THOẠI VÀ MÁY TÍNH
                </div>

                <div className="text-[25px] font-extrabold leading-[40px] text-center">
                  GIÚP HỌC VIÊN TIẾP CẬN CHƯƠNG TRÌNH CỦA 10UP HIỆU QUẢ VÀ THUẬN
                  TIỆN.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="py-[21px] px-[52px] text-black text-center text-[25px] font-extrabold leading-[40px]">
          10UP.VN LÀ SẢN PHẨM CỦA HỌC VIÊN LIVESTREAM 10UP HỆ THỐNG GIÁO DỤC
          TRỰC TUYẾN HÀNG ĐẦU VIỆT NAM
        </div>
      </section>
    </div>
  );
}
