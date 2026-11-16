import React, { useState, useMemo } from 'react';
import { Search, SlidersHorizontal, X } from 'lucide-react';
import { Vehicle, VehicleCategory } from '../types';
import { VehicleCard } from './VehicleCard';

interface VehicleExplorerProps {
  vehicles: Vehicle[];
  joinedVehicleIds: Set<string>;
  onSelectVehicle: (vehicle: Vehicle) => void;
}

const CATEGORIES: VehicleCategory[] = ['All', 'Cars', 'SUVs', 'Bikes', 'Commercial Vehicles'];

export const VehicleExplorer: React.FC<VehicleExplorerProps> = ({
  vehicles,
  joinedVehicleIds,
  onSelectVehicle,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<VehicleCategory>('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState<'demand' | 'price-asc' | 'price-desc'>('demand');

  const filteredVehicles = useMemo(() => {
    return vehicles
      .filter((vehicle) => {
        const matchesCategory =
          selectedCategory === 'All' || vehicle.category === selectedCategory;

        const matchesSearch =
          searchQuery.trim() === '' ||
          vehicle.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          vehicle.brand.toLowerCase().includes(searchQuery.toLowerCase()) ||
          vehicle.variant.toLowerCase().includes(searchQuery.toLowerCase()) ||
          vehicle.fuelType.toLowerCase().includes(searchQuery.toLowerCase());

        return matchesCategory && matchesSearch;
      })
      .sort((a, b) => {
        if (sortBy === 'demand') {
          return b.currentBuyers - a.currentBuyers;
        }
        if (sortBy === 'price-asc') {
          return a.priceNumeric - b.priceNumeric;
        }
        if (sortBy === 'price-desc') {
          return b.priceNumeric - a.priceNumeric;
        }
        return 0;
      });
  }, [vehicles, selectedCategory, searchQuery, sortBy]);

  return (
    <section id="explore" className="py-16 md:py-24 bg-white border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 border-b border-slate-200/80">
          <div>
            <span className="text-xs font-mono uppercase tracking-widest text-slate-500 block mb-2">
              Cohort Directory
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-charcoal-900 tracking-tight">
              Vehicle Explorer
            </h2>
            <p className="mt-2 text-sm sm:text-base text-slate-600">
              Browse actively consolidating buyer groups or initiate demand for high-demand configurations.
            </p>
          </div>

          {/* Quick Counter Info */}
          <div className="text-left md:text-right">
            <span className="text-xs font-mono text-slate-400 uppercase">Available Groups</span>
            <div className="text-lg font-bold font-mono text-charcoal-900">
              {filteredVehicles.length} of {vehicles.length} Active Cohorts
            </div>
          </div>
        </div>

        {/* Filters and Controls Toolbar */}
        <div className="py-6 flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-4">
          
          {/* Category Tabs */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-2 lg:pb-0 no-scrollbar">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-medium font-mono whitespace-nowrap transition-all ${
                  selectedCategory === cat
                    ? 'bg-charcoal-900 text-white shadow-xs'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200/70 hover:text-charcoal-900'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search & Sort Controls */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
            
            {/* Search Input */}
            <div className="relative flex-1 sm:w-64">
              <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search model, brand, fuel..."
                className="w-full pl-9 pr-8 py-2 text-xs font-sans rounded-lg bg-slate-50 border border-slate-200 text-charcoal-900 placeholder:text-slate-400 focus:outline-none focus:ring-1 focus:ring-charcoal-900 focus:bg-white transition-all"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-2.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
                  aria-label="Clear search"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              )}
            </div>

            {/* Sort Dropdown */}
            <div className="flex items-center gap-2">
              <span className="text-xs font-mono text-slate-400 hidden sm:inline">Sort:</span>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as any)}
                className="px-3 py-2 text-xs font-mono rounded-lg bg-slate-50 border border-slate-200 text-charcoal-900 focus:outline-none focus:ring-1 focus:ring-charcoal-900 transition-all cursor-pointer"
              >
                <option value="demand">Most Interested Buyers</option>
                <option value="price-asc">Price: Low to High</option>
                <option value="price-desc">Price: High to Low</option>
              </select>
            </div>

          </div>
        </div>

        {/* Vehicles Grid */}
        {filteredVehicles.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pt-2">
            {filteredVehicles.map((vehicle) => (
              <VehicleCard
                key={vehicle.id}
                vehicle={vehicle}
                isJoined={joinedVehicleIds.has(vehicle.id)}
                onSelect={onSelectVehicle}
              />
            ))}
          </div>
        ) : (
          /* Empty Search State */
          <div className="py-20 text-center rounded-2xl border border-dashed border-slate-200 bg-slate-50/50 p-8 space-y-4">
            <div className="w-12 h-12 rounded-xl bg-slate-100 border border-slate-200 flex items-center justify-center mx-auto text-slate-400">
              <SlidersHorizontal className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-base font-bold text-charcoal-900">No matching vehicle groups found</h3>
              <p className="text-xs text-slate-500 mt-1 max-w-sm mx-auto">
                No active cohorts matched "{searchQuery}" in category "{selectedCategory}". Try adjusting your filters or initiate a custom buyer pool.
              </p>
            </div>
            <button
              onClick={() => {
                setSelectedCategory('All');
                setSearchQuery('');
              }}
              className="px-4 py-2 rounded-lg text-xs font-mono font-medium text-charcoal-900 bg-white border border-slate-200 hover:bg-slate-50"
            >
              Reset Filters
            </button>
          </div>
        )}

      </div>
    </section>
  );
};
