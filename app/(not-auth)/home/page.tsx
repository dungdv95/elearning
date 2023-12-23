import { Metadata } from "next";
import MainPage from "./main";

export const metadata: Metadata = {
  title: "Trang chủ",
};
export default function Page() {
  return <MainPage />;
}
