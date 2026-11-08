import React, { useState, useEffect } from 'react';
import { Play, RotateCcw, AlertTriangle, CheckCircle, Activity, ShieldAlert, Zap } from 'lucide-react';

const scenarios = [
  {
    id: 'normal',
    name: 'Normal Smooth Asphalt',
    speed: '65 km/h',
    expectedClass: 'Normal (Safe)',
    badgeColor: 'bg-emerald-50 text-emerald-700 border-emerald-200',
    description: 'Uniform surface with standard tire micro-texture vibration within 0.05g – 0.15g.',
    generatePoints: () => {
      return Array.from({ length: 40 }, (_, i) => ({
        t: i * 5,
        val: 1.0 + (Math.sin(i * 0.8) * 0.08) + ((Math.random() - 0.5) * 0.04)
      }));
    }
  },
  {
    id: 'rumble',
    name: 'Level 1: Rumble Strip / Surface Wear',
    speed: '50 km/h',
    expectedClass: 'Level 1: Minor Distress',
    badgeColor: 'bg-amber-50 text-amber-700 border-amber-200',
    description: 'High-frequency periodic chatter with peak amplitude reaching 0.65g.',
    generatePoints: () => {
      return Array.from({ length: 40 }, (_, i) => {
        const chatter = (i >= 12 && i <= 28) ? Math.sin(i * 2.2) * 0.55 : Math.sin(i * 0.8) * 0.08;
        return {
          t: i * 5,
          val: 1.0 + chatter + ((Math.random() - 0.5) * 0.05)
        };
      });
    }
  },
  {
    id: 'moderate',
    name: 'Level 2: Moderate Asphalt Depression',
    speed: '40 km/h',
    expectedClass: 'Level 2: Moderate Distress',
    badgeColor: 'bg-orange-50 text-orange-700 border-orange-200',
    description: '35mm dip producing negative freefall (-0.4g) followed by +1.9g rebound impact.',
    generatePoints: () => {
      return Array.from({ length: 40 }, (_, i) => {
        let shock = 0;
        if (i === 17) shock = -0.42; // wheel drops
        else if (i === 18) shock = 1.85; // rim strikes edge
        else if (i === 19) shock = -0.35; // rebound
        else if (i === 20) shock = 0.22;
        return {
          t: i * 5,
          val: 1.0 + shock + ((Math.random() - 0.5) * 0.06)
        };
      });
    }
  },
  {
    id: 'pothole',
    name: 'Level 3: Severe Pothole Crater (60mm)',
    speed: '45 km/h',
    expectedClass: 'Level 3: Urgent Hazard',
    badgeColor: 'bg-red-50 text-red-700 border-red-200',
    description: 'Catastrophic wheel drop (-0.85g) into crater followed by +2.78g violent shock spike.',
    generatePoints: () => {
      return Array.from({ length: 40 }, (_, i) => {
        let shock = 0;
        if (i === 16) shock = -0.85; // freefall drop
        else if (i === 17) shock = 2.78; // violent impact
        else if (i === 18) shock = -0.62; // secondary oscillation
        else if (i === 19) shock = 0.45;
        else if (i === 20) shock = -0.21;
        return {
          t: i * 5,
          val: 1.0 + shock + ((Math.random() - 0.5) * 0.05)
        };
      });
    }
  }
];

