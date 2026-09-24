// Media manifest — every image/video lives in /public, so paths are served from the site root.
// Photos/ holds the untouched originals; these are the resized, web-ready copies.

export const media = {
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
  active: [
    { src: '/images/active/active-1-bouldering.jpg', alt: 'Bouldering session' },
  ],
  hobbies: [],
  culture: [],
  certificates: {
    cswaExam: '/certificates/cswa-exam-result.png',
  },
};
