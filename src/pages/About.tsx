
import Header from "@/components/Header";

export default function About() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-teal-100">
      <Header />
      <main className="flex flex-col items-center justify-center pt-32 px-4">
        <h2 className="text-3xl font-bold text-teal-900 mb-4 text-center">About</h2>
        <p className="text-lg max-w-2xl text-center text-teal-800 shadow rounded-xl bg-white/80 p-8">
          We the team Techie created this site for creating convenience in registering/booking a seat for school/college for daily basis with a help of bus network which includes multiple authorized bus associations of school/college.
        </p>
      </main>
    </div>
  );
}
