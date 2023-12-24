"use client";

import React, { useState} from 'react';
import Image from "next/image";

const LessonItem = (props: {lesson: any, lesson_playing: any}) => {

    const {lesson, lesson_playing} = props;

    return(
        <div style={{marginBottom:'21px'}}>
            <div className='flex'>
                <div style={{width: '7%'}}>
                    { lesson_playing.id === lesson.id ?
                        <Image src="/asset/lesson/play-circle.png" alt="" width={20} height={20}/> :
                        <Image src="/asset/lesson/play-circle-2.png" alt="" width={20} height={20}/>
                    }
                </div>
                <div style={{width: '75%'}}>
                    <p style={ lesson_playing.id === lesson.id ? {fontWeight: 500, fontSize: '12px' ,color: '#000',  whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis'}: {fontWeight: 500, fontSize: '12px', color: '#979797',  whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis'}}>{lesson.name}</p>
                </div>
                <div style={{width: '18%'}}>
                    <p style={ lesson_playing.id === lesson.id ? {fontWeight: 500, fontSize: '12px' ,color: '#000', textAlign: 'right'}: {fontWeight: 500, fontSize: '12px', color: '#979797', textAlign: 'right'}}>{lesson.duration}</p>
                </div>
            </div>
        </div>
    )
}

export default function LessonList(){
    const [lessons, setLessons] = useState([
        {
            id: 1,
            video_url: '/aaa',
            name: 'Giới thiệu công cụ chỉnh sửa Giới thiệu công cụ chỉnh sửa Giới thiệu công cụ chỉnh sửa Giới thiệu công cụ chỉnh sửa',
            duration: '02:20',
        },
        {
            id: 2,
            video_url: '/aaa',
            name: 'Giới thiệu công cụ chỉnh sửa...',
            duration: '02:20',
        },
        {
            id: 3,
            video_url: '/aaa',
            name: 'Giới thiệu công cụ chỉnh sửa...',
            duration: '02:20',
        }
    ])
    const [lesson_playing, setPlaying] = useState(lessons[0])

    return (
        <div>
            <div style={{color: '#FF0050', fontWeight: 800, fontSize: '15px'}}>Danh sách bài học</div>
            <div style={{marginTop: '31px', paddingRight: '24px'}}>
                {lessons.map(les =>(
                    <div key={les.id}>
                        <LessonItem lesson={les} lesson_playing={lesson_playing} />
                    </div>
                ))}
            </div>
        </div>
    )
}