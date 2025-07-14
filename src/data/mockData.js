
export const mockData = {
  components: [
    {
      code: "C-101",
      name: "Ignition Coil",
      type: "Power Component",
      status: "Active",
      voltage: "12V",
      description: "Primary ignition coil for cylinder 1-4 firing sequence"
    },
    {
      code: "C-102",
      name: "ABS Sensor",
      type: "Sensor",
      status: "Active",
      voltage: "5V",
      description: "Anti-lock braking system wheel speed sensor"
    },
    {
      code: "C-103",
      name: "Fuel Injector",
      type: "Power Component",
      status: "Active",
      voltage: "12V",
      description: "Electronic fuel injection system component"
    },
    {
      code: "C-104",
      name: "Oxygen Sensor",
      type: "Sensor",
      status: "Active",
      voltage: "1V",
      description: "Lambda sensor for exhaust gas analysis"
    },
    {
      code: "C-105",
      name: "Throttle Position Sensor",
      type: "Sensor",
      status: "Active",
      voltage: "5V",
      description: "Monitors throttle valve position"
    }
  ],
  
  controllers: [
    {
      code: "ECU-001",
      name: "Engine Control Unit",
      type: "ECU",
      status: "Active",
      voltage: "12V",
      description: "Main engine management system controller"
    },
    {
      code: "ECU-002",
      name: "ABS Control Module",
      type: "ECU",
      status: "Active",
      voltage: "12V",
      description: "Anti-lock braking system control unit"
    },
    {
      code: "ECU-003",
      name: "Body Control Module",
      type: "ECU",
      status: "Active",
      voltage: "12V",
      description: "Central body electronics controller"
    },
    {
      code: "ECU-004",
      name: "Transmission Control Unit",
      type: "ECU",
      status: "Active",
      voltage: "12V",
      description: "Automatic transmission control system"
    }
  ],
  
  systems: [
    {
      code: "SYS-001",
      name: "Engine Management",
      type: "Engine",
      status: "Active",
      description: "Complete engine control and monitoring system"
    },
    {
      code: "SYS-002",
      name: "Braking System",
      type: "Safety",
      status: "Active",
      description: "ABS and electronic brake distribution system"
    },
    {
      code: "SYS-003",
      name: "Lighting System",
      type: "Body",
      status: "Active",
      description: "Exterior and interior lighting control"
    },
    {
      code: "SYS-004",
      name: "Climate Control",
      type: "Comfort",
      status: "Active",
      description: "HVAC and cabin temperature management"
    }
  ],
  
  voltage: [
    {
      code: "PWR-001",
      name: "Main Battery",
      type: "Primary",
      status: "Active",
      voltage: "12V",
      description: "Primary vehicle power source"
    },
    {
      code: "PWR-002",
      name: "Alternator",
      type: "Secondary",
      status: "Active",
      voltage: "14.4V",
      description: "Charging system generator"
    },
    {
      code: "PWR-003",
      name: "5V Regulator",
      type: "Secondary",
      status: "Active",
      voltage: "5V",
      description: "Sensor power supply regulator"
    },
    {
      code: "PWR-004",
      name: "3.3V Regulator",
      type: "Secondary",
      status: "Active",
      voltage: "3.3V",
      description: "Logic circuit power supply"
    }
  ],
  
  dtc: [
    {
      code: "P0171",
      name: "System Too Lean",
      type: "P0",
      status: "Inactive",
      description: "Fuel system lean condition detected"
    },
    {
      code: "P0300",
      name: "Random Misfire",
      type: "P0",
      status: "Inactive",
      description: "Multiple cylinder misfire detected"
    },
    {
      code: "P1234",
      name: "Manufacturer Specific",
      type: "P1",
      status: "Inactive",
      description: "Manufacturer specific diagnostic code"
    },
    {
      code: "P2015",
      name: "Intake Manifold",
      type: "P2",
      status: "Inactive",
      description: "Intake manifold runner position sensor"
    }
  ],
  
  signals: [
    {
      code: "SIG-001",
      name: "CAN High Speed",
      type: "CAN",
      status: "Active",
      voltage: "2.5V",
      description: "High speed CAN bus communication"
    },
    {
      code: "SIG-002",
      name: "LIN Bus",
      type: "LIN",
      status: "Active",
      voltage: "12V",
      description: "Local interconnect network signal"
    },
    {
      code: "SIG-003",
      name: "PWM Signal",
      type: "PWM",
      status: "Active",
      voltage: "5V",
      description: "Pulse width modulation control signal"
    },
    {
      code: "SIG-004",
      name: "Analog Sensor",
      type: "Analog",
      status: "Active",
      voltage: "0-5V",
      description: "Variable analog sensor signal"
    }
  ],
  
  harnesses: [
    {
      code: "HAR-001",
      name: "Engine Harness",
      type: "Main",
      status: "Active",
      description: "Primary engine bay wiring harness"
    },
    {
      code: "HAR-002",
      name: "Body Harness",
      type: "Main",
      status: "Active",
      description: "Main body electrical harness"
    },
    {
      code: "HAR-003",
      name: "Door Harness",
      type: "Branch",
      status: "Active",
      description: "Door module wiring harness"
    },
    {
      code: "HAR-004",
      name: "Instrument Harness",
      type: "Branch",
      status: "Active",
      description: "Dashboard and instrument cluster harness"
    }
  ]
};
