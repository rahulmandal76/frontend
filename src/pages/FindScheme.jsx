import React, { useState } from 'react';
import { Home, Filter, X, CheckCircle, Users, Sprout, MapPin, Calendar } from 'lucide-react';

// ---------------------------
// Mock Scheme Data
// ---------------------------
const schemesData = [
  {
    id: 1,
    name: "PM-KISAN (Pradhan Mantri Kisan Samman Nidhi)",
    description: "Direct income support of ₹6,000 per year to all farmer families in three equal installments",
    eligibleCategories: ["Small", "Marginal", "Large"],
    states: ["All States"],
    crops: ["All Crops"],
    seasons: ["Kharif", "Rabi", "Zaid"],
    irrigationSource: ["All"],
    farmerType: ["Individual"],
    benefits: "₹6,000/year direct benefit transfer",
    subsidyPercent: "100%",
    specialCategory: ["General", "SC/ST", "Women"]
  },
  {
    id: 2,
    name: "Pradhan Mantri Fasal Bima Yojana (PMFBY)",
    description: "Crop insurance scheme providing financial support to farmers in case of crop failure",
    eligibleCategories: ["Small", "Marginal", "Large"],
    states: ["Rajasthan", "Punjab", "Haryana", "Uttar Pradesh", "Maharashtra"],
    crops: ["Rice", "Wheat", "Pulses"],
    seasons: ["Kharif", "Rabi"],
    irrigationSource: ["All"],
    farmerType: ["Individual", "FPO"],
    benefits: "Crop insurance coverage up to sum insured",
    subsidyPercent: "2% for Kharif, 1.5% for Rabi",
    specialCategory: ["General", "SC/ST", "Women"]
  },
  // ... rest of the schemesData
];

// ---------------------------
// Header Component
// ---------------------------
const Header = () => (
  <header className="bg-gradient-to-r from-green-600 to-green-700 text-white py-6 shadow-lg">
    <div className="max-w-7xl mx-auto px-4">
      <div className="flex items-center gap-3 mb-2">
        <Sprout size={40} className="text-yellow-300" />
        <h1 className="text-3xl md:text-4xl font-bold">Find Government Agriculture Schemes</h1>
      </div>
      <p className="text-green-100 text-lg ml-0 md:ml-12">
        Discover schemes you're eligible for based on your farming details
      </p>
    </div>
  </header>
);

// ---------------------------
// Filter Form Component
const FilterForm = ({ filters, setFilters, onSubmit, onReset }) => {
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFilters(prev => ({ ...prev, [name]: value }));
  };

  const states = ["All States", "Rajasthan", "Punjab", "Haryana", "Uttar Pradesh", "Maharashtra", "Gujarat", "Karnataka", "Tamil Nadu", "Madhya Pradesh", "Bihar"];
  const categories = ["All", "Small", "Marginal", "Large"];
  const crops = ["All Crops", "Rice", "Wheat", "Pulses", "Vegetables", "Millets", "Dairy", "Poultry"];
  const seasons = ["All", "Kharif", "Rabi", "Zaid"];
  const irrigationSources = ["All", "Canal", "Rainfed", "Tube well"];
  const farmerTypes = ["All", "Individual", "SHG", "FPO"];
  const specialCategories = ["General", "SC/ST", "Women"];

  const selectClasses = "w-full p-3 border-2 border-gray-300 rounded-lg focus:border-green-500 focus:ring-2 focus:ring-green-200 transition-all text-lg bg-white text-gray-800";

  return (
    <div className="bg-white rounded-2xl shadow-xl p-6 md:p-8">
      <div className="flex items-center gap-3 mb-6">
        <Filter className="text-green-600" size={28} />
        <h2 className="text-2xl font-bold text-gray-800">Enter Your Details</h2>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* State/District */}
        <div>
          <label className="flex items-center gap-2 text-gray-700 font-semibold mb-2">
            <MapPin size={18} className="text-green-600" />
            State
          </label>
          <select
            name="state"
            value={filters.state}
            onChange={handleChange}
            className={selectClasses}
          >
            {states.map(state => <option key={state} value={state}>{state}</option>)}
          </select>
        </div>

        {/* Farmer Category */}
        <div>
          <label className="flex items-center gap-2 text-gray-700 font-semibold mb-2">
            <Users size={18} className="text-green-600" />
            Farmer Category
          </label>
          <select
            name="category"
            value={filters.category}
            onChange={handleChange}
            className={selectClasses}
          >
            {categories.map(cat => <option key={cat} value={cat}>{cat}</option>)}
          </select>
        </div>

        {/* Land Holding */}
        <div>
  <label className="text-gray-700 font-semibold mb-2 block">
    Land Holding (acres)
  </label>
  <input
    type="number"
    name="landHolding"
    value={filters.landHolding}
    onChange={handleChange}
    placeholder="Enter land size"
    min="0"
    step="0.1"
    className="w-full p-3 border-2 border-gray-300 rounded-lg focus:border-green-500 focus:ring-2 focus:ring-green-200 transition-all text-lg bg-white text-gray-800"
  />
