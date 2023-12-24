import Image from "next/image";
import FeaturedCourse from "./FeaturedCourse";
import Quality from "./Quality";
import Differences from "./Differences";
import BlogPost from "@/components/introduce/BlogPost";

export default function MainPage() {
  return (

    <div className="container mx-auto !p-0">
      <section className="flex items-center">
        <div className="w-1/2">
          <Image src="/asset/introduce/img_intro.png"
            alt=""
            width={567}
            height={449}
          />
        </div>

        <div className="w-1/2" style={{paddingLeft: '44px'}}>
          <div className="" >
            <div style={{fontWeight: 800, fontSize: '30px', textTransform: 'uppercase'}}>Khóa học 10UP.VN</div>
            <div className="" style={{fontWeight: 500, fontSize: '15px', marginTop: '24px', lineHeight: '18.83px', maxWidth: '460px'}}>
              Chúng ta đang sống trong thời đại sân khấu, thời đại của các bạn trẻ năng động, nhiệt huyết. Livestream thực sự đã trở thành cánh cửa thần kỳ để thế hệ sân khấu chia sẻ niềm đam mê.
            </div>
            <div className="" style={{fontWeight: 500, fontSize: '10px', marginTop: '10px', lineHeight: '20px', maxWidth: '460px'}}>
            Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s, when an unknown printer took a galley 
            of type and scrambled it to make a type specimen book.Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            </div>
          </div>
          <div style={{marginTop: '15px'}}>
            <button style={{width: '152px', height: '34px', backgroundColor: '#FF0050', borderRadius: '5px', textTransform: 'uppercase', fontSize: '13px', fontWeight: 700, color: '#fff'}}>
              Tư vấn ngay
            </button>

          </div>
        </div>
      </section>

      <section>
        <div style={{padding: "43.89px 156.61px",background: 'linear-gradient(0deg, rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.9)), url(https://picsum.photos/id/1043/800/600)',backgroundSize: ' cover'}}>
          <div style={{color: '#fff', textTransform: 'uppercase', fontWeight: 700, fontSize: '30px', textAlign:'center'}}>
            Bạn đang quan tâm đên dịch vụ nào?
          </div>
          <div style={{color: '#fff', fontWeight: 400, fontSize: '13px', lineHeight: '15.85px', textAlign:'center', marginTop: '5px'}}>
            <p>Hãy cho chúng tôi biết bạn đang quan tâm đến dịch vụ nào, chúng tôi sẽ hỗ trợ tư vấn và</p>
            <p>đồng hành cùng bạn</p>
          </div>
          <div style={{marginTop: '1rem'}}>
            <div className="flex">
            <input placeholder="Họ và tên" style={{fontWeight: 500, fontSize: '15px', color: '#979797', padding:'16px 12px', minWidth: '260px', marginRight: '33px'}}>
            </input>

            <input placeholder="Số điện thoại" style={{fontWeight: 500, fontSize: '15px', color: '#979797', padding:'16px 12px', minWidth: '340px', marginRight: '33px'}}>
            </input>

            <button style={{backgroundColor: '#FF0050', textTransform: 'uppercase', fontSize: '13px', fontWeight: 700, color: '#fff', minWidth: '169px'}}>Tư vấn ngay</button>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div style={{padding: '49px 48px 52px 52px'}}>
          <div style={{color: '#FF0050', fontWeight: 800, fontSize: '40px', textTransform: 'uppercase'}}>
            <p style={{textAlign: 'center'}}>Tham gia khóa học tại 10UP.VN</p>
            <p style={{textAlign: 'center'}}>bạn sẽ nhận được</p>
          </div>
          <div className="flex" style={{marginTop: '50px'}}>
            <div className="w-1/2" style={{marginRight: 21}}>
              <div style={{padding: '40px 15px', background: 'linear-gradient(0deg, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), url(https://picsum.photos/id/1043/800/600)',
              backgroundSize: ' cover', borderRadius: '5px'}}>
                <div style={{color: '#fff', fontWeight: 800, fontSize: '25px', textTransform: 'uppercase'}}>
                  <p style={{textAlign: 'center'}}>Khóa học livestream</p>
                  <p style={{textAlign: 'center'}}>toàn diện</p>
                </div>
                <div style={{color: '#fff', fontWeight: 500, fontSize: '15px', marginTop: '24px'}}>
                  <p>- Lựa chọn lĩnh vực phù hợp với bản thân</p>
                  <p style={{marginTop: '7px'}}>- Cần chuẩn bị gì cho một phiên livestream chuyên nghiệp</p>
                  <p style={{marginTop: '7px'}}>- Làm thế nào để xây dựng thương hiệu cá nhân, trở lên nổi bật</p>
                  <p style={{marginTop: '7px'}}>- Hướng dẫn set-up phiên live đa lĩnh vực</p>
                  <p style={{marginTop: '7px'}}>- Lựa chọn lĩnh vực phù hợp với bản thân</p>
                  <p style={{marginTop: '7px'}}>- Cần chuẩn bị gì cho một phiên livestream chuyên nghiệp</p>
                  <p style={{marginTop: '7px'}}>- Làm thế nào để xây dựng thương hiệu cá nhân, trở lên nổi bật</p>
                  <p style={{marginTop: '7px'}}>- Hướng dẫn set-up phiên live đa lĩnh vực</p>
                  <p style={{marginTop: '7px'}}>- Lựa chọn lĩnh vực phù hợp với bản thân</p>
                  <p style={{marginTop: '7px'}}>- Cần chuẩn bị gì cho một phiên livestream chuyên nghiệp</p>
                  <p style={{marginTop: '7px'}}>- Làm thế nào để xây dựng thương hiệu cá nhân, trở lên nổi bật</p>
                  <p style={{marginTop: '7px'}}>- Hướng dẫn set-up phiên live đa lĩnh vực</p>
                </div>
                <div className="flex justify-center" style={{marginTop: '50px'}}>
                  <button style={{color: '#FF0050',fontSize: '18px', fontWeight: 800, borderRadius: '5px', padding: '14px',backgroundColor: '#fff', minWidth: '214px'}}>Xem chi tiết</button>
                </div>
              </div>
            </div>
            <div className="w-1/2">
              <div style={{padding: '40px 15px', background: 'linear-gradient(0deg, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), url(https://picsum.photos/id/1043/800/600)',
              backgroundSize: ' cover', borderRadius: '5px'}}>
                <div style={{color: '#fff', fontWeight: 800, fontSize: '25px', textTransform: 'uppercase'}}>
                  <p style={{textAlign: 'center'}}>Khóa nâng cao chuyên sâu</p>
                  <p style={{textAlign: 'center'}}>từng ngành hàng</p>
                </div>
                <div style={{color: '#fff', fontWeight: 500, fontSize: '15px', marginTop: '24px'}}>
                  <p>- Lựa chọn lĩnh vực phù hợp với bản thân</p>
                  <p style={{marginTop: '7px'}}>- Cần chuẩn bị gì cho một phiên livestream chuyên nghiệp</p>
                  <p style={{marginTop: '7px'}}>- Làm thế nào để xây dựng thương hiệu cá nhân, trở lên nổi bật</p>
                  <p style={{marginTop: '7px'}}>- Hướng dẫn set-up phiên live đa lĩnh vực</p>
                  <p style={{marginTop: '7px'}}>- Lựa chọn lĩnh vực phù hợp với bản thân</p>
                  <p style={{marginTop: '7px'}}>- Cần chuẩn bị gì cho một phiên livestream chuyên nghiệp</p>
                  <p style={{marginTop: '7px'}}>- Làm thế nào để xây dựng thương hiệu cá nhân, trở lên nổi bật</p>
                  <p style={{marginTop: '7px'}}>- Hướng dẫn set-up phiên live đa lĩnh vực</p>
                  <p style={{marginTop: '7px'}}>- Lựa chọn lĩnh vực phù hợp với bản thân</p>
                  <p style={{marginTop: '7px'}}>- Cần chuẩn bị gì cho một phiên livestream chuyên nghiệp</p>
                  <p style={{marginTop: '7px'}}>- Làm thế nào để xây dựng thương hiệu cá nhân, trở lên nổi bật</p>
                  <p style={{marginTop: '7px'}}>- Hướng dẫn set-up phiên live đa lĩnh vực</p>
                </div>
                <div className="flex justify-center" style={{marginTop: '50px'}}>
                  <button style={{color: '#FF0050',fontSize: '18px', fontWeight: 800, borderRadius: '5px', padding: '14px',backgroundColor: '#fff', minWidth: '214px'}}>Xem chi tiết</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <FeaturedCourse/>
      <Quality/>
      <Differences/>
      <BlogPost />
    </div>
  );
}
