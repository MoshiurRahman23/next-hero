import Heading from "@/components/Heading";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>Moshiur Rahman</h1>
      <Heading />
      <p>This is heading part</p>
      <button>click me</button>
    </main>
  );
}
