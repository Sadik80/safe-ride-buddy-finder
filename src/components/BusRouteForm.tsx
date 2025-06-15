
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { Card } from "@/components/ui/card";

const placesFrom = ["Nehru Zoo Park", "Bahadurpura X Road"];
const placesTo = ["Iqra Mission", "Ahmad High School"];

export default function BusRouteForm() {
  const navigate = useNavigate();
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [error, setError] = useState("");

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!from || !to) {
      setError("Please select both origin and destination.");
      return;
    }
    setError("");
    // Pass selection in state for demo, in real app use params/query
    navigate("/routes", { state: { from, to } });
  };

  return (
    <Card className="bg-white/85 shadow-xl max-w-xl w-full mx-auto p-6 rounded-2xl mt-8">
      <form noValidate onSubmit={onSubmit} className="space-y-5">
        <h2 className="text-2xl font-bold text-teal-800 text-center mb-2">Guard your child by Safe Ride</h2>
        <div>
          <label htmlFor="from" className="font-semibold text-sm text-gray-700">From</label>
          <select
            id="from"
            name="from"
            className="mt-1 block w-full rounded-lg border border-gray-300 py-2 px-3 text-base shadow-sm focus:ring-2 focus:ring-teal-400"
            value={from}
            onChange={e => setFrom(e.target.value)}
          >
            <option value="">-- Select --</option>
            {placesFrom.map(place => <option key={place}>{place}</option>)}
          </select>
        </div>
        <div>
          <label htmlFor="to" className="font-semibold text-sm text-gray-700">To</label>
          <select
            id="to"
            name="to"
            className="mt-1 block w-full rounded-lg border border-gray-300 py-2 px-3 text-base shadow-sm focus:ring-2 focus:ring-teal-400"
            value={to}
            onChange={e => setTo(e.target.value)}
          >
            <option value="">-- Select --</option>
            {placesTo.map(place => <option key={place}>{place}</option>)}
          </select>
        </div>
        {error &&
          <div className="text-red-600 font-medium">{error}</div>
        }
        <Button type="submit" size="lg" className="w-full bg-teal-700 hover:bg-teal-800 shadow-md text-base rounded-lg py-2 uppercase tracking-wider font-semibold">
          Check Routes
        </Button>
      </form>
    </Card>
  );
}
