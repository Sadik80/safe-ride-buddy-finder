
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import AuthDialog from "./AuthDialog";
import { toast } from "@/hooks/use-toast";

type Bus = {
  srNo: number;
  school: string;
  busNo: string;
  routeNo: string;
  vacantSeats: number;
  driver: string;
  contact: string;
  monthly: number;
};

const buses: Bus[] = [
  {
    srNo: 1,
    school: "Iqra Mission",
    busNo: "2049",
    routeNo: "C9",
    vacantSeats: 4,
    driver: "Syed Sakid",
    contact: "9584085301",
    monthly: 2000,
  },
  {
    srNo: 2,
    school: "Ahmad High School",
    busNo: "4593",
    routeNo: "R2",
    vacantSeats: 2,
    driver: "Umair Ahemad",
    contact: "8924638641",
    monthly: 1600,
  },
];

export default function AvailableBusesTable() {
  const [selected, setSelected] = useState<number | null>(null);
  const [showAuth, setShowAuth] = useState(false);

  // Custom handler when sign in/login completes
  function handleAuthDone() {
    setShowAuth(false);
    toast({
      title: "Your request has been sent and you will be updated by college administration via text message",
    });
  }

  return (
    <div className="w-full mx-auto max-w-3xl mt-10 bg-white/90 shadow-xl p-5 rounded-2xl">
      <h2 className="text-2xl font-bold text-indigo-800 mb-4 text-center">Available Buses</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full border-collapse border rounded-xl text-sm">
          <thead className="bg-blue-50">
            <tr>
              <th className="py-2 px-3 font-semibold">Select</th>
              <th className="py-2 px-3 font-semibold">Sr.No</th>
              <th className="py-2 px-3 font-semibold">School</th>
              <th className="py-2 px-3 font-semibold">Bus No</th>
              <th className="py-2 px-3 font-semibold">Route No</th>
              <th className="py-2 px-3 font-semibold">Vacant Seats</th>
              <th className="py-2 px-3 font-semibold">Driver</th>
              <th className="py-2 px-3 font-semibold">Contact</th>
              <th className="py-2 px-3 font-semibold">₹ Monthly</th>
            </tr>
          </thead>
          <tbody>
            {buses.map((b, idx) => (
              <tr key={b.busNo} className={selected === idx ? "bg-teal-100" : ""}>
                <td>
                  <input
                    type="radio"
                    name="busSelect"
                    checked={selected === idx}
                    onChange={() => setSelected(idx)}
                    className="accent-teal-600"
                  />
                </td>
                <td className="py-2 px-3">{b.srNo}</td>
                <td className="py-2 px-3">{b.school}</td>
                <td className="py-2 px-3 font-mono">{b.busNo}</td>
                <td className="py-2 px-3">{b.routeNo}</td>
                <td className="py-2 px-3">{b.vacantSeats}</td>
                <td className="py-2 px-3">{b.driver}</td>
                <td className="py-2 px-3">{b.contact}</td>
                <td className="py-2 px-3 font-semibold">₹{b.monthly}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <Button
        type="button"
        className="mt-6 w-full bg-blue-600 hover:bg-blue-700 rounded-lg font-semibold text-lg shadow"
        disabled={selected === null}
        onClick={() => setShowAuth(true)}
      >
        Confirm
      </Button>
      <AuthDialog open={showAuth} onOpenChange={setShowAuth} onDone={handleAuthDone} />
    </div>
  );
}
