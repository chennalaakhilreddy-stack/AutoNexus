import React, { useState, useEffect } from 'react';
import { INITIAL_VEHICLES } from './data/vehicles';
import { Vehicle } from './types';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { HowItWorks } from './components/HowItWorks';
import { VehicleExplorer } from './components/VehicleExplorer';
import { GroupDetailView } from './components/GroupDetailView';
import { ActiveGroups } from './components/ActiveGroups';
import { ExpansionSection } from './components/ExpansionSection';
import { Footer } from './components/Footer';
import { AboutModal } from './components/AboutModal';
import { MyGroupsModal } from './components/MyGroupsModal';

export const App: React.FC = () => {
  // Initialize state from localStorage if available, or fall back to default
  const [vehicles, setVehicles] = useState<Vehicle[]>(() => {
    try {
      const saved = localStorage.getItem('autonexus_vehicles_data');
      if (saved) {
        const parsed: Vehicle[] = JSON.parse(saved);
        return INITIAL_VEHICLES.map((initV) => {
          const match = parsed.find((p) => p.id === initV.id);
          return match
            ? { ...match, image: initV.image }
            : initV;
        });
      }
    } catch (e) {
      console.warn('LocalStorage error:', e);
    }
    return INITIAL_VEHICLES;
  });

  const [joinedVehicleIds, setJoinedVehicleIds] = useState<Set<string>>(() => {
    try {
      const saved = localStorage.getItem('autonexus_joined_cohorts');
      if (saved) {
        return new Set(JSON.parse(saved));
      }
    } catch (e) {
      console.warn('LocalStorage error:', e);
    }
    return new Set<string>();
  });

  const [selectedVehicleId, setSelectedVehicleId] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState<string>('explore');
  const [isAboutOpen, setIsAboutOpen] = useState(false);
  const [isMyGroupsOpen, setIsMyGroupsOpen] = useState(false);

  // Sync state to localStorage
  useEffect(() => {
    try {
      localStorage.setItem('autonexus_vehicles_data', JSON.stringify(vehicles));
      localStorage.setItem('autonexus_joined_cohorts', JSON.stringify(Array.from(joinedVehicleIds)));
    } catch (e) {
      console.warn('LocalStorage sync error:', e);
    }
  }, [vehicles, joinedVehicleIds]);

  // Find currently selected vehicle (with updated dynamic counts)
  const selectedVehicle = selectedVehicleId
    ? vehicles.find((v) => v.id === selectedVehicleId) || null
    : null;

  // Handler to toggle joining / leaving a group
  const handleToggleJoin = (vehicleId: string) => {
    const isCurrentlyJoined = joinedVehicleIds.has(vehicleId);

    setJoinedVehicleIds((prev) => {
      const next = new Set(prev);
      if (isCurrentlyJoined) {
        next.delete(vehicleId);
      } else {
        next.add(vehicleId);
      }
      return next;
    });

    setVehicles((prevVehicles) =>
      prevVehicles.map((v) => {
        if (v.id === vehicleId) {
          const delta = isCurrentlyJoined ? -1 : 1;
          const updatedBuyers = Math.max(0, v.currentBuyers + delta);
          
          // Re-evaluate status if threshold reached
          let updatedStatus = v.status;
          if (updatedBuyers >= v.targetBuyers) {
            updatedStatus = 'Target Reached';
          } else if (updatedBuyers >= v.targetBuyers * 0.8) {
            updatedStatus = 'Near Target';
          } else {
            updatedStatus = 'Building Demand';
          }

          return {
            ...v,
            currentBuyers: updatedBuyers,
            status: updatedStatus,
          };
        }
        return v;
      })
    );
  };

  // Navigation router handler
  const handleNavigate = (sectionId: string) => {
    setActiveTab(sectionId);

    if (sectionId === 'about') {
      setIsAboutOpen(true);
      return;
    }

    // If we're on the dedicated group page, returning will clear it
    if (selectedVehicleId !== null) {
      setSelectedVehicleId(null);
    }

    // Scroll to anchor smoothly
    setTimeout(() => {
      if (sectionId === 'hero') {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else {
        const el = document.getElementById(sectionId);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' });
        }
      }
    }, 50);
  };

  const handleSelectVehicle = (vehicle: Vehicle) => {
    setSelectedVehicleId(vehicle.id);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleBackToExplorer = () => {
    setSelectedVehicleId(null);
    handleNavigate('explore');
  };

  const joinedVehiclesList = vehicles.filter((v) => joinedVehicleIds.has(v.id));

  // Featured vehicle for hero
  const featuredVehicle = vehicles[0]; // Hyundai Creta SX(O)

  return (
    <div className="min-h-screen flex flex-col bg-[#fcfdfd] text-charcoal-900 font-sans selection:bg-charcoal-900 selection:text-white">
      
      {/* Navigation */}
      <Navbar
        activeTab={activeTab}
        onNavigate={handleNavigate}
        joinedCount={joinedVehicleIds.size}
        onOpenMyGroups={() => setIsMyGroupsOpen(true)}
      />

      {/* Main Content Area */}
      <main className="flex-1">
        {selectedVehicle ? (
          /* View 4: Dedicated Vehicle Group Page (Most important demo interaction) */
          <GroupDetailView
            vehicle={selectedVehicle}
            isJoined={joinedVehicleIds.has(selectedVehicle.id)}
            onToggleJoin={handleToggleJoin}
            onBack={handleBackToExplorer}
          />
        ) : (
          /* Full Platform Landing Experience */
          <>
            {/* 1. Landing Hero Section */}
            <Hero
              featuredVehicle={featuredVehicle}
              onExploreClick={() => handleNavigate('explore')}
              onHowItWorksClick={() => handleNavigate('how-it-works')}
              onSelectVehicle={handleSelectVehicle}
            />

            {/* 2. How It Works Section */}
            <HowItWorks />

            {/* 3. Vehicle Explorer Section */}
            <VehicleExplorer
              vehicles={vehicles}
              joinedVehicleIds={joinedVehicleIds}
              onSelectVehicle={handleSelectVehicle}
            />

            {/* 6. Active Groups Section */}
            <ActiveGroups
              vehicles={vehicles}
              joinedVehicleIds={joinedVehicleIds}
              onSelectVehicle={handleSelectVehicle}
            />

            {/* 7. Expansion Section (Beyond Vehicles) */}
            <ExpansionSection />
          </>
        )}
      </main>

      {/* 8. Footer */}
      <Footer onNavigate={handleNavigate} />

      {/* About Modal */}
      <AboutModal
        isOpen={isAboutOpen}
        onClose={() => setIsAboutOpen(false)}
      />

      {/* My Joined Groups Modal */}
      <MyGroupsModal
        isOpen={isMyGroupsOpen}
        onClose={() => setIsMyGroupsOpen(false)}
        joinedVehicles={joinedVehiclesList}
        onSelectVehicle={handleSelectVehicle}
        onLeaveGroup={handleToggleJoin}
      />

    </div>
  );
};

export default App;
