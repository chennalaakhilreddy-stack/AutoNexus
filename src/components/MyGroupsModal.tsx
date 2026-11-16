import React from 'react';
import { X, ArrowRight, CheckCircle2, Trash2 } from 'lucide-react';
import { Vehicle } from '../types';

interface MyGroupsModalProps {
  isOpen: boolean;
  onClose: () => void;
  joinedVehicles: Vehicle[];
  onSelectVehicle: (vehicle: Vehicle) => void;
  onLeaveGroup: (vehicleId: string) => void;
}

export const MyGroupsModal: React.FC<MyGroupsModalProps> = ({
  isOpen,
  onClose,
  joinedVehicles,
  onSelectVehicle,
  onLeaveGroup,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-xs flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-150">
      <div className="relative w-full max-w-xl bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden">
        
        {/* Header */}
        <div className="px-6 py-5 border-b border-slate-200 bg-slate-50/70 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-5 h-5 text-emerald-600" />
            <div>
              <h3 className="text-lg font-bold text-charcoal-900 tracking-tight">
                My Joined Purchasing Groups
              </h3>
              <p className="text-xs font-mono text-slate-500">
                {joinedVehicles.length} {joinedVehicles.length === 1 ? 'cohort' : 'cohorts'} registered
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-lg text-slate-400 hover:text-charcoal-900 hover:bg-slate-200/60 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 space-y-4 max-h-[65vh] overflow-y-auto">
          {joinedVehicles.length > 0 ? (
            <div className="space-y-3">
              {joinedVehicles.map((vehicle) => {
                const percentage = Math.min(
                  100,
                  Math.round((vehicle.currentBuyers / vehicle.targetBuyers) * 100)
                );

                return (
                  <div
                    key={vehicle.id}
                    className="p-4 rounded-xl border border-slate-200 bg-slate-50/60 hover:bg-slate-50 flex items-center justify-between gap-4 transition-colors"
                  >
                    <div
                      onClick={() => {
                        onSelectVehicle(vehicle);
                        onClose();
                      }}
                      className="cursor-pointer space-y-1 flex-1"
                    >
                      <div className="flex items-center gap-2">
                        <span className="text-sm font-bold text-charcoal-900">{vehicle.name}</span>
                        <span className="text-xs font-mono px-2 py-0.5 rounded bg-emerald-50 text-emerald-800 border border-emerald-200">
                          Joined
                        </span>
                      </div>
                      <p className="text-xs font-mono text-slate-500">{vehicle.variant}</p>
                      
                      <div className="flex items-center gap-3 text-[11px] font-mono text-slate-500 pt-1">
                        <span>Cohort: {vehicle.currentBuyers}/{vehicle.targetBuyers} buyers</span>
                        <span>•</span>
                        <span className="text-emerald-700 font-semibold">Save {vehicle.simulatedOffer.potentialSavings}</span>
                      </div>
                    </div>

                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => {
                          onSelectVehicle(vehicle);
                          onClose();
                        }}
                        className="px-3 py-1.5 rounded-lg text-xs font-mono font-medium text-charcoal-900 bg-white border border-slate-200 hover:bg-slate-100"
                      >
                        Inspect
                      </button>
                      <button
                        onClick={() => onLeaveGroup(vehicle.id)}
                        className="p-2 rounded-lg text-slate-400 hover:text-red-600 hover:bg-red-50 transition-colors"
                        title="Leave group"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          ) : (
            <div className="py-12 text-center space-y-3">
              <p className="text-sm text-slate-500">
                You haven't joined any purchasing groups yet.
              </p>
              <button
                onClick={onClose}
                className="px-4 py-2 rounded-lg text-xs font-mono font-medium text-white bg-charcoal-900"
              >
                Browse Available Groups
              </button>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="px-6 py-4 border-t border-slate-200 bg-slate-50/70 flex justify-between items-center text-xs font-mono text-slate-400">
          <span>Demo simulation state</span>
          <button
            onClick={onClose}
            className="px-4 py-1.5 rounded-lg text-xs font-mono font-medium text-slate-700 bg-white border border-slate-200 hover:bg-slate-50"
          >
            Close
          </button>
        </div>

      </div>
    </div>
  );
};
