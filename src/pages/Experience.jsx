import { useState } from 'react';
import { CircuitBoard, Zap, Wrench, Rocket, Dumbbell, Microscope, ChevronDown, Activity, Music, Globe, ChevronRight } from 'lucide-react';
import MediaGallery from '../components/MediaGallery';
import { media } from '../data/media';

const experiences = [
  {
    id: 'materials-research',
    period: '2023 — 2024',
    title: 'Materials Science Research — Next Gen Scientist Program',
    subtitle: 'Undergraduate Researcher (Tecnológico de Monterrey)',
    icon: Microscope,
    description:
      'Collaborated with PhD researchers to analyze the mechanical properties of 3D-printed composites (Nylon and Onyx). Conducted structural evaluations using fatigue testing machines, 3D scanners, and tensile tests. Developed custom Python scripts for the automated control, tracking, and data management of test probes.',
    tags: ['Python', 'Mechanical Properties', 'Fatigue Testing', 'Tensile Testing', '3D Scanning'],
    media: media.materials,
    highlights: [
      'Collaborated with PhD researchers to analyze mechanical properties of Nylon and Onyx 3D-printed composites',
      'Conducted structural evaluations using fatigue testing machines, 3D scanners, and tensile tests',
      'Developed custom Python scripts for the automated control, tracking, and data management of test specimens',
    ],
  },
  {
    id: 'electrum',
    period: 'Feb 2025 — Dec 2025',
    title: 'Escudería Electrum',
    subtitle: 'Mechanical & Electrical Team Member — Electratón Championship',
    icon: Zap,
    description:
      'Contributed to the team\'s 1st place victory in the Monterrey race and a 3rd place national overall finish in the Electratón championship (around 15+ teams). Gained hands-on experience in mechanical assembly, structural troubleshooting, and rapid repairs. Assisted the electrical and telemetry divisions by working with battery systems, safety switches, and electric motor integration.',
    tags: ['Electratón', 'Electric Vehicle', 'Battery Systems', 'Mechanical Assembly', 'Telemetry'],
    media: media.electrum,
    highlights: [
      '🥇 1st place in the Monterrey Electratón race',
      '🥉 3rd place overall in the national Electratón championship',
      'Mechanical assembly, structural troubleshooting, and rapid race-day repairs',
      'Electrical support: battery systems, safety switches, and motor integration',
    ],
  },
  {
    id: 'fsae',
    period: 'Feb 2026 — Aug 2026',
    title: 'Formula SAE',
    subtitle: 'Electronics Division — PCB Designer',
    icon: CircuitBoard,
    description:
      'Designed printed circuit boards (PCBs) using KiCad, taking projects from initial schematics to fully routed board layouts prepared for manufacturing. Integrated logic components, including 74HC595 shift registers, ensuring all designs complied with strict competition technical rulebooks.',
    tags: ['KiCad', 'PCB Design', '74HC595', 'FSAE Regulations', 'Telemetry'],
    highlights: [
      'End-to-end PCB design: schematics to fully routed board layouts in KiCad',
      'Integration of 74HC595 shift registers and other logic components',
      'Full compliance with FSAE competition technical rulebooks',
    ],
  },
  {
    id: 'rocketry',
    period: '2024',
    title: 'Experimental Rocketry Courses',
    subtitle: 'AeroClúster de Querétaro',
    icon: Rocket,
    description:
      'Completed comprehensive training in rocketry physics. Designed and simulated flight models using OpenRocket software, and manufactured physical low-altitude rockets using 3D printing and fiberglass composite materials.',
    tags: ['Rocketry Physics', 'OpenRocket', '3D Printing', 'Fiberglass Composites', 'Flight Simulation'],
    media: media.rocketry,
    highlights: [
      'Comprehensive training in high-power rocketry physics and principles',
      'Flight model design and simulation using OpenRocket',
      'Rocket manufacturing with 3D printing and fiberglass composites',
    ],
  },
  {
    id: 'swimming',
    period: 'Aug 2024 — Dec 2025',
    title: 'Varsity Swimming Team',
    subtitle: 'High-Performance Student Athlete — Tec de Monterrey, Querétaro Campus',
    icon: Dumbbell,
    description:
      'Represented the university in state-level swimming competitions. Maintained a rigorous daily training schedule while balancing a highly demanding engineering academic workload, demonstrating exceptional discipline, resilience, and time management.',
    tags: ['Varsity Athletics', 'Swimming', 'Discipline', 'Time Management', 'State Competition'],
    media: media.swimming,
    highlights: [
      'Represented Tec de Monterrey in state-level swimming competitions',
      'Rigorous daily training schedule alongside demanding engineering coursework',
      'Demonstrated exceptional discipline, resilience, and time management',
    ],
  },
  {
    id: 'technical',
    period: '2020 — Present',
    title: 'Technical Experience & Leadership',
    subtitle: 'Blacksmith, Automator & Coach',
    icon: Wrench,
    description:
      'A diverse background combining hands-on technical skills in blacksmithing and automation applied to family businesses, with leadership and communication experience as a swimming coach and former member of Tec de Monterrey\'s competitive swim team.',
    tags: ['Blacksmithing', 'Automation', 'Leadership', 'Communication', 'Swimming'],
    highlights: [
      'Process automation in family businesses',
      'Blacksmithing: welding, cutting, and manufacturing',
      'Swimming coach — training new athletes',
      'Former Tec de Monterrey competitive swimming team member (Querétaro Campus)',
    ],
  },
];

