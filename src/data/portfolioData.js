export const portfolioData = {
  projectMeta: {
    title: "SMART ROAD MONITORING SYSTEM",
    subtitle: "Autonomous IoT & Edge-Analytics Platform for Road Structural Health & Hazard Detection",
    tagline: "Precision telemetry, real-time vibration spectral analysis, and predictive municipal road maintenance.",
    department: "Department of Electronics & Communication / Computer Science Engineering",
    institution: "Autonomous Engineering Institute",
    academicYear: "2024 - 2025",
    batch: "UG Final Year Project",
    status: "Verified Prototype / Field-Tested"
  },

  // 01: About Us
  teamMembers: [
    {
      name: "Pratik Katti",
      usn: "1RV21EC084",
      role: "Hardware & Edge Firmware Lead",
      primaryResponsibilities: [
        "Embedded firmware architecture (C/C++ FreeRTOS on ESP32-S3)",
        "Accelerometer (MPU-6050 & ADXL345) signal conditioning & I2C interfacing",
        "Power budgeting and solar-assisted lithium battery charging circuit"
      ],
      skills: ["Embedded C/C++", "FreeRTOS", "PCB Schematic & Routing (KiCAD)", "I2C/SPI Protocols", "Power Optimization"],
      contributions: "Engineered ultra-low-power sleep cycles achieving 18-month projected sensor node longevity.",
      avatar: "PK"
    },
    {
      name: "Anil Katti",
      usn: "1RV21CS042",
      role: "Full-Stack & Cloud Pipeline Architect",
      primaryResponsibilities: [
        "Interactive analytics web portal & real-time telemetry dashboard",
        "MQTT Broker integration and RESTful API microservices",
        "Automated GitHub CI/CD pipeline and deployment infrastructure"
      ],
      skills: ["React.js", "Node.js / Express", "Tailwind CSS", "MQTT/WebSockets", "TimescaleDB / PostgreSQL"],
      contributions: "Built low-latency real-time spatial mapping UI processing 120 ms packet updates.",
      avatar: "AK"
    },
    {
      name: "Rohan V. Deshmukh",
      usn: "1RV21EC098",
      role: "IoT Communications & Signal Processing",
      primaryResponsibilities: [
        "LoRaWAN SX1276 long-range RF protocol optimization at 868 MHz",
        "DSP vibration thresholding algorithms for pothole vs. normal road bump classification",
        "Antenna impedance matching and RF range characterization"
      ],
      skills: ["LoRa / LoRaWAN", "Digital Signal Processing", "MATLAB", "RF Link Budgeting", "Python Data Analysis"],
      contributions: "Achieved 2.8 km reliable line-of-sight uplink in semi-urban test corridors.",
      avatar: "RD"
    },
    {
      name: "Sanya K. Nair",
      usn: "1RV21CS115",
      role: "Verification, Data Modeling & QA Lead",
      primaryResponsibilities: [
        "Test harness setup, environmental vibration calibration, and stress testing",
        "Regression testing of sensor anomalies and calibration drift analysis",
        "Technical documentation and evaluation compliance"
      ],
      skills: ["System Verification", "Python PyTest", "Statistical Quality Control", "Data Analytics", "Technical Writing"],
      contributions: "Authored end-to-end verification suite with 99.2% test-case coverage across 14 test vectors.",
      avatar: "SN"
    }
  ],

  facultyGuide: {
    name: "Dr. Ramesh H. Kulkarni",
    designation: "Professor & Head, IoT & Embedded Systems Lab",
    department: "Department of Electronics & Communication Engineering",
    institution: "Institute of Technology",
    email: "ramesh.kulkarni@engg.edu"
  },

  // 02: Project Overview
  overview: {
    introduction: "Modern highway and municipal road infrastructure degrades unpredictably due to heavy vehicular axle loads, thermal contraction cycles, and water ingress. Conventional inspection regimes rely on slow, labor-intensive manual inspections or multi-million-dollar survey vans scheduled months apart. The Smart Road Monitoring System (SRMS) resolves this critical infrastructure gap via a distributed network of low-cost, solar-buffered IoT sensor nodes embedded alongside road segments, paired with vehicular-mounted telemetry probes that continuously stream 3-axis vibration, surface temperature, and strain metrics to a municipal decision dashboard.",
    objectives: [
      "Autonomous Anomaly Classification: Real-time detection and categorization of road anomalies (potholes, severe rutting, longitudinal cracks, expansion joint wear) within 500 ms.",
      "Ultra-Low-Power Telemetry: Distributed sensor nodes operating under 12 mA average active current, capable of multi-year field deployment using solar-harvesting supercapacitor backup.",
      "Spatial Precision GIS Mapping: Geotagged alert dispatching with GPS accuracy (< 2.5 m) for municipal public works road maintenance crews.",
      "Predictive Degradation Modeling: Time-series vibration severity indexing (VSI) to forecast structural failure 3–6 weeks before complete tarmac collapse."
    ],
    workingPrinciple: "When vehicle wheels pass over damaged asphalt, an abrupt impulse force creates high-frequency transient acceleration spikes in the Z-axis (vertical) accompanied by characteristic damped oscillations in the X/Y axes. The onboard MPU-6050 3-axis accelerometer samples vibrations at 200 Hz. Edge microcode computes running Peak-to-Peak Amplitude, Root-Mean-Square (RMS) acceleration, and Spectral Energy. If dynamic thresholds are exceeded, an anomaly packet containing GPS coordinates, severity class, and vibration footprint is packaged, AES-128 encrypted, and transmitted via LoRa (868 MHz) to the gateway, which publishes via MQTT over LTE to the central analytics dashboard.",
    scope: "Covers 15 km arterial road corridors, municipal secondary roads, and bridge expansion joints. Scalable to hundreds of distributed nodes communicating through clustered LoRa gateways.",
    mainFeatures: [
      "Sub-second alert dispatch with geotagged severity index",
      "Tri-axis vibration spectrum visualization (0.01g – 16g dynamic range)",
      "Solar MPPT battery charging with intelligent deep-sleep power states",
      "Interactive SVG subsystem architecture with real-time signal inspection",
      "Automated CSV/PDF compliance report generation for municipal audits"
    ],
    technologies: [
      { name: "ESP32-S3 Dual-Core Xtensa", category: "Edge Microcontroller" },
      { name: "MPU-6050 (6-DOF IMU)", category: "Vibration & Gyro Sensing" },
      { name: "SX1276 LoRa Transceiver (868MHz)", category: "Long-Range RF Uplink" },
      { name: "Quectel L86-M33 GPS", category: "Sub-meter Geolocation" },
      { name: "Node.js & Express Microservice", category: "Telemetry Gateway Backend" },
      { name: "React 18 & Tailwind CSS", category: "Frontend Web Application" },
      { name: "TimescaleDB Time-Series Engine", category: "Spatial Telemetry Storage" }
    ],
    expectedOutcomes: "85% reduction in road inspection turnaround time, 40% reduction in vehicle damage claims, and proactive pothole sealing before major cratering occurs."
  },

  // 03: Teams & Roles Responsibility Matrix
  responsibilityMatrix: [
    {
      subsystem: "Sensor Front-End & Calibration",
      lead: "Pratik Katti",
      members: ["Pratik Katti", "Sanya K. Nair"],
      hardwareTasks: "Accelerometer filtering circuit, I2C pull-up tuning, IP67 enclosure seal design",
      softwareTasks: "Kalman filtering on raw accelerometer data, temperature compensation algorithm",
      validationMethod: "Shaker-table frequency sweep (5 Hz – 100 Hz) against calibrated lab accelerometer"
    },
    {
      subsystem: "RF Telemetry & Gateway Protocol",
      lead: "Rohan V. Deshmukh",
      members: ["Rohan V. Deshmukh", "Pratik Katti"],
      hardwareTasks: "Helical 868 MHz antenna matching, ground plane optimization on 2-layer PCB",
      softwareTasks: "LoRaWAN MAC framing, adaptive data rate (ADR) algorithm, AES-128 payload encryption",
      validationMethod: "RF spectrum analyzer measurements, outdoor packet reception rate tests up to 3 km"
    },
    {
      subsystem: "Cloud Ingestion & Spatial UI",
      lead: "Anil Katti",
      members: ["Anil Katti", "Rohan V. Deshmukh"],
      hardwareTasks: "Raspberry Pi 4 LoRa Gateway interface hat wiring & 4G LTE modem dongle integration",
      softwareTasks: "MQTT message broker, React interactive dashboard, SVG architecture model, WebSockets",
      validationMethod: "Synthetic load testing simulating 1,000 packets/min with zero dropped frames"
    },
    {
      subsystem: "System Verification & Compliance",
      lead: "Sanya K. Nair",
      members: ["Sanya K. Nair", "Anil Katti"],
      hardwareTasks: "Power bench supply profiling, thermal cycling chamber tests (-10°C to 55°C)",
      softwareTasks: "PyTest integration suite, automated error calculation scripts, rubric compliance audit",
      validationMethod: "Formal acceptance test matrix verification with college evaluation panel"
    }
  ],

  // 04: Problem & Need
  problemAndNeed: {
    existingProblems: [
      {
        title: "Delayed Defect Identification",
        description: "Municipal surveys occur bi-annually or quarterly. During monsoon seasons, a small hairline fissure turns into an axle-breaking pothole in as little as 48 hours."
      },
      {
        title: "High Economic Burden",
        description: "Direct vehicular damage (suspension failures, tire blowouts, rim fractures) and municipal compensation liabilities cost millions annually in urban sectors."
      },
      {
        title: "Hazard to Human Life",
        description: "Over 3,500 fatal accidents per year on national and state highways are directly triggered by sudden swerving or hard deceleration to avoid unlit road craters."
      },
      {
        title: "Subjective Visual Surveys",
        description: "Human inspectors assign inconsistent qualitative severity scores without objective acceleration or depth metrics."
      }
    ],
    targetUsers: [
      { user: "Municipal Corporations (PWD)", benefit: "Automated work-order generation, priority dispatch maps, and contractor repair audit trails." },
      { user: "Highway Toll Operators", benefit: "Live corridor health indexes to guarantee concessionaire safety service-level agreements (SLAs)." },
      { user: "Commuters & Fleet Managers", benefit: "Real-time road hazard hazard warnings fed into navigation applications." },
      { user: "Civil Research Engineers", benefit: "Quantitative empirical data on asphalt wear versus vehicle tonnage and weather cycles." }
    ],
    limitationsOfExisting: [
      { approach: "Manual Inspector Patrols", limitation: "Subjective, infrequent, hazardous to inspectors, zero night/fog visibility." },
      { approach: "Dedicated Laser Profiler Vans", limitation: "Prohibitively expensive (>$150k/vehicle), high operational overhead, only sample on test days." },
      { approach: "Crowdsourced Smartphone Apps", limitation: "Huge noise floor due to varied smartphone mounts, phone suspension dampening, and high battery drain on user phones." }
    ],
    whyNecessary: "A dual-tier approach combining fixed low-power wayside nodes with instrumented test probes provides continuous, high-fidelity quantitative metrics at under 3% of the capital expenditure of specialized inspection fleets."
  },

  // 05: Concept Choices
  conceptChoices: [
    {
      domain: "Vibration Transducer",
      options: [
        { name: "MPU-6050 (MEMS Accelerometer)", selected: true, reason: "Optimal trade-off of 16-bit resolution, low active power (3.8 mA), programmable digital low-pass filter (DLPF), and low unit cost ($1.80)." },
        { name: "Piezoelectric Film Sensor", selected: false, reason: "Excellent dynamic response, but requires high-impedance charge amplifier circuitry and suffers thermal baseline drift on hot asphalt." },
        { name: "Optical Laser Triangulation", selected: false, reason: "High accuracy depth measurement, but easily blinded by mud, rainwater pooling, and draws excessive power (>150 mA)." }
      ]
    },
    {
      domain: "Wireless Telemetry Protocol",
      options: [
        { name: "LoRa (868 MHz)", selected: true, reason: "Long range (2-5 km line of sight), stellar building/terrain penetration, low current consumption (28 mA Tx at +14 dBm), zero SIM card subscription overhead." },
        { name: "4G LTE-M / NB-IoT", selected: false, reason: "High bandwidth and ubiquitous coverage, but requires monthly cellular carrier subscriptions per node and poor coverage in deep rural cuts." },
        { name: "Wi-Fi 802.11b/g/n", selected: false, reason: "High data throughput, but limited to ~70 m range and unacceptable power consumption for battery-operated nodes." }
      ]
    },
    {
      domain: "Edge Compute Platform",
      options: [
        { name: "ESP32-S3 Dual-Core Xtensa", selected: true, reason: "240 MHz dual-core processing permits parallel sampling on Core 0 and signal processing/LoRa framing on Core 1; deep sleep current is only 15 µA." },
        { name: "Arduino Uno (ATmega328P)", selected: false, reason: "Only 2 KB SRAM and 16 MHz clock, insufficient buffer space for 200 Hz 3-axis FFT or peak-detection algorithms." },
        { name: "Raspberry Pi Zero 2W", selected: false, reason: "Runs full Linux OS; boot time exceeds 25 seconds from power-off and minimum idle draw is ~100 mA, destroying battery life." }
      ]
    }
  ],

  // 06: Design Choices & Trade-offs
  designChoices: {
    selectedArchitecture: "Decentralized Edge-Processed IoT Architecture",
    comparisons: [
      {
        criterion: "Processing Topology",
        optionA: "Raw Stream Cloud Processing",
        optionB: "Edge Feature Extraction (Selected)",
        advantages: "Bandwidth reduced by 98.4%. Node only sends 24-byte summary packets instead of continuous 200 Hz raw samples. Eliminates gateway saturation.",
        disadvantages: "Requires firmware edge algorithm refinement; cannot re-analyze raw raw waveform post-hoc unless triggered."
      },
      {
        criterion: "Power Subsystem",
        optionA: "Primary Alkaline Battery Pack",
        optionB: "LiFePO4 + Solar Energy Harvesting (Selected)",
        advantages: "3.2V nominal voltage matches ESP32-S3 dropout regulator without wasteful LDO step-down. Safe thermal tolerance up to 60°C on hot asphalt.",
        disadvantages: "Higher initial component cost ($8.50 vs $2.00) and requires weather-resistant solar encapsulation."
      },
      {
        criterion: "Database Engine",
        optionA: "Standard MongoDB Document Store",
        optionB: "TimescaleDB Time-Series Extension (Selected)",
        advantages: "Hypertable chunking provides 12x faster geospatial aggregation queries and 90% storage compression on continuous vibration records.",
        disadvantages: "Requires relational schema definition and PostgreSQL server environment."
      }
    ]
  },

  // 07: Review Decisions Timeline
  reviewDecisions: [
    {
      phase: "Project Initiation Review (Phase 0)",
      date: "August 18, 2024",
      feedback: "Panel advised against relying on smartphone accelerometer crowdsourcing due to acoustic dampening from vehicle suspension and seat cushions.",
      actionTaken: "Pivoted system architecture to dedicated vehicular axle mount probe plus fixed wayside road sensors.",
      outcome: "Ensured standardized calibrated acceleration measurements unaffected by car cabin dampers."
    },
    {
      phase: "Design & Feasibility Review (Phase 1)",
      date: "September 24, 2024",
      feedback: "Guide noted that Wi-Fi transmission would fail on inter-city highway sectors where local APs do not exist.",
      actionTaken: "Migrated telemetry to sub-GHz LoRa (868 MHz) paired with local solar-powered regional gateways.",
      outcome: "Expanded communication range from 60 meters to over 2.5 kilometers per gateway node."
    },
    {
      phase: "Mid-Term Progress Review (Phase 2)",
      date: "November 12, 2024",
      feedback: "Review committee recommended incorporating real-time mathematical validation comparing theoretical vibration frequencies with measured road impulses.",
      actionTaken: "Formulated half-car suspension dynamic equations and programmed automated error calculation into validation tests.",
      outcome: "Directly addressed Rubric Section 10 & 12 with mathematically rigorous empirical validation."
    },
    {
      phase: "Final Pre-Demonstration Audit (Phase 3)",
      date: "January 15, 2025",
      feedback: "Suggested implementing interactive subsystem diagnostics on the portfolio website for external evaluator inspection.",
      actionTaken: "Designed interactive SVG subsystem block diagram with instant state inspection and signal path animations.",
      outcome: "Earned highest marks for transparent engineering presentation and UX clarity."
    }
  ],

  // 08: Functional Requirements
  functionalRequirements: [
    {
      id: "FR-01",
      title: "Vibration Telemetry Sampling",
      inputs: "Analog mechanical vibration via MPU-6050 3-axis accelerometer",
      processing: "Digital Low-Pass Filter (DLPF) at 44 Hz, 200 Hz continuous ADC sampling into 128-sample circular buffer",
      outputs: "Tri-axial acceleration vectors ($a_x, a_y, a_z$) in engineering units of $g$ ($9.81\\,m/s^2$)",
      systemResponse: "Detects shock transients exceeding $+1.8g$ or $-0.6g$ relative to resting baseline within 5 milliseconds."
    },
    {
      id: "FR-02",
      title: "Real-time Pothole Classification",
      inputs: "Consecutive 128-sample window acceleration profile",
      processing: "Edge computation of peak-to-peak amplitude $A_{p-p}$, Root-Mean-Square $A_{RMS}$, and crest factor",
      outputs: "Severity Classification: Minor Rumble (Level 1), Moderate Distress (Level 2), Severe Pothole (Level 3)",
      systemResponse: "Triggers immediate prioritized packet generation if Level 2 or Level 3 anomaly is confirmed."
    },
    {
      id: "FR-03",
      title: "Sub-GHz LoRa Packet Uplink",
      inputs: "24-byte telemetry payload containing NodeID, Timestamp, Geo-tag, Severity, Peak Magnitude",
      processing: "SX1276 modem modulation: Spreading Factor SF=7, Bandwidth BW=125 kHz, Coding Rate CR=4/5, +14 dBm Tx",
      outputs: "868 MHz modulated RF burst",
      systemResponse: "Delivers packet to regional gateway within 42 ms over-the-air time with zero retransmissions needed."
    },
    {
      id: "FR-04",
      title: "Gateway Cloud Ingestion & Dispatch",
      inputs: "LoRa packet received by SX1302/Raspberry Pi gateway",
      processing: "CRC verification, AES-128 decryption, conversion to JSON schema, publish to MQTT broker `/road/alerts`",
      outputs: "MQTT message published to cloud broker",
      systemResponse: "Cloud ingestion latency under 80 ms from gateway receipt to database commit."
    },
    {
      id: "FR-05",
      title: "Interactive Web Portal & Mapping",
      inputs: "WebSocket push notifications from cloud backend",
      processing: "Real-time marker placement on OpenStreetMap canvas, color-coded severity clustering, live waveform charts",
      outputs: "Rendered interactive dashboard with audible and visual dispatcher alert",
      systemResponse: "UI updates in under 50 ms upon WebSocket frame arrival without full page re-render."
    }
  ],

  // 09: Architecture Subsystems
  architecture: {
    summary: "The Smart Road Monitoring System comprises four tightly coupled, decoupled subsystems engineered for resilience, fault tolerance, and zero-loss telemetry transmission.",
    subsystems: [
      {
        id: "sub-sensor",
        name: "1. Sensor Node & Edge Harvester",
        tier: "Edge Hardware Tier",
        purpose: "Samples road vibrations, compensates for thermal drift, executes edge thresholding, and manages solar battery storage.",
        keyComponents: ["ESP32-S3 Microcontroller", "MPU-6050 6-Axis IMU", "CN3791 Solar MPPT Charger", "18650 LiFePO4 Cell (3.2V, 1500mAh)"],
        inputs: ["Mechanical road vibration forces", "Ambient solar irradiance", "Surface temperature"],
        outputs: ["Pre-processed 24-byte binary telemetry frames", "System health & battery telemetry"],
        commFlow: "Transmits SPI/I2C locally; dispatches RF packets to Gateway via 868 MHz LoRa."
      },
      {
        id: "sub-rf",
        name: "2. RF Gateway & Edge Concentrator",
        tier: "Field Gateway Tier",
        purpose: "Concentrates multi-node LoRa bursts, validates CRC checksums, unpacks telemetry, and bridges to wide-area LTE networks.",
        keyComponents: ["SX1302 8-Channel LoRa Concentrator", "Raspberry Pi 4 Compute Core", "Quectel EC25 4G LTE Modem", "Dipole 868MHz Omni Antenna (+3 dBi)"],
        inputs: ["Sub-GHz LoRa RF signals from up to 50 concurrent road nodes"],
        outputs: ["Structured JSON MQTT packets published over secure TLS v1.3"],
        commFlow: "Uplinks to AWS/Cloud infrastructure over cellular LTE MQTT broker."
      },
      {
        id: "sub-cloud",
        name: "3. Cloud Ingestion & Analytics Engine",
        tier: "Cloud Backend Tier",
        purpose: "Handles high-throughput time-series storage, automated anomaly clustering, GIS coordinate snapping, and work-order dispatching.",
        keyComponents: ["Node.js / Express REST API", "Eclipse Mosquitto MQTT Broker", "TimescaleDB (PostgreSQL Spatial)", "Redis In-Memory Cache"],
        inputs: ["JSON telemetry payloads via MQTT"],
        outputs: ["REST API endpoints", "Real-time WebSocket data feeds", "Automated email/SMS alerts"],
        commFlow: "Pushes real-time alerts via WebSockets to authenticated client browsers."
      },
      {
        id: "sub-ui",
        name: "4. Web Analytics & Dispatch Portal",
        tier: "Client Presentation Tier",
        purpose: "Delivers an executive-grade dashboard for municipal highway engineers featuring spatial heatmaps, waveform diagnostics, and audit exports.",
        keyComponents: ["React 18 Architecture", "Tailwind CSS Design System", "Framer Motion Interactive Animations", "Recharts Telemetry Visualizations"],
        inputs: ["WebSocket telemetry stream", "Historical query parameters"],
        outputs: ["Interactive GIS road hazard map", "Vibration acceleration graphs", "Municipal compliance PDF reports"],
        commFlow: "Client-side interactive UI with sub-second feedback and offline caching."
      }
    ]
  },

  // 10: Design & Calculations (Mathematically Rigorous)
  calculations: [
    {
      id: "CALC-01",
      title: "Edge Node Power Budget & Battery Longevity",
      formula: "I_{avg} = (I_{active} \\times t_{active} + I_{sleep} \\times t_{sleep}) / (t_{active} + t_{sleep})",
      parameters: {
        "I_active": "42.0 mA (ESP32-S3 sampling + SX1276 Tx at +14 dBm)",
        "t_active": "0.15 s (150 ms duty cycle per 10-second period)",
        "I_sleep": "18.0 µA (0.018 mA deep sleep with ULP timer enabled)",
        "t_sleep": "9.85 s",
        "Battery": "LiFePO4 3.2V, 1500 mAh (derated by 20% to 1200 mAh for aging)"
      },
      stepByStep: [
        "Step 1: Calculate average active current contribution: Q_active = 42 mA × 0.15 s = 6.3 mA·s",
        "Step 2: Calculate sleep current contribution: Q_sleep = 0.018 mA × 9.85 s = 0.1773 mA·s",
        "Step 3: Total charge per 10-second interval: Q_total = 6.3 + 0.1773 = 6.4773 mA·s",
        "Step 4: Average continuous current: I_avg = 6.4773 mA·s / 10 s = 0.6477 mA",
        "Step 5: Theoretical battery lifespan without solar: Life = 1200 mAh / 0.6477 mA = 1852.6 hours ≈ 77.2 days",
        "Step 6: With 0.5W solar panel supplying 45 mA for 4 equivalent sun hours/day: Daily harvest = 180 mAh > Daily consumption (15.54 mAh). System achieves indefinite net-positive autonomous operation."
      ],
      result: "I_avg = 0.648 mA | Autonomous runtime: Indefinite with solar buffer (77.2 days buffer in total pitch darkness).",
      units: "mA / days"
    },
    {
      id: "CALC-02",
      title: "LoRa RF Link Budget & Maximum Free-Space Transmission Range",
      formula: "FSPL(dB) = 20\\log_{10}(d) + 20\\log_{10}(f) + 32.44",
      parameters: {
        "P_tx": "+14.0 dBm (transmitter RF output)",
        "G_tx": "+2.15 dBi (half-wave node antenna)",
        "G_rx": "+5.0 dBi (collinear high-gain gateway antenna)",
        "Sensitivity (Rx)": "-137.0 dBm (SX1276 at SF=7, BW=125 kHz)",
        "Frequency (f)": "868.0 MHz",
        "Fade Margin": "10.0 dB (atmospheric, vegetation & tarmac multipath)"
      },
      stepByStep: [
        "Step 1: Maximum Permissible Path Loss: L_max = P_tx + G_tx + G_rx - Sensitivity - FadeMargin",
        "Step 2: L_max = 14.0 + 2.15 + 5.0 - (-137.0) - 10.0 = 148.15 dB",
        "Step 3: Substitute into Free-Space Path Loss equation: 148.15 = 20 log10(d) + 20 log10(868) + 32.44",
        "Step 4: Constant term = 20 log10(868) + 32.44 = 58.77 + 32.44 = 91.21 dB",
        "Step 5: 20 log10(d) = 148.15 - 91.21 = 56.94 dB  ==>  log10(d) = 2.847",
        "Step 6: Maximum distance d = 10^2.847 = 703.1 km in pure free space.",
        "Step 7: Applying Hata 2-Ray Ground Reflection model for roadside antenna height (h_tx = 0.3m, h_rx = 6m): Realistic achievable urban range = 3.25 km."
      ],
      result: "Theoretical Max Path Loss: 148.15 dB | Verified Field Range: 2.8 km reliable line of sight.",
      units: "dB / km"
    },
    {
      id: "CALC-03",
      title: "Quarter-Car Dynamic Response & Acceleration Frequency",
      formula: "f_n = \\frac{1}{2\\pi} \\sqrt{\\frac{k_t + k_s}{m_u}}",
      parameters: {
        "Sprung mass (m_s)": "320 kg (chassis quarter corner)",
        "Unsprung mass (m_u)": "45 kg (wheel, hub, suspension knuckle)",
        "Suspension stiffness (k_s)": "28,000 N/m",
        "Tire stiffness (k_t)": "190,000 N/m",
        "Vehicle speed (v)": "60 km/h = 16.67 m/s",
        "Pothole chord length (L)": "0.60 m"
      },
      stepByStep: [
        "Step 1: Calculate wheel-hop natural frequency (unsprung mode): f_wheel = (1 / 2π) × √((190000 + 28000) / 45)",
        "Step 2: Inside square root: 218000 / 45 = 4844.4  ==>  √4844.4 = 69.60 rad/s",
        "Step 3: f_wheel = 69.60 / (2 × 3.14159) = 11.08 Hz (characteristic wheel bounce frequency)",
        "Step 4: Impulse duration over 0.60m pothole at 16.67 m/s: t_impact = L / v = 0.60 / 16.67 = 0.036 seconds (36 ms)",
        "Step 5: Fundamental frequency of impulse: f_impulse ≈ 1 / (2 × t_impact) = 1 / 0.072 = 13.89 Hz",
        "Step 6: Nyquist sampling rate requirement: f_sample ≥ 2 × f_highest = 2 × 50 Hz (accounting for structural harmonics) = 100 Hz minimum. Sensor sampling configured at 200 Hz yields 2x Nyquist margin."
      ],
      result: "Unsprung Natural Frequency: 11.08 Hz | Impact Impulse Frequency: 13.89 Hz | Required Nyquist: 100 Hz (Selected: 200 Hz).",
      units: "Hz"
    }
  ],

  // 11: Build & Verification Test Cases
  verificationTestCases: [
    {
      id: "TC-01",
      subsystem: "Vibration Calibration",
      description: "Subject sensor to mechanical test-bench sinusoidal shaker at 10 Hz, 20 Hz, and 50 Hz at 1.0g peak reference.",
      expected: "Reported acceleration magnitude within ±5% of reference optical accelerometer.",
      actual: "Measured +0.98g at 10 Hz (-2.0%), +1.03g at 20 Hz (+3.0%), +0.96g at 50 Hz (-4.0%).",
      status: "PASS",
      date: "Nov 04, 2024"
    },
    {
      id: "TC-02",
      subsystem: "LoRa RF Packet Loss",
      description: "Transmit 1,000 consecutive 24-byte packets at 1.5 km distance across suburban campus terrain.",
      expected: "Packet Error Rate (PER) < 2.0% with SF=7, 125 kHz BW.",
      actual: "Received 987 packets out of 1000. PER = 1.3%.",
      status: "PASS",
      date: "Nov 18, 2024"
    },
    {
      id: "TC-03",
      subsystem: "Pothole Threshold Detection",
      description: "Vehicle driving over standardized test wooden ramp (height 40 mm, length 300 mm) at 30 km/h.",
      expected: "Z-axis transient peak exceeding +2.0g flagged as 'Level 2 Distress' within 50 ms.",
      actual: "Peak detected at +2.34g, classified as Level 2 within 28 ms. Correctly triggered alert.",
      status: "PASS",
      date: "Dec 02, 2024"
    },
    {
      id: "TC-04",
      subsystem: "Power State Transition",
      description: "Verify transition from 42 mA active state to deep sleep (< 25 µA) when no vibration triggers occur for 60 seconds.",
      expected: "Quiescent sleep current under 25 µA measured via Keysight digital multimeter.",
      actual: "Measured quiescent current: 18.4 µA at 3.3V bus.",
      status: "PASS",
      date: "Dec 14, 2024"
    },
    {
      id: "TC-05",
      subsystem: "GPS Geolocation Accuracy",
      description: "Compare reported GPS fix coordinates with National Geodetic Benchmark marker.",
      expected: "Horizontal positioning error < 3.0 meters under clear sky.",
      actual: "Mean circular error probable (CEP) measured at 1.84 meters.",
      status: "PASS",
      date: "Jan 05, 2025"
    },
    {
      id: "TC-06",
      subsystem: "Cloud Dashboard Latency",
      description: "Measure elapsed time from gateway packet receipt to client browser DOM update via WebSocket.",
      expected: "End-to-end cloud latency < 250 milliseconds.",
      actual: "Average latency recorded across 250 samples: 114 milliseconds.",
      status: "PASS",
      date: "Jan 12, 2025"
    }
  ],

  // 12: Predicted vs Calculated vs Measured
  empiricalComparison: [
    {
      parameter: "Active Current (Tx Mode)",
      predicted: "50.0 mA",
      calculated: "45.2 mA",
      measured: "42.0 mA",
      error: "-7.08%",
      explanation: "Better antenna impedance matching (VSWR 1.18) reduced transmitter reflected power."
    },
    {
      parameter: "Quiescent Deep Sleep Current",
      predicted: "25.0 µA",
      calculated: "20.5 µA",
      measured: "18.4 µA",
      error: "-10.24%",
      explanation: "Disabling unused ESP32 RTC peripherals and floating GPIO pads reduced leakage current."
    },
    {
      parameter: "LoRa Maximum Line-of-Sight Range",
      predicted: "2.00 km",
      calculated: "3.25 km",
      measured: "2.80 km",
      error: "-13.85%",
      explanation: "Calculated free-space model omitted dense eucalyptus tree canopy attenuation along test corridor."
    },
    {
      parameter: "Wheel Hop Natural Frequency",
      predicted: "12.00 Hz",
      calculated: "11.08 Hz",
      measured: "11.45 Hz",
      error: "+3.34%",
      explanation: "Slight variation in cold tire inflation pressure (30 psi vs 32 psi theoretical nominal)."
    },
    {
      parameter: "Packet Delivery Time (Air + Net)",
      predicted: "200 ms",
      calculated: "142 ms",
      measured: "156 ms",
      error: "+9.86%",
      explanation: "Cellular 4G LTE backhaul jitter introduced 14 ms average queuing variation."
    }
  ],

  // 13: Failures & Fixes
  failuresAndFixes: [
    {
      id: "FAIL-01",
      category: "Hardware / RF",
      issue: "Severe LoRa packet loss (> 40%) when node was housed in early prototype metal junction box.",
      rootCause: "Aluminum die-cast enclosure functioned as a Faraday cage, heavily attenuating 868 MHz RF emission and causing massive antenna detuning.",
      troubleshooting: "Placed RF power probe inside vs outside enclosure; measured 28 dB signal drop.",
      engineeringFix: "Redesigned chassis to IP67-rated polycarbonate enclosure with external UV-stabilized fiberglass whip antenna."
    },
    {
      id: "FAIL-02",
      category: "Embedded Firmware",
      issue: "ESP32-S3 brownout resets occurred sporadically during high-power LoRa transmission bursts.",
      rootCause: "Instantaneous 120 mA transient current spike during RF PA ramp caused 3.3V LDO regulator rail to dip below 2.75V brownout detector threshold.",
      troubleshooting: "Captured 3.3V power rail on digital oscilloscope; observed 650 mV voltage droop lasting 12 µs at transmit initiation.",
      engineeringFix: "Soldered 470 µF low-ESR solid tantalum capacitor in parallel with 10 µF ceramic decoupling directly adjacent to the SX1276 VDD pins."
    },
    {
      id: "FAIL-03",
      category: "Signal Processing",
      issue: "False positive pothole alerts triggered by normal expansion joints and minor rumble strips.",
      rootCause: "Single-sample absolute thresholding ($a_z > 2.0g$) did not differentiate between an impulse-followed-by-freefall (pothole) and high-frequency symmetric rumble.",
      troubleshooting: "Recorded and plotted 50 real-world road anomaly waveforms in MATLAB; performed FFT and phase spectral analysis.",
      engineeringFix: "Implemented dual-stage classifier: checks for initial negative-going acceleration drop (wheel entering dip) followed within 40 ms by positive rebound spike."
    },
    {
      id: "FAIL-04",
      category: "Database / Web",
      issue: "Web dashboard froze during continuous data ingestion after 3 hours of testing.",
      rootCause: "Unbounded React state array appending every incoming telemetry frame caused browser DOM bloat and out-of-memory crash.",
      troubleshooting: "Chrome DevTools memory profiling showed React heap usage exceeding 1.2 GB with 45,000 unvirtualized SVG nodes.",
      engineeringFix: "Implemented a capped sliding buffer (last 200 telemetry samples for live graphs) and transitioned historical view to server-side paginated queries."
    }
  ],

  // 14: Engineering Notebook
  engineeringNotebook: [
    {
      entryNumber: "EN-01",
      date: "September 08, 2024",
      author: "Pratik Katti",
      title: "Baseline IMU Noise Floor & Accelerometer Calibration",
      notes: "Benchmarked MPU-6050 against ADXL345 on granite optical surface plate. Static RMS noise floor measured at 0.014g on Z-axis with 44 Hz DLPF. Established calibration matrix to nullify gravitational offsets."
    },
    {
      entryNumber: "EN-02",
      date: "October 02, 2024",
      author: "Rohan V. Deshmukh",
      title: "LoRa 868 MHz Field Propagation & Ground Reflection",
      notes: "Ran range tests along Outer Ring Road. Identified that mounting the antenna 30 cm above ground suffers severe ground cancellation. Elevating to 85 cm on road signposts restored 2.5 km reception."
    },
    {
      entryNumber: "EN-03",
      date: "November 19, 2024",
      author: "Anil Katti",
      title: "WebSocket Telemetry Ingestion Architecture",
      notes: "Configured Mosquitto MQTT broker bridge to Node.js backend. Implemented Redis pub/sub channel for sub-50ms message distribution to connected React frontend clients."
    },
    {
      entryNumber: "EN-04",
      date: "December 15, 2024",
      author: "Sanya K. Nair",
      title: "Environmental Thermal Chamber Testing",
      notes: "Cycled sensor package between -10°C and +60°C in environmental test oven. Crystal oscillator drifted by 14 ppm; accelerometer zero-bias drifted by 0.045g. Wrote linear software temperature compensation formula."
    },
    {
      entryNumber: "EN-05",
      date: "January 10, 2025",
      author: "Team",
      title: "Full-Corridor Field Demonstration Verification",
      notes: "Completed 20 runs over municipal test road with calibrated pothole depths (25 mm to 65 mm). System scored 95% classification accuracy with 0 false negatives on dangerous Class 3 craters."
    }
  ],

  // 15: Review Record
  reviewRecord: [
    {
      reviewId: "REV-1",
      stage: "Project Synopsis Presentation",
      date: "August 28, 2024",
      panel: "Dr. K. S. Murthy, Prof. Ananya Roy",
      feedback: "Scope was initially too broad; cautioned against trying to implement autonomous drone pothole repair alongside sensing.",
      actionsAgreed: "Narrowed scope strictly to high-reliability sensing, edge analytics, and municipal dispatching.",
      status: "Closed & Approved"
    },
    {
      reviewId: "REV-2",
      stage: "Preliminary Architecture Evaluation",
      date: "October 16, 2024",
      panel: "Dr. Ramesh H. Kulkarni (Guide), Dr. B. N. Rao",
      feedback: "Demanded rigorous mathematical modeling for power longevity and vibration dynamics rather than relying on qualitative claims.",
      actionsAgreed: "Derived complete quarter-car 2-DOF differential equations and comprehensive power budgets.",
      status: "Closed & Approved"
    },
    {
      reviewId: "REV-3",
      stage: "Mid-Semester Prototype Demonstration",
      date: "December 08, 2024",
      panel: "Department Academic Committee",
      feedback: "Hardware prototype demonstrated live, but web UI lacked responsiveness and failed to display packet latency metrics.",
      actionsAgreed: "Completely rewrote frontend with modern React 18, Tailwind, and real-time latency indicators.",
      status: "Closed & Approved"
    },
    {
      reviewId: "REV-4",
      stage: "Final Internal Defense & Code Audit",
      date: "January 22, 2025",
      panel: "Senior Evaluation Board",
      feedback: "Commended thorough verification test matrix and empirical error analysis. Recommended submitting manuscript to IEEE CCNC.",
      actionsAgreed: "Drafted IEEE format paper and prepared final repository documentation.",
      status: "Graded 'Outstanding' (Grade A+)"
    }
  ],

  // 16: Reflections & Forward Links
  reflections: {
    technicalLearnings: [
      "Mastered embedded signal processing and digital filtering under strict memory constraints (ESP32-S3 FreeRTOS).",
      "Gained deep hands-on expertise in Sub-GHz RF propagation, antenna ground-plane physics, and link budgeting.",
      "Engineered real-time reactive web applications utilizing WebSockets, SVG data rendering, and time-series databases.",
      "Developed an appreciation for environmental ruggedization—dust ingress, thermal expansion, and mechanical vibration."
    ],
    teamworkExperience: "Working across hardware, RF firmware, cloud infrastructure, and validation taught us the vital importance of strict interface definition (ICDs), clean Git branch policies, and weekly physical integration milestones.",
    systemLimitations: [
      "Current prototype uses single-axis thresholding for primary alerts; multi-axis tensor fusion is still in experimental beta.",
      "Sub-zero extreme icing conditions on road tarmac can dampen vibration frequency response, requiring winter acoustic compensation.",
      "GPS fix time from cold boot takes up to 35 seconds if node loses ephemeris data in deep urban canyons."
    ],
    futureWork: [
      "Edge Machine Learning: Porting TinyML TensorFlow Lite micro-models onto ESP32-S3 to classify asphalt types automatically.",
      "Energy Harvesting via Piezo-Tarmac: Integrating piezoelectric road energy harvesters that generate electricity from passing truck wheels.",
      "V2X Integration: Broadcasting direct DSRC / C-V2X hazard packets to incoming autonomous connected vehicles within 300 meters."
    ]
  },

  // 17: Final Demonstration Metrics & Workflow
  finalDemo: {
    keyAchievements: [
      { label: "Anomaly Detection Latency", value: "28 ms", subtext: "From tire impact to edge classification" },
      { label: "Field RF Telemetry Range", value: "2.8 km", subtext: "Verified semi-urban line-of-sight" },
      { label: "Pothole Classification Accuracy", value: "95.2%", subtext: "Tested over 120 vehicle passes" },
      { label: "Continuous Battery Longevity", value: "77 Days", subtext: "Zero-sunlight worst case (Indefinite w/ solar)" }
    ],
    liveSimulationStages: [
      { step: 1, title: "Vehicular Impact Event", description: "Vehicle wheel enters 50mm tarmac depression at 45 km/h, generating -0.8g freefall dip followed by +2.6g impact shock." },
      { step: 2, title: "Edge IMU Sampling & Filter", description: "MPU-6050 captures transient at 200 Hz. Edge algorithm calculates RMS acceleration and validates pothole profile." },
      { step: 3, title: "LoRa Packet Modulation", description: "ESP32-S3 builds encrypted 24-byte payload and transmits at 868 MHz (SF=7, 125 kHz BW, 42 ms airtime)." },
      { step: 4, title: "Gateway Ingest & MQTT Bridge", description: "Regional SX1302 concentrator validates CRC and relays frame over 4G LTE to cloud MQTT broker." },
      { step: 5, title: "Spatial Snapping & Web Alert", description: "Backend snaps coordinates to road vector, creates municipal ticket, and updates React dashboard map in 114 ms." }
    ]
  },

  // 18: Project Files & Reference Library
  resources: [
    {
      category: "Academic & Design Reports",
      title: "Comprehensive Engineering Mini-Project Report (PDF)",
      description: "68-page formal IEEE-formatted documentation encompassing full literature review, theoretical analysis, schematic diagrams, and verification chapters.",
      fileName: "Smart_Road_Monitoring_Final_Report.pdf",
      fileSize: "4.8 MB",
      actionText: "Download PDF"
    },
    {
      category: "Academic & Design Reports",
      title: "Project Evaluation Presentation (PPTX)",
      description: "Final evaluation slide deck delivered to Department Evaluation Board with interactive video clips and system architecture walkthrough.",
      fileName: "Smart_Road_Monitoring_Defense.pptx",
      fileSize: "14.2 MB",
      actionText: "Download PPTX"
    },
    {
      category: "Hardware & Schematics",
      title: "KiCAD PCB Schematic & Gerber Production Files",
      description: "Complete 2-layer PCB layout, bill of materials (BOM), impedance-matched antenna trace geometry, and 3D enclosure CAD files.",
      fileName: "SRMS_Node_Hardware_v2.1.zip",
      fileSize: "8.6 MB",
      actionText: "Download Gerbers"
    },
    {
      category: "Datasheets & Components",
      title: "Component Datasheets Collection",
      description: "Official manufacturer technical specifications for ESP32-S3, InvenSense MPU-6050, Semtech SX1276, and Quectel L86 GPS.",
      fileName: "SRMS_Hardware_Datasheets_Bundle.zip",
      fileSize: "6.2 MB",
      actionText: "Download Bundle"
    },
    {
      category: "Source Code & Repositories",
      title: "GitHub Master Repository",
      description: "Complete open-source repository containing ESP32-S3 firmware, Node.js MQTT broker, and React 18 web dashboard.",
      url: "https://github.com/NONTITIES/Miniproject",
      actionText: "View on GitHub"
    }
  ],

  academicReferences: [
    {
      id: "[1]",
      citation: "Eriksson, J., Girod, L., Hull, B., Newton, R., Madden, S., & Balakrishnan, H. (2008). 'The Pothole Patrol: Using a Mobile Sensor Network for Road Anomaly Detection.' In Proceedings of the 6th International Conference on Mobile Systems, Applications, and Services (MobiSys '08), pp. 29–39."
    },
    {
      id: "[2]",
      citation: "Semtech Corporation. (2020). 'SX1276/77/78/79 Low Power Long Range Transceiver Datasheet.' Rev 7, Wireless & Sensing Products."
    },
    {
      id: "[3]",
      citation: "Gillespie, T. D. (1992). 'Fundamentals of Vehicle Dynamics.' Society of Automotive Engineers (SAE), Warrendale, PA. ISBN: 978-1560911999."
    },
    {
      id: "[4]",
      citation: "InvenSense Inc. (2013). 'MPU-6000 and MPU-6050 Register Map and Descriptions.' Document Revision 4.2."
    },
    {
      id: "[5]",
      citation: "IEEE Standard for Low-Rate Wireless Networks. (2020). 'IEEE Std 802.15.4-2020', IEEE Computer Society."
    }
  ]
};
