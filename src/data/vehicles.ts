import { Vehicle } from '../types';

export const INITIAL_VEHICLES: Vehicle[] = [
  {
    id: 'hyundai-creta-sxo',
    name: 'Hyundai Creta',
    brand: 'Hyundai',
    variant: 'SX(O) 1.5 Turbo Petrol DCT',
    category: 'SUVs',
    startingPrice: '₹18.40L',
    priceNumeric: 1840000,
    currentBuyers: 37,
    targetBuyers: 50,
    status: 'Building Demand',
    image: 'https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&w=1200&q=80',
    fuelType: 'Petrol',
    transmission: 'Dual-Clutch',
    tagline: 'Segment-defining compact SUV with panoramic cockpit and Level 2 ADAS.',
    description: 'The Hyundai Creta SX(O) is currently the most requested compact SUV in the urban North & West buyer clusters. Consolidating volume allows AutoNexus to negotiate direct batch margin concessions from authorized regional dealer consortiums.',
    keySpecs: {
      power: '160 PS / 253 Nm',
      mileage: '18.4 km/l ARAI',
      seating: '5 Seater',
      warranty: '3 Years / Unlimited km',
    },
    simulatedOffer: {
      originalPrice: '₹18.40L',
      originalPriceNum: 1840000,
      groupPrice: '₹17.70L',
      groupPriceNum: 1770000,
      potentialSavings: '₹70,000',
      potentialSavingsNum: 70000,
      dealerNetworkName: 'NCR & Mumbai Authorized Dealer Consortium',
      deliveryWindow: '21–30 calendar days post group closing',
      highlights: [
        'Direct ex-showroom price reduction of ₹45,000',
        'Zero dealer processing and handling surcharge',
        'Complimentary 4th year extended warranty pack (valued at ₹15,000)',
        'Consolidated zero-depreciation insurance subsidy of ₹10,000'
      ],
      breakdown: [
        { label: 'Dealer Invoice Concession', amount: '₹45,000', description: 'Volume rebate on 50-unit allocation batch' },
        { label: 'Insurance Collective Tier', amount: '₹15,000', description: 'Group negotiated zero-dep comprehensive policy' },
        { label: 'Extended Shield Warranty', amount: '₹10,000', description: 'Underwritten by OEM authorized network' }
      ],
      termsNote: 'Illustrative result based on consolidated group demand of 50 verified buyers. Final dealer contract terms signed directly with authorized OEM franchisee.'
    },
    groupTargetDate: 'Closing in 6 days'
  },
  {
    id: 'toyota-innova-hycross-zx',
    name: 'Toyota Innova HyCross',
    brand: 'Toyota',
    variant: 'ZX (O) Strong Hybrid 2.0L',
    category: 'Cars',
    startingPrice: '₹29.20L',
    priceNumeric: 2920000,
    currentBuyers: 24,
    targetBuyers: 30,
    status: 'Near Target',
    image: 'https://images.unsplash.com/photo-1550355291-bbee04a92027?auto=format&fit=crop&w=1200&q=80',
    fuelType: 'Hybrid',
    transmission: 'Automatic',
    tagline: 'Self-charging hybrid executive MPV with ottoman seating and ultra-high reliability.',
    description: 'Demand for the Innova HyCross typically suffers from prolonged waiting periods. By aggregating a confirmed 30-buyer fleet, AutoNexus secures factory priority dispatch slots alongside commercial volume parity.',
    keySpecs: {
      power: '186 PS Combined',
      mileage: '23.24 km/l ARAI',
      seating: '7 Seater Ottoman',
      warranty: '8 Years / 160,000 km Hybrid Battery',
    },
    simulatedOffer: {
      originalPrice: '₹29.20L',
      originalPriceNum: 2920000,
      groupPrice: '₹28.05L',
      groupPriceNum: 2805000,
      potentialSavings: '₹1,15,000',
      potentialSavingsNum: 115000,
      dealerNetworkName: 'Western Zone Toyota Enterprise Dealer Hub',
      deliveryWindow: 'Guaranteed 45-day allocation slot vs 6+ months retail wait',
      highlights: [
        'Guaranteed fast-track production slot allocation',
        'Direct ex-showroom commercial parity discount of ₹75,000',
        'OEM Genuine Accessory bundle package (₹22,000 value)',
        'Waived logistics & pre-delivery documentation fees'
      ],
      breakdown: [
        { label: 'Ex-Showroom Fleet Rebate', amount: '₹75,000', description: 'Tier-1 enterprise volume allocation' },
        { label: 'OEM Accessories Kit', amount: '₹22,000', description: 'Weather shield, illuminated sill plates, dashcam' },
        { label: 'Logistics Surcharge Waiver', amount: '₹18,000', description: 'Full concession on transport depot surcharge' }
      ],
      termsNote: 'Illustrative result based on consolidated group demand. Includes priority transit allotment.'
    },
    groupTargetDate: 'Closing in 3 days'
  },
  {
    id: 'royal-enfield-himalayan-450',
    name: 'Royal Enfield Himalayan',
    brand: 'Royal Enfield',
    variant: '450 Sherpa Summit Edition (Tubeless)',
    category: 'Bikes',
    startingPrice: '₹3.05L',
    priceNumeric: 305000,
    currentBuyers: 31,
    targetBuyers: 40,
    status: 'Building Demand',
    image: 'https://images.unsplash.com/photo-1558981403-c5f9899a28bc?auto=format&fit=crop&w=1200&q=80',
    fuelType: 'Petrol',
    transmission: 'Manual',
    tagline: 'Water-cooled 452cc all-terrain expedition motorcycle built for high altitude.',
    description: 'The Himalayan 450 has surging touring community interest. Bringing riders together enables wholesale package rates with factory expedition accessories and gear credits directly from participating apex dealerships.',
    keySpecs: {
      power: '40.02 PS / 40 Nm',
      mileage: '30.0 km/l',
      seating: '2 Seater Adventure',
      warranty: '3 Years / 40,000 km',
    },
    simulatedOffer: {
      originalPrice: '₹3.05L',
      originalPriceNum: 305000,
      groupPrice: '₹2.88L',
      groupPriceNum: 288000,
      potentialSavings: '₹17,000',
      potentialSavingsNum: 17000,
      dealerNetworkName: 'Royal Enfield Regional Flagship Network',
      deliveryWindow: '14 calendar days upon target fulfillment',
      highlights: [
        'Direct cash rebate of ₹10,000 on ex-showroom invoice',
        'Touring rally screen & aluminum engine sump guard (₹4,500 value)',
        'Complimentary 1st year RSA (Roadside Assistance) pan-India'
      ],
      breakdown: [
        { label: 'Group Batch Discount', amount: '₹10,000', description: 'Consolidated showroom purchase credit' },
        { label: 'Adventure Touring Shield', amount: '₹4,500', description: 'Factory-installed OEM rally gear' },
        { label: 'Pan-India RSA Package', amount: '₹2,500', description: 'Towing & breakdown support coverage' }
      ],
      termsNote: 'Illustrative result based on consolidated rider group demand.'
    },
    groupTargetDate: 'Closing in 8 days'
  },
  {
    id: 'tata-harrier-fearless-plus',
    name: 'Tata Harrier',
    brand: 'Tata',
    variant: 'Fearless+ Dark Edition Automatic',
    category: 'SUVs',
    startingPrice: '₹22.10L',
    priceNumeric: 2210000,
    currentBuyers: 19,
    targetBuyers: 30,
    status: 'Building Demand',
    image: 'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&w=1200&q=80',
    fuelType: 'Diesel',
    transmission: 'Automatic',
    tagline: 'Land Rover D8 platform-derived flagship SUV with 5-star Bharat NCAP rating.',
    description: 'Tata Harrier buyers value road presence and active safety. AutoNexus aggregates verified buyers into a unified purchase cohort to unlock enterprise fleet pricing normally reserved for corporate buyers.',
    keySpecs: {
      power: '170 PS / 350 Nm',
      mileage: '16.8 km/l ARAI',
      seating: '5 Seater Luxury',
      warranty: '3 Years / 100,000 km',
    },
    simulatedOffer: {
      originalPrice: '₹22.10L',
      originalPriceNum: 2210000,
      groupPrice: '₹21.15L',
      groupPriceNum: 2115000,
      potentialSavings: '₹95,000',
      potentialSavingsNum: 95000,
      dealerNetworkName: 'Tata Motors Prime Dealer Alliance',
      deliveryWindow: '18–25 calendar days',
      highlights: [
        'Direct ex-showroom price reduction of ₹60,000',
        '2-year complimentary scheduled maintenance package (₹20,000)',
        'Zero dealer logistics charges and fast-track chassis allocation'
      ],
      breakdown: [
        { label: 'Volume Fleet Concession', amount: '₹60,000', description: 'Batch negotiated margin reduction' },
        { label: 'Scheduled Service Shield', amount: '₹20,000', description: 'Oil, filters, and standard checkups covered' },
        { label: 'Documentation Waiver', amount: '₹15,000', description: 'Logistics and PDI fee cancellation' }
      ],
      termsNote: 'Illustrative result based on consolidated demand from 30 verified buyers.'
    },
    groupTargetDate: 'Closing in 11 days'
  },
  {
    id: 'mahindra-xuv700-ax7l',
    name: 'Mahindra XUV700',
    brand: 'Mahindra',
    variant: 'AX7 Luxury Pack AWD Diesel AT',
    category: 'SUVs',
    startingPrice: '₹23.90L',
    priceNumeric: 2390000,
    currentBuyers: 46,
    targetBuyers: 50,
    status: 'Near Target',
    image: 'https://images.unsplash.com/photo-1617814076367-b759c7d7e738?auto=format&fit=crop&w=1200&q=80',
    fuelType: 'Diesel',
    transmission: 'Automatic',
    tagline: 'High-tech 7-seat SUV with dual 10.25-inch superscreens and Sony 12-speaker 3D audio.',
    description: 'Only 4 more buyers needed to close the 50-car cluster. Mahindra dealerships are ready to honor the tier-1 volume agreement immediately upon closing.',
    keySpecs: {
      power: '185 PS / 450 Nm',
      mileage: '16.5 km/l ARAI',
      seating: '7 Seater',
      warranty: '3 Years / 100,000 km',
    },
    simulatedOffer: {
      originalPrice: '₹23.90L',
      originalPriceNum: 2390000,
      groupPrice: '₹22.98L',
      groupPriceNum: 2298000,
      potentialSavings: '₹92,000',
      potentialSavingsNum: 92000,
      dealerNetworkName: 'Mahindra Regional Partner Apex Hub',
      deliveryWindow: 'Guaranteed 20-day delivery timeline',
      highlights: [
        'Direct cash concession of ₹62,000',
        'Complimentary 4th & 5th year Shield Warranty (₹18,000 value)',
        'Full accessories kit including sidestep and boot liner'
      ],
      breakdown: [
        { label: 'Dealer Batch Discount', amount: '₹62,000', description: 'Final tier threshold reached' },
        { label: 'Extended Shield Pack', amount: '₹18,000', description: '5-year peace-of-mind warranty' },
        { label: 'Utility Accessories Pack', amount: '₹12,000', description: 'Side footstep, mud flaps, floor mats' }
      ],
      termsNote: 'Illustrative result. Ready for immediate confirmation upon 50th buyer entry.'
    },
    groupTargetDate: 'Closing in 2 days'
  },
  {
    id: 'bmw-3-series-gran-limousine',
    name: 'BMW 3 Series Gran Limousine',
    brand: 'BMW',
    variant: '330Li M Sport',
    category: 'Cars',
    startingPrice: '₹60.60L',
    priceNumeric: 6060000,
    currentBuyers: 14,
    targetBuyers: 15,
    status: 'Near Target',
    image: 'https://images.unsplash.com/photo-1555215695-3004980ad54e?auto=format&fit=crop&w=1200&q=80',
    fuelType: 'Petrol',
    transmission: 'Automatic',
    tagline: 'Extended wheelbase executive luxury sedan with M Sport dynamics and curved display.',
    description: 'Luxury automotive dealerships rarely offer individual walk-in discounts on the 3 Series GL. When 15 verified executive buyers arrive collectively, dealers offer formal corporate fleet pricing brackets.',
    keySpecs: {
      power: '258 hp / 400 Nm',
      mileage: '15.39 km/l ARAI',
      seating: '5 Seater Luxury',
      warranty: '2 Years / Unlimited km (BSI Available)',
    },
    simulatedOffer: {
      originalPrice: '₹60.60L',
      originalPriceNum: 6060000,
      groupPrice: '₹57.80L',
      groupPriceNum: 5780000,
      potentialSavings: '₹2,80,000',
      potentialSavingsNum: 280000,
      dealerNetworkName: 'BMW Authorized Dealer Council (Metros)',
      deliveryWindow: 'Immediate dispatch from central stockyard',
      highlights: [
        'Substantial direct invoice discount of ₹1,80,000',
        'BMW Service Inclusive Basic 3-year package included (₹60,000 value)',
        'Zero dealer handling or registration expediting fees'
      ],
      breakdown: [
        { label: 'Corporate Fleet Tier Discount', amount: '₹1,80,000', description: 'Applied across all 15 assigned chassis' },
        { label: 'BMW Service Inclusive (BSI)', amount: '₹60,000', description: '3 yr / 40,000 km standard maintenance' },
        { label: 'Dealership Administrative Surcharge Waiver', amount: '₹40,000', description: 'Complete documentation waiver' }
      ],
      termsNote: 'Illustrative simulation. Strict allocation limits apply.'
    },
    groupTargetDate: 'Closing in 24 hours'
  },
  {
    id: 'tata-ace-ev',
    name: 'Tata Ace EV',
    brand: 'Tata',
    variant: 'Intra-City Commercial Cargo 17.2 kWh',
    category: 'Commercial Vehicles',
    startingPrice: '₹9.21L',
    priceNumeric: 921000,
    currentBuyers: 20,
    targetBuyers: 20,
    status: 'Target Reached',
    image: 'https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?auto=format&fit=crop&w=1200&q=80',
    fuelType: 'Electric',
    transmission: 'Single Speed',
    tagline: 'Zero-emission last-mile logistics mini truck with fast charging & telematics.',
    description: 'Target reached! 20 independent delivery entrepreneurs and fleet operators consolidated their purchasing request. Commercial dealer proposal is currently in final verification.',
    keySpecs: {
      range: '154 km Certified Range',
      power: '36 hp / 130 Nm torque',
      seating: '2 Seater Commercial',
      warranty: '5 Years / 105,000 km Battery Pack',
    },
    simulatedOffer: {
      originalPrice: '₹9.21L',
      originalPriceNum: 921000,
      groupPrice: '₹8.65L',
      groupPriceNum: 865000,
      potentialSavings: '₹56,000',
      potentialSavingsNum: 56000,
      dealerNetworkName: 'Tata Commercial Fleet Dealer Hub',
      deliveryWindow: 'Rolling deliveries starting within 12 days',
      highlights: [
        'Commercial bulk chassis price cut of ₹35,000',
        'Free 1-year advanced telematics & fleet management subscription',
        'Subsidized 3.3 kW AC fast-charging wallbox'
      ],
      breakdown: [
        { label: 'Fleet Tier 2 Rebate', amount: '₹35,000', description: 'Direct commercial price deduction' },
        { label: 'Fleet Edge Telematics Pack', amount: '₹12,000', description: 'GPS tracking, geo-fencing, diagnostics' },
        { label: 'Charging Box Subsidy', amount: '₹9,000', description: 'Industrial socket installation grant' }
      ],
      termsNote: 'Target reached. Offer terms locked for group members.'
    },
    groupTargetDate: 'Target Achieved — Closing soon'
  },
  {
    id: 'ktm-390-adventure',
    name: 'KTM 390 Adventure',
    brand: 'KTM',
    variant: 'Spoke Wheels Edition (Cornering ABS & TC)',
    category: 'Bikes',
    startingPrice: '₹3.65L',
    priceNumeric: 365000,
    currentBuyers: 25,
    targetBuyers: 25,
    status: 'Offer Received',
    image: 'https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?auto=format&fit=crop&w=1200&q=80',
    fuelType: 'Petrol',
    transmission: 'Manual',
    tagline: 'High-revving 373cc dual-sport weapon with WP Apex adjustable suspension.',
    description: 'Formal dealer offer unlocked! All 25 riders in this group have received final discounted invoices from participating KTM ProBiking flagship dealerships.',
    keySpecs: {
      power: '43.5 PS / 37 Nm',
      mileage: '28.5 km/l',
      seating: '2 Seater Dual Sport',
      warranty: '2 Years / 30,000 km',
    },
    simulatedOffer: {
      originalPrice: '₹3.65L',
      originalPriceNum: 365000,
      groupPrice: '₹3.42L',
      groupPriceNum: 342000,
      potentialSavings: '₹23,000',
      potentialSavingsNum: 23000,
      dealerNetworkName: 'KTM ProBiking Flagship Alliance',
      deliveryWindow: 'Chassis dispatch ready for member collection',
      highlights: [
        'Direct cash rebate of ₹15,000',
        'KTM PowerParts quickshifter+ activation gratis (₹5,000 value)',
        'Zero road-registration facilitation fee'
      ],
      breakdown: [
        { label: 'Consolidated Dealer Concession', amount: '₹15,000', description: 'Showroom invoice credit' },
        { label: 'Quickshifter+ Software Flash', amount: '₹5,000', description: 'Factory authorized activation' },
        { label: 'Delivery Prep Waiver', amount: '₹3,000', description: 'Free comprehensive inspection' }
      ],
      termsNote: 'Offer received and verified by dealer consortium. Members can claim units.'
    },
    groupTargetDate: 'Offer Live — Ready for fulfillment'
  }
];
