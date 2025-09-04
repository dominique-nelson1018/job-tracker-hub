// src/app/page.tsx
import JobForm from "@/app/components/JobForm";
export default function HomePage() {
  return (
    <main className=" min-h-screen bg-slate-950 text-white">
      {/*Hero Section */}
      <section className="relative isolate overflow-hidden bg-gradient-to-b from-slate-950 via-slate-900 to-slate-800" 
                aria-labelledby="hero-heading">
        <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8 lg:flex lg:items-center lg:gap-16">
           {/* Left column: text */}      
            <div className=" max-w-2xl ">
              <h1 id="hero-heading" 
              className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
                Track Applications
              </h1>
              <p className="mt-6 text-lg leading-8 text-slate-300">
                Job Tracker Hub helps you stay on top of applications, interviews,
                  and offers — all in one place. Visualize your progress and never
                  lose track of an opportunity.
              </p>
              <div className="mt-10 flex items-center gap-4">
              <button className="bg-emerald-500 rounded-xl px-5 py-3 text-base font-semibold text-slate-900 hover:bg-emerald-300">
                <p>Get Started</p>
              </button>
              </div>

           </div>
             {/* Right column: placeholder image/illustration */}
          <div className="hidden lg:block lg:flex-1">
            <div className="rounded-2xl bg-slate-800/50 p-6 ring-1 ring-slate-700">
              <p className="text-slate-400"> Dashboard Preview</p>
              <div className="mt-4 h-40 w-full rounded-lg bg-slate-700"></div>
            </div>
          </div>
        </div>           
      </section>

{/* How it works section*/}
      <section id="learn-more" className="mx-auto max-w-5xl py-24 text-slate-200">

        <h2 className="text-3xl font-semibold"> How It Works</h2>
        <p className="mt-4 text-slate-400"> Add applications with company, role, and status. View them in a clean
          dashboard and track progress across applied, interviews, and offers.</p>

      </section>

{/* Features section*/}
    <section id="features" className="flex min-h-screen text-center">
      <div className="grid grid-cols-3 md:grid-cols-3 gap-12">
        <div className="rounded-2xl shadow-lg bg-gray-600">
        <h2 className="text-2xl font-bold ">Track Applications</h2>
        <p>Keep every job application organized in one place, so you never lose track of opportunities.</p>
        </div>
        <div className="rounded-2xl shadow-lg bg-gray-600">
        <h2 className="text-2xl font-bold ">Monitor Progress</h2>
        <p>Easily see the status of each application and track your journey from applied to hired.</p>          
        </div>
        <div className="rounded-2xl shadow-lg bg-gray-600">
        <h2 className="text-2xl font-bold ">Stay Organized</h2>
        <p>Say goodbye to messy spreadsheets — manage interviews, offers, and rejections with ease.</p>
        </div>


      </div>

    </section>

    </main>
  );

}