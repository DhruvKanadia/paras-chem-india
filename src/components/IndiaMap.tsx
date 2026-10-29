'use client';

import React, { useState } from 'react';
import mapData from '@/data/indiaMapData.json';

export interface HubNode {
  id: string;
  name: string;
  type: 'headquarters' | 'warehouse' | 'planned';
  coords: { x: number; y: number };
  latLon: string;
  location: string;
  details: string;
}

export const DISTRIBUTION_HUBS: HubNode[] = [
  {
    id: 'mumbai',
    name: 'Mumbai HQ',
    type: 'headquarters',
    coords: { x: 112, y: 432 },
    latLon: 'LAT 19.0760 / LON 72.8777',
    location: 'Mulund West, Maharashtra 400080',
    details: 'Corporate operations, centralized trading desk & procurement command',
  },
  {
    id: 'bhiwandi',
    name: 'Bhiwandi Hub',
    type: 'warehouse',
    coords: { x: 124, y: 418 },
    latLon: 'LAT 19.2813 / LON 73.0483',
    location: 'Bhiwandi Logistics Park, Maharashtra',
    details: 'Primary HAZ-compliant chemical storage (5 dedicated structural facilities)',
  },
  {
    id: 'vapi',
    name: 'Vapi',
    type: 'planned',
    coords: { x: 108, y: 402 },
    latLon: 'LAT 20.3893 / LON 72.9106',
    location: 'GIDC Industrial Corridor, South Gujarat',
    details: 'Strategic chlor-alkali & polymer corridor distribution node',
  },
  {
    id: 'blr',
    name: 'Bangalore (BLR)',
    type: 'planned',
    coords: { x: 186, y: 562 },
    latLon: 'LAT 12.9716 / LON 77.5946',
    location: 'Peenya Industrial Area, Karnataka',
    details: 'Southern India pharmaceutical & specialty solvent supply node',
  },
  {
    id: 'hyd',
    name: 'Hyderabad (HYD)',
    type: 'planned',
    coords: { x: 232, y: 466 },
    latLon: 'LAT 17.3850 / LON 78.4867',
    location: 'Genome Valley / Pashamylaram, Telangana',
    details: 'Active bulk drug API synthesis & pharma manufacturing supply link',
  },
  {
    id: 'ccu',
    name: 'Kolkata (CCU)',
    type: 'planned',
    coords: { x: 405, y: 345 },
    latLon: 'LAT 22.5726 / LON 88.3639',
    location: 'Dankuni Logistics Terminal, West Bengal',
    details: 'Eastern India industrial belt & Haldia port feeder hub',
  },
];

interface IndiaMapProps {
  selectedHubId?: string;
  onSelectHub?: (hub: HubNode) => void;
  className?: string;
}

