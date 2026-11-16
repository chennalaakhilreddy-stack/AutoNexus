import React, { useState } from 'react';
import { 
  ArrowLeft, 
  Users, 
  CheckCircle2, 
  Clock, 
  ShieldCheck, 
  FileText, 
  Sparkles, 
  Tag, 
  Car, 
  Info,
  Check,
  ChevronRight,
  TrendingDown
} from 'lucide-react';
import { Vehicle } from '../types';
import { OfferSimulationModal } from './OfferSimulationModal';

interface GroupDetailViewProps {
  vehicle: Vehicle;
  isJoined: boolean;
  onToggleJoin: (vehicleId: string) => void;
  onBack: () => void;
}

export const GroupDetailView: React.FC<GroupDetailViewProps> = ({
  vehicle,
  isJoined,
  onToggleJoin,
  onBack,
}) => {
  const [isOfferModalOpen, setIsOfferModalOpen] = useState(false);
  const [justJoinedAnimation, setJustJoinedAnimation] = useState(false);

  const percentage = Math.min(
    100,
    Math.round((vehicle.currentBuyers / vehicle.targetBuyers) * 100)
  );

  const buyersNeeded = Math.max(0, vehicle.targetBuyers - vehicle.currentBuyers);

  const handleJoinClick = () => {
    onToggleJoin(vehicle.id);
    if (!isJoined) {
      setJustJoinedAnimation(true);
      setTimeout(() => setJustJoinedAnimation(false), 3000);
    }
  };

  return (
    <div className="py-8 md:py-14 bg-white min-h-[calc(100vh-80px)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumb Navigation */}
        <div className="mb-6 flex items-center justify-between">
          <button
            onClick={onBack}
            className="inline-flex items-center gap-2 text-xs font-mono font-medium text-slate-500 hover:text-charcoal-900 transition-colors group"
          >
            <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
            <span>Back to Explorer</span>
          </button>

          <span className="text-xs font-mono text-slate-400">
            Group ID: <span className="text-charcoal-900 font-semibold">{vehicle.id}</span>
          </span>
        </div>

        {/* Main Vehicle Header & Group Overview */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* Left Column: Visual & Vehicle Specifications */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Main Visual */}
            <div className="relative aspect-[16/10] rounded-2xl overflow-hidden bg-slate-100 border border-slate-200/90 shadow-xs">
              <img
                src={vehicle.image}
                alt={`${vehicle.brand} ${vehicle.name}`}
                className="w-full h-full object-cover"
              />
              <div className="absolute top-4 left-4 flex gap-2">
                <span className="text-xs font-mono font-semibold px-2.5 py-1 rounded bg-white/95 text-charcoal-900 shadow-xs border border-white/40">
                  {vehicle.category}
                </span>
                <span className="text-xs font-mono font-medium px-2.5 py-1 rounded bg-black/60 text-white backdrop-blur-xs">
                  {vehicle.fuelType} • {vehicle.transmission}
                </span>
              </div>
            </div>

            {/* Vehicle Metadata Description */}
            <div className="p-6 rounded-2xl bg-slate-50/70 border border-slate-200/80 space-y-4">
              <div>
                <h3 className="text-xs font-mono uppercase tracking-wider text-slate-400">
                  Vehicle Overview & Demand Strategy
                </h3>
                <p className="mt-2 text-sm text-slate-700 leading-relaxed">
                  {vehicle.description}
                </p>
              </div>

              {/* Key Specs Matrix */}
              <div className="pt-4 border-t border-slate-200/70 grid grid-cols-2 sm:grid-cols-4 gap-3">
                {vehicle.keySpecs.power && (
                  <div>
                    <span className="text-[10px] font-mono text-slate-400 uppercase">Power / Output</span>
                    <p className="text-xs font-mono font-semibold text-charcoal-900 mt-0.5">{vehicle.keySpecs.power}</p>
                  </div>
                )}
                {vehicle.keySpecs.mileage && (
                  <div>
                    <span className="text-[10px] font-mono text-slate-400 uppercase">Efficiency</span>
                    <p className="text-xs font-mono font-semibold text-charcoal-900 mt-0.5">{vehicle.keySpecs.mileage}</p>
                  </div>
                )}
                {vehicle.keySpecs.range && (
                  <div>
                    <span className="text-[10px] font-mono text-slate-400 uppercase">Range</span>
                    <p className="text-xs font-mono font-semibold text-charcoal-900 mt-0.5">{vehicle.keySpecs.range}</p>
                  </div>
                )}
                {vehicle.keySpecs.seating && (
                  <div>
                    <span className="text-[10px] font-mono text-slate-400 uppercase">Capacity</span>
                    <p className="text-xs font-mono font-semibold text-charcoal-900 mt-0.5">{vehicle.keySpecs.seating}</p>
                  </div>
                )}
                {vehicle.keySpecs.warranty && (
                  <div>
                    <span className="text-[10px] font-mono text-slate-400 uppercase">Standard OEM Shield</span>
                    <p className="text-xs font-mono font-semibold text-charcoal-900 mt-0.5">{vehicle.keySpecs.warranty}</p>
                  </div>
                )}
              </div>
            </div>

            {/* Simulated Negotiation Result Section (Requirements 5) */}
            <div className="p-6 rounded-2xl bg-white border border-slate-200/90 shadow-xs space-y-4">
              <div className="flex items-center justify-between">
                <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded text-[11px] font-mono font-semibold uppercase tracking-wider bg-slate-100 text-charcoal-900 border border-slate-200">
                  <Sparkles className="w-3.5 h-3.5 text-charcoal-900" />
                  <span>Demo Negotiation</span>
                </div>
                <span className="text-xs font-mono text-slate-400">Illustrative Preview</span>
              </div>

              <div>
                <h4 className="text-base font-bold text-charcoal-900 tracking-tight">
                  Dealer Offer
                </h4>
                <p className="text-xs text-slate-500 font-mono mt-0.5">
                  Pre-negotiated indicative terms for the current cohort target.
                </p>
              </div>

              {/* Price comparison layout */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 p-4 rounded-xl bg-slate-50 border border-slate-200/80">
                <div>
                  <span className="text-[11px] font-mono text-slate-400 uppercase block">
                    Original Indicative Price
                  </span>
                  <div className="text-base font-mono font-medium text-slate-500 line-through mt-0.5">
                    {vehicle.simulatedOffer.originalPrice}
                  </div>
                </div>

                <div className="sm:border-l sm:border-slate-200 sm:pl-3">
                  <span className="text-[11px] font-mono text-charcoal-900 uppercase font-semibold block">
                    Group Offer
                  </span>
                  <div className="text-xl sm:text-2xl font-mono font-extrabold text-charcoal-900 mt-0.5">
                    {vehicle.simulatedOffer.groupPrice}
                  </div>
                </div>

                <div className="sm:border-l sm:border-slate-200 sm:pl-3">
                  <span className="text-[11px] font-mono text-emerald-800 uppercase font-semibold block">
                    Potential Difference
                  </span>
                  <div className="text-lg sm:text-xl font-mono font-extrabold text-emerald-700 mt-0.5">
                    {vehicle.simulatedOffer.potentialSavings}
                  </div>
                </div>
              </div>

              {/* Subtle explanation (Requirements 5) */}
              <p className="text-xs text-slate-500 italic">
                Illustrative result based on consolidated group demand.
              </p>

              {/* View Offer CTA */}
              <div>
                <button
                  onClick={() => setIsOfferModalOpen(true)}
                  className="inline-flex items-center justify-center px-4 py-2.5 rounded-lg text-xs font-mono font-medium text-charcoal-900 bg-slate-100 hover:bg-slate-200 border border-slate-200 transition-colors"
                >
                  <span>View Offer</span>
                  <ChevronRight className="w-3.5 h-3.5 ml-1" />
                </button>
              </div>
            </div>

          </div>

          {/* Right Column: Group Status & Interactive Join Box */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Group Header Card */}
            <div className="p-6 sm:p-7 rounded-2xl bg-white border border-slate-200/90 shadow-sm space-y-6">
              
              {/* Title & Status */}
              <div>
                <div className="text-xs font-mono uppercase tracking-wider text-slate-400">
                  {vehicle.brand}
                </div>
                <h1 className="text-2xl sm:text-3xl font-extrabold text-charcoal-900 tracking-tight mt-0.5">
                  {vehicle.name}
                </h1>
                <p className="text-sm font-mono text-slate-600 mt-1">
                  {vehicle.variant}
                </p>

                {/* Current Status pill (Requirements 4) */}
                <div className="mt-3 inline-flex items-center gap-2 px-3 py-1 rounded-md text-xs font-mono font-medium bg-amber-50 text-amber-900 border border-amber-200/80">
                  <span className="w-2 h-2 rounded-full bg-amber-500 animate-pulse"></span>
                  <span>Current Status — {vehicle.status}</span>
                </div>
              </div>

              {/* Progress Indicator (Requirements 4) */}
              <div className="space-y-3 pt-3 border-t border-slate-100">
                <div className="flex items-baseline justify-between">
                  <span className="text-sm font-mono text-slate-600">Cohort Size</span>
                  <span className="text-2xl font-extrabold font-mono text-charcoal-900">
                    {vehicle.currentBuyers} <span className="text-slate-400 text-base font-normal">/ {vehicle.targetBuyers} buyers</span>
                  </span>
                </div>

                <div className="w-full h-2.5 bg-slate-100 rounded-full overflow-hidden border border-slate-200/50">
                  <div
                    className={`h-full rounded-full transition-all duration-500 ${
                      vehicle.currentBuyers >= vehicle.targetBuyers ? 'bg-emerald-600' : 'bg-charcoal-900'
                    }`}
                    style={{ width: `${percentage}%` }}
                  ></div>
                </div>

                {/* Text: 12 more buyers needed to reach the current group target (Requirements 4) */}
                <div className="text-xs font-mono text-slate-600 flex items-center justify-between">
                  <span>
                    {buyersNeeded > 0 ? (
                      <span className="font-semibold text-charcoal-900">
                        {buyersNeeded} more {buyersNeeded === 1 ? 'buyer' : 'buyers'} needed to reach the current group target.
                      </span>
                    ) : (
                      <span className="font-semibold text-emerald-700">
                        Group target fully achieved!
                      </span>
                    )}
                  </span>
                  <span className="text-slate-400">{percentage}%</span>
                </div>
              </div>

              {/* Join this purchasing group section (Requirements 4) */}
              <div className="pt-5 border-t border-slate-100 space-y-4">
                <div>
                  <h3 className="text-base font-bold text-charcoal-900 tracking-tight">
                    Join this purchasing group
                  </h3>
                  <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                    Reserve your slot in this cohort. Joining requires zero advance commitment for this demo and increments the collective leverage instantly.
                  </p>
                </div>

                {/* Join Button */}
                <button
                  onClick={handleJoinClick}
                  className={`w-full py-3.5 px-5 rounded-xl font-medium text-sm transition-all flex items-center justify-center gap-2 active:scale-[0.98] ${
                    isJoined
                      ? 'bg-emerald-600 hover:bg-emerald-700 text-white shadow-xs'
                      : 'bg-charcoal-900 hover:bg-charcoal-800 text-white shadow-sm'
                  }`}
                >
                  {isJoined ? (
                    <>
                      <Check className="w-4 h-4 stroke-[2.5]" />
                      <span>Joined Group (Click to Leave)</span>
                    </>
                  ) : (
                    <>
                      <Users className="w-4 h-4" />
                      <span>Join Group</span>
                    </>
                  )}
                </button>

                {/* Small confirmation message (Requirements 4) */}
                {isJoined && (
                  <div className="p-4 rounded-xl bg-emerald-50 border border-emerald-200/80 animate-in fade-in slide-in-from-top-1 duration-200">
                    <div className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-emerald-700 shrink-0 mt-0.5" />
                      <div className="space-y-1">
                        <p className="text-xs font-semibold text-emerald-900">
                          You're in. AutoNexus will notify you when the group reaches its target.
                        </p>
                        <p className="text-[11px] font-mono text-emerald-700">
                          Your membership ID: ANX-COHORT-{vehicle.id.slice(0, 8).toUpperCase()}-{(vehicle.currentBuyers * 17) % 900 + 100}
                        </p>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Trust & Policy Assurance */}
              <div className="pt-4 border-t border-slate-100 space-y-2 text-xs font-mono text-slate-500">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-3.5 h-3.5 text-slate-400" />
                  <span>Direct dealer billing & invoice guarantee</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-3.5 h-3.5 text-slate-400" />
                  <span>Target closing window: {vehicle.groupTargetDate}</span>
                </div>
              </div>

            </div>

            {/* How Collective Negotiation Protects You */}
            <div className="p-5 rounded-2xl bg-slate-50/70 border border-slate-200/80 space-y-3">
              <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400">
                How AutoNexus Operates
              </h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                When the cohort reaches {vehicle.targetBuyers} buyers, AutoNexus presents the batch order to authorized dealers. Dealers bid wholesale margins to secure the 50-car order. You receive the finalized voucher with zero middlemen fees.
              </p>
            </div>

          </div>

        </div>

      </div>

      {/* Offer Breakdown Modal */}
      <OfferSimulationModal
        vehicle={vehicle}
        isOpen={isOfferModalOpen}
        onClose={() => setIsOfferModalOpen(false)}
      />
    </div>
  );
};
