import Image from "next/image";
import styles from "./page.module.scss";
import { Banner } from "@/layout/Banner";
import ContacUs from "@/layout/ContactUs";
import { Features } from "@/layout/Features";
import { Faq } from "@/layout/Faq";
import { Usage } from "@/layout/Usage";

export default function Home() {
  return (
    <main className={styles.main}>
      <Banner />
      <Usage />
      <Features />
      <Faq />
      <ContacUs />
    </main>
  );
}
