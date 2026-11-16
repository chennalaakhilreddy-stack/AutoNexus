import React from 'react';
import { Laptop, Sofa, Tv, SunMedium, ShoppingBag, ArrowRight } from 'lucide-react';

export const ExpansionSection: React.FC = () => {
  const categories = [
    { name: 'Electronics', desc: 'Workstations, computing, enterprise setups', icon: Laptop },
    { name: 'Furniture', desc: 'Designer office, modular interior suites', icon: Sofa },
    { name: 'Home Appliances', desc: 'HVAC systems, modular kitchen appliances', icon: Tv },
    { name: 'Solar Systems', desc: 'Rooftop residential & micro-commercial PV arrays', icon: SunMedium },
    { name: 'High-Value Equipment', desc: 'Specialized machinery & acoustic equipment', icon: ShoppingBag },
  ];

  return (
    <section className="py-16 bg-white border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="p-8 sm:p-10 rounded-2xl bg-slate-50/70 border border-slate-200/90">
          <div className="max-w-2xl mb-8">
            <span className="text-xs font-mono uppercase tracking-widest text-slate-400 block mb-1">
              Future Architecture
            </span>
            <h3 className="text-xl sm:text-2xl font-bold text-charcoal-900 tracking-tight">
              Beyond vehicles
            </h3>
            <p className="mt-2 text-sm text-slate-600 leading-relaxed">
              While AutoNexus remains strictly focused on automotive purchasing power today, the underlying collective negotiation model is designed to expand into other high-ticket, dealer-dominated categories.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
            {categories.map((cat, idx) => {
              const Icon = cat.icon;
              return (
                <div
                  key={idx}
                  className="p-4 rounded-xl bg-white border border-slate-200/70 shadow-2xs space-y-2 opacity-90 hover:opacity-100 transition-opacity"
                >
                  <div className="w-8 h-8 rounded-lg bg-slate-100 flex items-center justify-center text-slate-700">
                    <Icon className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-charcoal-900">{cat.name}</h4>
                    <p className="text-[11px] text-slate-500 mt-0.5 leading-snug">{cat.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="mt-6 pt-6 border-t border-slate-200/60 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs font-mono text-slate-500">
            <span>Roadmap phase 02 — Currently in private partner testing</span>
            <span className="text-slate-400">Core focus: 100% Automotive execution</span>
          </div>
        </div>

      </div>
    </section>
  );
};
