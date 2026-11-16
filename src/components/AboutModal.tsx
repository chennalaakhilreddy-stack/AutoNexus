import React from 'react';
import { X, ShieldCheck, Scale, Award, ArrowUpRight } from 'lucide-react';

interface AboutModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const AboutModal: React.FC<AboutModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-xs flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-150">
      <div className="relative w-full max-w-2xl bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden">
        
        {/* Header */}
        <div className="px-6 py-5 border-b border-slate-200 bg-slate-50/70 flex items-center justify-between">
          <div>
            <span className="text-[11px] font-mono uppercase tracking-wider text-slate-500">Platform Thesis</span>
            <h3 className="text-xl font-bold text-charcoal-900 tracking-tight mt-0.5">
              About AutoNexus
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-lg text-slate-400 hover:text-charcoal-900 hover:bg-slate-200/60 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 space-y-6 text-sm text-slate-600 leading-relaxed max-h-[70vh] overflow-y-auto">
          <div>
            <h4 className="text-base font-bold text-charcoal-900 tracking-tight mb-2">
              Why We Built AutoNexus
            </h4>
            <p>
              In traditional automotive retail, consumers negotiate as isolated individuals against highly organized dealership sales machines. Buyers face opaque markups, forced accessory bundles, inflated insurance quotes, and lengthy queue delays.
            </p>
            <p className="mt-2">
              Conversely, corporate fleet buyers purchasing 30 to 50 vehicles receive preferential pricing, factory build slots, and direct account management. AutoNexus democratizes this exact dynamic by pooling retail buyers into consolidated demand cohorts.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 space-y-1.5">
              <div className="flex items-center gap-2 text-charcoal-900 font-semibold text-xs font-mono uppercase">
                <Scale className="w-4 h-4 text-charcoal-900" />
                <span>Demand Leverage</span>
              </div>
              <p className="text-xs text-slate-600">
                Authorized dealers compete for 50-car batches rather than haggling with single walk-ins.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 space-y-1.5">
              <div className="flex items-center gap-2 text-charcoal-900 font-semibold text-xs font-mono uppercase">
                <ShieldCheck className="w-4 h-4 text-charcoal-900" />
                <span>Direct Dealer Billing</span>
              </div>
              <p className="text-xs text-slate-600">
                You never pay AutoNexus for the car. Invoicing and delivery happen directly with authorized OEM dealerships.
              </p>
            </div>
          </div>

          <div className="p-4 rounded-xl bg-slate-100/70 border border-slate-200 text-xs font-mono text-slate-600 space-y-1">
            <div className="font-semibold text-charcoal-900">Prototype Disclaimer</div>
            <p>
              This website is a functional visual demo showcasing the UI/UX and interaction model of the AutoNexus collective purchasing protocol. No real payments, dealer transactions, or contracts are executed.
            </p>
          </div>
        </div>

        {/* Footer */}
        <div className="px-6 py-4 border-t border-slate-200 bg-slate-50/70 flex justify-end">
          <button
            onClick={onClose}
            className="px-5 py-2 rounded-lg text-xs font-mono font-medium text-white bg-charcoal-900 hover:bg-charcoal-800 transition-colors"
          >
            Got it
          </button>
        </div>

      </div>
    </div>
  );
};
