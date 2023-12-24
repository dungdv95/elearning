"use client";
import { useState } from "react";
import Image from "next/image";

export default function Quiz(){

    const [questions, setQuestion] = useState([
        {
            id: 1, 
            question: "Làm thế nào để điều chỉnh các đối tượng trong ảnh bằng Pentools", 
        },
        {
            id: 2, 
            question: "Làm thế nào để điều chỉnh các đối tượng trong ảnh bằng Pentools", 
        },
        {
            id: 3, 
            question: "Làm thế nào để điều chỉnh các đối tượng trong ảnh bằng Pentools", 
        },
        {
            id: 4, 
            question: "Làm thế nào để điều chỉnh các đối tượng trong ảnh bằng Pentools", 
        }
    ])

    return (
        <div>
            <div style={{color: '#FF0050', fontWeight: 800, fontSize: '15px', marginBottom: '17px'}}>
                Câu hỏi thực hành
            </div>
            {
                questions.map(question => (
                    <div key={question.id} className="flex items-center" style={{marginBottom: 24}}>
                        <div style={{marginRight: '8px'}}>
                            <Image src="/asset/lesson/question.png" alt="" width={15} height={15}/>
                        </div>
                        <div style={{fontWeight: 500, fontSize: 12}}>
                            <p>{question.question}</p>
                        </div>
                    </div>
                ))
            }
            <div >

            </div>
        </div>
    )
}