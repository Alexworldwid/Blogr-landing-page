import Image from "next/image";
import { Metadata } from "next";
import IllustrationEditor from "./components/illustrationEditor";
import IlustrationPhones from "./components/ilustrationPhones";
import IllustrationLaptop from './components/illustrationLaptop'


export const metadata: Metadata = {
  title: "Blogr | Homepage",
  description: "A modern publishing platform",
};

export default function Home() {
  return (
    <main className="">
      <IllustrationEditor />
      <IlustrationPhones />
      <IllustrationLaptop />
    </main>
  );
}
