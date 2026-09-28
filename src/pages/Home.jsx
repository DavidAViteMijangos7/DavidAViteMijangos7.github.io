import { Download, GraduationCap, Waves, Globe, ChevronRight, Rocket, Bot, Satellite, Cpu, Mail, Linkedin, Github } from 'lucide-react';
import { Link } from 'react-router-dom';
import { media } from '../data/media';

// Set to '/cv_david_vite.pdf' once that file exists in public/ — the button stays hidden until then.
const CV_URL = null;

export default function Home() {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Hero Section */}
      <section className="min-h-[80vh] flex flex-col justify-center py-12 md:py-20">
        <div className="grid md:grid-cols-5 gap-10 items-center">
          {/* Text content */}
          <div className="md:col-span-3 space-y-6">
            {/* Greeting badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-violet-100 border border-violet-200 text-violet-700 text-xs font-medium tracking-wider uppercase fade-in-up">
              <span className="w-2 h-2 rounded-full bg-violet-500 animate-pulse" />
              Open to Collaborate
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight fade-in-up stagger-1">
              <span className="text-gray-900">David Andre</span>
              <br />
              <span className="text-gradient">Vite Mijangos</span>
            </h1>

            <p className="text-lg sm:text-xl text-stone-500 font-medium leading-relaxed fade-in-up stagger-2">
              Mechatronics Engineering Student
              <span className="text-stone-300"> | </span>
              <span className="text-violet-600">Hardware & Software Developer</span>
            </p>

            <p className="text-base text-stone-600 leading-relaxed max-w-xl fade-in-up stagger-3">
              I am a Mechatronics Engineering student at{' '}
              <span className="text-gray-900 font-medium">Tecnológico de Monterrey</span>{' '}
              (Monterrey Campus), passionate about robotics, autonomous vehicles, and aerospace technology.
              I balance my studies with research, external engineering projects, and my personal life. What I'm
              most proud of is my creativity and the curiosity that drives me to learn everything about my projects.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 pt-2 fade-in-up stagger-4">
              {CV_URL && (
                <a
                  href={CV_URL}
                  download
                  className="group inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-violet-600 text-white font-semibold text-sm shadow-md hover:bg-violet-700 hover:shadow-lg hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 pulse-ring"
                >
                  <Download size={18} className="group-hover:animate-bounce" />
                  Download CV
                </a>
              )}
              <Link
                to="/projects"
                className={`group inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm transition-all duration-300 ${
                  CV_URL
                    ? 'bg-white border border-stone-300 text-stone-700 hover:bg-violet-50 hover:border-violet-300 hover:text-violet-700 shadow-sm'
                    : 'bg-violet-600 text-white shadow-md hover:bg-violet-700 hover:shadow-lg hover:scale-[1.02] active:scale-[0.98] pulse-ring'
                }`}
              >
                View Projects
                <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            {/* Contact Links */}
            <div className="flex items-center gap-5 pt-1 fade-in-up stagger-4">
              <a
                href="mailto:david.a.vite.mijangos@gmail.com"
                aria-label="Send Email"
                className="group flex items-center gap-2 text-stone-500 hover:text-violet-600 transition-colors duration-300"
              >
                <span className="p-2 rounded-lg bg-stone-100 border border-stone-200 group-hover:border-violet-300 group-hover:bg-violet-50 transition-all duration-300">
                  <Mail size={18} />
                </span>
                <span className="text-sm font-medium hidden sm:inline">Email</span>
              </a>
              <a
                href="https://www.linkedin.com/in/david-vite-mijangos-119413378"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn Profile"
                className="group flex items-center gap-2 text-stone-500 hover:text-violet-600 transition-colors duration-300"
              >
                <span className="p-2 rounded-lg bg-stone-100 border border-stone-200 group-hover:border-violet-300 group-hover:bg-violet-50 transition-all duration-300">
                  <Linkedin size={18} />
                </span>
                <span className="text-sm font-medium hidden sm:inline">LinkedIn</span>
              </a>
              <a
                href="https://github.com/DavidAViteMijangos7"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub Profile"
                className="group flex items-center gap-2 text-stone-500 hover:text-violet-600 transition-colors duration-300"
              >
                <span className="p-2 rounded-lg bg-stone-100 border border-stone-200 group-hover:border-violet-300 group-hover:bg-violet-50 transition-all duration-300">
                  <Github size={18} />
                </span>
                <span className="text-sm font-medium hidden sm:inline">GitHub</span>
              </a>
            </div>
          </div>

          {/* Profile photo */}
          <div className="md:col-span-2 flex justify-center fade-in-up stagger-5">
            <div className="relative w-60 sm:w-72">
              {/* Offset accent frame */}
              <div className="absolute inset-0 translate-x-3 translate-y-3 rounded-3xl border-2 border-violet-300" />
              {/* Soft glow */}
              <div className="absolute -inset-6 rounded-full bg-violet-200/40 blur-3xl -z-10" />
              <img
                src={media.profile.src}
                alt={media.profile.alt}
                width="800"
                height="1000"
                fetchPriority="high"
                className="relative w-full aspect-[4/5] object-cover object-top rounded-3xl border border-stone-200 shadow-xl bg-stone-200"
              />
              {/* Badge */}
              <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 whitespace-nowrap inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-violet-200 shadow-md text-xs font-semibold text-violet-700">
                <span className="w-2 h-2 rounded-full bg-violet-500" />
                Mechatronics · Tec de Monterrey
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Info cards */}
      <section className="pb-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              icon: GraduationCap,
              title: 'Education',
              desc: 'Tecnológico de Monterrey — Mechatronics Engineering',
            },
            {
              icon: Waves,
              title: 'Varsity Athlete · Aug 2024 – Dec 2025',
              desc: 'Competitive swimming team — Tec de Monterrey, Querétaro Campus',
            },
            {
              icon: Globe,
              title: 'Multilingual',
              desc: 'Native Spanish · Advanced English · intermediate German',
            },
          ].map((card, i) => {
            const Icon = card.icon;
            return (
              <div
                key={i}
                className={`rounded-xl bg-white border-stone-200 border p-6 hover:shadow-md hover:scale-[1.01] transition-all duration-300 fade-in-up stagger-${i + 1}`}
              >
                <div className="flex items-start gap-4">
                  <div className="p-2.5 rounded-xl bg-violet-50 text-violet-600">
                    <Icon size={22} />
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-gray-900 mb-1">{card.title}</h3>
                    <p className="text-sm text-stone-500 leading-relaxed">{card.desc}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Interests */}
      <section className="pb-16">
        <h2 className="text-2xl font-bold text-gray-900 mb-8 flex items-center gap-3">
          <Rocket size={24} className="text-violet-600" />
          Areas of Interest
        </h2>
        <div className="grid sm:grid-cols-3 gap-6">
          {[
            { icon: Bot, label: 'Robotics & Autonomous Vehicles', detail: 'ROS 2, LiDAR sensors, C/C++, Python, Position sensoring' },
            { icon: Satellite, label: 'Aerospace Technology', detail: 'Satellites & rovers, ADCS, experimental rocketry' },
            { icon: Cpu, label: 'Embedded Systems', detail: 'PCB design, sensor implementation via microcontrollers, telemetry' },
          ].map((item, i) => {
            const Icon = item.icon;
            return (
              <div
                key={i}
                className={`group relative p-6 rounded-xl bg-white border border-stone-200 hover:border-violet-300 transition-all duration-300 hover:shadow-md fade-in-up stagger-${i + 1}`}
              >
                <Icon
                  size={32}
                  className="text-stone-300 group-hover:text-violet-500 transition-colors duration-300 mb-4"
                />
                <h3 className="text-base font-semibold text-gray-900 mb-1">{item.label}</h3>
                <p className="text-sm text-stone-500">{item.detail}</p>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}
