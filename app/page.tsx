import About from "@/components/About";
import Contact from "@/components/Contact";
import HomeLeftSide from "@/components/HomeLeftSide";
import HomeRightSide from "@/components/HomeRightSide";
import Navbar from "@/components/Navbar";
import Products from "@/components/Products";
import WhyUs from "@/components/WhyUs";
import Works from "@/components/Works";

export default function Home() {
  return (
    <div>
      {/* Birinchi bo'lak */}
      <section className="h-screen relative overflow-hidden">
        {/* Navbar Componenti */}
        <Navbar />

        <main className="flex justify-between pb-52">
          {/* Bosh sahifaning chap qismi */}
          <HomeLeftSide />

          {/* Bosh sahifaning o'ng qismi */}
          <HomeRightSide />
        </main>
      </section>

      {/* Umumiy qism */}
      <section className="section">
        <Products />
        <About />
        <WhyUs />
        <Works />
      </section>

      {/* Contact qismi */}
      <Contact />
    </div>
  );
}
