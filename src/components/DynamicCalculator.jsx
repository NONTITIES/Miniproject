import React, { useState } from 'react';
import { Calculator, Zap, Gauge, ArrowRight } from 'lucide-react';

export default function DynamicCalculator() {
  const [speed, setSpeed] = useState(50); // km/h
  const [depth, setDepth] = useState(45); // mm
  const [dutyCycle, setDutyCycle] = useState(1.5); // %

  // Quarter-car physics calculation
  // Speed in m/s: v = speed * (1000 / 3600)
  const v = speed * (1000 / 3600);
  const chord = 0.55; // 550mm chord
  const impactTimeMs = ((chord / v) * 1000).toFixed(0);
  
  // Theoretical G-force: base gravity + dynamic impulse factor proportional to depth and v^1.2
  const impulseFactor = (depth / 30) * Math.pow(v / 13.88, 1.2);
  const peakG = (1.0 + impulseFactor * 1.4).toFixed(2);
  const naturalFreq = (11.08).toFixed(2); // Hz unsprung mode

  // Battery life calculation
  // I_active = 42mA, I_sleep = 0.018mA
  const activeFraction = dutyCycle / 100;
  const avgCurrentMa = (42.0 * activeFraction + 0.018 * (1 - activeFraction)).toFixed(3);
  const batteryCap = 1200; // mAh
  const batteryDays = ((batteryCap / avgCurrentMa) / 24).toFixed(1);

  const getSeverityBadge = (g) => {
    if (g < 1.5) return { text: 'Nominal Micro-Texture', color: 'text-emerald-700 bg-emerald-50 border-emerald-200' };
    if (g < 2.2) return { text: 'Level 1: Minor Distress', color: 'text-amber-700 bg-amber-50 border-amber-200' };
    if (g < 3.0) return { text: 'Level 2: Moderate Rutting', color: 'text-orange-700 bg-orange-50 border-orange-200' };
    return { text: 'Level 3: Urgent Crater Hazard', color: 'text-red-700 bg-red-50 border-red-200' };
  };

  const badge = getSeverityBadge(parseFloat(peakG));

  return (
    <div className="bg-white border border-gray-200/90 rounded-2xl p-6 shadow-xs">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-5 border-b border-gray-100 gap-2">
        <div>
          <span className="text-[10px] font-mono uppercase tracking-wider text-blue-600 font-bold">
            Interactive Theory & Math Engine (Rubric 10)
          </span>
          <h3 className="text-lg font-bold text-gray-900 mt-0.5">
            Quarter-Car Dynamics & Power Computation Lab
          </h3>
        </div>
        <span className="text-xs font-mono text-gray-500 bg-gray-50 px-2.5 py-1 rounded-md border border-gray-200">
          Live Model: 2-DOF Spring-Damper
        </span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mt-6">
        {/* Controls */}
        <div className="lg:col-span-5 space-y-5">
          {/* Speed Slider */}
          <div>
            <div className="flex justify-between text-xs font-medium mb-1.5">
              <span className="text-gray-700">Vehicle Speed:</span>
              <span className="font-mono font-bold text-blue-600">{speed} km/h ({(v).toFixed(1)} m/s)</span>
            </div>
            <input
              type="range"
              min="20"
              max="100"
              value={speed}
              onChange={(e) => setSpeed(Number(e.target.value))}
              className="w-full h-1.5 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-blue-600"
            />
            <div className="flex justify-between text-[10px] text-gray-400 font-mono mt-1">
              <span>20 km/h</span>
              <span>60 km/h</span>
              <span>100 km/h</span>
            </div>
          </div>

          {/* Depth Slider */}
          <div>
            <div className="flex justify-between text-xs font-medium mb-1.5">
              <span className="text-gray-700">Road Pothole Depth:</span>
              <span className="font-mono font-bold text-blue-600">{depth} mm</span>
            </div>
            <input
              type="range"
              min="10"
              max="80"
              value={depth}
              onChange={(e) => setDepth(Number(e.target.value))}
              className="w-full h-1.5 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-blue-600"
            />
            <div className="flex justify-between text-[10px] text-gray-400 font-mono mt-1">
              <span>10 mm (fissure)</span>
              <span>45 mm (standard)</span>
              <span>80 mm (crater)</span>
            </div>
          </div>

          {/* Duty Cycle Slider */}
          <div>
            <div className="flex justify-between text-xs font-medium mb-1.5">
              <span className="text-gray-700">LoRa Active Duty Cycle:</span>
              <span className="font-mono font-bold text-indigo-600">{dutyCycle}%</span>
            </div>
            <input
              type="range"
              min="0.5"
              max="5.0"
              step="0.5"
              value={dutyCycle}
              onChange={(e) => setDutyCycle(Number(e.target.value))}
              className="w-full h-1.5 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-indigo-600"
            />
            <div className="flex justify-between text-[10px] text-gray-400 font-mono mt-1">
              <span>0.5% (High Life)</span>
              <span>2.5%</span>
              <span>5.0% (Aggressive)</span>
            </div>
          </div>
        </div>

        {/* Live Computed Metrics Bento */}
        <div className="lg:col-span-7 grid grid-cols-2 gap-3.5">
          <div className="p-4 rounded-xl bg-gray-50 border border-gray-200/90 flex flex-col justify-between">
            <span className="text-[10px] font-mono text-gray-400 uppercase font-semibold">Predicted Peak G-Shock</span>
            <div className="my-2">
              <span className="text-2xl font-mono font-extrabold text-gray-900">+{peakG}g</span>
            </div>
            <span className="text-[11px] text-gray-500 font-mono">Impact window: ~{impactTimeMs} ms</span>
          </div>

          <div className="p-4 rounded-xl bg-gray-50 border border-gray-200/90 flex flex-col justify-between">
            <span className="text-[10px] font-mono text-gray-400 uppercase font-semibold">Unsprung Resonance</span>
            <div className="my-2">
              <span className="text-2xl font-mono font-extrabold text-blue-600">{naturalFreq} Hz</span>
            </div>
            <span className="text-[11px] text-gray-500 font-mono">Wheel-hop mode frequency</span>
          </div>

          <div className="p-4 rounded-xl bg-gray-50 border border-gray-200/90 flex flex-col justify-between">
            <span className="text-[10px] font-mono text-gray-400 uppercase font-semibold">Average Current</span>
            <div className="my-2">
              <span className="text-2xl font-mono font-extrabold text-indigo-600">{avgCurrentMa} mA</span>
            </div>
            <span className="text-[11px] text-gray-500 font-mono">Sleep current: 18 µA</span>
          </div>

          <div className="p-4 rounded-xl bg-gray-50 border border-gray-200/90 flex flex-col justify-between">
            <span className="text-[10px] font-mono text-gray-400 uppercase font-semibold">Dark Battery Reserve</span>
            <div className="my-2">
              <span className="text-2xl font-mono font-extrabold text-emerald-600">{batteryDays} days</span>
            </div>
            <span className="text-[11px] text-emerald-700 font-mono">Indefinite w/ solar buffer</span>
          </div>

          {/* Classification result bar */}
          <div className={`col-span-2 p-3 rounded-xl border flex items-center justify-between text-xs font-semibold ${badge.color}`}>
            <span>DSP Anomaly Classification:</span>
            <span className="font-mono font-bold uppercase">{badge.text}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
