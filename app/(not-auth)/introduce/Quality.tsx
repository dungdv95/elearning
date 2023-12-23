import Image from "next/image";

export default function Quality() {

    return (
        <section style={{padding: '55px 50px 43px 50px'}}>
            <div style={{color: '#FF0050', fontWeight: 700, fontSize: '40px', textTransform: 'uppercase'}}>
                <p style={{textAlign: 'center'}}>Chất lượng của 10UP.VN</p>
            </div>
            <div className="flex">
                <div className="w-1/3" style={{marginRight: '42px', marginTop: '25px'}}>
                    <div style={{color: '#000', fontWeight: 700, fontSize: '18px'}}>
                        <p style={{textAlign: 'center'}}>Giáo trình chính quy & bài bản từ</p>
                        <p style={{textAlign: 'center'}}>Đại học Thanh Hoa </p>
                    </div>

                    <div style={{color: '#000', fontWeight: 600, fontSize: '10px'}}>
                        <p style={{lineHeight: '15px', textAlign: 'center'}}>Giáo trình được xây dựng theo tiêu chuẩn cao, cập nhật và phù hợp với các ngành học. 
                            Đại học Thanh Hoa cam kết mang đến cho sinh viên một môi trường học tập chất lượng và chuẩn mực.</p>
                    </div>
                    
                    <div className="flex justify-center" style={{marginTop: 10}}>
                        <div style={{color: '#FF0050', fontSize: '10px', fontWeight: 700}}>XEM CHI TIẾT ...</div>
                    </div>
                </div>

                <div className="w-1/3" style={{marginRight: '42px', marginTop: '25px'}}>
                    <div style={{color: '#000', fontWeight: 700, fontSize: '18px'}}>
                        <p style={{textAlign: 'center'}}>Đội ngũ giảng viên hàng đầu, đào</p>
                        <p style={{textAlign: 'center'}}>tạo chất lượng</p>
                    </div>

                    <div style={{color: '#000', fontWeight: 600, fontSize: '10px'}}>
                        <p style={{lineHeight: '15px', textAlign: 'center'}}>Đội ngũ giảng viên hàng đầu: Đội ngũ giảng viên chất lượng, giàu năng lượng đồng hành cùng bạn: Rèn luyện khí chất của một IDOL, 
                        thuần thục khả năng bán hàng đỉnh cao</p>
                    </div>
                    
                    <div className="flex justify-center" style={{marginTop: 10}}>
                        <div style={{color: '#FF0050', fontSize: '10px', fontWeight: 700}}>XEM CHI TIẾT ...</div>
                    </div>

                </div>

                <div className="w-1/3" style={{marginRight: '42px', marginTop: '25px'}}>
                    <div style={{color: '#000', fontWeight: 700, fontSize: '18px'}}>
                        <p style={{textAlign: 'center'}}>Quy trình đào tạo và dạy học đầy</p>
                        <p style={{textAlign: 'center'}}>đủ & hiệu quả</p>
                    </div>

                    <div style={{color: '#000', fontWeight: 600, fontSize: '10px'}}>
                        <p style={{lineHeight: '15px', textAlign: 'center'}}>Chúng tôi áp dụng quy trình: 10% lý thuyết, 90% thực hành, áp dụng ngay và luôn chỉ sau 10hrs học, luôn đảm bảo kiến thức mà học viên được tiếp thu</p>
                    </div>
                    
                    <div className="flex justify-center" style={{marginTop: 10}}>
                        <div style={{color: '#FF0050', fontSize: '10px', fontWeight: 700}}>XEM CHI TIẾT ...</div>
                    </div>

                </div>
            </div>
        </section>
    );
}
