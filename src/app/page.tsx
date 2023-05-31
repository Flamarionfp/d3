import BarChart from "@/components/bar-chart";
import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-gray-900 flex min-h-screen flex-col items-center p-6 lg:p-24">
      <header className="flex flex-col items-center">
        <Image
          className="w-24 h-24"
          src="https://www2.faccat.br/portal/sites/default/files/ckeditorfiles/Logo%20FACCAT.png"
          alt="Logo Faccat"
          width={96}
          height={96}
        />

        <h1 className="text-white text-center text-lg mb-4">
          Data on death rates for suicide, by selected population
          characteristics
        </h1>
      </header>

      <main>
        <BarChart />
      </main>

      <footer className="mt-6">
        <p className="text-white text-center">
          By: Daiana, Diógnes, Eduardo, Francine, Flamarion e Raphael
        </p>
      </footer>
    </div>
  );
}
