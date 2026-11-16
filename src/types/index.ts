export type VehicleCategory = 'All' | 'Cars' | 'SUVs' | 'Bikes' | 'Commercial Vehicles';

export type GroupStatus = 'Building Demand' | 'Near Target' | 'Target Reached' | 'Offer Received';

export interface DealBreakdownItem {
  label: string;
  amount: string;
  description: string;
}

export interface DealerOffer {
  originalPrice: string; // e.g. "₹18.40L"
  originalPriceNum: number; // 1840000
  groupPrice: string; // e.g. "₹17.70L"
  groupPriceNum: number; // 1770000
  potentialSavings: string; // e.g. "₹70,000"
  potentialSavingsNum: number; // 70000
  dealerNetworkName: string;
  deliveryWindow: string;
  highlights: string[];
  breakdown: DealBreakdownItem[];
  termsNote: string;
}

export interface Vehicle {
  id: string;
  name: string;
  brand: string;
  variant: string;
  category: 'Cars' | 'SUVs' | 'Bikes' | 'Commercial Vehicles';
  startingPrice: string;
  priceNumeric: number;
  currentBuyers: number;
  targetBuyers: number;
  status: GroupStatus;
  image: string;
  fuelType: 'Petrol' | 'Diesel' | 'Hybrid' | 'Electric';
  transmission: 'Automatic' | 'Manual' | 'Dual-Clutch' | 'Single Speed';
  tagline: string;
  description: string;
  keySpecs: {
    power?: string;
    range?: string;
    seating?: string;
    mileage?: string;
    warranty?: string;
  };
  simulatedOffer: DealerOffer;
  groupTargetDate?: string;
}
