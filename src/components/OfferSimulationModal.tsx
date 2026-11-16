import React from 'react';
import { X, ShieldCheck, Check, Clock, Building2, AlertCircle, ArrowRight } from 'lucide-react';
import { Vehicle } from '../types';

interface OfferSimulationModalProps {
  vehicle: Vehicle;
  isOpen: boolean;
  onClose: () => void;
}

export const OfferSimulationModal: React.FC<OfferSimulationModalProps> = ({
  vehicle,
  isOpen,
  onClose,
}) => {
  if (!isOpen) return null;

  const offer = vehicle.simulatedOffer;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-xs flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-200">
      
      {/* Modal Dialog */}
      <div className="relative w-full max-w-2xl bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden transform transition-all">
        
        {/* Modal Header */}
        <div className="px-6 py-5 border-b border-slate-200/80 bg-slate-50/70 flex items-center justify-between">
          <div>
            <div className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded text-[10px] font-mono font-semibold uppercase tracking-wider bg-slate-200/80 text-slate-800">
              <span className="w-1.5 h-1.5 rounded-full bg-charcoal-900"></span>
              <span>Demo Negotiation Breakdown</span>
            </div>
            <h3 className="text-xl font-bold text-charcoal-900 tracking-tight mt-1">
              Consolidated Dealer Offer
            </h3>
            <p className="text-xs font-mono text-slate-500">
              {vehicle.brand} {vehicle.name} — {vehicle.variant}
            </p>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-lg text-slate-400 hover:text-charcoal-900 hover:bg-slate-200/60 transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 space-y-6 max-h-[75vh] overflow-y-auto">
          
          {/* Main Price Comparison Block */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 p-4 rounded-xl bg-slate-50 border border-slate-200/80">
            <div className="p-3">
              <span className="text-[11px] font-mono text-slate-400 uppercase block">Indicative Retail</span>
              <div className="text-lg font-mono font-medium text-slate-500 line-through mt-0.5">
                {offer.originalPrice}
              </div>
              <span className="text-[10px] text-slate-400">Standard showroom list</span>
            </div>

            <div className="p-3 bg-white rounded-lg border border-slate-200/70 shadow-2xs">
              <span className="text-[11px] font-mono text-charcoal-900 font-semibold uppercase block">Group Offer</span>
              <div className="text-2xl font-mono font-extrabold text-charcoal-900 mt-0.5">
                {offer.groupPrice}
              </div>
              <span className="text-[10px] font-mono text-emerald-700">Consolidated bulk tier</span>
            </div>

            <div className="p-3 bg-emerald-50/60 rounded-lg border border-emerald-200/60">
              <span className="text-[11px] font-mono text-emerald-800 uppercase font-semibold block">Potential Difference</span>
              <div className="text-xl font-mono font-extrabold text-emerald-700 mt-0.5">
                {offer.potentialSavings}
              </div>
              <span className="text-[10px] text-emerald-600">Net direct economic advantage</span>
            </div>
          </div>

          {/* Breakdown Items List */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400">
              Itemized Commercial Advantage Breakdown
            </h4>

            <div className="divide-y divide-slate-100 border border-slate-200 rounded-xl overflow-hidden">
              {offer.breakdown.map((item, idx) => (
                <div key={idx} className="p-3.5 sm:px-4 flex items-center justify-between gap-4 bg-white hover:bg-slate-50/60 transition-colors">
                  <div className="space-y-0.5">
                    <div className="text-sm font-semibold text-charcoal-900">{item.label}</div>
                    <div className="text-xs text-slate-500">{item.description}</div>
                  </div>
                  <div className="text-sm font-mono font-bold text-emerald-700 whitespace-nowrap">
                    {item.amount}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Key Inclusions & Perks */}
          <div className="space-y-2.5">
            <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400">
              Group Contract Inclusions
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {offer.highlights.map((highlight, idx) => (
                <div key={idx} className="flex items-start gap-2 p-2.5 rounded-lg bg-slate-50 border border-slate-100 text-xs text-slate-700">
                  <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                  <span>{highlight}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Dealer Network & Logistics Notice */}
          <div className="p-4 rounded-xl border border-slate-200 bg-slate-50 space-y-2 text-xs">
            <div className="flex items-center gap-2 font-mono text-slate-700 font-semibold">
              <Building2 className="w-4 h-4 text-slate-500" />
              <span>{offer.dealerNetworkName}</span>
            </div>
            <div className="flex items-center gap-2 font-mono text-slate-600">
              <Clock className="w-4 h-4 text-slate-400" />
              <span>Estimated Delivery Window: {offer.deliveryWindow}</span>
            </div>
            <div className="pt-2 border-t border-slate-200/70 text-[11px] text-slate-500 leading-relaxed">
              <AlertCircle className="w-3.5 h-3.5 text-slate-400 inline mr-1" />
              {offer.termsNote}
            </div>
          </div>

        </div>

        {/* Modal Footer */}
        <div className="px-6 py-4 border-t border-slate-200 bg-slate-50/70 flex items-center justify-between">
          <span className="text-[11px] font-mono text-slate-400">
            Simulated result for demonstration
          </span>
          <button
            onClick={onClose}
            className="px-5 py-2 rounded-lg text-xs font-mono font-medium text-white bg-charcoal-900 hover:bg-charcoal-800 transition-colors"
          >
            Close Preview
          </button>
        </div>

      </div>

    </div>
  );
};
