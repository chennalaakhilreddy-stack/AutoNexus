import React from 'react';
import { Search, Users, Sparkles, CheckCircle2 } from 'lucide-react';

export const HowItWorks: React.FC = () => {
  return (
    <section id="how-it-works" className="py-20 md:py-28 bg-[#fafbfc] border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16 md:mb-20">
          <span className="text-xs font-mono uppercase tracking-widest text-slate-500 block mb-2">
            The Purchasing Architecture
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-charcoal-900 tracking-tight">
            How It Works
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            Eliminating unilateral dealer markups through transparent buyer pooling. A 3-step mechanism built to secure commercial fleet terms for individual motorists.
          </p>
        </div>

        {/* 3 Clean Steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 relative">
          
          {/* Step 01 */}
          <div className="relative flex flex-col justify-between p-8 rounded-2xl bg-white border border-slate-200/90 shadow-xs hover:border-slate-300 transition-colors">
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <span className="text-2xl font-bold font-mono text-slate-400">01</span>
                <div className="w-10 h-10 rounded-xl bg-slate-50 border border-slate-200/70 flex items-center justify-center text-charcoal-900">
                  <Search className="w-5 h-5 stroke-[1.8]" />
                </div>
              </div>

              <div>
                <h3 className="text-xl font-bold text-charcoal-900 tracking-tight">
                  Choose a Vehicle
                </h3>
                <p className="mt-3 text-sm text-slate-600 leading-relaxed">
                  Find a vehicle and join an active purchasing group. Browse verified models across cars, SUVs, bikes, and commercial haulers.
                </p>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-slate-100 flex items-center gap-2 text-xs font-mono text-slate-500">
              <CheckCircle2 className="w-3.5 h-3.5 text-slate-400" />
              <span>Zero commitment fee required</span>
            </div>
          </div>

          {/* Step 02 */}
          <div className="relative flex flex-col justify-between p-8 rounded-2xl bg-white border border-slate-200/90 shadow-xs hover:border-slate-300 transition-colors">
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <span className="text-2xl font-bold font-mono text-slate-400">02</span>
                <div className="w-10 h-10 rounded-xl bg-slate-50 border border-slate-200/70 flex items-center justify-center text-charcoal-900">
                  <Users className="w-5 h-5 stroke-[1.8]" />
                </div>
              </div>

              <div>
                <h3 className="text-xl font-bold text-charcoal-900 tracking-tight">
                  Build Collective Demand
                </h3>
                <p className="mt-3 text-sm text-slate-600 leading-relaxed">
                  More verified buyers joining the group increases the purchasing opportunity. Demand milestones aggregate in real time on public ledger cohorts.
                </p>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-slate-100 flex items-center gap-2 text-xs font-mono text-slate-500">
              <CheckCircle2 className="w-3.5 h-3.5 text-slate-400" />
              <span>Cohorts cap between 20–50 buyers</span>
            </div>
          </div>

          {/* Step 03 */}
          <div className="relative flex flex-col justify-between p-8 rounded-2xl bg-white border border-slate-200/90 shadow-xs hover:border-slate-300 transition-colors">
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <span className="text-2xl font-bold font-mono text-charcoal-900">03</span>
                <div className="w-10 h-10 rounded-xl bg-charcoal-900 text-white flex items-center justify-center">
                  <Sparkles className="w-5 h-5 stroke-[1.8]" />
                </div>
              </div>

              <div>
                <h3 className="text-xl font-bold text-charcoal-900 tracking-tight">
                  Unlock Better Terms
                </h3>
                <p className="mt-3 text-sm text-slate-600 leading-relaxed">
                  AutoNexus approaches participating dealers with the consolidated demand. Dealers submit competitive commercial bulk offers to the group.
                </p>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-slate-100 flex items-center gap-2 text-xs font-mono text-charcoal-900 font-medium">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
              <span>Full warranty & direct OEM billing</span>
            </div>
          </div>

        </div>

        {/* Quiet Footnote */}
        <div className="mt-12 text-center text-xs font-mono text-slate-500">
          Buyers execute final registration and vehicle collection directly with authorized OEM dealerships.
        </div>

      </div>
    </section>
  );
};
