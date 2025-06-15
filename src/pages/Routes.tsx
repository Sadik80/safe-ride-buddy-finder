
import Header from "@/components/Header";
import AvailableBusesTable from "@/components/AvailableBusesTable";
import { useLocation, useNavigate } from "react-router-dom";

export default function Routes() {
  const location = useLocation();
  const navigate = useNavigate();
  // In a full app, fetch using location.state.from/to
  const params = location.state as { from: string, to: string } | undefined;
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-teal-100">
      <Header />
      <main className="pt-20 pb-8 px-2 flex flex-col items-center">
        <h2 className="text-3xl font-extrabold text-teal-900 mb-2 mt-4 text-center">Bus Options</h2>
        <p className="text-lg text-teal-800 mb-8 text-center">
          {params && params.from && params.to ?
            <>Showing routes from <span className="font-bold">{params.from}</span> to <span className="font-bold">{params.to}</span></>
            : <>Select your bus route below.</>
          }
        </p>
        <AvailableBusesTable />
        <button
          className="text-teal-700 mt-10 underline text-sm hover:text-teal-900"
          onClick={() => navigate("/")}
        >
          &larr; Back to search
        </button>
      </main>
    </div>
  );
}
