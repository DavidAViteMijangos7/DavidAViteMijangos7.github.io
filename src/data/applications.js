// "Applied In" details for the Skills page.
//
// contexts:     every name used in a skill's `appliedIn` list → where it lives on the site.
// applications: skill name → { context name → what I actually did with that skill there }.
// If a skill/context pair has no entry in `applications`, the modal falls back to the
// context's `summary`, so every chip still opens something useful.

export const contexts = {
  'URC Mars Rover': {
    title: 'Mars Rover — University Rover Challenge (URC)',
    period: 'Aug 2026 – Present',
    type: 'project',
    to: '/projects#urc-rover',
    summary: 'New campus team building a Mars rover for the University Rover Challenge in Utah. I work on the robotic structure and the software stack.',
  },
  'AV Challenge': {
    title: 'Autonomous Vehicle Challenge (AV Challenge)',
    period: 'Aug 2026 – Present',
    type: 'project',
    to: '/projects#av-challenge',
    summary: 'Small-scale autonomous car: sensor selection, 3D-printed chassis, STM32 main code, ESP32 telemetry, vision, control and path planning.',
  },
  'CubeSat Project': {
    title: 'CubeSat Project (Tec × Kyutech)',
    period: 'Feb 2026 – Present',
    type: 'project',
    to: '/projects#cubesat',
    summary: 'International low-Earth-orbit CubeSat mission. ADCS research and simulation, and leader of the structural CAD subsystem.',
  },
  'Passive Industrial Exoskeleton Prototype': {
    title: 'Passive Industrial Exoskeleton Prototype',
    period: 'Feb 2026 – May 2026',
    type: 'project',
    to: '/projects#exoskeleton',
    summary: 'Ergonomic industrial exoskeleton with seated and backpack modes. Mechanical CAD, FEA and prototyping lead.',
  },
  'Arduino-Controlled Robotic Goalkeeper': {
    title: 'Arduino-Controlled Robotic Goalkeeper',
    period: 'Feb 2025 – Jun 2025',
    type: 'project',
    to: '/projects#robotic-goalkeeper',
    summary: 'Mechatronic goalkeeper with joystick-controlled lateral motion and a solenoid striker, built on MDF and aluminum profiles.',
  },
  'Materials Science Research — Next Gen Scientist Program': {
    title: 'Materials Science Research — Next Gen Scientist Program',
    period: '2023 — 2024',
    type: 'experience',
    to: '/experience#materials-research',
    summary: 'Undergraduate research with PhD researchers on the mechanical properties of 3D-printed Nylon and Onyx composites.',
  },
  'Escudería Electrum': {
    title: 'Escudería Electrum — Electratón',
    period: 'Feb 2025 — Dec 2025',
    type: 'experience',
    to: '/experience#electrum',
    summary: 'Mechanical & electrical team member on an electric race kart: 1st place Monterrey race, 3rd place national.',
  },
  'Formula SAE': {
    title: 'Formula SAE — Electronics Division',
    period: 'Feb 2026 — Aug 2026',
    type: 'experience',
    to: '/experience#fsae',
    summary: 'PCB designer in the electronics division, from schematics to routed boards ready for manufacturing.',
  },
  'Experimental Rocketry Courses': {
    title: 'Experimental Rocketry Courses — AeroClúster de Querétaro',
    period: '2025',
    type: 'experience',
    to: '/experience#rocketry',
    summary: 'Rocketry physics training, OpenRocket flight simulation, and building low-altitude rockets.',
  },
  'Technical Experience & Leadership': {
    title: 'Technical Experience & Leadership',
    period: '2020 — Present',
    type: 'experience',
    to: '/experience#technical',
    summary: 'Blacksmithing and process automation in the family businesses, plus coaching and leadership.',
  },
  'Machining Courses — Tec Campus Querétaro': {
    title: 'Machining Courses — Tec Campus Querétaro',
    type: 'course',
    summary: 'Hands-on CNC and manual machining courses: lathes, mills, waterjet and laser cutting.',
  },
  'Personal Portfolio Website': {
    title: 'Personal Portfolio Website',
    type: 'project',
    href: 'https://github.com/DavidAViteMijangos7/DavidAViteMijangos7.github.io',
    summary: 'This site: React + Vite + Tailwind, deployed to GitHub Pages with GitHub Actions.',
  },
  'Personal Interests': {
    title: 'Personal Interests',
    type: 'personal',
    summary: 'Self-directed learning and side projects outside of class and student teams.',
  },
  Classes: {
    title: 'Engineering Coursework',
    type: 'course',
    summary: 'Used in Mechatronics Engineering courses at Tec de Monterrey.',
  },
};
contexts['Rover Project'] = contexts['URC Mars Rover'];

