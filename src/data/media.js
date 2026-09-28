// Media manifest — every image/video lives in /public, so paths are served from the site root.
// Photos/ holds the untouched originals; these are the resized, web-ready copies.

export const media = {
  profile: { src: '/images/profile/david-portrait.jpg', alt: 'Portrait of David Andre Vite Mijangos' },
  goalkeeper: [
    { src: '/images/goalkeeper/goalkeeper-1-arduino-wiring.jpg', alt: 'Arduino Uno wired to joystick, stepper driver and motor' },
    { src: '/images/goalkeeper/goalkeeper-2-power-solenoid.jpg', alt: 'Power supply, solenoid and control breadboard' },
    { src: '/images/goalkeeper/goalkeeper-3-joystick-mechanism.jpg', alt: 'Joystick control mounted next to the goalkeeper mechanism' },
    { src: '/images/goalkeeper/goalkeeper-4-breadboard.jpg', alt: 'Breadboard prototype of the control circuit' },
  ],
  exoskeleton: [
    { src: '/images/exoskeleton/exo-3-backpack-assembly.png', alt: 'SolidWorks assembly — backpack mode' },
    { src: '/images/exoskeleton/exo-4-seated-assembly.png', alt: 'SolidWorks assembly — seated mode' },
    { src: '/images/exoskeleton/exo-1-seated-views.png', alt: 'Orthographic views — seated mode' },
    { src: '/images/exoskeleton/exo-2-backpack-views.png', alt: 'Orthographic views — backpack mode' },
    { src: '/images/exoskeleton/exo-5-fea-seated.png', alt: 'FEA — stress, displacement and strain (seated mode)' },
    { src: '/images/exoskeleton/exo-6-fea-backpack.png', alt: 'FEA — stress, displacement and strain (backpack mode)' },
    { src: '/images/exoskeleton/exo-7-mass-analysis.png', alt: 'Mass properties analysis — total 9.725 kg' },
  ],
  materials: [
    { src: '/images/materials/materials-1-test-specimens.jpg', alt: '3D-printed tensile test specimens (Nylon / Onyx)' },
    { src: '/images/materials/materials-2-zwickroell-ltm10.jpg', alt: 'ZwickRoell LTM 10 fatigue testing machine with specimen mounted' },
    { src: '/videos/materials/materials-test-1.mp4', alt: 'Mechanical test — video 1', type: 'video' },
    { src: '/videos/materials/materials-test-2.mp4', alt: 'Mechanical test — video 2', type: 'video' },
    { src: '/videos/materials/materials-test-3.mp4', alt: 'Mechanical test — video 3', type: 'video' },
  ],
  printing3d: [
    { src: '/images/3d-printing/printer-setup.jpg', alt: 'Personal 3D printing setup' },
  ],
  electrum: [
    { src: '/images/electrum/electrum-1-car-garage.jpg', alt: 'Escudería Electrum car #50 in the workshop' },
    { src: '/images/electrum/electrum-2-race-finish.jpg', alt: 'Car #50 taking the checkered flag' },
    { src: '/images/electrum/electrum-3-awards.jpg', alt: 'Electratón awards — 3rd place national and Monterrey race' },
  ],
  rocketry: [
    { src: '/images/rocketry/rocketry-1-rocket-field.jpg', alt: 'Low-altitude rocket ready for launch' },
    { src: '/images/rocketry/rocketry-2-hangar.jpg', alt: 'Aerospace hangar visit during the rocketry program' },
  ],
  swimming: [
    { src: '/images/swimming/swimming-1-butterfly.jpg', alt: 'Butterfly at a varsity competition' },
    { src: '/images/swimming/swimming-2-competition-pool.jpg', alt: 'Competition pool — varsity meet' },
  ],
  active: [
    { src: '/images/triathlon/triathlon-1-bike.jpg', alt: 'Triathlon — bike leg' },
    { src: '/images/triathlon/triathlon-2-run.jpg', alt: 'Triathlon — run leg' },
    { src: '/images/active/active-1-bouldering.jpg', alt: 'Bouldering session' },
  ],
  hobbies: [],
  culture: [],
  machining: {
    cnc: [
      { src: '/images/machining/cnc-lathe-team.jpg', alt: 'At the CNC lathe — machining course, Tec Campus Querétaro' },
      { src: '/images/machining/cnc-milled-aluminum-part.jpg', alt: 'CNC-milled aluminum part' },
      { src: '/images/machining/cnc-cut-parts-showcase.jpg', alt: 'CNC waterjet / laser cut parts' },
      { src: '/videos/machining/cnc-lathe-1.mp4', alt: 'CNC lathe — turning cycle', type: 'video' },
      { src: '/videos/machining/cnc-milling-1.mp4', alt: 'CNC milling — part in vise', type: 'video' },
      { src: '/videos/machining/cnc-machine-run.mp4', alt: 'CNC machine running a program', type: 'video' },
      { src: '/videos/machining/cnc-waterjet-cutting.mp4', alt: 'CNC waterjet cutting', type: 'video' },
      { src: '/videos/machining/cnc-laser-cutting.mp4', alt: 'CNC laser cutting MDF', type: 'video' },
    ],
    manual: [
      { src: '/videos/machining/manual-lathe-2.mp4', alt: 'Manual lathe — turning aluminum stock', type: 'video' },
      { src: '/videos/machining/manual-lathe-1.mp4', alt: 'Manual lathe — setup with instructor', type: 'video' },
      { src: '/videos/machining/manual-lathe-3.mp4', alt: 'Manual lathe — facing cut', type: 'video' },
      { src: '/videos/machining/manual-lathe-4.mp4', alt: 'Manual lathe — instructor demonstration', type: 'video' },
      { src: '/videos/machining/manual-lathe-5.mp4', alt: 'Manual lathe — carriage feed', type: 'video' },
      { src: '/videos/machining/manual-lathe-6.mp4', alt: 'Manual lathe — tool post and cut', type: 'video' },
      { src: '/videos/machining/manual-milling-1.mp4', alt: 'Manual milling machine', type: 'video' },
    ],
  },
  certificates: {
    cswaExam: '/certificates/cswa-exam-result.png',
  },
};
