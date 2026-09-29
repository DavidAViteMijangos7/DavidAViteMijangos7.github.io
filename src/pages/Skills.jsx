import { useState } from 'react';
import { ChevronDown, Code2, Cpu, FlaskConical, Cog, Terminal, Wrench, Award, Image, Video, Sparkles } from 'lucide-react';
import Lightbox from '../components/Lightbox';
import { media } from '../data/media';

const categories = [
  {
    id: 'programming',
    name: 'Programming & Software',
    icon: Code2,
    skills: [
      {
        name: 'Python',
        level: 2,
        appliedIn: ['Materials Science Research — Next Gen Scientist Program'],
      },
      {
        name: 'C++',
        level: 2,
        appliedIn: ['Arduino-Controlled Robotic Goalkeeper', 'AV Challenge', 'URC Mars Rover'],
        certifications: [
          {
            name: 'C for Everyone: Programming Fundamentals (UC Santa Cruz / Coursera)',
            imagePath: '/certificates/c-programming.png',
          },
        ],
      },
      {
        name: 'ROS 2',
        level: 1,
        appliedIn: ['URC Mars Rover', 'Personal Interests'],
      },
      {
        name: 'R / Data Science',
        level: 1,
        certifications: [
          {
            name: 'Introducción a Data Science: Programación Estadística con R (UNAM / Coursera)',
            imagePath: '/certificates/r-data.png',
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
        appliedIn: ['CubeSat Project', 'Classes'],
        certifications: [
          {
            name: 'MATLAB Programming Series: Functions, Constructs & Data (MathWorks)',
          },
        ],
      },
      { name: 'Stress Simulation / FEA (SolidWorks)', level: 3, appliedIn: ['Passive Industrial Exoskeleton Prototype', 'CubeSat Project'] },
      { name: 'Microcontrollers & Actuators (Arduino, Solenoids, Motor Drivers)', level: 3, appliedIn: ['Arduino-Controlled Robotic Goalkeeper'] },
      { name: 'Magnetorquer Simulation', level: 2, appliedIn: ['CubeSat Project'] },
      { name: 'Mechanical Testing (Tensile & Fatigue)', level: 3, appliedIn: ['Materials Science Research — Next Gen Scientist Program'] },
      { name: 'Kalman Filters', level: 2, appliedIn: ['CubeSat Project'] }
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
          { label: 'View FEA Stress Maps', items: media.exoskeleton.filter((m) => m.src.includes('-fea-')), icon: Image },
        ],
        certifications: [
          {
            name: 'CSWA - SOLIDWORKS Design Associate (Dassault Systèmes)',
            note: 'Exam score 240/240 · (CSWP Certification in progress)',
            images: [
              { src: '/certificates/cswa.jpg', alt: 'CSWA - SOLIDWORKS Design Associate certificate' },
              { src: media.certificates.cswaExam, alt: 'CSWA exam result — 240/240' },
            ],
          },
        ],
      },
      {
        name: 'Fusion 360',
        level: 3,
        appliedIn: ['CubeSat Project', 'Rover Project'],
        evidence: [
          { label: 'View CubeSat CAD', items: media.cubesat, icon: Image },
        ],
      },
      {
        name: 'KiCad',
        level: 2,
        appliedIn: ['Formula SAE'],
      },
      {
        name: '3D Printing',
        level: 2,
        appliedIn: ['Experimental Rocketry Courses', 'Arduino-Controlled Robotic Goalkeeper', 'AV Challenge'],
        evidence: [
          { label: 'View Physical Prototypes & Hardware', items: media.printing3d, icon: Image },
        ],
      },
      { name: 'Composite 3D Printing (Onyx/Nylon)', level: 3, appliedIn: ['Materials Science Research — Next Gen Scientist Program'] },
      {
        name: 'MDF Fabrication & Prototyping',
        level: 2,
        appliedIn: ['Arduino-Controlled Robotic Goalkeeper'],
      },
      { name: 'Fiberglass Composites', level: 2, appliedIn: ['Experimental Rocketry Courses'] },
    ],
  },
  {
    id: 'ai',
    name: 'AI & Automation',
    icon: Sparkles,
    skills: [
      {
        name: 'Claude & Claude Code (AI-Assisted Development)',
        level: 2,
        appliedIn: ['Personal Portfolio Website', 'CubeSat Project'],
      },
      {
        name: 'Prompt Engineering',
        level: 2,
        appliedIn: ['Personal Portfolio Website'],
      },
      {
        name: 'Building Claude Skills & Agent Workflows',
        level: 2,
        appliedIn: ['Personal Portfolio Website'],
      },
    ],
  },
  {
    id: 'tools',
    name: 'Tools & OS',
    icon: Terminal,
    skills: [
      { name: 'Linux / Ubuntu', level: 1, appliedIn: ['URC Mars Rover'] },
      { name: 'Git & GitHub', level: 2, appliedIn: ['Personal Portfolio Website', 'Formula SAE'] },
      { name: 'VS Code', level: 2, appliedIn: ['Personal Portfolio Website', 'CubeSat Project', 'URC Mars Rover', 'AV Challenge'] },
      { name: 'OpenRocket', level: 2, appliedIn: ['Experimental Rocketry Courses'] },
      {
        name: 'Excel',
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
      {
        name: 'Laser Cutting & 3D Printing',
        level: 3,
        appliedIn: ['Experimental Rocketry Courses', 'Arduino-Controlled Robotic Goalkeeper', 'Personal Interests', 'Machining Courses — Tec Campus Querétaro'],
        evidence: [
          { label: 'Watch Laser Cutting', items: media.machining.cnc.filter((m) => m.src.includes('laser')), icon: Video },
        ],
      },
      {
        name: 'Waterjet Cutting',
        level: 1,
        appliedIn: ['Escudería Electrum', 'Machining Courses — Tec Campus Querétaro'],
        evidence: [
          { label: 'Watch Waterjet Cutting', items: media.machining.cnc.filter((m) => m.src.includes('waterjet') || m.src.includes('cut-parts')), icon: Video },
        ],
      },
      {
        name: 'Manual & CNC Lathe Operation',
        level: 2,
        appliedIn: ['Machining Courses — Tec Campus Querétaro', 'Technical Experience & Leadership'],
        evidence: [
          { label: 'CNC Lathe', items: media.machining.cnc.filter((m) => m.src.includes('lathe')), icon: Video },
          { label: 'Manual Lathe', items: media.machining.manual.filter((m) => m.src.includes('lathe')), icon: Video },
        ],
      },
      {
        name: 'Manual & CNC Milling',
        level: 2,
        appliedIn: ['Machining Courses — Tec Campus Querétaro', 'Technical Experience & Leadership'],
        evidence: [
          { label: 'CNC Milling', items: media.machining.cnc.filter((m) => m.src.includes('mill') || m.src.includes('machine-run')), icon: Video },
          { label: 'Manual Milling', items: media.machining.manual.filter((m) => m.src.includes('milling')), icon: Video },
        ],
      },
    ],
  },
];

// A cert shows either its own image list or its single imagePath.
const certItems = (cert) => cert.images ?? (cert.imagePath ? [{ src: cert.imagePath, alt: cert.name }] : []);

export default function Skills() {
  const [openCategory, setOpenCategory] = useState(null);
  const [openSkill, setOpenSkill] = useState(null);
  const [viewer, setViewer] = useState(null); // { items, index } — shared by certs + evidence

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
              {/* grid-rows 0fr→1fr animates to the real content height, so nothing clips */}
              <div
                className={`grid transition-all duration-500 ease-out ${
                  isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                }`}
              >
                <div className="overflow-hidden">
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
                            className={`grid transition-all duration-300 ease-in-out ${
                              isSkillOpen ? 'mt-4 grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                            }`}
                          >
                            <div className="overflow-hidden">
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
                                      return (
                                        <button
                                          key={j}
                                          onClick={(e) => {
                                            e.stopPropagation();
                                            setViewer({ items: ev.items, index: 0 });
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
                                    {skill.certifications.map((cert, j) => {
                                      const items = certItems(cert);
                                      return (
                                        <div
                                          key={j}
                                          onClick={(e) => {
                                            if (items.length) {
                                              e.stopPropagation();
                                              setViewer({ items, index: 0 });
                                            }
                                          }}
                                          className={`flex items-start gap-1.5 px-2.5 py-1.5 rounded-lg text-[11px] font-medium border bg-stone-50 border-stone-200 ${
                                            items.length
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
                                            {items.length > 0 && (
                                              <span className="text-[10px] text-violet-500 font-normal mt-1">
                                                Click to view certificate{items.length > 1 ? `s (${items.length})` : ''} ↗
                                              </span>
                                            )}
                                          </div>
                                        </div>
                                      );
                                    })}
                                  </div>
                                </div>
                              )}
                            </div>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
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
              Skills are grouped into six domains. Click on any category to expand it,
              then click on individual skill cards to see proficiency levels, applied projects,
              evidence (photos and renders), and verified credentials.
            </p>
          </div>
        </div>
      </div>

      <Lightbox
        items={viewer?.items ?? []}
        index={viewer?.index ?? null}
        onClose={() => setViewer(null)}
        onIndexChange={(index) => setViewer((v) => ({ ...v, index }))}
      />
    </div>
  );
}
