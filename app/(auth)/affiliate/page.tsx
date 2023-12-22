import { Metadata } from "next";
import MainPage from "./main";

export const metadata: Metadata = {
  title: "Affiliate",
};
export default function Page() {
  return <MainPage />;
}