export default function IndiaMap({ selectedHubId, onSelectHub, className = '' }: IndiaMapProps) {
  const [hoveredHub, setHoveredHub] = useState<HubNode | null>(null);

  const activeHub = hoveredHub || DISTRIBUTION_HUBS.find(h => h.id === selectedHubId);

  // Network connections radiating from Mumbai / Bhiwandi
  const connections = [
    { from: { x: 112, y: 432 }, to: { x: 124, y: 418 } }, // Mumbai to Bhiwandi
    { from: { x: 112, y: 432 }, to: { x: 108, y: 402 } }, // Mumbai to Vapi
    { from: { x: 112, y: 432 }, to: { x: 186, y: 562 } }, // Mumbai to Bangalore
    { from: { x: 112, y: 432 }, to: { x: 232, y: 466 } }, // Mumbai to Hyderabad
    { from: { x: 112, y: 432 }, to: { x: 405, y: 345 } }, // Mumbai to Kolkata
  ];

  return (
    <div className={`relative flex flex-col items-center justify-center ${className}`}>
      {/* SVG Container */}
      <svg
        viewBox="0 0 612 696"
        className="w-full max-w-[540px] h-auto drop-shadow-md select-none"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="mumbaiPulse" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#2563EB" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#1D4ED8" stopOpacity="0.1" />
          </linearGradient>
          <linearGradient id="bhiwandiPulse" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#0D9488" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#0F766E" stopOpacity="0.1" />
          </linearGradient>
          <filter id="nodeGlow" x="-20%" y="-20%" width="140%" height="140%">
            <feDropShadow dx="0" dy="2" stdDeviation="3" floodColor="#0F172A" floodOpacity="0.25" />
          </filter>
        </defs>

        {/* State Paths */}
        <g id="states">
          {mapData.locations.map((loc) => {
            const isMh = loc.id === 'mh';
            const isCorridorState = ['gj', 'ka', 'tg', 'wb'].includes(loc.id);

            let fill = '#F8FAFC';
            let stroke = '#CBD5E1';
            let strokeWidth = '0.85';

            if (isMh) {
              fill = '#EFF6FF'; // light blue highlight for Maharashtra
              stroke = '#93C5FD';
              strokeWidth = '1.25';
            } else if (isCorridorState) {
              fill = '#F1F5F9';
              stroke = '#94A3B8';
              strokeWidth = '0.9';
            }

            return (
              <path
                key={loc.id}
                id={loc.id}
                d={loc.path}
                fill={fill}
                stroke={stroke}
                strokeWidth={strokeWidth}
                className="transition-colors duration-200 hover:fill-blue-100/60"
              >
                <title>{loc.name}</title>
              </path>
            );
          })}
        </g>

        {/* Network Connection Lines */}
        <g id="network-lines">
          {connections.map((c, idx) => (
            <line
              key={idx}
              x1={c.from.x}
              y1={c.from.y}
              x2={c.to.x}
              y2={c.to.y}
              stroke="#64748B"
              strokeWidth="1.2"
              strokeDasharray="4 4"
              opacity="0.45"
            />
          ))}
        </g>

        {/* Hotspot Nodes */}
        <g id="hubs">
          {DISTRIBUTION_HUBS.map((hub) => {
            const isHq = hub.type === 'headquarters';
            const isWh = hub.type === 'warehouse';
            const isHovered = activeHub?.id === hub.id;

            return (
              <g
                key={hub.id}
                className="cursor-pointer transition-transform duration-200"
                onClick={() => onSelectHub && onSelectHub(hub)}
                onMouseEnter={() => setHoveredHub(hub)}
                onMouseLeave={() => setHoveredHub(null)}
              >
                {/* Pulsing Outer Rings for Active Nodes */}
                {isHq && (
                  <>
                    <circle cx={hub.coords.x} cy={hub.coords.y} r="18" fill="url(#mumbaiPulse)">
                      <animate attributeName="r" values="14;24;14" dur="2.8s" repeatCount="indefinite" />
                      <animate attributeName="opacity" values="0.45;0.08;0.45" dur="2.8s" repeatCount="indefinite" />
                    </circle>
                    <circle cx={hub.coords.x} cy={hub.coords.y} r="10" fill="#2563EB" opacity="0.25" />
                  </>
                )}

                {isWh && (
                  <>
                    <circle cx={hub.coords.x} cy={hub.coords.y} r="14" fill="url(#bhiwandiPulse)">
                      <animate attributeName="r" values="10;20;10" dur="2.4s" repeatCount="indefinite" />
                      <animate attributeName="opacity" values="0.45;0.08;0.45" dur="2.4s" repeatCount="indefinite" />
                    </circle>
                    <circle cx={hub.coords.x} cy={hub.coords.y} r="8" fill="#0D9488" opacity="0.25" />
                  </>
                )}

                {/* Node Solid Marker */}
                {isHq ? (
                  <circle
                    cx={hub.coords.x}
                    cy={hub.coords.y}
                    r={isHovered ? 7.5 : 6}
                    fill="#2563EB"
                    stroke="#FFFFFF"
                    strokeWidth="2.5"
                    filter="url(#nodeGlow)"
                    className="transition-all duration-200"
                  />
                ) : isWh ? (
                  <circle
                    cx={hub.coords.x}
                    cy={hub.coords.y}
                    r={isHovered ? 6.5 : 5}
                    fill="#0D9488"
                    stroke="#FFFFFF"
                    strokeWidth="2"
                    filter="url(#nodeGlow)"
                    className="transition-all duration-200"
                  />
                ) : (
                  <circle
                    cx={hub.coords.x}
                    cy={hub.coords.y}
                    r={isHovered ? 5.5 : 4}
                    fill={isHovered ? '#64748B' : '#FFFFFF'}
                    stroke="#64748B"
                    strokeWidth="1.75"
                    strokeDasharray="2 2"
                    className="transition-all duration-200"
                  />
                )}

                {/* City Label Badge */}
                {isHq && (
                  <g transform={`translate(${hub.coords.x - 78}, ${hub.coords.y - 10})`}>
                    <rect
                      x="0"
                      y="0"
                      width="72"
                      height="20"
                      rx="10"
                      fill="#0F172A"
                      className="drop-shadow-sm"
                    />
                    <text
                      x="36"
                      y="13"
                      fill="#FFFFFF"
                      fontSize="8.5"
                      fontWeight="bold"
                      fontFamily="system-ui, -apple-system, sans-serif"
                      textAnchor="middle"
                      letterSpacing="0.04em"
                    >
                      MUMBAI HQ
                    </text>
                  </g>
                )}

                {isWh && (
                  <g transform={`translate(${hub.coords.x + 8}, ${hub.coords.y - 12})`}>
                    <rect
                      x="0"
                      y="0"
                      width="74"
                      height="19"
                      rx="9.5"
                      fill="#0D9488"
                      className="drop-shadow-sm"
                    />
                    <text
                      x="37"
                      y="12.5"
                      fill="#FFFFFF"
                      fontSize="7.5"
                      fontWeight="bold"
                      fontFamily="system-ui, -apple-system, sans-serif"
                      textAnchor="middle"
                      letterSpacing="0.04em"
                    >
                      BHIWANDI HUB
                    </text>
                  </g>
                )}

                {/* Planned City Labels */}
                {!isHq && !isWh && (
                  <text
                    x={hub.id === 'vapi' ? hub.coords.x - 28 : hub.coords.x + 8}
                    y={hub.id === 'vapi' ? hub.coords.y + 1 : hub.coords.y + 3}
                    fill="#475569"
                    fontSize="8"
                    fontWeight="700"
                    fontFamily="monospace"
                    className="select-none"
                  >
                    {hub.name.replace(/\s*\(.*\)/, '')}
                  </text>
                )}
              </g>
            );
          })}
        </g>
      </svg>

      {/* Map Legend */}
      <div className="flex flex-wrap items-center justify-center gap-6 mt-4 text-xs font-mono uppercase tracking-wider text-slate-500">
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-industrial-blue ring-4 ring-blue-100"></span>
          <span className="text-slate-800 font-bold">Mumbai HQ (Central Command)</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-chemical-green ring-4 ring-teal-100"></span>
          <span className="text-slate-800 font-bold">Bhiwandi (Primary Warehouse)</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full border-2 border-dashed border-slate-400 bg-white"></span>
          <span>Planned Expansion Corridors</span>
        </div>
      </div>
    </div>
  );
}
