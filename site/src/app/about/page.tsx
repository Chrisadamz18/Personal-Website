import { About } from "@/components/sections/About";
import { Skills } from "@/components/sections/Skills";
import { BeyondCode } from "@/components/sections/BeyondCode";

export default function AboutPage() {
  return (
    <main className="pt-16">
      <About />
      <Skills />
      <BeyondCode />
    </main>
  );
}