export const applications = {
  Python: {
    'Materials Science Research — Next Gen Scientist Program': [
      'Wrote custom Python scripts to automate the control, tracking and data management of the test specimens',
      'Supported tensile and fatigue testing of 3D-printed Nylon and Onyx composites',
    ],
  },
  'C++': {
    'Arduino-Controlled Robotic Goalkeeper': [
      'Programmed the Arduino in C++ for joystick-controlled lateral motor movement with limit switches',
      'Solenoid actuation for the striking motion, triggered from the joystick button',
    ],
    'AV Challenge': [
      'Writing the main vehicle code on the STM32: sensor reading (LiDAR, MPU6050, encoders), control and navigation',
    ],
    'URC Mars Rover': [
      'Microcontroller firmware for the rover’s motor control, as part of the team’s first software tasks',
    ],
  },
  'ROS 2': {
    'URC Mars Rover': [
      'Building the first ROS 2 nodes/packages for the rover’s software stack',
      'Testing them in simulation before moving to hardware',
    ],
    'Personal Interests': [
      'Self-directed ROS 2 training: custom packages and nodes in Python and C++',
      'Interfacing Arduino/STM32 microcontrollers with a Linux host',
    ],
  },
  MATLAB: {
    'CubeSat Project': ['Simulation code for the satellite’s magnetorquers (ADCS actuators)'],
  },
  'Stress Simulation / FEA (SolidWorks)': {
    'Passive Industrial Exoskeleton Prototype': [
      'Stress, displacement and equivalent strain studies on both configurations (seated and backpack mode)',
      'Load-bearing analysis to validate the structure before prototyping',
      'Mass properties analysis of the full assembly (9.725 kg)',
    ],
  },
  'Microcontrollers & Actuators (Arduino, Solenoids, Motor Drivers)': {
    'Arduino-Controlled Robotic Goalkeeper': [
      'Arduino driving the lateral motor through a driver, with limit switches as end stops',
      'Solenoid actuator for the strike, powered from a dedicated supply',
      'Wired and integrated the full electronics on breadboard',
    ],
  },
  'Magnetorquer Simulation': {
    'CubeSat Project': ['Developed simulation code for the satellite’s magnetorquers as part of the ADCS subsystem'],
  },
  'Mechanical Testing (Tensile & Fatigue)': {
    'Materials Science Research — Next Gen Scientist Program': [
      'Tensile and fatigue tests on 3D-printed Nylon and Onyx specimens on a ZwickRoell LTM 10',
      'Structural evaluation with 3D scanning alongside the mechanical tests',
    ],
  },
  'Kalman Filters': {
    'CubeSat Project': ['Researched Kalman filter variants for the ADCS attitude estimation on the satellite’s STM32 sensor system'],
  },
  SolidWorks: {
    'Passive Industrial Exoskeleton Prototype': [
      'Led the 3D CAD modeling and full assembly in two configurations: seated and backpack mode',
      'Orthographic views, FEA stress studies and mass properties from the same model',
    ],
    'AV Challenge': ['CAD of the vehicle’s chassis, designed for 3D printing'],
  },
  'Fusion 360': {
    'CubeSat Project': [
      'Leader of the structure subsystem: CubeSat frame panels and full structural assembly',
      'Taught Fusion 360 to ~7 teammates to build the CAD together',
    ],
  },
  KiCad: {
    'Formula SAE': [
      'Designed PCBs from schematics to fully routed layouts ready for manufacturing',
      'Integrated 74HC595 shift registers and other logic components',
      'Kept every design compliant with the FSAE technical rulebook',
    ],
  },
  '3D Printing': {
    'Experimental Rocketry Courses': ['3D-printed components for the low-altitude rockets built in the course'],
    'Arduino-Controlled Robotic Goalkeeper': ['3D-printed parts for the goalkeeper mechanism'],
    'AV Challenge': ['Designed and printed the vehicle’s chassis on my own 3D printer'],
  },
  'Composite 3D Printing (Onyx/Nylon)': {
    'Materials Science Research — Next Gen Scientist Program': [
      'Worked with Nylon and Onyx composite 3D-printed specimens to characterize their mechanical properties',
    ],
  },
  'MDF Fabrication & Prototyping': {
    'Arduino-Controlled Robotic Goalkeeper': ['Built the MDF enclosure and assembled the mechanism on aluminum profiles'],
  },
  'Fiberglass Composites': {
    'Experimental Rocketry Courses': ['Used fiberglass composites to manufacture the rocket bodies'],
  },
  'Claude & Claude Code (AI-Assisted Development)': {
    'Personal Portfolio Website': [
      'Built and maintain this site with Claude and Claude Code: React + Vite + Tailwind',
      'Media galleries, lightbox, SPA routing fix and GitHub Pages deployment',
      'Organizing photos/videos and keeping content consistent across pages',
    ],
  },
  'Prompt Engineering': {
    'Personal Portfolio Website': ['Wrote structured briefs with specs, constraints and checklists to drive multi-step changes to this site'],
  },
  'Building Claude Skills & Agent Workflows': {
    'Personal Portfolio Website': ['Reusable Claude workflows and briefs that Claude Code executes and verifies end to end'],
  },
  'Git & GitHub': {
    'Personal Portfolio Website': [
      'Version control for this site: commits, history and pushes to GitHub',
      'Automatic deployment to GitHub Pages through a GitHub Actions workflow',
    ],
  },
  'VS Code': {
    'Personal Portfolio Website': ['Main editor for this site’s React code, the dev server and the Git workflow'],
  },
  OpenRocket: {
    'Experimental Rocketry Courses': ['Designed and simulated the rockets’ flight models before building them'],
  },
  'Laser Cutting & 3D Printing': {
    'Experimental Rocketry Courses': ['3D-printed rocket components'],
    'Arduino-Controlled Robotic Goalkeeper': ['3D-printed parts for the mechanism'],
    'Personal Interests': ['My own 3D printer for prototypes and parts'],
    'Machining Courses — Tec Campus Querétaro': ['Laser cutting MDF on a CNC laser cutter'],
  },
  'Waterjet Cutting': {
    'Machining Courses — Tec Campus Querétaro': ['Operated a CNC waterjet cutter; cut metal parts and profiles'],
  },
  'Manual & CNC Lathe Operation': {
    'Machining Courses — Tec Campus Querétaro': [
      'Manual lathe: setup, facing and turning aluminum stock',
      'CNC lathe: running turning programs on an enclosed machine',
    ],
  },
  'Manual & CNC Milling': {
    'Machining Courses — Tec Campus Querétaro': [
      'Manual milling on a vertical mill',
      'CNC milling of aluminum parts, including a surfaced part with a machined pocket',
    ],
  },
};
