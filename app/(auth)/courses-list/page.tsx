import { Metadata } from "next";
import MainPage from "./main";

export const metadata: Metadata = {
  title: "Xem video",
};
export default function Page() {
  return <MainPage />;
}
