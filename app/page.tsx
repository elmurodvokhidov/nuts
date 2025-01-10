import HomeLeftSide from "@/components/HomeLeftSide";
import HomeRightSide from "@/components/HomeRightSide";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <div>
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
    </div>
  );
}
