import React, { useState, useEffect } from 'react';
import { 
  CloudRain, 
  Sun, 
  Thermometer, 
  Wind, 
  MapPin, 
  User, 
  Sprout, 
  Droplets, 
  Bug, 
  AlertTriangle, 
  CheckCircle2, 
  Leaf, 
  Activity,
  Tractor
} from 'lucide-react';

/**
 * Mock Data Simulation Service
 * Simulates fetching data from a government registry and weather satellite API.
 */
const fetchSystemData = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        farmer: {
          id: "FR-2024-8821",
          name: "Rahul Mandal",
          location: {
            village: "Siyatar",
            district: "Jamtara",
            state: "Jharkhand"
          },
          landSize: "2.5 Hectares",
          soilType: "Clay Loam",
          currentCrop: "None (Fallow)"
        },
        weather: {
          temp: 29, // degrees Celsius
          rainfall: 210, // mm (High rainfall scenario)
          humidity: 82, // percentage
          condition: "Rainy",
          windSpeed: 12 // km/h
        }
      });
    }, 2500); // 2.5s simulated network delay
  });
};

/**
 * Prediction Engine
 * Analyzes weather and soil data to recommend the best crop and generate advisories.
 */
const generateInsights = (weather, farmer) => {
  let recommendation = {};
  let advisories = [];

  // 1. Crop Prediction Logic
  if (weather.rainfall > 150 && weather.humidity > 70) {
    recommendation = {
      crop: "Paddy (Rice)",
      suitability: 94,
      tag: "High Suitability",
      reason: "Current heavy rainfall (>150mm) and high humidity create ideal conditions for water-intensive paddy cultivation.",
      color: "text-emerald-700 bg-emerald-100"
    };
  } else if (weather.temp > 25 && weather.rainfall < 50) {
    recommendation = {
      crop: "Pearl Millet (Bajra)",
      suitability: 88,
      tag: "Drought Resistant",
      reason: "High temperatures and low moisture levels suggest drought-hardy crops like Millet.",
      color: "text-amber-700 bg-amber-100"
    };
  } else {
    recommendation = {
      crop: "Wheat",
      suitability: 85,
      tag: "Moderate Suitability",
      reason: "Cooler temperatures and moderate conditions are favorable for Wheat sowing.",
      color: "text-yellow-700 bg-yellow-100"
    };
  }

  // 2. Advisory Logic
  // Irrigation
  if (weather.rainfall > 100) {
    advisories.push({
      type: "Irrigation",
      icon: Droplets,
      title: "Drainage Required",
      text: "Excess natural rainfall detected. Ensure proper field drainage to prevent waterlogging, although rice thrives in standing water.",
      variant: "blue"
    });
  } else {
    advisories.push({
      type: "Irrigation",
      icon: Droplets,
      title: "Schedule Irrigation",
      text: "Soil moisture is low. Schedule irrigation every 3 days specifically during early morning hours.",
      variant: "blue"
    });
  }

  // Fertilizer
  advisories.push({
    type: "Nutrition",
    icon: Leaf,
    title: "Fertilizer Schedule",
    text: `For ${farmer.soilType}, apply NPK 120:60:60 split into three doses. Focus on Basal application now.`,
    variant: "green"
  });

  // Disease Risk
  if (weather.humidity > 80) {
    advisories.push({
      type: "Disease Risk",
      icon: Bug,
      title: "Fungal Alert",
      text: "High humidity (>80%) increases risk of Blast disease. Monitor leaf color closely.",
      variant: "red"
    });
  }

  // Weather Precaution
  advisories.push({
    type: "Weather Alert",
    icon: AlertTriangle,
    title: "3-Day Forecast",
    text: `${weather.condition} conditions expected to continue. Delay any chemical spraying due to potential rain wash-off.`,
    variant: "amber"
  });

  return { recommendation, advisories };
};

// UI Components
const Card = ({ children, className = "" }) => (
  <div className={`bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden ${className}`}>
    {children}
  </div>
);

const Badge = ({ children, colorClass }) => (
  <span className={`px-2 py-0.5 rounded-full text-xs font-semibold ${colorClass}`}>
    {children}
  </span>
);

