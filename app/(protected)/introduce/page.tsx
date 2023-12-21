import { Metadata } from "next";
import MainPage from "./main";

export const metadata: Metadata = {
  title: "Introduce",
};
export default function Page() {
  return <MainPage />;
}