</div>

        {/* Crop Type */}
        <div>
          <label className="flex items-center gap-2 text-gray-700 font-semibold mb-2">
            <Sprout size={18} className="text-green-600" />
            Crop Type
          </label>
          <select
            name="crop"
            value={filters.crop}
            onChange={handleChange}
            className={selectClasses}
          >
            {crops.map(crop => <option key={crop} value={crop}>{crop}</option>)}
          </select>
        </div>

        {/* Season */}
        <div>
          <label className="flex items-center gap-2 text-gray-700 font-semibold mb-2">
            <Calendar size={18} className="text-green-600" />
            Season
          </label>
          <select
            name="season"
            value={filters.season}
            onChange={handleChange}
            className={selectClasses}
          >
            {seasons.map(season => <option key={season} value={season}>{season}</option>)}
          </select>
        </div>

        {/* Irrigation Source */}
        <div>
          <label className="text-gray-700 font-semibold mb-2 block">
            Irrigation Source
          </label>
          <select
            name="irrigation"
            value={filters.irrigation}
            onChange={handleChange}
            className={selectClasses}
          >
            {irrigationSources.map(source => <option key={source} value={source}>{source}</option>)}
          </select>
        </div>

        {/* Farmer Type */}
        <div>
          <label className="text-gray-700 font-semibold mb-2 block">
            Farmer Type
          </label>
          <select
            name="farmerType"
            value={filters.farmerType}
            onChange={handleChange}
            className={selectClasses}
          >
            {farmerTypes.map(type => <option key={type} value={type}>{type}</option>)}
          </select>
        </div>

        {/* Special Category */}
        <div>
          <label className="text-gray-700 font-semibold mb-2 block">
            Special Category (Optional)
          </label>
          <select
            name="specialCategory"
            value={filters.specialCategory}
            onChange={handleChange}
            className={selectClasses}
          >
            {specialCategories.map(cat => <option key={cat} value={cat}>{cat}</option>)}
          </select>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex flex-col sm:flex-row gap-4 mt-8">
        <button
          onClick={onSubmit}
          className="flex-1 bg-gradient-to-r from-green-600 to-green-700 text-white py-4 px-6 rounded-lg font-bold text-lg hover:shadow-xl hover:scale-105 transition-all flex items-center justify-center gap-2"
        >
          <Filter size={20} />
          Find Schemes
        </button>
        <button
          onClick={onReset}
          className="sm:w-auto bg-gray-200 text-white-700 py-4 px-8 rounded-lg font-bold text-lg hover:bg-gray-300 transition-all flex items-center justify-center gap-2"
        >
          <X size={20} />
          Reset
        </button>
      </div>
    </div>
  );
};

// ---------------------------
// Scheme Card Component
// ---------------------------
const SchemeCard = ({ scheme }) => (
  <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all p-6 border-t-4 border-green-500">
    <h3 className="text-xl font-bold text-gray-800 mb-3">{scheme.name}</h3>
    <p className="text-gray-600 mb-4 leading-relaxed">{scheme.description}</p>

    <div className="space-y-2 mb-4">
      <div className="flex items-start gap-2">
        <CheckCircle size={18} className="text-green-600 mt-1 flex-shrink-0" />
        <div>
          <span className="font-semibold text-gray-700">Benefits: </span>
          <span className="text-gray-600">{scheme.benefits}</span>
        </div>
      </div>

      <div className="flex items-start gap-2">
        <CheckCircle size={18} className="text-green-600 mt-1 flex-shrink-0" />
        <div>
          <span className="font-semibold text-gray-700">Subsidy: </span>
          <span className="text-gray-600">{scheme.subsidyPercent}</span>
        </div>
      </div>

      <div className="flex items-start gap-2">
        <CheckCircle size={18} className="text-green-600 mt-1 flex-shrink-0" />
        <div>
          <span className="font-semibold text-gray-700">Eligible For: </span>
          <span className="text-gray-600">{scheme.eligibleCategories.join(", ")} farmers</span>
        </div>
      </div>

      <div className="flex items-start gap-2">
        <CheckCircle size={18} className="text-green-600 mt-1 flex-shrink-0" />
        <div>
          <span className="font-semibold text-gray-700">Crops: </span>
          <span className="text-gray-600">{scheme.crops.join(", ")}</span>
        </div>
      </div>
    </div>

    <button className="w-full bg-green-600 text-white py-3 rounded-lg font-semibold hover:bg-green-700 transition-all">
      Learn More & Apply
    </button>
  </div>
);

