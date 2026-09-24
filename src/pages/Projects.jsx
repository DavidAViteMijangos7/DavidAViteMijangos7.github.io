import { useState } from 'react';
import { ChevronDown, ChevronUp, Bot, Satellite, Shield, Gamepad2 } from 'lucide-react';
import MediaGallery from '../components/MediaGallery';
import { media } from '../data/media';

const projects = [
  {
    id: 'ros2-embedded',
    title: 'ROS 2, STM32 & Arduino for Embedded Systems',
    subtitle: 'Basic / Intermediate training & extra classes Middleware',
    icon: Bot,
    technologies: ['ROS 2 Humble', 'Python', 'C++', 'Arduino / STM32'],
    description:
      'Basic ROS 2 training to interface embedded microcontrollers with a Linux host for diverse projects and student groups.',
    highlights: [
      'Trained in custom ROS 2 packages nodes in Python and C++',
      'Configured software with ROS 2, Arduino/STM32 for system integration on projects & student group projects',
    ],
  },
  {
    id: 'cubesat',
    title: 'CubeSat Project',
    subtitle: 'Tec de Monterrey & Kyutech University — ADCS & Structural Engineering',
    icon: Satellite,
    technologies: ['Kalman Filters', 'Magnetorquer Simulation', 'Fusion 360', 'MATLAB', 'Research'],
    description:
      'International collaboration for a low Earth orbit mission. Researched Kalman filter variants for ADCS, developed magnetorquer simulations, assembled the ADCS components & code structure, and led the structural CAD assembly team.',
    highlights: [
      'ADCS — Conducted research on Kalman filter variants for implementation, constructing the sensor & ADCS system to implement on the satellite',
      'ADCS — Developed simulation code for the satellite\'s magnetorquers, developed the schematics & connections for the sensor system with the STM32 microcontroller',
      'Structure — Leader in the structure subsystem, teaching Fusion 360, leading around 7 group members to make a CubeSat CAD.',
    ],
  },
  {
    id: 'exoskeleton',
    title: 'Passive Industrial Exoskeleton Prototype',
    subtitle: 'Mechanical CAD & Simulation Lead',
    icon: Shield,
    technologies: ['SolidWorks', 'Stress Simulation (FEA)', 'Ergonomics', 'Prototyping'],
    description:
      'Led 3D CAD modeling and FEA stress simulations in SolidWorks for an ergonomic industrial exoskeleton. Co-directed materials research and the physical prototyping phase.',
    media: media.exoskeleton,
    highlights: [
      'Led the 3D CAD modeling and assembly of the exoskeleton using SolidWorks',
      'Conducted comprehensive structural and load-bearing stress simulations (FEA)',
      'Co-directed materials research and physical prototype fabrication using wood and standard workshop tooling',
    ],
  },
  {
    id: 'robotic-goalkeeper',
    title: 'Arduino-Controlled Robotic Goalkeeper',
    subtitle: 'Mechatronics Integration Engineer — Academic Team Project',
    icon: Gamepad2,
    technologies: ['Arduino (C++)', 'Solenoids & Motors', 'Electronics Integration', 'Mechanical Assembly'],
    description:
      'Engineered a mechatronic goalkeeper system. Programmed an Arduino (C++) for lateral motor control and solenoid actuation, and assembled the physical prototype using MDF, aluminum profiles, and 3D-printed components.',
    media: media.goalkeeper,
    highlights: [
      'Arduino programming for joystick-controlled lateral motor movement with limit switches',
      'Solenoid actuator integration for rapid striking motion via joystick button',
      'MDF enclosure fabrication and aluminum profile mechanism assembly',
      'Contribution in: C++ coding, electronic wiring, and physical assembly',
    ],
  },
];

export default function Projects() {
  const [expanded, setExpanded] = useState(null);

  const toggle = (id) => setExpanded(expanded === id ? null : id);

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Header */}
      <div className="mb-12 fade-in-up">
        <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-3">
          Engineering{' '}
          <span className="text-gradient">Projects</span>
        </h1>
        <p className="text-stone-500 text-lg max-w-2xl">
          From autonomous robots to satellites, materials research, and exoskeletons — a selection of projects where I apply
          mechatronics engineering to solve real-world problems.
        </p>
      </div>

      {/* Project Grid */}
      <div className="grid md:grid-cols-2 gap-6">
        {projects.map((project, i) => {
          const Icon = project.icon;
          const isExpanded = expanded === project.id;
          return (
            <div
              key={project.id}
              className={`rounded-xl bg-white border border-stone-200 shadow-sm transition-all duration-300 hover:shadow-md fade-in-up stagger-${i + 1}`}
            >
              {/* Card header */}
              <div className="p-6 pb-4">
                <div className="flex items-start gap-3 mb-4">
                  <div className="p-2.5 rounded-xl bg-violet-50 text-violet-600 flex-shrink-0">
                    <Icon size={24} />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900">{project.title}</h3>
                    <p className="text-xs text-stone-500 font-medium">{project.subtitle}</p>
                  </div>
                </div>

                <p className="text-sm text-stone-600 leading-relaxed mb-4">{project.description}</p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 rounded-full text-xs font-medium border bg-violet-100 text-violet-800 border-violet-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Gallery — first 3 thumbnails always visible */}
                {project.media && (
                  <MediaGallery items={project.media} limit={3} aspect="4/3" className="mb-4" />
                )}

                {/* Expand button */}
                <button
                  onClick={() => toggle(project.id)}
                  className="flex items-center gap-1.5 text-sm text-stone-400 hover:text-violet-600 transition-colors duration-300"
                >
                  {isExpanded ? 'Less details' : 'More details'}
                  {isExpanded ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
                </button>
              </div>

              {/* Expandable highlights — grid-rows 0fr→1fr animates to the real content height, so nothing clips */}
              <div
                className={`grid transition-all duration-500 ease-out ${
                  isExpanded ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                }`}
              >
                <div className="overflow-hidden">
                  <div className="px-6 pb-6 pt-2 border-t border-stone-100">
                    <h4 className="text-xs uppercase tracking-wider text-stone-400 font-semibold mb-3">
                      Key Highlights
                    </h4>
                    <ul className="space-y-2">
                      {project.highlights.map((h, j) => (
                        <li key={j} className="flex items-start gap-2 text-sm text-stone-600">
                          <span className="w-1.5 h-1.5 rounded-full bg-violet-400 mt-1.5 flex-shrink-0" />
                          {h}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
