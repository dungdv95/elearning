"use client";
import Image from "next/image";
import { useState } from "react";

const Course = (props: {img_url: any, title: any}) => {
    const {img_url, title} = props;
    return (
        <div>
            <div style={{borderRadius: 5, overflow: 'hidden'}}>
                <Image src={img_url} alt="" width={137} height={182}/>
            </div>
            <div style={{marginTop: '5px'}}>
                <p style={{fontWeight: 500, fontSize: '8px'}}>
                    {title}
                </p>
            </div>
        </div>
    )
}

export default function CourseSimilar(){

    const [course, setCourse] = useState([
        {
            id: 1,
            img_url: '/asset/lesson/course1.png',
            title: 'Khóa học hướng dẫn xây dựng kênh livestream bán hàng chuyên nghiệp trên tiktok'
        },
        {
            id: 1,
            img_url: '/asset/lesson/course2.png',
            title: 'Khóa học hướng dẫn xây dựng kênh livestream bán hàng chuyên nghiệp trên tiktok'
        },
        {
            id: 1,
            img_url: '/asset/lesson/course3.png',
            title: 'Khóa học hướng dẫn xây dựng kênh livestream bán hàng chuyên nghiệp trên tiktok'
        },
        {
            id: 1,
            img_url: '/asset/lesson/course4.png',
            title: 'Khóa học hướng dẫn xây dựng kênh livestream bán hàng chuyên nghiệp trên tiktok'
        }
    ])

    return (
        <div>
            <div style={{color: '#FF0050', fontWeight: 800, fontSize: '15px', marginBottom: '14px'}}>
                Khóa học tương tự
            </div>
            <div className="flex flex-wrap justify-between" style={{marginTop: '17px'}}>
                {course.map(course => (
                    <div key={course.id} className="w-1/2" style={{marginBottom: '17px'}}>
                        <Course img_url={course.img_url} title={course.title}/>
                    </div>
                ))}
            </div>
        </div>
    )
}