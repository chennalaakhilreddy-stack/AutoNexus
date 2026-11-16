import React from 'react';
import { Layers } from 'lucide-react';

interface FooterProps {
  onNavigate: (sectionId: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  return (
    <footer className="bg-white border-t border-slate-200/90 py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-8 pb-10 border-b border-slate-100">
          
          {/* Brand & Value Proposition */}
          <div className="space-y-3 max-w-md">
            <div className="flex items-center gap-2.5">
              <div className="w-7 h-7 rounded-md bg-charcoal-900 text-white flex items-center justify-center font-bold text-sm">
                <Layers className="w-4 h-4 text-white" />
              </div>
              <span className="font-bold text-xl tracking-tight text-charcoal-900">
                AutoNexus
              </span>
            </div>
            <p className="text-sm text-slate-600 leading-relaxed font-normal">
              Connecting buyers. Unlocking collective purchasing power.
            </p>
          </div>

          {/* Clean Navigation Links */}
          <div className="flex flex-wrap gap-x-8 gap-y-3 text-sm font-medium text-slate-600">
            <button
              onClick={() => onNavigate('explore')}
              className="hover:text-charcoal-900 transition-colors"
            >
              Explore
            </button>
            <button
              onClick={() => onNavigate('how-it-works')}
              className="hover:text-charcoal-900 transition-colors"
            >
              How It Works
            </button>
            <button
              onClick={() => onNavigate('active-groups')}
              className="hover:text-charcoal-900 transition-colors"
            >
              Active Groups
            </button>
            <button
              onClick={() => onNavigate('about')}
              className="hover:text-charcoal-900 transition-colors"
            >
              About
            </button>
          </div>

        </div>

        {/* Bottom Attribution & Demo Notice */}
        <div className="pt-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs font-mono text-slate-400">
          <div>
            &copy; {new Date().getFullYear()} AutoNexus Technologies Inc. All rights reserved.
          </div>
          <div>
            Functional Prototype MVP &bull; Simulated OEM Commercial Offers
          </div>
        </div>

      </div>
    </footer>
  );
};
