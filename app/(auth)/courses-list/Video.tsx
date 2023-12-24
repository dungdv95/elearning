"use client";

import React, { useState} from 'react';
import Image from "next/image";


export default function Video(){

    return(
        <div>
            <Image src='/asset/lesson/videp.png'
                            alt=""
                            width={425}
                            height={576}
                        />
            <div style={{marginTop: '14px'}}>
                <div className='flex items-center'>
                    <div className='w-1/2'>
                        <div className='flex items-center'>
                            <div style={{width: '50px', height: '50px', borderRadius: '50%', overflow: 'hidden'}}>
                                <Image src="/asset/lesson/avatar.png" alt="" width={50} height={50}/>
                            </div>
                            <div style={{marginLeft: '10px'}}>
                                <p style={{fontWeight: 700, fontSize: '10px'}}>@MR.BEAST 
                                {/* <Image src="/asset/lesson/tick_blue.png" alt="" width={16} height={16}/> */}
                                </p>
                                <p style={{fontWeight: 700, fontSize: '8px'}}>91.4M Follower</p>
                            </div>
                        </div>
                    </div>
                    <div className='w-1/2'>
                        <div className='flex justify-end'>
                            <button style={{minWidth: '84px', border: '1px solid #FF0050', borderRadius: '5px', color: '#FF0050', padding: '6px 6px', fontWeight: 700, fontSize: '10px'}}>Phần kế tiếp</button>
                        </div>
                    </div>
                </div>
                <div style={{marginTop: '20px'}}>
                    <p style={{fontWeight: 500, fontSize: '15px'}}>
                        Khóa học hướng dẫn xây dựng kênh livestream bán hàng chuyên nghiệp trên tiktok
                    </p>
                </div>
            </div>
        </div>
    )
}