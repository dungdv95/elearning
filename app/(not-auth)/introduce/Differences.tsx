import Image from "next/image";


const DiffItem = (props: { title: any, sub_title: any,img_url: any}) =>{
    const {title, sub_title, img_url} = props;
    return(
        <div style={{borderRadius: '10px', backgroundColor: '#fff', padding: '10px'}}>
            <div className="flex">
                <div>

                </div>
                <div>
                    <div>{title}</div>
                    <div>{sub_title}</div>
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
            img_url: '/'
        }, 
        {
            title: 'Đào tạo trực tuyến',
            sub_title: 'Tiktok Marketing mang đến quy trình đào tạo trực tuyến E-Learning video bài giảng, học mọi lúc mọi nơi, luôn đảm bảo thuận tiện nhất cho học viên', 
            img_url: '/'
        }, 
        {
            title: 'Đào tạo trực tuyến',
            sub_title: 'Tiktok Marketing mang đến quy trình đào tạo trực tuyến E-Learning video bài giảng, học mọi lúc mọi nơi, luôn đảm bảo thuận tiện nhất cho học viên', 
            img_url: '/'
        },
        {
            title: 'Đào tạo trực tuyến',
            sub_title: 'Tiktok Marketing mang đến quy trình đào tạo trực tuyến E-Learning video bài giảng, học mọi lúc mọi nơi, luôn đảm bảo thuận tiện nhất cho học viên', 
            img_url: '/'
        }
    ]
    return(
        <section style={{backgroundColor: '#000', padding: '50px'}}>
            <div style={{color: '#fff', fontWeight: 700, fontSize: '40px', textTransform: 'uppercase'}}>
                <p style={{textAlign: 'center'}}>ĐIỂM KHÁC BIỆT CỦA CHÚNG TÔI</p>
            </div>
            <div className="flex">
                {items.map(item => (
                    <div className="w-1/3" key={item.title}>
                        <DiffItem title={item.title} sub_title={item.sub_title} img_url={item.img_url} />
                    </div>
                ))}
                
            </div>
        </section>
    )
}