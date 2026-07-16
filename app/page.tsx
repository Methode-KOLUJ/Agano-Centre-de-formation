import About from "@/components/Landing/About";
import Hero from "@/components/Landing/Hero";
import Inscription from "@/components/Landing/Inscription";
import Mission from "@/components/Landing/Mission";
import Team from "@/components/Landing/Team";
import Testimony from "@/components/Landing/Testimony";
import Valeur from "@/components/Landing/Valeurs";
import Link from "next/link";

export default function Home() {
  return (
    <>
    <Hero/>
    <About/>
    <Mission/>
    <Valeur/>
    <Team/>
    <Inscription/>
    <Testimony />
    </>
  );
}