import Hero from "@/components/Hero";
import Welcome from "@/components/Welcome";

export const metadata = {
  title: "ICAFM 2024",
};

export default function Page() {
  return (
    <section>
      <Hero />
      <Welcome />
    </section>
  );
}
