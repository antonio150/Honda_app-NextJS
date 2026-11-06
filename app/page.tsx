import Image from "next/image";
import Header from "./components/header";
import Navbar from "./components/navbar";
import Slide from "./section/Slide";
import ListCar from "./section/ListCar";

export default function Home() {
  return (
    <main>
      <Header/>
      <Navbar/>
      <Slide/>
      <ListCar/>
    </main>
  );
}
