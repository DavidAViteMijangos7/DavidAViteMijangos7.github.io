import { useState } from 'react';
import { ChevronDown, Code2, Cpu, FlaskConical, Cog, Terminal, Wrench, Award, X, Github, Image, FileCode } from 'lucide-react';

const categories = [
  {
    id: 'programming',
    name: 'Programming & Software',
    icon: Code2,
    skills: [
      {
        name: 'Python',
        level: 2,
        appliedIn: ['Neuron AV', 'Materials Science Research — Next Gen Scientist Program'],
        evidence: [
          { label: 'GitHub Repo', type: 'url', payload: 'https://github.com/placeholder', icon: Github },
        ],
      },
      {
        name: 'C++',
        level: 3,
        appliedIn: ['Arduino-Controlled Robotic Goalkeeper', 'Autonomous Precision'],
        evidence: [
          { label: 'GitHub Repo', type: 'url', payload: 'https://github.com/placeholder', icon: Github },
        ],
        certifications: [
          {
            name: 'C for Everyone: Programming Fundamentals (UC Santa Cruz / Coursera)',
            imagePath: '/certificates/c-programming.jpg',
          },
        ],
      },
      {
        name: 'ROS 2',
        level: 1,
        appliedIn: ['Neuron AV'],
        evidence: [
          { label: 'GitHub Repo', type: 'url', payload: 'https://github.com/placeholder', icon: Github },
        ],
      },
      {
        name: 'R / Data Science',
        level: 1,
        certifications: [
          {
            name: 'Introducción a Data Science: Programación Estadística con R (UNAM / Coursera)',
            imagePath: '/certificates/r-data.jpg',
          },
        ],
      },
    ],
  },
  {
    id: 'engineering',
    name: 'Engineering & Control',
    icon: FlaskConical,
    skills: [
      {
        name: 'MATLAB',
        level: 2,
        appliedIn: ['CubeSat Project'],
        certifications: [
          {
            name: 'MATLAB Programming Series: Functions, Constructs & Data (MathWorks)',
            imagePath: '/certificates/matlab.jpg',
          },
        ],
      },
      { name: 'Kalman Filters', level: 2, appliedIn: ['CubeSat Project'] },
      { name: 'Stress Simulation / FEA (SolidWorks)', level: 3, appliedIn: ['Passive Industrial Exoskeleton Prototype'] },
      { name: 'Microcontrollers & Actuators (Arduino, Solenoids, Motor Drivers)', level: 3, appliedIn: ['Arduino-Controlled Robotic Goalkeeper'] },
      { name: 'Magnetorquer Simulation', level: 2, appliedIn: ['CubeSat Project'] },
      { name: 'Mechanical Testing (Tensile & Fatigue)', level: 3, appliedIn: ['Materials Science Research — Next Gen Scientist Program'] },
    ],
  },
  {
    id: 'cad',
    name: 'CAD & Manufacturing',
    icon: Cog,
    skills: [
      {
        name: 'SolidWorks CSWA',
        level: 3,
        appliedIn: ['Passive Industrial Exoskeleton Prototype'],
        evidence: [
          { label: 'View FEA Stress Maps', type: 'modal', payload: '/images/placeholder.jpg', icon: Image },
        ],
        certifications: [
          {
            name: 'CSWA - SOLIDWORKS Design Associate (Dassault Systèmes)',
            note: '(CSWP Certification in progress)',
            imagePath: '/certificates/cswa.jpg',
          },
        ],
      },
      {
        name: 'Fusion 360',
        level: 3,
        appliedIn: ['CubeSat Project'],
        evidence: [
          { label: 'View Assembly Renders', type: 'modal', payload: '/images/placeholder.jpg', icon: Image },
        ],
      },
      {
        name: 'KiCad',
        level: 2,
        appliedIn: ['Formula SAE'],
        evidence: [
          { label: 'View Board Layout', type: 'modal', payload: '/images/placeholder.jpg', icon: FileCode },
        ],
      },
      {
        name: '3D Printing',
        level: 2,
        appliedIn: ['Experimental Rocketry Courses', 'Arduino-Controlled Robotic Goalkeeper'],
        evidence: [
          { label: 'View Physical Prototypes & Hardware', type: 'modal', payload: '/images/placeholder.jpg', icon: Image },
        ],
      },
      { name: 'Composite 3D Printing (Onyx/Nylon)', level: 3, appliedIn: ['Materials Science Research — Next Gen Scientist Program'] },
      {
        name: 'MDF Fabrication & Prototyping',
        level: 2,
        appliedIn: ['Arduino-Controlled Robotic Goalkeeper'],
        evidence: [
          { label: 'View Physical Prototypes & Hardware', type: 'modal', payload: '/images/placeholder.jpg', icon: Image },
        ],
      },
      { name: 'Fiberglass Composites', level: 2, appliedIn: ['Experimental Rocketry Courses'] },
    ],
  },
  {
    id: 'tools',
    name: 'Tools & OS',
    icon: Terminal,
    skills: [
      { name: 'Linux / Ubuntu', level: 3, appliedIn: ['Neuron AV'] },
      { name: 'Git & GitHub', level: 2, appliedIn: ['Neuron AV', 'Formula SAE'] },
      { name: 'OpenRocket', level: 3, appliedIn: ['Experimental Rocketry Courses'] },
      {
        name: 'Advanced Excel',
        level: 3,
        certifications: [
          {
            name: 'Excel aplicado a los negocios - Nivel Avanzado (Universidad Austral / Coursera)',
            imagePath: '/certificates/excel.jpg',
          },
        ],
      },
    ],
  },
  {
    id: 'workshop',
    name: 'Workshop & Machining',
    icon: Wrench,
    skills: [
      { name: 'Laser Cutting & 3D Printing', level: 3, appliedIn: ['Experimental Rocketry Courses', 'Arduino-Controlled Robotic Goalkeeper'] },
      { name: 'Waterjet Cutting', level: 2, appliedIn: ['Escudería Electrum'] },
      { name: 'Manual & CNC Lathe Operation', level: 2, appliedIn: ['Technical Experience & Leadership'] },
      { name: 'Manual & CNC Milling', level: 2, appliedIn: ['Technical Experience & Leadership'] },
    ],
  },
];

