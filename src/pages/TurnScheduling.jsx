import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Droplets, Calendar, Clock, User, Sprout, MapPin } from 'lucide-react';

const TurnScheduling = () => {
  const [formData, setFormData] = useState({
    farmerId: '',
    landHolding: '',
    cropType: '',
    waterSource: '',
    preferredDate: '',
    preferredTime: ''
  });

  const [allocatedTurns, setAllocatedTurns] = useState([]);
  const [errors, setErrors] = useState({});

  const mockFarmers = [
    { id: 'F001', name: 'राजेश कुमार', landSize: '5.2' },
    { id: 'F002', name: 'सुरेश पटेल', landSize: '3.8' },
    { id: 'F003', name: 'मुकेश शर्मा', landSize: '7.1' },
    { id: 'F004', name: 'रमेश यादव', landSize: '4.5' },
    { id: 'F005', name: 'दिनेश सिंह', landSize: '6.0' }
  ];

  const waterSources = ['Canal', 'Tube Well', 'River'];
  const timeSlots = [
    { value: 'morning', label: 'Morning (6–10 AM)' },
    { value: 'afternoon', label: 'Afternoon (12–4 PM)' },
    { value: 'evening', label: 'Evening (5–9 PM)' }
  ];

  const validateForm = () => {
    const newErrors = {};
    if (!formData.farmerId) newErrors.farmerId = 'Farmer selection required';
    if (!formData.landHolding) newErrors.landHolding = 'Land holding required';
    if (!formData.cropType) newErrors.cropType = 'Crop type required';
    if (!formData.waterSource) newErrors.waterSource = 'Water source required';
    if (!formData.preferredDate) newErrors.preferredDate = 'Date required';
    if (!formData.preferredTime) newErrors.preferredTime = 'Time slot required';
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleGenerateParchi = () => {
    if (!validateForm()) return;

    const selectedFarmer = mockFarmers.find(f => f.id === formData.farmerId);
    const selectedTimeSlot = timeSlots.find(t => t.value === formData.preferredTime);

    const newTurn = {
      id: `PARCHI-${Date.now()}`,
      farmerName: selectedFarmer.name,
      farmerId: formData.farmerId,
      landSize: formData.landHolding,
      cropType: formData.cropType,
      waterSource: formData.waterSource,
      date: formData.preferredDate,
      timeSlot: selectedTimeSlot.label,
      status: 'Allocated',
      timestamp: new Date().toISOString()
    };

    setAllocatedTurns([newTurn, ...allocatedTurns]);
    
    setFormData({
      farmerId: '',
      landHolding: '',
      cropType: '',
      waterSource: '',
      preferredDate: '',
      preferredTime: ''
    });
    setErrors({});
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-blue-50 to-emerald-50 p-4 md:p-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-green-800 mb-2 flex items-center justify-center gap-3">
            <Droplets className="w-10 h-10 text-blue-600" />
            Digital Parchi System
          </h1>
          <p className="text-gray-600">Fair Water Distribution · Transparent Allocation · Zero Disputes</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-1">
            <Card className="shadow-2xl rounded-2xl border-2 border-green-200">
              <CardHeader className="bg-gradient-to-r from-green-600 to-blue-600 text-white rounded-t-2xl">
                <CardTitle className="flex items-center gap-2">
                  <User className="w-5 h-5" />
                  Digital Parchi Allocation
                </CardTitle>
                <CardDescription className="text-green-50">
                  Generate irrigation turn for farmers
                </CardDescription>
              </CardHeader>
              <CardContent className="p-6 space-y-4">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Select Farmer
                  </label>
                  <Select value={formData.farmerId} onValueChange={(value) => setFormData({ ...formData, farmerId: value })}>
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Choose farmer from registry" />
                    </SelectTrigger>
                    <SelectContent>
                      {mockFarmers.map(farmer => (
                        <SelectItem key={farmer.id} value={farmer.id}>
                          {farmer.name} ({farmer.landSize} acres)
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  {errors.farmerId && <p className="text-red-500 text-xs mt-1">{errors.farmerId}</p>}
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Land Holding (Acres)
                  </label>
                  <Input
                    type="number"
                    step="0.1"
                    placeholder="Enter land size"
                    value={formData.landHolding}
                    onChange={(e) => setFormData({ ...formData, landHolding: e.target.value })}
                    className="w-full"
                  />
                  {errors.landHolding && <p className="text-red-500 text-xs mt-1">{errors.landHolding}</p>}
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Crop Type
                  </label>
                  <Input
                    type="text"
                    placeholder="e.g., Wheat, Rice, Cotton"
                    value={formData.cropType}
                    onChange={(e) => setFormData({ ...formData, cropType: e.target.value })}
                    className="w-full"
                  />
                  {errors.cropType && <p className="text-red-500 text-xs mt-1">{errors.cropType}</p>}
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Water Source
                  </label>
                  <Select value={formData.waterSource} onValueChange={(value) => setFormData({ ...formData, waterSource: value })}>
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Select water source" />
                    </SelectTrigger>
                    <SelectContent>
                      {waterSources.map(source => (
                        <SelectItem key={source} value={source}>
                          {source}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  {errors.waterSource && <p className="text-red-500 text-xs mt-1">{errors.waterSource}</p>}
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Preferred Date
                  </label>
                  <Input
                    type="date"
                    value={formData.preferredDate}
                    onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
                    className="w-full"
                  />
                  {errors.preferredDate && <p className="text-red-500 text-xs mt-1">{errors.preferredDate}</p>}
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Preferred Time Slot
                  </label>
                  <Select value={formData.preferredTime} onValueChange={(value) => setFormData({ ...formData, preferredTime: value })}>
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Select time slot" />
                    </SelectTrigger>
                    <SelectContent>
                      {timeSlots.map(slot => (
                        <SelectItem key={slot.value} value={slot.value}>
                          {slot.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  {errors.preferredTime && <p className="text-red-500 text-xs mt-1">{errors.preferredTime}</p>}
                </div>

                <Button 
                  onClick={handleGenerateParchi}
                  className="w-full bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700 text-white font-semibold py-6 rounded-xl shadow-lg"
                >
                  <Droplets className="w-5 h-5 mr-2" />
                  Generate Digital Parchi
                </Button>
              </CardContent>
            </Card>
          </div>

          <div className="lg:col-span-2">
            <Card className="shadow-2xl rounded-2xl border-2 border-blue-200 h-full">
              <CardHeader className="bg-gradient-to-r from-blue-600 to-emerald-600 text-white rounded-t-2xl">
                <CardTitle className="flex items-center gap-2">
                  <Calendar className="w-5 h-5" />
                  Irrigation Turn Schedule
                </CardTitle>
                <CardDescription className="text-blue-50">
                  View all allocated irrigation turns
                </CardDescription>
              </CardHeader>
              <CardContent className="p-6">
                {allocatedTurns.length === 0 ? (
                  <div className="text-center py-16">
                    <Droplets className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                    <p className="text-gray-500 text-lg">No irrigation turns allocated yet</p>
                    <p className="text-gray-400 text-sm mt-2">Start by generating a digital parchi</p>
                  </div>
                ) : (
                  <div className="space-y-4">
                    {allocatedTurns.map(turn => (
                      <Card key={turn.id} className="border-2 border-green-100 hover:border-green-300 transition-all rounded-xl shadow-md">
                        <CardContent className="p-5">
                          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                            <div className="flex-1">
                              <div className="flex items-center gap-2 mb-2">
                                <User className="w-5 h-5 text-green-600" />
                                <h3 className="text-lg font-bold text-gray-800">{turn.farmerName}</h3>
                                <span className="ml-auto md:ml-0 px-3 py-1 bg-green-100 text-green-700 text-xs font-semibold rounded-full">
                                  {turn.status}
                                </span>
                              </div>
                              
                              <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm text-gray-600">
                                <div className="flex items-center gap-2">
                                  <Sprout className="w-4 h-4 text-amber-600" />
                                  <span><strong>Crop:</strong> {turn.cropType}</span>
                                </div>
                                <div className="flex items-center gap-2">
                                  <MapPin className="w-4 h-4 text-blue-600" />
                                  <span><strong>Land:</strong> {turn.landSize} acres</span>
                                </div>
                                <div className="flex items-center gap-2">
                                  <Droplets className="w-4 h-4 text-cyan-600" />
                                  <span><strong>Source:</strong> {turn.waterSource}</span>
                                </div>
                                <div className="flex items-center gap-2">
                                  <Calendar className="w-4 h-4 text-purple-600" />
                                  <span><strong>Date:</strong> {new Date(turn.date).toLocaleDateString('en-IN')}</span>
                                </div>
                              </div>
                              
                              <div className="flex items-center gap-2 mt-2 text-sm">
                                <Clock className="w-4 h-4 text-orange-600" />
                                <span className="font-semibold text-gray-700">{turn.timeSlot}</span>
                              </div>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TurnScheduling;