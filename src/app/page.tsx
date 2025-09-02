// src/app/page.tsx
import JobForm from "@/app/components/JobForm";
export default function HomePage() {
  return (
    <main className=" flex min-h-screen items-center justify-center bg-gray-100">
      {/*Hero Section */}
      <section className="text-center p-8 bg-white rounded-2xl shadow-lg max-w-xl">
        <h1 className="tex-4xl font-bold mb-4 text-emerald-600">
          Job Tracker Hub
          </h1>
        <p className="text-lg text-gray-600 mb-6">
          A simple way to track all your job applications
          </p>
        <button className="bg-emerald-400 text-slate-900 px-6 py-3 rounded-lg hover:bg-emerald-600 transition">
          Get Started
        </button>
      </section>

    </main>
  );

}
