import Breadcrumbs from "@/components/Breadcrumbs";
import LessonList from "./LessonList";
import Image from "next/image";
import Video from "./Video";
import Quiz from "./Quiz";
import CourseSimilar from "./CourseSimilar";

export default function MainPage() {
  return (

    <div className="container mx-auto !p-0">
        <Breadcrumbs/>
        <div className="flex" style={{marginTop: '31px'}}>
          <div className="w-1/3">
            <LessonList/>
          </div>
          <div className="w-1/3">
            <Video/>
          </div>
          <div className="w-1/3" style={{paddingLeft: '16px'}}>
            <Quiz/>
            <CourseSimilar />
          </div>
        </div>
        <div style={{height: 100}}>

        </div>
    </div>
  );
}
