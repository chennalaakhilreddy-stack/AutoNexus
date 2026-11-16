import React from 'react';
import { ArrowRight, ChevronDown, Users, ShieldCheck, TrendingDown, ArrowRightCircle } from 'lucide-react';
import { Vehicle } from '../types';

interface HeroProps {
  featuredVehicle: Vehicle;
  onExploreClick: () => void;
  onHowItWorksClick: () => void;
  onSelectVehicle: (vehicle: Vehicle) => void;
}

export const Hero: React.FC<HeroProps> = ({
  featuredVehicle,
  onExploreClick,
  onHowItWorksClick,
  onSelectVehicle,
}) => {
  return (
    <section className="relative pt-8 pb-16 md:pt-14 md:pb-24 border-b border-slate-200/70 bg-gradient-to-b from-white via-slate-50/40 to-slate-50/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Hero Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Typography & CTAs */}
          <div className="lg:col-span-6 space-y-6 sm:space-y-8">
            
            {/* Subtle Platform Indicator */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 border border-slate-200/90 text-xs font-mono text-slate-700">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              <span>Collective Purchasing Protocol for Vehicles</span>
            </div>

            {/* Hero Copy */}
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl lg:text-[3.5rem] font-extrabold text-charcoal-900 tracking-tight leading-[1.08]">
                Your buying power, <br className="hidden sm:inline" />
                <span className="text-slate-500 font-semibold">multiplied.</span>
              </h1>
              
              <p className="text-lg sm:text-xl text-slate-600 font-normal leading-relaxed max-w-xl">
                AutoNexus brings vehicle buyers together to unlock stronger purchasing power and better commercial terms from dealers.
              </p>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-2">
              <button
                onClick={onExploreClick}
                className="inline-flex items-center justify-center px-6 py-3.5 rounded-lg text-base font-medium text-white bg-charcoal-900 hover:bg-charcoal-800 active:scale-[0.98] transition-all shadow-sm"
              >
                <span>Explore Vehicles</span>
                <ArrowRight className="w-4 h-4 ml-2" />
              </button>

              <button
                onClick={onHowItWorksClick}
                className="inline-flex items-center justify-center px-6 py-3.5 rounded-lg text-base font-medium text-slate-700 bg-white hover:bg-slate-100 border border-slate-300 active:scale-[0.98] transition-all shadow-xs"
              >
                <span>How It Works</span>
              </button>
            </div>

            {/* Trust Micro-Metrics */}
            <div className="pt-4 border-t border-slate-200/80 grid grid-cols-3 gap-4 max-w-lg text-left">
              <div>
                <div className="text-xs font-mono text-slate-400 uppercase tracking-wider">Advantage</div>
                <div className="text-sm font-semibold text-charcoal-900 mt-0.5">Fleet Parity</div>
              </div>
              <div>
                <div className="text-xs font-mono text-slate-400 uppercase tracking-wider">Network</div>
                <div className="text-sm font-semibold text-charcoal-900 mt-0.5">Authorized OEM</div>
              </div>
              <div>
                <div className="text-xs font-mono text-slate-400 uppercase tracking-wider">Commitment</div>
                <div className="text-sm font-semibold text-charcoal-900 mt-0.5">Zero Lock-in</div>
              </div>
            </div>

          </div>

          {/* Right Column: Premium Vehicle Visual & Live Group Card */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-2xl border border-slate-200/90 bg-white p-3 sm:p-4 shadow-sm">
              
              {/* Vehicle Image Container */}
              <div className="relative aspect-[16/10] overflow-hidden rounded-xl bg-slate-100 group">
                <img
                  src={featuredVehicle.image}
                  alt={featuredVehicle.name}
                  className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                  loading="eager"
                />
                
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950/70 via-charcoal-950/10 to-transparent"></div>

                {/* Status Badge Over Image */}
                <div className="absolute top-3 left-3 sm:top-4 sm:left-4">
                  <span className="inline-flex items-center px-2.5 py-1 rounded-md text-xs font-mono font-medium bg-white/95 text-charcoal-900 backdrop-blur-sm shadow-xs border border-white/40">
                    Live Active Group
                  </span>
                </div>

                {/* Overlaid Vehicle Snapshot */}
                <div className="absolute bottom-3 left-3 right-3 sm:bottom-4 sm:left-4 sm:right-4 text-white">
                  <div className="flex items-end justify-between">
                    <div>
                      <p className="text-xs uppercase font-mono tracking-wider text-slate-300">{featuredVehicle.brand}</p>
                      <h3 className="text-lg sm:text-xl font-bold tracking-tight">{featuredVehicle.name}</h3>
                      <p className="text-xs text-slate-300 font-mono mt-0.5">{featuredVehicle.variant}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-[10px] uppercase font-mono tracking-wider text-slate-300">Target Group</p>
                      <p className="text-base sm:text-lg font-bold font-mono">
                        {featuredVehicle.currentBuyers} / {featuredVehicle.targetBuyers}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Live Group Interactive Strip */}
              <div className="mt-4 px-2 pb-1 pt-1 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-medium text-slate-500">Target Fulfillment:</span>
                    <span className="text-xs font-mono font-semibold text-charcoal-900">
                      {Math.round((featuredVehicle.currentBuyers / featuredVehicle.targetBuyers) * 100)}%
                    </span>
                  </div>
                  <div className="w-48 sm:w-60 h-1.5 bg-slate-100 rounded-full overflow-hidden border border-slate-200/50">
                    <div
                      className="h-full bg-charcoal-900 rounded-full transition-all duration-500"
                      style={{ width: `${(featuredVehicle.currentBuyers / featuredVehicle.targetBuyers) * 100}%` }}
                    ></div>
                  </div>
                </div>

                <button
                  onClick={() => onSelectVehicle(featuredVehicle)}
                  className="w-full sm:w-auto inline-flex items-center justify-center px-4 py-2 rounded-lg text-xs font-mono font-semibold text-charcoal-900 bg-slate-100 hover:bg-slate-200 border border-slate-200/80 transition-colors"
                >
                  <span>Inspect This Group</span>
                  <ArrowRight className="w-3.5 h-3.5 ml-1.5" />
                </button>
              </div>

            </div>
          </div>

        </div>

        {/* Visual Concept Flow: Individual demand → Collective demand → Stronger purchasing power */}
        <div className="mt-16 sm:mt-24 pt-10 border-t border-slate-200/80">
          <div className="text-center max-w-2xl mx-auto mb-8">
            <span className="text-xs font-mono uppercase tracking-widest text-slate-500">The AutoNexus Model</span>
            <h2 className="text-xl sm:text-2xl font-bold text-charcoal-900 tracking-tight mt-1">
              Individual demand &rarr; Collective demand &rarr; Stronger purchasing power
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            
            {/* Step 1: Individual */}
            <div className="relative p-5 sm:p-6 rounded-xl bg-white border border-slate-200/80 shadow-xs space-y-3">
              <div className="w-8 h-8 rounded-lg bg-slate-100 text-slate-700 flex items-center justify-center font-mono text-sm font-semibold border border-slate-200">
                01
              </div>
              <div className="space-y-1">
                <h4 className="text-base font-semibold text-charcoal-900">Individual Demand</h4>
                <p className="text-xs font-mono text-slate-500">1 buyer = Zero negotiating leverage</p>
              </div>
              <p className="text-sm text-slate-600 leading-relaxed">
                A single retail buyer negotiates against showroom quotas, non-negotiable dealer charges, and extended waitlists.
              </p>
            </div>

            {/* Step 2: Collective */}
            <div className="relative p-5 sm:p-6 rounded-xl bg-white border border-slate-200/80 shadow-xs space-y-3">
              <div className="w-8 h-8 rounded-lg bg-charcoal-900 text-white flex items-center justify-center font-mono text-sm font-semibold">
                02
              </div>
              <div className="space-y-1">
                <h4 className="text-base font-semibold text-charcoal-900">Collective Demand</h4>
                <p className="text-xs font-mono text-slate-500">20–50 buyers = Consolidated purchase order</p>
              </div>
              <p className="text-sm text-slate-600 leading-relaxed">
                Buyers coalesce around identical vehicle configurations. AutoNexus clusters demand into high-value wholesale batches.
              </p>
            </div>

            {/* Step 3: Stronger Power */}
            <div className="relative p-5 sm:p-6 rounded-xl bg-white border border-slate-200/80 shadow-xs space-y-3">
              <div className="w-8 h-8 rounded-lg bg-emerald-600 text-white flex items-center justify-center font-mono text-sm font-semibold">
                03
              </div>
              <div className="space-y-1">
                <h4 className="text-base font-semibold text-charcoal-900">Stronger Purchasing Power</h4>
                <p className="text-xs font-mono text-slate-500">Bulk terms = Up to ₹1.15L savings</p>
              </div>
              <p className="text-sm text-slate-600 leading-relaxed">
                Authorized dealers compete for the cohort. Members unlock fleet discounts, waived documentation fees, and priority delivery.
              </p>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
