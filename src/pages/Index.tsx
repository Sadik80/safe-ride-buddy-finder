import Header from "@/components/Header";
import BusRouteForm from "@/components/BusRouteForm";

const backgroundImage = "/lovable-uploads/443696ce-b672-4bc2-979f-1f796476bc45.png"; // Uploaded illustration

export default function Index() {
  return (
    <div
      className="min-h-screen bg-cover bg-no-repeat bg-center relative"
      style={{
        backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.68), rgba(255, 241, 206, 0.72)), url(${backgroundImage})`
      }}
    >
      <Header />
      <main className="lg:pt-24 pt-12 px-2 flex flex-col items-center">
        <h1
          className="text-5xl font-extrabold text-yellow-700 drop-shadow-lg mb-4 text-center"
          style={{ textShadow: "0 2px 10px #fff7" }}
        >
          Welcome to Busway
        </h1>
        <p
          className="text-lg md:text-2xl text-yellow-900 mb-7 text-center max-w-2xl mx-auto drop-shadow"
          style={{ textShadow: "0 1px 6px #fff9" }}
        >
          Helping students find bus services by connecting schools with available seats on their routes.
        </p>
        <BusRouteForm />
      </main>
    </div>
  );
}
