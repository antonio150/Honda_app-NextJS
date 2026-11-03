import Image from "next/image";
import Header from "./components/header";
import Navbar from "./components/navbar";
import Slide from "./section/Slide";

export default function Home() {
  return (
    <main>
      <Header/>
      <Navbar/>
      <Slide/>
    </main>
  );
}
