import Image from "next/image";

export default function FeaturedCourse() {
    return (
        <section style={{backgroundColor: '#000', padding: '50px'}}>
            <div style={{color: '#fff', fontWeight: 700, fontSize: '40px', textTransform: 'uppercase'}}>
                <p style={{textAlign: 'center'}}>Các khóa học nổi bật tại 10up</p>
            </div>
            <div style={{marginTop: '33px'}}>
                <div className="flex">
                    <div className="w-1/3" style={{marginRight: '42px'}}>
                        <div style={{padding:'27px 36px',background: 'linear-gradient(0deg, rgba(255, 0, 80, 0.85), rgba(255, 0, 80, 0.85)), url(https://picsum.photos/id/1043/800/600)', backgroundSize: ' cover', borderRadius: '5px'}}>
                            <div className="flex justify-center">
                                <Image src="/asset/introduce/course1.png"
                                    alt=""
                                    width={104}
                                    height={87}
                                />
                            </div>
                            <div style={{color: '#fff', fontWeight: 700, fontSize: '20px', marginTop: 24}}>
                                <p style={{textAlign: 'center', lineHeight: '24px'}}>Cho thuê BC5500</p>
                                <p style={{textAlign: 'center', lineHeight: '24px'}}>Agency Tiktok</p>
                            </div>

                            <div style={{color: '#fff', fontWeight: 500, fontSize: '13px', lineHeight: '16px', marginTop: '10px'}}>
                                <p style={{textAlign: 'center', lineHeight: '16px'}}>
                                    AgencytikTok.vn cung cấp dịch vụ cho thuê BC5500 Agency TikTok, hỗ trợ bạn về tài khoản quảng cáo để bạn tập trung vào tối ưu hiệu quả kinh doanh...
                                </p>
                            </div>

                            <div className="flex justify-center" style={{marginTop: '24px', marginBottom:'30px'}}>
                                <button style={{color: '#FF0050',fontSize: '10px', fontWeight: 800, borderRadius: '5px', padding: '7px',backgroundColor: '#fff', minWidth: '101px'}}>XEM CHI TIẾT</button>
                            </div>
                        </div>
                    </div>

                    <div className="w-1/3" style={{marginRight: '42px'}}>
                        <div style={{padding:'27px 36px',background: 'linear-gradient(0deg, rgba(255, 94, 21, 0.85), rgba(255, 94, 21, 0.85)), url(https://picsum.photos/id/1043/800/600)', backgroundSize: ' cover', borderRadius: '5px'}}>
                            <div className="flex justify-center" style={{marginTop: '44px'}}>
                                <Image src="/asset/introduce/course2.png"
                                    alt=""
                                    width={104}
                                    height={87}
                                />
                            </div>
                            <div style={{color: '#fff', fontWeight: 700, fontSize: '20px', marginTop: 24}}>
                                <p style={{textAlign: 'center', lineHeight: '24px'}}>Build Agency TikTok</p>
                                <p style={{textAlign: 'center', lineHeight: '24px'}}>5500 tài khoản</p>
                            </div>

                            <div style={{color: '#fff', fontWeight: 500, fontSize: '13px', lineHeight: '16px', marginTop: '10px'}}>
                                <p style={{textAlign: 'center', lineHeight: '16px'}}>
                                Agency Tiktok 5500 tài khoản (tương tự BM2500 Facebook) dành cho chủ doanh nghiệp KDOL, Leader MKT, Agency…
                                </p>
                            </div>

                            <div className="flex justify-center" style={{marginTop: '24px', marginBottom:'50px'}}>
                                <button style={{color: '#FF0050',fontSize: '10px', fontWeight: 800, borderRadius: '5px', padding: '7px',backgroundColor: '#fff', minWidth: '101px'}}>XEM CHI TIẾT</button>
                            </div>
                        </div>
                    </div>

                    <div className="w-1/3">
                        <div style={{padding:'27px 36px',background: 'linear-gradient(0deg, rgba(0,242, 234, 0.85), rgba(0,242, 234, 0.85)), url(https://picsum.photos/id/1043/800/600)', backgroundSize: ' cover', borderRadius: '5px'}}>
                            <div className="flex justify-center">
                                <Image src="/asset/introduce/course3.png"
                                    alt=""
                                    width={104}
                                    height={87}
                                />
                            </div>
                            <div style={{color: '#fff', fontWeight: 700, fontSize: '20px', marginTop: 24}}>
                                <p style={{textAlign: 'center', lineHeight: '24px'}}>Dịch vụ chạy quảng cáo</p>
                                <p style={{textAlign: 'center', lineHeight: '24px'}}>TikTok Ads</p>
                            </div>

                            <div style={{color: '#fff', fontWeight: 500, fontSize: '13px', lineHeight: '16px', marginTop: '10px'}}>
                                <p style={{textAlign: 'center', lineHeight: '16px'}}>
                                TikTok là mạng xã hội có đến 800 triệu người dùng tích cực, là minh chứng cho sự thành công của ứng dụng giải trí trên toàn cầu...
                                </p>
                            </div>

                            <div className="flex justify-center" style={{marginTop: '24px', marginBottom:'30px'}}>
                                <button style={{color: '#FF0050',fontSize: '10px', fontWeight: 800, borderRadius: '5px', padding: '7px',backgroundColor: '#fff', minWidth: '101px'}}>XEM CHI TIẾT</button>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );

}