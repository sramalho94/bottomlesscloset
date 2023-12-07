import HomePage from "@/pages/HomePage";
import Onboarding from "@/pages/Onboarding";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <HomePage />
      <Onboarding />
    </main>
  );
}
