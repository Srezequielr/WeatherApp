import Image from "next/image";
import styles from "./page.module.css";
import Time from "@/components/Time/Time";
import SearchInput from "@/components/SearchInput/SearchInput";

export default function Home() {
  return (
    <main>
      <Time />
      <SearchInput />
    </main>
  );
}
