import Image from "next/image";


const DiffItem = (props: { title: any, sub_title: any,img_url: any}) =>{
    const {title, sub_title, img_url} = props;
    return(
        <div style={{borderRadius: '10px', backgroundColor: '#fff', padding: '10px',maxWidth:'310px'}}>
            <div className="flex">
                <div style={{marginRight: '10px'}}>
                    <div className="flex justify-center items-center" style={{width: '67px', height:'67px',backgroundColor:'#FF0050', borderRadius: '50%', overflow:'hidden'}}>
                        <Image src={img_url}
                            alt=""
                            width={41}
                            height={41}
                        />
                    </div>
                </div>
                <div>
                    <div style={{color:'#FF0050', fontWeight:700, fontSize: '13px'}}>{title}</div>
                    <div style={{fontWeight:400, fontSize: '8px'}}>{sub_title}</div>
                </div>
            </div>
        </div>
    )
}

export default function Differences() {
    const items = [
        {
            title: 'Đào tạo trực tuyến',
            sub_title: 'Tiktok Marketing mang đến quy trình đào tạo trực tuyến E-Learning video bài giảng, học mọi lúc mọi nơi, luôn đảm bảo thuận tiện nhất cho học viên', 
            img_url: '/asset/introduce/Laptop.png'
        }, 
        {
            title: 'Đội Ngũ Sân Khấu',
            sub_title: 'Phát triển đội ngũ streamer chuyên nghiệp, năng lực thu hút fans mới, năng lực làm chủ sân khấu, trở thành ngôi sao', 
            img_url: '/asset/introduce/Cinema.png'
        }, 
        {
            title: 'Đội Ngũ Bán Hàng',
            sub_title: 'Phát triển đội ngũ bán hàng chuyên nghiệp, giải quyết vấn đề đầu ra cho các nhãn hàng, các mặt hàng nông sản, lợi nhuận cực khủng', 
            img_url: '/asset/introduce/user.png'
        },
        {
            title: 'Khóa Học Chuyên Sâu',
            sub_title: 'Với phương châm “Cầm tay chỉ việc” theo từng ngành hàng, áp dụng chi tiết & cụ thể chúng tôi hướng đến việc thực nghiệm luôn đảm bảo thông tin cho học viên', 
            img_url: '/asset/introduce/Vector.png'
        },
        {
            title: 'Nhân Sự Đào Tạo',
            sub_title: 'Chúng tôi có một đội ngũ nhân sự giàu kinh nghiệm với những giảng viên có kinh nghiệm lâu năm trong ngành và đội ngũ kỹ thuật sẳn sàng hỗ trợ học viên', 
            img_url: '/asset/introduce/Teacher.png'
        },
        {
            title: 'Giáo Trình Giảng Dạy',
            sub_title: 'Tiktor Marketing luôn cập nhật những giáo trình mới nhất và những kiến thức trending để đảm bảo cho học viên luôn được tiếp cận các thông tin mới nhất', 
            img_url: '/asset/introduce/Book.png'
        }
    ]
    return(
        <section style={{backgroundColor: '#000', padding: '50px'}}>
            <div style={{color: '#fff', fontWeight: 700, fontSize: '40px', textTransform: 'uppercase'}}>
                <p style={{textAlign: 'center'}}>ĐIỂM KHÁC BIỆT CỦA CHÚNG TÔI</p>
            </div>
            <div className="flex flex-wrap justify-between">
                {items.map(item => (
                    <div className="w-1/3" key={item.title} style={{marginTop: '50px', maxWidth:'310px'}}>
                        <DiffItem title={item.title} sub_title={item.sub_title} img_url={item.img_url} />
                    </div>
                ))}
                
            </div>
        </section>
    )
}