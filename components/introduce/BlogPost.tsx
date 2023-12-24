import Image from "next/image";


const Post = (props: {img_url: any, title: any, sumary: any, create_date: any}) => {
    const {img_url, title, sumary, create_date} = props;

    return (
        <div style={{border: '1px solid #D8D8D8', borderRadius: '10px', overflow: 'hidden'}}>
            <div>
                <Image src={img_url}
                        alt=""
                        width={330}
                        height={216}
                    />
            </div>
            <div style={{ marginTop: '16px',padding: '0px 16px'}}>
                <p style={{fontWeight: 700, fontSize: '17px'}}>
                    {title}
                </p>
            </div>
            <div style={{marginTop: '8px', paddingLeft: '16px', paddingRight: '16px'}}>
                <p style={{fontWeight: 400, fontSize: 12}}>
                    {sumary}
                </p>
                <div style={{marginTop: 13, marginBottom: 16}}>
                    <a style={{textTransform: 'uppercase', color: '#FF0050', fontWeight: 700, fontSize: 15}}>
                        Xem chi tiết...
                    </a>
                </div>
            </div>

            <div style={{borderTop: '1px solid #D8D8D8', padding: '10px 16px'}}>
                <p style={{fontWeight: 400, fontSize: 17}}>
                    {create_date}
                </p>
            </div>
        </div>
    )
}

export default function BlogPost() {

    const posts = [
        {   
            id:1,
            img_url: '/asset/introduce/post1.png',
            title: 'Build BM Tiktok Ads trả sau chuyên chạy TPCN',
            sumary: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1",
            create_date: '05/12/2023',
        },
        {   
            id:2,
            img_url: '/asset/introduce/post2.png',
            title: 'Build BM Tiktok Ads trả sau chuyên chạy TPCN',
            sumary: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1",
            create_date: '05/12/2023',
        },
        {   
            id:3,
            img_url: '/asset/introduce/post3.png',
            title: 'Build BM Tiktok Ads trả sau chuyên chạy TPCN',
            sumary: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1",
            create_date: '05/12/2023',
        }
    ]

    return(
        <section style={{padding: '42px 50px 43px 50px'}}>
            <div style={{color: '#FF0050', fontWeight: 700, fontSize: '40px', textTransform: 'uppercase'}}>
                <p style={{textAlign: 'center'}}>Bài viết mới nhất</p>
            </div>
            <div className="flex flex-wrap justify-between" style={{marginTop: '25px'}}>
                {
                    posts.map(post => (
                        <div className="w-1/3" key={post.id} style={{ maxWidth: '330px'}}>
                            <Post img_url={post.img_url} title={post.title} sumary={post.sumary} create_date={post.create_date}/>
                        </div>
                    ))
                }
            </div>
        </section>
    )
}