import { Metadata } from "next";
import MainPage from "./main";

export const metadata: Metadata = {
  title: "Courses",
};
export default function Page() {
  return <MainPage />;
}
