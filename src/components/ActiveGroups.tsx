import React from 'react';
import { ArrowUpRight, Users, CheckCircle2, TrendingUp, Clock } from 'lucide-react';
import { Vehicle } from '../types';

interface ActiveGroupsProps {
  vehicles: Vehicle[];
  joinedVehicleIds: Set<string>;
  onSelectVehicle: (vehicle: Vehicle) => void;
}

export const ActiveGroups: React.FC<ActiveGroupsProps> = ({
  vehicles,
  joinedVehicleIds,
  onSelectVehicle,
}) => {
  // Let's feature the prominent active groups highlighted in the specification
  const featuredGroups = vehicles.filter((v) =>
    [
      'hyundai-creta-sxo',
      'toyota-innova-hycross-zx',
      'royal-enfield-himalayan-450',
      'tata-harrier-fearless-plus',
      'mahindra-xuv700-ax7l',
      'ktm-390-adventure'
    ].includes(v.id)
  );

  const getStatusBadge = (status: Vehicle['status']) => {
    switch (status) {
      case 'Building Demand':
        return (
          <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-mono font-medium bg-amber-50 text-amber-900 border border-amber-200/80">
            <span className="w-1.5 h-1.5 rounded-full bg-amber-500"></span>
            Building Demand
          </span>
        );
      case 'Near Target':
        return (
          <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-mono font-medium bg-sky-50 text-sky-900 border border-sky-200/80">
            <span className="w-1.5 h-1.5 rounded-full bg-sky-500"></span>
            Near Target
          </span>
        );
      case 'Target Reached':
        return (
          <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-mono font-medium bg-emerald-50 text-emerald-900 border border-emerald-200/80">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
            Target Reached
          </span>
        );
      case 'Offer Received':
        return (
          <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-mono font-medium bg-purple-50 text-purple-900 border border-purple-200/80">
            <span className="w-1.5 h-1.5 rounded-full bg-purple-500"></span>
            Offer Received
          </span>
        );
    }
  };

  return (
    <section id="active-groups" className="py-20 md:py-28 bg-[#fafbfc] border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <span className="text-xs font-mono uppercase tracking-widest text-slate-500 block mb-2">
              Consolidated Demand Monitor
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-charcoal-900 tracking-tight">
              Active Purchasing Groups
            </h2>
            <p className="mt-3 text-sm sm:text-base text-slate-600">
              Live cohorts currently aggregating buyer leverage. Select any active cohort to inspect real-time progress or secure your allocation.
            </p>
          </div>

          <div className="text-xs font-mono text-slate-500 flex items-center gap-2">
            <Clock className="w-4 h-4 text-slate-400" />
            <span>Updated in real time via live state</span>
          </div>
        </div>

        {/* Groups Grid / Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredGroups.map((vehicle) => {
            const percentage = Math.min(
              100,
              Math.round((vehicle.currentBuyers / vehicle.targetBuyers) * 100)
            );
            const isJoined = joinedVehicleIds.has(vehicle.id);

            return (
              <div
                key={vehicle.id}
                onClick={() => onSelectVehicle(vehicle)}
                className="group relative flex flex-col justify-between p-6 rounded-2xl bg-white border border-slate-200/90 shadow-xs hover:border-slate-300 card-hover cursor-pointer transition-all"
              >
                <div className="space-y-4">
                  {/* Top line: Status & Category */}
                  <div className="flex items-center justify-between">
                    {getStatusBadge(vehicle.status)}
                    <span className="text-[11px] font-mono text-slate-400">
                      {vehicle.category}
                    </span>
                  </div>

                  {/* Vehicle Name & Variant */}
                  <div>
                    <div className="flex items-baseline justify-between">
                      <h3 className="text-xl font-bold text-charcoal-900 tracking-tight group-hover:text-charcoal-800 transition-colors">
                        {vehicle.name}
                      </h3>
                      <ArrowUpRight className="w-4 h-4 text-slate-400 group-hover:text-charcoal-900 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                    </div>
                    <p className="text-xs font-mono text-slate-500 mt-1 line-clamp-1">
                      {vehicle.variant}
                    </p>
                  </div>

                  {/* Progress Indicator */}
                  <div className="space-y-2 pt-2">
                    <div className="flex items-center justify-between text-xs font-mono">
                      <span className="text-slate-600 flex items-center gap-1.5">
                        <Users className="w-3.5 h-3.5 text-slate-400" />
                        <span>Demand Progress</span>
                      </span>
                      <span className="font-bold text-charcoal-900">
                        {vehicle.currentBuyers} / {vehicle.targetBuyers} buyers
                      </span>
                    </div>

                    <div className="w-full h-2 bg-slate-100 rounded-full overflow-hidden border border-slate-200/50">
                      <div
                        className={`h-full rounded-full transition-all duration-500 ${
                          vehicle.currentBuyers >= vehicle.targetBuyers
                            ? 'bg-emerald-600'
                            : 'bg-charcoal-900'
                        }`}
                        style={{ width: `${percentage}%` }}
                      ></div>
                    </div>

                    <div className="flex items-center justify-between text-[11px] font-mono text-slate-400 pt-0.5">
                      <span>{percentage}% fulfilled</span>
                      <span>{vehicle.groupTargetDate}</span>
                    </div>
                  </div>
                </div>

                {/* Bottom Strip: Financial Advantage & Joined State */}
                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
                  <div>
                    <span className="text-[10px] font-mono uppercase text-slate-400 block">Indicative Price</span>
                    <span className="text-sm font-mono font-bold text-charcoal-900">{vehicle.startingPrice}</span>
                  </div>

                  <div className="text-right">
                    <span className="text-[10px] font-mono uppercase text-emerald-800 block">Group Advantage</span>
                    <span className="text-sm font-mono font-bold text-emerald-700">
                      save {vehicle.simulatedOffer.potentialSavings}
                    </span>
                  </div>
                </div>

                {isJoined && (
                  <div className="mt-3 px-3 py-1.5 rounded-lg bg-emerald-50 border border-emerald-200/80 flex items-center justify-between text-xs font-mono text-emerald-900">
                    <span className="flex items-center gap-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-700" />
                      <span>You are registered in this cohort</span>
                    </span>
                  </div>
                )}

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