const Skeleton = ({ className }) => (
  <div className={`animate-pulse bg-slate-200 rounded ${className}`}></div>
);

export default function App() {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState(null);
  const [insights, setInsights] = useState(null);

  useEffect(() => {
    const init = async () => {
      const fetchedData = await fetchSystemData();
      const generatedInsights = generateInsights(fetchedData.weather, fetchedData.farmer);
      setData(fetchedData);
      setInsights(generatedInsights);
      setLoading(false);
    };
    init();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen bg-slate-50 p-4 md:p-6 font-sans">
        <div className="max-w-4xl mx-auto space-y-6">
          {/* Header Skeleton */}
          <div className="flex items-center space-x-4 mb-8">
            <Skeleton className="h-12 w-12 rounded-full" />
            <div className="space-y-2">
              <Skeleton className="h-6 w-48" />
              <Skeleton className="h-4 w-32" />
            </div>
          </div>
          
          {/* Dashboard Skeletons */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Skeleton className="h-48 rounded-2xl" />
            <Skeleton className="h-48 rounded-2xl" />
          </div>
          <Skeleton className="h-64 rounded-2xl" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
             <Skeleton className="h-32 rounded-2xl" />
             <Skeleton className="h-32 rounded-2xl" />
          </div>
        </div>
      </div>
    );
  }

  const { farmer, weather } = data;
  const { recommendation, advisories } = insights;

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-800 pb-12">
      {/* 1. Header Section */}
      <header className="bg-white border-b border-slate-200 sticky top-0 z-10">
        <div className="max-w-5xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-green-600 rounded-lg text-white">
              <Sprout size={24} />
            </div>
            <div>
              <h1 className="text-xl font-bold text-slate-900 leading-tight">Weather Advisory</h1>
              <p className="text-xs text-slate-500 font-medium">System Auto-Generated Insights • ID: {farmer.id}</p>
            </div>
          </div>
          <div className="hidden md:flex items-center gap-2 text-xs font-semibold text-green-700 bg-green-50 px-3 py-1.5 rounded-full">
            <CheckCircle2 size={14} />
            <span>Live Data Synced</span>
          </div>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-4 py-6 space-y-6">
        
        {/* Top Grid: Farmer Info & Climate Snapshot */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          
          {/* 2. Farmer & Location Overview */}
          <Card className="md:col-span-7 p-6 border-l-4 border-l-blue-600">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-bold text-slate-800 flex items-center gap-2">
                <User size={20} className="text-blue-600" />
                Farmer Registry Profile
              </h2>
              <Badge colorClass="bg-blue-50 text-blue-700">Verified</Badge>
            </div>
            
            <div className="grid grid-cols-2 gap-y-4 gap-x-8">
              <div>
                <p className="text-xs text-slate-500 uppercase font-bold tracking-wider mb-1">Name</p>
                <p className="font-semibold text-slate-900">{farmer.name}</p>
              </div>
              <div>
                <p className="text-xs text-slate-500 uppercase font-bold tracking-wider mb-1">Land Holding</p>
                <p className="font-semibold text-slate-900">{farmer.landSize}</p>
              </div>
              <div className="col-span-2">
                <p className="text-xs text-slate-500 uppercase font-bold tracking-wider mb-1">Location</p>
                <div className="flex items-center gap-1 text-slate-700 font-medium">
                  <MapPin size={16} className="text-slate-400" />
                  {farmer.location.village}, {farmer.location.district}, {farmer.location.state}
                </div>
              </div>
              <div>
                <p className="text-xs text-slate-500 uppercase font-bold tracking-wider mb-1">Soil Type</p>
                <div className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-amber-600"></span>
                  <p className="font-semibold text-slate-900">{farmer.soilType}</p>
                </div>
              </div>
              <div>
                <p className="text-xs text-slate-500 uppercase font-bold tracking-wider mb-1">Current Status</p>
                <p className="font-semibold text-slate-400 italic">{farmer.currentCrop}</p>
              </div>
            </div>
          </Card>

          {/* 3. Live Climate Snapshot */}
          <Card className="md:col-span-5 p-6 bg-gradient-to-br from-slate-800 to-slate-900 text-white border-none relative overflow-hidden">
            {/* Background decoration */}
            <CloudRain size={120} className="absolute -right-6 -top-6 text-slate-700 opacity-20" />
            
            <h2 className="text-sm font-bold text-slate-300 uppercase tracking-wider mb-6 flex items-center gap-2">
              <Activity size={16} /> Live Climate Data
            </h2>

            <div className="flex items-center justify-between mb-6">
              <div>
                <p className="text-4xl font-bold">{weather.temp}°C</p>
                <p className="text-slate-300 text-sm mt-1">{weather.condition}</p>
              </div>
              <div className="text-right">
                 {weather.condition === 'Rainy' ? (
                   <CloudRain size={48} className="text-blue-400" />
                 ) : (
                   <Sun size={48} className="text-yellow-400" />
                 )}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white/10 p-3 rounded-xl backdrop-blur-sm">
                <div className="flex items-center gap-2 text-blue-200 mb-1">
                  <Droplets size={14} />
                  <span className="text-xs font-semibold">Rainfall</span>
                </div>
                <p className="font-bold text-lg">{weather.rainfall} mm</p>
              </div>
              <div className="bg-white/10 p-3 rounded-xl backdrop-blur-sm">
                <div className="flex items-center gap-2 text-indigo-200 mb-1">
                  <Wind size={14} />
                  <span className="text-xs font-semibold">Humidity</span>
                </div>
                <p className="font-bold text-lg">{weather.humidity}%</p>
              </div>
            </div>
          </Card>
        </div>

        {/* 4. Crop Prediction Result */}
        <Card className="border-t-4 border-t-emerald-500">
          <div className="p-6 md:p-8">
            <div className="flex flex-col md:flex-row md:items-start justify-between gap-6">
              <div className="flex-1">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold uppercase tracking-wide mb-3">
                   <Tractor size={14} /> AI Recommendation
                </div>
                <h3 className="text-3xl font-bold text-slate-900 mb-2">
                  Best Crop: <span className="text-emerald-700">{recommendation.crop}</span>
                </h3>
                <p className="text-slate-600 leading-relaxed max-w-2xl">
                  {recommendation.reason}
                </p>
              </div>
              
              <div className="bg-emerald-50 rounded-xl p-5 flex flex-col items-center justify-center min-w-[140px] border border-emerald-100">
                <div className="text-3xl font-black text-emerald-600">{recommendation.suitability}%</div>
                <div className="text-xs font-bold text-emerald-800 uppercase mt-1">Suitability Score</div>
              </div>
            </div>
          </div>
          <div className="bg-slate-50 px-6 py-3 border-t border-slate-100 flex items-center gap-2 text-xs text-slate-500">
            <CheckCircle2 size={14} className="text-emerald-500" />
            <span>Calculation based on {weather.rainfall}mm rainfall & {farmer.soilType} soil matrix.</span>
          </div>
        </Card>

        {/* 5. Climate-Based Advisory */}
        <div>
          <h3 className="text-lg font-bold text-slate-900 mb-4 flex items-center gap-2">
            <Leaf size={20} className="text-green-600" />
            Actionable Advisory
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {advisories.map((advice, index) => {
              const colors = {
                blue: "bg-blue-50 border-blue-100 text-blue-700",
                green: "bg-green-50 border-green-100 text-green-700",
                red: "bg-red-50 border-red-100 text-red-700",
                amber: "bg-amber-50 border-amber-100 text-amber-700",
              };
              const iconColors = {
                blue: "text-blue-600",
                green: "text-green-600",
                red: "text-red-600",
                amber: "text-amber-600",
              };
              
              const Icon = advice.icon;

              return (
                <Card key={index} className={`p-5 border flex items-start gap-4 ${colors[advice.variant] || colors.blue} bg-opacity-40`}>
                  <div className={`p-3 rounded-full bg-white shadow-sm shrink-0 ${iconColors[advice.variant]}`}>
                    <Icon size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 text-sm uppercase tracking-wide mb-1 opacity-80">{advice.title}</h4>
                    <p className="text-slate-800 text-sm font-medium leading-relaxed">
                      {advice.text}
                    </p>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>

      </main>
    </div>
  );
}