// Beyond Engineering cards — photos come from media.js; an empty array hides the grid.
const beyond = [
  {
    title: 'Active Life',
    icon: Activity,
    text: 'Dedicated to high-performance fitness and endurance. My routine transitions from a strong background in competitive swimming into current triathlon training (swimming, cycling, running), weightlifting at the gym, bouldering, and active preparation for HYROX fitness racing.',
    items: media.active,
  },
  {
    title: 'Hobbies',
    icon: Music,
    text: 'Finding balance away from screens, CAD, and code through creative and mindful activities. My main downtime pursuits include reading, building LEGO sets, and playing the guitar.',
    items: media.hobbies,
  },
  {
    title: 'Culture',
    icon: Globe,
    text: 'Building a global perspective through travel, community volunteering, and ongoing German language studies. A key formative experience was completing a 2-year high school exchange program in the United States, which deeply shaped my adaptability and cross-cultural communication.',
    items: media.culture,
  },
];


export default function Experience() {
  const [beyondOpen, setBeyondOpen] = useState(false);

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Header */}
      <div className="mb-12 fade-in-up">
        <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-3">
          Experience &{' '}
          <span className="text-gradient">Student Organizations</span>
        </h1>
        <p className="text-stone-500 text-lg max-w-2xl">
          My academic, competitive, and professional journey — from Formula SAE to
          experimental rocketry and high-performance swimming.
        </p>
      </div>

      {/* Timeline */}
      <div className="relative">
        {/* Vertical line */}
        <div className="absolute left-6 md:left-8 top-0 bottom-0 w-px bg-gradient-to-b from-violet-400 via-violet-200 to-transparent" />

        <div className="space-y-8">
          {experiences.map((exp, i) => {
            const Icon = exp.icon;
            return (
              <div key={exp.id} className={`relative pl-16 md:pl-20 fade-in-up stagger-${Math.min(i + 1, 6)}`}>
                {/* Timeline dot */}
                <div className="absolute left-4 md:left-6 top-6 w-4 h-4 rounded-full bg-violet-500 border-4 border-stone-50 shadow-md z-10" />

                {/* Card */}
                <div className="rounded-xl border border-stone-200 bg-white shadow-sm p-6 transition-all duration-300 hover:shadow-md hover:scale-[1.01]">
                  {/* Period badge */}
                  <div className="flex flex-wrap items-center gap-3 mb-4">
                    <span className="text-xs font-mono font-medium text-stone-500 bg-stone-100 px-3 py-1 rounded-full">
                      {exp.period}
                    </span>
                  </div>

                  {/* Title */}
                  <div className="flex items-start gap-3 mb-3">
                    <div className="p-2 rounded-xl bg-violet-50 text-violet-600 flex-shrink-0">
                      <Icon size={22} />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900">{exp.title}</h3>
                      <p className="text-sm text-stone-500 font-medium">{exp.subtitle}</p>
                    </div>
                  </div>

                  <p className="text-sm text-stone-600 leading-relaxed mb-4">{exp.description}</p>

                  {exp.media && <MediaGallery items={exp.media} limit={3} aspect="4/3" className="mb-4" />}

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {exp.tags.map((tag) => (
                      <span key={tag} className="px-2.5 py-1 rounded-full text-xs font-medium border bg-violet-100 text-violet-800 border-violet-200">
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Highlights */}
                  <div className="border-t border-stone-100 pt-4">
                    <ul className="space-y-2">
                      {exp.highlights.map((h, j) => (
                        <li key={j} className="flex items-start gap-2 text-sm text-stone-600">
                          <span className="w-1.5 h-1.5 rounded-full bg-violet-400 mt-1.5 flex-shrink-0" />
                          {h}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* ── Beyond Engineering — single expandable card ── */}
      <div className="mt-20 fade-in-up">
        <div
          className={`rounded-2xl border transition-all duration-300 ${
            beyondOpen
              ? 'border-violet-300 bg-white shadow-lg'
              : 'border-stone-200 bg-white hover:border-violet-200 hover:shadow-sm'
          }`}
        >
          {/* Toggle header */}
          <button
            onClick={() => setBeyondOpen((v) => !v)}
            className="w-full flex items-center justify-between px-6 py-5 cursor-pointer group select-none bg-transparent border-0 outline-none text-left"
          >
            <div className="flex items-center gap-4">
              <div
                className={`p-3 rounded-xl transition-all duration-300 ${
                  beyondOpen
                    ? 'bg-violet-100 text-violet-600 scale-110'
                    : 'bg-violet-50 text-violet-500 group-hover:scale-110'
                }`}
              >
                <ChevronRight size={22} className={`transition-transform duration-300 ${beyondOpen ? 'rotate-90 text-violet-600' : ''}`} />
              </div>
              <div>
                <h2 className="text-xl font-extrabold text-gray-900">
                  Beyond{' '}
                  <span className="text-gradient">Engineering</span>
                </h2>
                <p className="text-xs text-stone-400 font-medium mt-0.5">
                  Active Life · Hobbies · Culture
                </p>
              </div>
            </div>
            <div
              className={`p-2 rounded-lg transition-all duration-300 ${
                beyondOpen ? 'bg-violet-100' : 'group-hover:bg-stone-100'
              }`}
            >
              <ChevronDown
                size={20}
                className={`transition-transform duration-300 ${
                  beyondOpen ? 'rotate-180 text-violet-600' : 'text-stone-400'
                }`}
              />
            </div>
          </button>

          {/* Expandable body — grid-rows 0fr→1fr animates to the real content height, so nothing clips */}
          <div
            className={`grid transition-all duration-500 ease-out ${
              beyondOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
            }`}
          >
            <div className="overflow-hidden">
              <div className="border-t border-violet-100 px-6 pb-7 pt-6">
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {beyond.map((section) => {
                    const Icon = section.icon;
                    return (
                      <div
                        key={section.title}
                        className="rounded-xl bg-violet-50 border border-violet-100 p-5 flex flex-col gap-3"
                      >
                        <div className="flex items-center gap-2">
                          <Icon size={18} className="text-violet-600" />
                          <span className="text-sm font-bold text-violet-800 uppercase tracking-wide">{section.title}</span>
                        </div>
                        <p className="text-sm text-stone-600 leading-relaxed">{section.text}</p>
                        {/* Renders nothing while the manifest array is empty */}
                        <MediaGallery items={section.items} columns={2} className="mt-1" />
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
