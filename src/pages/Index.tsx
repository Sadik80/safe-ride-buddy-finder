import Header from "@/components/Header";
import BusRouteForm from "@/components/BusRouteForm";

const backgroundImage =
  "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80"; // Example: scenic/road/bus image

export default function Index() {
  return (
    <div className="min-h-screen bg-cover bg-no-repeat bg-center relative" style={{ backgroundImage: `linear-gradient(rgba(38, 80, 112, 0.30), rgba(38, 80, 112, 0.70)), url(${backgroundImage})` }}>
      <Header />
      <main className="lg:pt-24 pt-12 px-2 flex flex-col items-center">
        <h1 className="text-5xl font-extrabold text-white drop-shadow-lg mb-4 text-center" style={{ textShadow: "0 2px 10px #0004" }}>
          Welcome to Safe Ride
        </h1>
        <p className="text-lg md:text-2xl text-blue-100 mb-7 text-center max-w-2xl mx-auto">
          Find the safest school bus options for your child.
        </p>
        <BusRouteForm />
      </main>
    </div>
  );
}