// ---------------------------
// Scheme List Component
// ---------------------------
const SchemeList = ({ schemes }) => {
  if (schemes.length === 0) {
    return (
      <div className="bg-yellow-50 border-2 border-yellow-300 rounded-2xl p-8 text-center mt-8">
        <div className="text-6xl mb-4">🔍</div>
        <h3 className="text-2xl font-bold text-gray-800 mb-2">No Schemes Found</h3>
        <p className="text-gray-600 text-lg mb-4">We couldn't find schemes matching your criteria.</p>
        <p className="text-gray-600">Try adjusting your filters or select "All" in some categories to see more results.</p>
      </div>
    );
  }

  return (
    <div className="mt-8">
      <div className="mb-6 bg-green-50 border-l-4 border-green-600 p-4 rounded-lg">
        <p className="text-green-800 font-semibold text-lg">
          ✓ Found {schemes.length} scheme{schemes.length !== 1 ? 's' : ''} matching your profile
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {schemes.map(scheme => (
          <SchemeCard key={scheme.id} scheme={scheme} />
        ))}
      </div>
    </div>
  );
};

// ---------------------------
// Footer Component
// ---------------------------
const Footer = () => (
  <footer className="bg-gray-800 text-white py-8 mt-16">
    <div className="max-w-7xl mx-auto px-4 text-center">
      <p className="text-lg mb-2">⚠️ <span className="font-semibold">Disclaimer:</span> Scheme data shown is for demonstration purposes only</p>
      <p className="text-gray-400 mb-4">Please verify scheme details and eligibility on official government portals</p>
      <p className="text-sm text-gray-500">© 2024 Digital Agriculture & Farmer Support Ecosystem | Government of India</p>
    </div>
  </footer>
);

// ---------------------------
// Main FindScheme Component
// ---------------------------
export default function FindScheme() {
  const [filters, setFilters] = useState({
    state: "All States",
    category: "All",
    landHolding: "",
    crop: "All Crops",
    season: "All",
    irrigation: "All",
    farmerType: "All",
    specialCategory: "General"
  });

  const [filteredSchemes, setFilteredSchemes] = useState([]);
  const [hasSearched, setHasSearched] = useState(false);

  const filterSchemes = () => {
    let results = schemesData;

    if (filters.state !== "All States") results = results.filter(s => s.states.includes("All States") || s.states.includes(filters.state));
    if (filters.category !== "All") results = results.filter(s => s.eligibleCategories.includes(filters.category));
    if (filters.crop !== "All Crops") results = results.filter(s => s.crops.includes("All Crops") || s.crops.includes(filters.crop));
    if (filters.season !== "All") results = results.filter(s => s.seasons.includes(filters.season));
    if (filters.irrigation !== "All") results = results.filter(s => s.irrigationSource.includes("All") || s.irrigationSource.includes(filters.irrigation));
    if (filters.farmerType !== "All") results = results.filter(s => s.farmerType.includes(filters.farmerType));
    if (filters.specialCategory !== "General") results = results.filter(s => s.specialCategory.includes(filters.specialCategory));

    setFilteredSchemes(results);
    setHasSearched(true);
  };

  const resetFilters = () => {
    setFilters({
      state: "All States",
      category: "All",
      landHolding: "",
      crop: "All Crops",
      season: "All",
      irrigation: "All",
      farmerType: "All",
      specialCategory: "General"
    });
    setFilteredSchemes([]);
    setHasSearched(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50">
      <Header />
      <FilterForm filters={filters} setFilters={setFilters} onSubmit={filterSchemes} onReset={resetFilters} />
      {hasSearched ? <SchemeList schemes={filteredSchemes} /> : (
        <div className="mt-8 bg-blue-50 border-2 border-blue-300 rounded-2xl p-8 text-center">
          <div className="text-6xl mb-4">👨‍🌾</div>
          <h3 className="text-2xl font-bold text-gray-800 mb-2">Welcome Farmer!</h3>
          <p className="text-gray-600 text-lg">Enter your details above and click "Find Schemes" to discover government schemes you're eligible for</p>
        </div>
      )}
      <Footer />
    </div>
  );
}