export default function Skills() {
  const [openCategory, setOpenCategory] = useState(null);
  const [openSkill, setOpenSkill] = useState(null);
  const [modalItem, setModalItem] = useState(null); // { payload, label } — shared by certs + evidence

  const toggleCategory = (id) => {
    setOpenCategory(openCategory === id ? null : id);
    setOpenSkill(null);
  };

  const toggleSkill = (skillName, e) => {
    e.stopPropagation();
    setOpenSkill(openSkill === skillName ? null : skillName);
  };

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Header */}
      <div className="mb-12 fade-in-up">
        <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-3">
          Skills{' '}
          <span className="text-gradient">Matrix</span>
        </h1>
        <p className="text-stone-500 text-lg max-w-2xl">
          Technical proficiencies organized by domain — expand a category to view the skills,
          and select any skill card to see proficiency details and where it has been applied.
        </p>
      </div>

      {/* Accordion Categories */}
      <div className="space-y-4">
        {categories.map((cat, i) => {
          const Icon = cat.icon;
          const isOpen = openCategory === cat.id;

          return (
            <div
              key={cat.id}
              className={`rounded-xl border transition-all duration-300 fade-in-up stagger-${i + 1} ${
                isOpen
                  ? 'border-violet-300 bg-violet-50/50 shadow-md'
                  : 'border-stone-200 bg-white hover:shadow-sm'
              }`}
            >
              {/* Category header button */}
              <button
                onClick={() => toggleCategory(cat.id)}
                className="w-full flex items-center justify-between p-5 sm:p-6 cursor-pointer group select-none bg-transparent border-0 outline-none"
              >
                <div className="flex items-center gap-4">
                  <div className={`p-2.5 rounded-xl bg-violet-50 text-violet-600 transition-transform duration-300 ${isOpen ? 'scale-110' : 'group-hover:scale-110'}`}>
                    <Icon size={22} />
                  </div>
                  <div className="text-left">
                    <h3 className="text-lg font-bold text-gray-900">{cat.name}</h3>
                    <p className="text-xs text-stone-400 font-medium">
                      {cat.skills.length} skill{cat.skills.length !== 1 ? 's' : ''}
                    </p>
                  </div>
                </div>
                <div className={`p-2 rounded-lg transition-all duration-300 ${isOpen ? 'bg-violet-100' : 'group-hover:bg-stone-100'}`}>
                  <ChevronDown
                    size={20}
                    className={`text-violet-500 transition-transform duration-300 ${isOpen ? 'rotate-180' : 'text-stone-400'}`}
                  />
                </div>
              </button>

              {/* Expandable skill grid */}
              <div
                className={`overflow-hidden transition-all duration-500 ease-out ${
                  isOpen ? 'max-h-[2000px] opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="px-5 sm:px-6 pb-6 pt-1 border-t border-violet-100">
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-6">
                    {cat.skills.map((skill) => {
                      const isSkillOpen = openSkill === skill.name;
                      return (
                        <div
                          key={skill.name}
                          onClick={(e) => toggleSkill(skill.name, e)}
                          className={`group/skill rounded-xl border p-4 transition-all duration-300 cursor-pointer select-none ${
                            isSkillOpen
                              ? 'border-violet-300 bg-violet-50 shadow-md'
                              : 'border-stone-200 bg-white hover:border-violet-200 hover:shadow-sm'
                          }`}
                        >
                          <div className="flex items-center justify-between">
                            <span className="text-sm font-semibold text-gray-800 group-hover/skill:text-gray-900 transition-colors">
                              {skill.name}
                            </span>
                            <ChevronDown
                              size={16}
                              className={`transition-transform duration-300 ${
                                isSkillOpen
                                  ? 'rotate-180 text-violet-600'
                                  : 'text-stone-400 group-hover/skill:text-stone-500'
                              }`}
                            />
                          </div>

                          {/* Expanded skill details */}
                          <div
                            className={`overflow-hidden transition-all duration-300 ease-in-out ${
                              isSkillOpen ? 'mt-4 max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
                            }`}
                          >
                            <div className="space-y-4 pt-3 border-t border-violet-100">

                              {/* Level bar */}
                              <div className="flex items-center justify-between">
                                <span className="text-xs font-medium text-stone-500">Level</span>
                                <div className="flex items-center gap-2">
                                  <span className="text-xs font-bold text-violet-700">
                                    {skill.level === 3 ? 'Advanced' : skill.level === 2 ? 'Medium' : 'Beginner'}
                                  </span>
                                  <div className="flex gap-1">
                                    {[1, 2, 3].map((step) => (
                                      <div
                                        key={step}
                                        className={`w-4 h-1.5 rounded-sm transition-all duration-300 ${
                                          step <= skill.level
                                            ? 'bg-gradient-to-r from-violet-600 to-violet-400'
                                            : 'bg-stone-200'
                                        }`}
                                      />
                                    ))}
                                  </div>
                                </div>
                              </div>

                              {/* Applied In */}
                              {skill.appliedIn && skill.appliedIn.length > 0 && (
                                <div className="space-y-2">
                                  <span className="text-xs font-medium text-stone-500 block">Applied In:</span>
                                  <div className="flex flex-wrap gap-1.5">
                                    {skill.appliedIn.map((proj) => (
                                      <span
                                        key={proj}
                                        className="px-2 py-0.5 rounded-md text-[10px] font-medium border bg-violet-100 text-violet-800 border-violet-200 hover:bg-violet-200 transition-colors"
                                      >
                                        {proj}
                                      </span>
                                    ))}
                                  </div>
                                </div>
                              )}

                              {/* Evidence buttons */}
                              {skill.evidence && skill.evidence.length > 0 && (
                                <div className="space-y-2">
                                  <span className="text-xs font-medium text-stone-500 block">Evidence:</span>
                                  <div className="flex flex-wrap gap-1.5">
                                    {skill.evidence.map((ev, j) => {
                                      const EvidenceIcon = ev.icon;
                                      if (ev.type === 'url') {
                                        return (
                                          <a
                                            key={j}
                                            href={ev.payload}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            onClick={(e) => e.stopPropagation()}
                                            className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-[11px] font-medium border border-violet-200 text-violet-700 hover:bg-violet-50 transition-colors duration-200"
                                          >
                                            <EvidenceIcon size={11} />
                                            {ev.label}
                                          </a>
                                        );
                                      }
                                      return (
                                        <button
                                          key={j}
                                          onClick={(e) => {
                                            e.stopPropagation();
                                            setModalItem({ payload: ev.payload, label: ev.label });
                                          }}
                                          className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-[11px] font-medium border border-violet-200 text-violet-700 hover:bg-violet-50 transition-colors duration-200"
                                        >
                                          <EvidenceIcon size={11} />
                                          {ev.label}
                                        </button>
                                      );
                                    })}
                                  </div>
                                </div>
                              )}

                              {/* Verified Credentials */}
                              {skill.certifications && skill.certifications.length > 0 && (
                                <div className="space-y-2">
                                  <span className="text-xs font-medium text-stone-500 block">Verified Credentials:</span>
                                  <div className="space-y-1.5">
                                    {skill.certifications.map((cert, j) => (
                                      <div
                                        key={j}
                                        onClick={(e) => {
                                          if (cert.imagePath) {
                                            e.stopPropagation();
                                            setModalItem({ payload: cert.imagePath, label: cert.name });
                                          }
                                        }}
                                        className={`flex items-start gap-1.5 px-2.5 py-1.5 rounded-lg text-[11px] font-medium border bg-stone-50 border-stone-200 ${
                                          cert.imagePath
                                            ? 'cursor-pointer hover:border-violet-300 hover:bg-violet-50 transition-colors duration-200'
                                            : ''
                                        }`}
                                      >
                                        <Award size={14} className="flex-shrink-0 mt-0.5 text-violet-500" />
                                        <div className="flex flex-col flex-1">
                                          <span className="text-gray-700 leading-snug">{cert.name}</span>
                                          {cert.note && (
                                            <span className="text-[10px] text-stone-400 font-normal italic mt-0.5">
                                              {cert.note}
                                            </span>
                                          )}
                                          {cert.imagePath && (
                                            <span className="text-[10px] text-violet-500 font-normal mt-1">
                                              Click to view certificate ↗
                                            </span>
                                          )}
                                        </div>
                                      </div>
                                    ))}
                                  </div>
                                </div>
                              )}
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Summary legend */}
      <div className="mt-12 p-6 rounded-xl bg-violet-50 border border-violet-200 fade-in-up">
        <div className="flex items-start gap-3">
          <Cpu size={20} className="text-violet-600 mt-0.5 flex-shrink-0" />
          <div>
            <h3 className="text-sm font-semibold text-gray-900 mb-1">How to read this matrix?</h3>
            <p className="text-sm text-stone-500 leading-relaxed">
              Skills are grouped into five domains. Click on any category to expand it,
              then click on individual skill cards to see proficiency levels, applied projects,
              evidence links (GitHub repos or visual renders), and verified credentials.
            </p>
          </div>
        </div>
      </div>

      {/* Shared Image Modal — used by both certificates and evidence */}
      {modalItem && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
          onClick={() => setModalItem(null)}
        >
          <div
            className="relative max-w-3xl w-full bg-white rounded-2xl shadow-2xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setModalItem(null)}
              aria-label="Close modal"
              className="absolute top-3 right-3 z-10 p-1.5 rounded-full bg-stone-100 border border-stone-200 text-stone-500 hover:text-violet-700 hover:border-violet-300 hover:bg-violet-50 transition-all duration-200 shadow-sm"
            >
              <X size={18} />
            </button>
            <div className="px-6 pt-5 pb-3">
              <p className="text-sm text-gray-700 font-medium">{modalItem.label}</p>
            </div>
            <div className="px-6 pb-6">
              <img
                src={modalItem.payload}
                alt={modalItem.label}
                className="w-full max-h-[75vh] object-contain rounded-lg border border-stone-200 shadow-sm"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