export default function LiveTelemetrySimulator() {
  const [selectedScenario, setSelectedScenario] = useState(scenarios[3]); // default to pothole
  const [dataPoints, setDataPoints] = useState(scenarios[3].generatePoints());
  const [isSimulating, setIsSimulating] = useState(false);
  const [detectionState, setDetectionState] = useState({
    peakZ: '+2.78 g',
    dipZ: '-0.85 g',
    rms: '0.48 g',
    decision: 'Level 3: Urgent Hazard',
    latency: '26 ms',
    loraUplink: 'Dispatched (Packet #4810)'
  });

  const handleScenarioChange = (scenario) => {
    setSelectedScenario(scenario);
    setIsSimulating(true);

    setTimeout(() => {
      const points = scenario.generatePoints();
      setDataPoints(points);

      const vals = points.map(p => p.val - 1.0);
      const maxVal = Math.max(...vals);
      const minVal = Math.min(...vals);
      const rmsVal = Math.sqrt(vals.reduce((acc, v) => acc + v * v, 0) / vals.length);

      setDetectionState({
        peakZ: `+${(1.0 + maxVal).toFixed(2)} g`,
        dipZ: `${(1.0 + minVal).toFixed(2)} g`,
        rms: `${rmsVal.toFixed(2)} g`,
        decision: scenario.expectedClass,
        latency: `${Math.floor(22 + Math.random() * 8)} ms`,
        loraUplink: scenario.id === 'normal' ? 'Idle (No Anomaly)' : `Dispatched (Packet #${Math.floor(4000 + Math.random() * 1000)})`
      });
      setIsSimulating(false);
    }, 250);
  };

  // Convert data points to SVG path
  const svgWidth = 600;
  const svgHeight = 200;
  const padding = 20;

  const minG = 0.0;
  const maxG = 4.0;

  const getSvgCoordinates = (t, val) => {
    const x = padding + (t / 200) * (svgWidth - 2 * padding);
    const normalizedY = (val - minG) / (maxG - minG);
    const y = svgHeight - padding - normalizedY * (svgHeight - 2 * padding);
    return { x, y };
  };

  const pathD = dataPoints.reduce((acc, pt, idx) => {
    const { x, y } = getSvgCoordinates(pt.t, pt.val);
    return idx === 0 ? `M ${x} ${y}` : `${acc} L ${x} ${y}`;
  }, '');

  return (
    <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-xs">
      <div className="flex flex-col lg:flex-row lg:items-center justify-between pb-6 border-b border-gray-100 gap-4">
        <div>
          <span className="text-xs font-mono uppercase tracking-wider text-blue-600 font-medium">
            Section 17: Interactive Demonstration
          </span>
          <h3 className="text-xl font-bold text-gray-900 mt-1">
            Real-Time Road Vibration Edge Classifier Simulator
          </h3>
          <p className="text-xs text-gray-500 mt-1">
            Simulate passing vehicles over various road defects and observe the edge microcontroller DSP response in real time.
          </p>
        </div>

        <div className="flex flex-wrap gap-2">
          {scenarios.map(sc => (
            <button
              key={sc.id}
              onClick={() => handleScenarioChange(sc)}
              className={`px-3 py-1.5 text-xs font-medium rounded-lg border transition ${
                selectedScenario.id === sc.id
                  ? 'bg-blue-600 text-white border-blue-600 shadow-xs'
                  : 'bg-white text-gray-700 border-gray-200 hover:bg-gray-50'
              }`}
            >
              {sc.name.split(':')[0]}
            </button>
          ))}
        </div>
      </div>

      {/* Main Simulation Viewport */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mt-6">
        {/* Waveform Canvas */}
        <div className="lg:col-span-8 bg-gray-950 rounded-xl p-4 border border-gray-900 flex flex-col justify-between relative overflow-hidden">
          <div className="flex items-center justify-between text-xs text-gray-400 font-mono pb-2 border-b border-gray-800">
            <span className="flex items-center space-x-2 text-emerald-400">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping"></span>
              <span>CH-1: Z-Axis Accelerometer (MPU-6050 @ 200 Hz)</span>
            </span>
            <span>Scale: 1.0g Nominal | Dynamic Range: ±4.0g</span>
          </div>

          {/* SVG Waveform Rendering */}
          <div className="w-full my-3">
            <svg viewBox={`0 0 ${svgWidth} ${svgHeight}`} className="w-full h-44 overflow-visible">
              {/* Baseline Reference Line at 1.0g */}
              <line
                x1={padding}
                y1={getSvgCoordinates(0, 1.0).y}
                x2={svgWidth - padding}
                y2={getSvgCoordinates(200, 1.0).y}
                stroke="#374151"
                strokeWidth="1"
                strokeDasharray="4 4"
              />
              <text x={padding + 5} y={getSvgCoordinates(0, 1.0).y - 4} fill="#9CA3AF" fontSize="10" fontFamily="monospace">
                1.0g (Gravity Baseline)
              </text>

              {/* Upper Hazard Threshold at 2.0g */}
              <line
                x1={padding}
                y1={getSvgCoordinates(0, 2.0).y}
                x2={svgWidth - padding}
                y2={getSvgCoordinates(200, 2.0).y}
                stroke="#EF4444"
                strokeWidth="1"
                strokeDasharray="2 2"
                strokeOpacity="0.6"
              />
              <text x={svgWidth - padding - 110} y={getSvgCoordinates(200, 2.0).y - 4} fill="#EF4444" fontSize="9" fontFamily="monospace">
                +2.0g Hazard Threshold
              </text>

              {/* Waveform Path */}
              <path
                d={pathD}
                fill="none"
                stroke={selectedScenario.id === 'pothole' ? '#EF4444' : selectedScenario.id === 'moderate' ? '#F97316' : '#3B82F6'}
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="transition-all duration-300"
              />
            </svg>
          </div>

          <div className="flex items-center justify-between text-[11px] text-gray-500 font-mono pt-2 border-t border-gray-800">
            <span>Window: 200 ms (40 samples)</span>
            <span>Speed: {selectedScenario.speed}</span>
            <span>Filter: DLPF 44 Hz Enabled</span>
          </div>
        </div>

        {/* Telemetry Metrics & Classification Output */}
        <div className="lg:col-span-4 flex flex-col justify-between space-y-4">
          <div className="bg-gray-50 p-4 rounded-xl border border-gray-200/80">
            <span className="text-[10px] font-mono uppercase tracking-wider text-gray-500 font-semibold block mb-1">
              Active Scenario
            </span>
            <h4 className="text-sm font-bold text-gray-900">
              {selectedScenario.name}
            </h4>
            <p className="text-xs text-gray-600 mt-1 leading-relaxed">
              {selectedScenario.description}
            </p>
          </div>

          {/* Computed Metrics */}
          <div className="grid grid-cols-2 gap-3">
            <div className="bg-white p-3 rounded-lg border border-gray-200 shadow-2xs">
              <span className="text-[10px] font-mono text-gray-400 block uppercase">Peak Acceleration</span>
              <span className="text-base font-mono font-bold text-gray-900">{detectionState.peakZ}</span>
            </div>
            <div className="bg-white p-3 rounded-lg border border-gray-200 shadow-2xs">
              <span className="text-[10px] font-mono text-gray-400 block uppercase">Depression Dip</span>
              <span className="text-base font-mono font-bold text-gray-900">{detectionState.dipZ}</span>
            </div>
            <div className="bg-white p-3 rounded-lg border border-gray-200 shadow-2xs">
              <span className="text-[10px] font-mono text-gray-400 block uppercase">Edge Compute Latency</span>
              <span className="text-base font-mono font-bold text-blue-600">{detectionState.latency}</span>
            </div>
            <div className="bg-white p-3 rounded-lg border border-gray-200 shadow-2xs">
              <span className="text-[10px] font-mono text-gray-400 block uppercase">RMS Vibration</span>
              <span className="text-base font-mono font-bold text-gray-900">{detectionState.rms}</span>
            </div>
          </div>

          {/* Decision Box */}
          <div className={`p-3.5 rounded-xl border ${selectedScenario.badgeColor}`}>
            <div className="flex items-center space-x-2">
              <AlertTriangle className="w-4 h-4 shrink-0" />
              <span className="text-xs font-semibold uppercase tracking-wider">Edge Classifier Result</span>
            </div>
            <div className="text-sm font-bold mt-1">
              {detectionState.decision}
            </div>
            <div className="text-[11px] font-mono mt-1 opacity-80">
              LoRa Telemetry: {detectionState.loraUplink}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
