import React, { useState } from 'react';
import { Layers, Menu, X, ArrowUpRight, CheckCircle2 } from 'lucide-react';

interface NavbarProps {
  activeTab: string;
  onNavigate: (sectionId: string) => void;
  joinedCount: number;
  onOpenMyGroups: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  activeTab,
  onNavigate,
  joinedCount,
  onOpenMyGroups
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleLinkClick = (id: string) => {
    onNavigate(id);
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-40 bg-white/90 backdrop-blur-md border-b border-slate-200/80 transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          
          {/* Logo & Platform Tag */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => handleLinkClick('hero')}
              className="flex items-center gap-2.5 text-left group focus:outline-none"
            >
              <div className="w-9 h-9 rounded-lg bg-charcoal-900 text-white flex items-center justify-center font-bold tracking-tight text-lg shadow-sm transition-transform group-hover:scale-95">
                <Layers className="w-5 h-5 text-white stroke-[2.2]" />
              </div>
              <div>
                <span className="font-bold text-xl tracking-tight text-charcoal-900 block leading-tight">
                  AutoNexus
                </span>
                <span className="text-[10px] uppercase font-mono tracking-widest text-slate-500 block">
                  Collective Purchasing
                </span>
              </div>
            </button>
            <span className="hidden sm:inline-flex items-center px-2 py-0.5 rounded text-[11px] font-mono font-medium bg-slate-100 text-slate-600 border border-slate-200">
              Demo MVP
            </span>
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-1 text-sm font-medium text-slate-600">
            <button
              onClick={() => handleLinkClick('explore')}
              className={`px-3.5 py-2 rounded-md transition-colors ${
                activeTab === 'explore'
                  ? 'text-charcoal-900 bg-slate-100 font-semibold'
                  : 'hover:text-charcoal-900 hover:bg-slate-50'
              }`}
            >
              Explore Vehicles
            </button>
            <button
              onClick={() => handleLinkClick('how-it-works')}
              className={`px-3.5 py-2 rounded-md transition-colors ${
                activeTab === 'how-it-works'
                  ? 'text-charcoal-900 bg-slate-100 font-semibold'
                  : 'hover:text-charcoal-900 hover:bg-slate-50'
              }`}
            >
              How It Works
            </button>
            <button
              onClick={() => handleLinkClick('active-groups')}
              className={`px-3.5 py-2 rounded-md transition-colors ${
                activeTab === 'active-groups'
                  ? 'text-charcoal-900 bg-slate-100 font-semibold'
                  : 'hover:text-charcoal-900 hover:bg-slate-50'
              }`}
            >
              Active Groups
            </button>
            <button
              onClick={() => handleLinkClick('about')}
              className={`px-3.5 py-2 rounded-md transition-colors ${
                activeTab === 'about'
                  ? 'text-charcoal-900 bg-slate-100 font-semibold'
                  : 'hover:text-charcoal-900 hover:bg-slate-50'
              }`}
            >
              About
            </button>
          </nav>

          {/* Right Action Buttons */}
          <div className="hidden sm:flex items-center gap-3">
            {joinedCount > 0 && (
              <button
                onClick={onOpenMyGroups}
                className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-mono font-medium rounded-full bg-emerald-50 text-emerald-800 border border-emerald-200/70 hover:bg-emerald-100 transition-colors"
                title="View groups you have joined"
              >
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                <span>Joined ({joinedCount})</span>
              </button>
            )}

            <button
              onClick={() => handleLinkClick('explore')}
              className="inline-flex items-center justify-center px-4 py-2 text-sm font-medium rounded-lg text-white bg-charcoal-900 hover:bg-charcoal-800 active:scale-[0.98] transition-all shadow-sm"
            >
              <span>Join a Group</span>
              <ArrowUpRight className="w-4 h-4 ml-1.5 opacity-80" />
            </button>
          </div>

          {/* Mobile Menu Trigger */}
          <div className="flex sm:hidden items-center gap-2">
            {joinedCount > 0 && (
              <button
                onClick={onOpenMyGroups}
                className="flex items-center gap-1 px-2.5 py-1 text-xs font-mono font-medium rounded-full bg-emerald-50 text-emerald-800 border border-emerald-200"
              >
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>{joinedCount}</span>
              </button>
            )}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-md text-slate-600 hover:text-charcoal-900 hover:bg-slate-100 focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="sm:hidden border-t border-slate-200 bg-white px-4 pt-3 pb-6 space-y-2 shadow-lg animate-in fade-in duration-150">
          <button
            onClick={() => handleLinkClick('explore')}
            className="w-full text-left px-3 py-2.5 rounded-md text-base font-medium text-slate-800 hover:bg-slate-100"
          >
            Explore Vehicles
          </button>
          <button
            onClick={() => handleLinkClick('how-it-works')}
            className="w-full text-left px-3 py-2.5 rounded-md text-base font-medium text-slate-800 hover:bg-slate-100"
          >
            How It Works
          </button>
          <button
            onClick={() => handleLinkClick('active-groups')}
            className="w-full text-left px-3 py-2.5 rounded-md text-base font-medium text-slate-800 hover:bg-slate-100"
          >
            Active Groups
          </button>
          <button
            onClick={() => handleLinkClick('about')}
            className="w-full text-left px-3 py-2.5 rounded-md text-base font-medium text-slate-800 hover:bg-slate-100"
          >
            About
          </button>
          <div className="pt-3 border-t border-slate-100">
            <button
              onClick={() => handleLinkClick('explore')}
              className="w-full flex items-center justify-center py-2.5 px-4 rounded-lg bg-charcoal-900 text-white font-medium text-sm shadow-sm"
            >
              <span>Join a Group</span>
              <ArrowUpRight className="w-4 h-4 ml-1.5" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
