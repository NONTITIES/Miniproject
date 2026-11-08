import React, { useState } from 'react';
import { Spotlight } from './ui/Spotlight';
import { Play, RotateCcw, AlertTriangle, CheckCircle, Activity, Radio, Zap } from 'lucide-react';

const scenarios = [
  {
    id: 'normal',
    name: 'Normal Smooth Asphalt',
    speed: '65 km/h',
    expectedClass: 'Normal (Safe)',
    badgeColor: 'bg-emerald-950/60 text-emerald-400 border-emerald-500/30',
    description: 'Uniform asphalt surface with standard tire micro-texture vibration within 0.05g – 0.15g.',
    generatePoints: () => {
      return Array.from({ length: 40 }, (_, i) => ({
        t: i * 5,
        val: 1.0 + (Math.sin(i * 0.8) * 0.08) + ((Math.random() - 0.5) * 0.04)
      }));
    }
  },
  {
    id: 'rumble',
    name: 'Level 1: Rumble Strip / Wear',
    speed: '50 km/h',
    expectedClass: 'Level 1: Minor Distress',
    badgeColor: 'bg-amber-950/60 text-amber-400 border-amber-500/30',
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
    name: 'Level 2: Moderate Rutting / Dip',
    speed: '40 km/h',
    expectedClass: 'Level 2: Moderate Distress',
    badgeColor: 'bg-orange-950/60 text-orange-400 border-orange-500/30',
    description: '35mm asphalt dip producing negative freefall (-0.42g) followed by +1.85g rebound impact.',
    generatePoints: () => {
      return Array.from({ length: 40 }, (_, i) => {
        let shock = 0;
        if (i === 17) shock = -0.42;
        else if (i === 18) shock = 1.85;
        else if (i === 19) shock = -0.35;
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
    name: 'Level 3: Severe Crater (60mm)',
    speed: '45 km/h',
    expectedClass: 'Level 3: Urgent Hazard',
    badgeColor: 'bg-red-950/70 text-red-400 border-red-500/40 shadow-glow-cyan',
    description: 'Catastrophic wheel drop (-0.85g) into crater followed by +2.78g violent shock spike.',
    generatePoints: () => {
      return Array.from({ length: 40 }, (_, i) => {
        let shock = 0;
        if (i === 16) shock = -0.85;
        else if (i === 17) shock = 2.78;
        else if (i === 18) shock = -0.62;
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
  const [selectedScenario, setSelectedScenario] = useState(scenarios[3]);
  const [dataPoints, setDataPoints] = useState(scenarios[3].generatePoints());
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
  };

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
    <div className="relative rounded-2xl bg-[#15182A]/70 border border-white/10 p-6 sm:p-8 backdrop-blur-xl shadow-glass overflow-hidden">
      <Spotlight className="from-blue-600/20 via-cyan-500/10 to-transparent" size={350} />

      <div className="flex flex-col lg:flex-row lg:items-center justify-between pb-6 border-b border-white/10 gap-4 relative z-10">
        <div>
          <span className="text-xs font-mono uppercase tracking-wider text-cyan-400 font-bold flex items-center space-x-2">
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></span>
            <span>Section 17: Interactive Demonstration</span>
          </span>
          <h3 className="text-xl sm:text-2xl font-bold text-white mt-1">
            Real-Time Road Vibration Edge Classifier Lab
          </h3>
          <p className="text-xs sm:text-sm text-slate-400 mt-1">
            Simulate passing vehicles over various road distress profiles and monitor the ESP32-S3 DSP response in real time.
          </p>
        </div>

        {/* Scenario Buttons */}
        <div className="flex flex-wrap gap-2">
          {scenarios.map(sc => (
            <button
              key={sc.id}
              onClick={() => handleScenarioChange(sc)}
              className={`px-3 py-2 text-xs font-medium rounded-xl border transition-all duration-200 ${
                selectedScenario.id === sc.id
                  ? 'bg-blue-600/80 text-white border-cyan-400 shadow-glow-blue font-semibold scale-105'
                  : 'bg-white/5 text-slate-300 border-white/10 hover:bg-white/10 hover:text-white'
              }`}
            >
              {sc.name.split(':')[0]}
            </button>
          ))}
        </div>
      </div>

      {/* Main Viewport */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mt-6 relative z-10">
        
        {/* Neon Oscilloscope Canvas */}
        <div className="lg:col-span-8 bg-[#070B14] rounded-2xl p-5 border border-white/10 flex flex-col justify-between relative overflow-hidden shadow-inner">
          <div className="flex items-center justify-between text-xs text-slate-400 font-mono pb-3 border-b border-white/10">
            <span className="flex items-center space-x-2 text-cyan-400 font-bold">
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping"></span>
              <span>CH-1: Z-Axis Accelerometer (MPU-6050 @ 200 Hz)</span>
            </span>
            <span className="text-[11px] text-slate-500">Dynamic Scale: ±4.0g</span>
          </div>

          {/* SVG Waveform Plot */}
          <div className="w-full my-4">
            <svg viewBox={`0 0 ${svgWidth} ${svgHeight}`} className="w-full h-48 overflow-visible">
              <defs>
                <filter id="glow-wave" x="-20%" y="-20%" width="140%" height="140%">
                  <feGaussianBlur stdDeviation="3" result="blur" />
                  <feMerge>
                    <feMergeNode in="blur" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>
              </defs>

              {/* Grid Lines */}
              <line x1={padding} y1={getSvgCoordinates(0, 3.0).y} x2={svgWidth - padding} y2={getSvgCoordinates(200, 3.0).y} stroke="#1E293B" strokeWidth="0.8" strokeDasharray="3 3" />
              <line x1={padding} y1={getSvgCoordinates(0, 2.0).y} x2={svgWidth - padding} y2={getSvgCoordinates(200, 2.0).y} stroke="#EF4444" strokeWidth="1" strokeDasharray="4 4" strokeOpacity="0.5" />
              <text x={svgWidth - padding - 120} y={getSvgCoordinates(200, 2.0).y - 6} fill="#EF4444" fontSize="9" fontFamily="monospace">
                +2.0g Impact Threshold
              </text>

              {/* Gravity Baseline 1.0g */}
              <line x1={padding} y1={getSvgCoordinates(0, 1.0).y} x2={svgWidth - padding} y2={getSvgCoordinates(200, 1.0).y} stroke="#334155" strokeWidth="1" />
              <text x={padding + 5} y={getSvgCoordinates(0, 1.0).y - 6} fill="#94A3B8" fontSize="10" fontFamily="monospace">
                1.0g Gravitational Zero
              </text>

              {/* Waveform Trace */}
              <path
                d={pathD}
                fill="none"
                stroke={selectedScenario.id === 'pothole' ? '#EF4444' : selectedScenario.id === 'moderate' ? '#F97316' : '#70F2CF'}
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                filter="url(#glow-wave)"
                className="transition-all duration-300"
              />
            </svg>
          </div>

          <div className="flex items-center justify-between text-[11px] text-slate-500 font-mono pt-3 border-t border-white/10">
            <span>Window: 200 ms (40 samples)</span>
            <span className="text-cyan-400">Velocity: {selectedScenario.speed}</span>
            <span>Filter: DLPF 44 Hz Active</span>
          </div>
        </div>

        {/* Telemetry Metrics & Decision Panel */}
        <div className="lg:col-span-4 flex flex-col justify-between space-y-4">
          <div className="p-4 rounded-xl bg-white/5 border border-white/10">
            <span className="text-[10px] font-mono uppercase tracking-wider text-cyan-400 font-bold block mb-1">
              Active Road Scenario
            </span>
            <h4 className="text-sm font-bold text-white">
              {selectedScenario.name}
            </h4>
            <p className="text-xs text-slate-300 mt-1 leading-relaxed">
              {selectedScenario.description}
            </p>
          </div>

          {/* Metric Badges */}
          <div className="grid grid-cols-2 gap-2.5">
            <div className="p-3 rounded-xl bg-white/5 border border-white/10">
              <span className="text-[10px] font-mono text-slate-400 block uppercase">Peak Acceleration</span>
              <span className="text-base font-mono font-bold text-white">{detectionState.peakZ}</span>
            </div>
            <div className="p-3 rounded-xl bg-white/5 border border-white/10">
              <span className="text-[10px] font-mono text-slate-400 block uppercase">Freefall Dip</span>
              <span className="text-base font-mono font-bold text-white">{detectionState.dipZ}</span>
            </div>
            <div className="p-3 rounded-xl bg-white/5 border border-white/10">
              <span className="text-[10px] font-mono text-slate-400 block uppercase">Edge DSP Latency</span>
              <span className="text-base font-mono font-bold text-cyan-400">{detectionState.latency}</span>
            </div>
            <div className="p-3 rounded-xl bg-white/5 border border-white/10">
              <span className="text-[10px] font-mono text-slate-400 block uppercase">RMS Vibration</span>
              <span className="text-base font-mono font-bold text-white">{detectionState.rms}</span>
            </div>
          </div>

          {/* Final Classification Decision Card */}
          <div className={`p-4 rounded-xl border backdrop-blur-md ${selectedScenario.badgeColor}`}>
            <div className="flex items-center space-x-2">
              <AlertTriangle className="w-4 h-4 shrink-0" />
              <span className="text-xs font-mono font-bold uppercase tracking-wider">Edge Classifier Decision</span>
            </div>
            <div className="text-base font-bold mt-1 text-white">
              {detectionState.decision}
            </div>
            <div className="text-xs font-mono mt-1 opacity-85">
              LoRa Telemetry: {detectionState.loraUplink}
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
