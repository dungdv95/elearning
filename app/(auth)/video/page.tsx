import { Metadata } from "next";
import Image from "next/image";
import MainPage from './main'

export const metadata: Metadata = {
    title: "Video khóa học",
};

export default function Video() {

    return (
        <MainPage/>
    )
}