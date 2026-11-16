# AutoNexus — Collective Vehicle Purchasing Platform (Demo MVP)

AutoNexus brings together multiple people who want to purchase the same or similar vehicles. Instead of negotiating individually, their combined demand gives AutoNexus stronger purchasing power when approaching dealers and manufacturers.

---

## 🎯 Architecture & Design System

- **Aesthetic**: Premium automotive minimalism inspired by contemporary EV/OEM brands (Rivian, Polestar, Porsche).
- **Color System**: Crisp studio off-white (`#fafbfc`), obsidian charcoal (`#0b0f17`), precision steel borders, and emerald margin unlocks.
- **Typography**: Plus Jakarta Sans paired with JetBrains Mono for cohort counters and financial metrics.
- **State Management**: Frontend reactive state with LocalStorage synchronization for persistent group reservations.

---

## 🚀 Running the Project

From the project root (`C:\Users\Akhil\.gemini\antigravity\scratch\autonexus`):

```bash
# Start local Vite development server
npm run dev

# Build production bundle
npm run build

# Preview production build
npm run preview
```

---

## 🔑 Key Features & User Interactions

1. **Landing Hero**:
   - High-impact headline: *"Your buying power, multiplied."*
   - Live featured active group with instant cohort progress meter.
   - Conceptual architectural visual: *Individual demand → Collective demand → Stronger purchasing power*.

2. **How It Works**:
   - Clean 3-step mechanism (`01 Choose a Vehicle`, `02 Build Collective Demand`, `03 Unlock Better Terms`).

3. **Vehicle Explorer**:
   - Category filtering: **All**, **Cars**, **SUVs**, **Bikes**, **Commercial Vehicles**.
   - Real-time search by model name, brand, variant, or fuel type.
   - Sorting by demand (highest buyers), price ascending, or price descending.
   - Live status badges: *Building Demand*, *Near Target*, *Target Reached*, *Offer Received*.

4. **Vehicle Group Page (Dedicated View)**:
   - Example: **Hyundai Creta SX(O)** (37 / 50 buyers).
   - Dynamic counter: *"13 more buyers needed to reach the current group target"* (becomes *"12 more buyers needed"* once joined).
   - Live **Join Group** toggle button that increments cohort size, updates progress bar, and presents immediate confirmation:
     *"You're in. AutoNexus will notify you when the group reaches its target."*
   - Option to leave/toggle to test state updates repeatedly.

5. **Simulated Negotiation Result (Demo Negotiation)**:
   - Illustrative comparison: Indicative Retail (₹18.40L) vs. Group Offer (₹17.70L) = **₹70,000 savings**.
   - **View Offer** drawer/modal displaying itemized fleet concessions, dealer consortium, logistics fee waivers, and delivery timelines.

6. **Active Purchasing Groups**:
   - Grid of real-time consolidating cohorts (Creta, Innova HyCross, Himalayan 450, Harrier, XUV700, KTM 390 Adventure).
   - Interactive navigation into any cohort.

7. **Beyond Vehicles (Expansion Section)**:
   - Subtle preview of future high-value categories (Electronics, Furniture, Appliances, Solar Systems).

8. **My Joined Groups**:
   - Quick header indicator displaying joined cohorts with one-click access and management.
