import React from 'react';
import { ArrowRight, Check, Users } from 'lucide-react';
import { Vehicle } from '../types';

interface VehicleCardProps {
  vehicle: Vehicle;
  isJoined: boolean;
  onSelect: (vehicle: Vehicle) => void;
}

export const VehicleCard: React.FC<VehicleCardProps> = ({
  vehicle,
  isJoined,
  onSelect,
}) => {
  const percentage = Math.min(
    100,
    Math.round((vehicle.currentBuyers / vehicle.targetBuyers) * 100)
  );

  const getStatusBadgeClass = (status: Vehicle['status']) => {
    switch (status) {
      case 'Building Demand':
        return 'bg-amber-50 text-amber-900 border-amber-200/80';
      case 'Near Target':
        return 'bg-sky-50 text-sky-900 border-sky-200/80';
      case 'Target Reached':
        return 'bg-emerald-50 text-emerald-900 border-emerald-200/80';
      case 'Offer Received':
        return 'bg-indigo-50 text-indigo-900 border-indigo-200/80';
      default:
        return 'bg-slate-100 text-slate-800 border-slate-200';
    }
  };

  return (
    <div className="group relative flex flex-col justify-between rounded-xl bg-white border border-slate-200/90 shadow-xs hover:border-slate-300 card-hover overflow-hidden">
      
      {/* Vehicle Image & Badges */}
      <div className="relative aspect-[16/10] bg-slate-100 overflow-hidden">
        <img
          src={vehicle.image}
          alt={`${vehicle.brand} ${vehicle.name}`}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />
        
        {/* Subtle gradient vignette */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-60"></div>

        {/* Top Badges */}
        <div className="absolute top-3 left-3 right-3 flex items-center justify-between">
          <span className="text-[11px] font-mono font-medium px-2 py-0.5 rounded bg-white/95 text-slate-800 border border-white/50 backdrop-blur-xs">
            {vehicle.category}
          </span>

          <div className="flex items-center gap-1.5">
            {isJoined && (
              <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded text-[11px] font-mono font-semibold bg-emerald-600 text-white shadow-xs">
                <Check className="w-3 h-3 stroke-[2.5]" />
                <span>Joined</span>
              </span>
            )}
            <span
              className={`text-[11px] font-mono font-medium px-2 py-0.5 rounded border backdrop-blur-xs ${getStatusBadgeClass(
                vehicle.status
              )}`}
            >
              {vehicle.status}
            </span>
          </div>
        </div>

        {/* Fuel / Transmission Indicator pill at bottom edge of image */}
        <div className="absolute bottom-2.5 left-3">
          <span className="text-[10px] font-mono text-white/90 bg-black/50 px-2 py-0.5 rounded backdrop-blur-sm">
            {vehicle.fuelType} • {vehicle.transmission}
          </span>
        </div>
      </div>

      {/* Card Content Body */}
      <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
        
        {/* Title & Variant */}
        <div>
          <div className="text-xs uppercase font-mono tracking-wider text-slate-400">
            {vehicle.brand}
          </div>
          <h3 className="text-lg font-bold text-charcoal-900 tracking-tight mt-0.5 group-hover:text-charcoal-800 transition-colors">
            {vehicle.name}
          </h3>
          <p className="text-xs font-mono text-slate-500 mt-1 line-clamp-1">
            {vehicle.variant}
          </p>
        </div>

        {/* Pricing Info */}
        <div className="pt-2 border-t border-slate-100 flex items-baseline justify-between">
          <div>
            <span className="text-[11px] font-mono text-slate-400 uppercase">Indicative Price</span>
            <div className="text-base font-bold font-mono text-charcoal-900">
              {vehicle.startingPrice}
            </div>
          </div>
          
          <div className="text-right">
            <span className="text-[11px] font-mono text-slate-400 uppercase">Est. Margin Unlock</span>
            <div className="text-sm font-semibold font-mono text-emerald-700">
              save {vehicle.simulatedOffer.potentialSavings}
            </div>
          </div>
        </div>

        {/* Group Demand Progress Bar */}
        <div className="space-y-1.5 pt-1">
          <div className="flex items-center justify-between text-xs font-mono">
            <span className="text-slate-600 flex items-center gap-1.5">
              <Users className="w-3.5 h-3.5 text-slate-400" />
              <span>Interested Buyers</span>
            </span>
            <span className="font-semibold text-charcoal-900">
              {vehicle.currentBuyers} <span className="text-slate-400">/ {vehicle.targetBuyers}</span>
            </span>
          </div>

          <div className="w-full h-1.5 bg-slate-100 rounded-full overflow-hidden border border-slate-200/50">
            <div
              className={`h-full rounded-full transition-all duration-300 ${
                vehicle.status === 'Target Reached' || vehicle.status === 'Offer Received'
                  ? 'bg-emerald-600'
                  : 'bg-charcoal-900'
              }`}
              style={{ width: `${percentage}%` }}
            ></div>
          </div>
        </div>

        {/* Action Button: View Group */}
        <div className="pt-2">
          <button
            onClick={() => onSelect(vehicle)}
            className="w-full inline-flex items-center justify-center py-2.5 px-4 rounded-lg text-sm font-medium text-charcoal-900 bg-slate-100 hover:bg-charcoal-900 hover:text-white border border-slate-200 hover:border-charcoal-900 active:scale-[0.99] transition-all"
          >
            <span>View Group</span>
            <ArrowRight className="w-4 h-4 ml-1.5 opacity-70 group-hover:opacity-100 transition-opacity" />
          </button>
        </div>

      </div>

    </div>
  );
};
