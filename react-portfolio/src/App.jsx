import { useState } from 'react';

const skills = [
  'HTML',
  'CSS',
  'JavaScript',
  'Python',
  'C Programming',
  'IoT Development',
  'Arduino',
  'Problem Solving',
  'Startup Planning',
  'Team Collaboration',
];

const projects = [
  {
    title: 'Lane Follower Robot',
    type: 'IoT Project',
    description:
      'Designed and developed an autonomous lane-following robot using sensors and microcontrollers. Uses IR sensors to detect and follow a predefined path and demonstrates automation and embedded systems concepts.',
    cta: 'View on GitHub',
    href: '#',
  },
  {
    title: 'BIO VOTE',
    type: 'Startup Project',
    description:
      'A startup idea focused on improving voting security and transparency by integrating biometric authentication with digital voting systems.',
    details: [
      {
        label: 'Problem',
        value: 'Traditional voting systems are vulnerable to fraud and lack transparency.',
      },
      {
        label: 'Solution',
        value: 'Biometric-enabled secure voting platform with audit-ready validation.',
      },
      {
        label: 'Impact',
        value: 'Safer elections, stronger trust, faster verification.',
      },
      {
        label: 'Future Scope',
        value: 'Expand to mobile voting, blockchain audit logs, and community adoption.',
      },
    ],
  },
];

function App() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    alert('Message received! I will get back to you soon.');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-72 bg-[radial-gradient(circle_at_top,_rgba(96,165,250,0.15),_transparent_40%)]" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-72 bg-[radial-gradient(circle_at_bottom_right,_rgba(56,189,248,0.14),_transparent_35%)]" />

      <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/90 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
          <a href="#home" className="text-xl font-semibold tracking-[0.2em] text-sky-300">
            BASAVARAJ
          </a>
          <nav className="hidden gap-8 md:flex">
            {['About', 'Skills', 'Projects', 'Education', 'Contact'].map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} className="text-slate-300 transition hover:text-white">
                {item}
              </a>
            ))}
          </nav>
        </div>
      </header>

      <main className="mx-auto max-w-7xl px-6 pb-24 pt-10">
        <section id="home" className="grid gap-12 lg:grid-cols-[1.6fr_1fr] lg:items-center">
          <div className="space-y-6">
            <span className="inline-flex rounded-full bg-sky-500/10 px-4 py-2 text-sm font-semibold text-sky-300 shadow-glow">
              Engineering Student • Startup Innovator • IoT Developer
            </span>
            <div className="space-y-5">
              <h1 className="text-5xl font-semibold tracking-tight text-white sm:text-6xl">
                Hi, I&apos;m Basavaraj Choudri.
              </h1>
              <p className="max-w-2xl text-lg leading-8 text-slate-300">
                I build intelligent hardware, startup concepts, and automation systems that solve real-world problems. Passionate about IoT, embedded systems, and entrepreneurial innovation.
              </p>
            </div>
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
              <a href="#contact" className="inline-flex w-full items-center justify-center rounded-full bg-sky-400 px-6 py-3 text-sm font-semibold text-slate-950 shadow-lg shadow-sky-500/20 transition hover:-translate-y-0.5 sm:w-auto">
                Contact Me
              </a>
              <a href="#" download="Basavaraj_Choudri_Resume.pdf" className="inline-flex w-full items-center justify-center rounded-full border border-slate-700 bg-slate-900/80 px-6 py-3 text-sm text-slate-200 transition hover:border-sky-400 sm:w-auto">
                Download Resume
              </a>
            </div>
            <div className="flex flex-wrap gap-4 text-sm text-slate-400">
              {[
                { label: 'LinkedIn', href: '#' },
                { label: 'GitHub', href: '#' },
                { label: 'Email', href: 'mailto:basavaraj@example.com' },
              ].map((link) => (
                <a key={link.label} href={link.href} className="transition hover:text-white">
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          <div className="group relative isolate overflow-hidden rounded-[32px] border border-white/10 bg-slate-900/70 p-8 shadow-glow backdrop-blur-xl">
            <div className="absolute -right-16 top-4 h-52 w-52 rounded-full bg-sky-500/10 blur-3xl" />
            <div className="absolute -left-12 bottom-12 h-40 w-40 rounded-full bg-slate-400/5 blur-3xl" />
            <div className="relative flex h-full flex-col items-center justify-between gap-8">
              <div className="flex h-64 w-64 items-center justify-center rounded-[28px] border border-slate-700 bg-slate-950/80">
                <span className="text-sm uppercase tracking-[0.3em] text-slate-500">Profile Photo</span>
              </div>
              <div className="space-y-4 text-center">
                <p className="text-sm uppercase tracking-[0.24em] text-sky-300">IoT Developer</p>
                <h2 className="text-3xl font-semibold text-white">Embedded Systems & Automation</h2>
                <p className="text-sm leading-6 text-slate-400">
                  Crafting real-world solutions through robotics, microcontrollers, and startup strategy.
                </p>
              </div>
              <div className="grid w-full gap-4 sm:grid-cols-2">
                <div className="rounded-3xl bg-white/5 p-5 text-center">
                  <p className="text-3xl font-semibold text-white">8+</p>
                  <p className="text-sm uppercase tracking-[0.24em] text-slate-400">Projects</p>
                </div>
                <div className="rounded-3xl bg-white/5 p-5 text-center">
                  <p className="text-3xl font-semibold text-white">10+</p>
                  <p className="text-sm uppercase tracking-[0.24em] text-slate-400">Skills</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="mt-24 rounded-[40px] border border-white/10 bg-slate-900/70 p-8 shadow-glow backdrop-blur-xl">
          <div className="mb-10 flex items-center gap-4">
            <span className="text-sky-300">01</span>
            <h2 className="text-3xl font-semibold text-white">About Me</h2>
          </div>
          <div className="grid gap-8 lg:grid-cols-[1.8fr_1fr]">
            <div className="space-y-6 text-slate-300">
              <p>
                Passionate engineering student interested in technology, startups, IoT, automation, and innovation. I enjoy solving real-world problems through engineering and entrepreneurship.
              </p>
              <p>
                My work is guided by practical product thinking, embedded systems design, and the drive to bring disruptive ideas from prototype to purpose.
              </p>
              <p>
                Outside of technical work, I invest in fitness, continuous learning, and building a growth mindset for startup success.
              </p>
            </div>
            <div className="rounded-[32px] border border-white/10 bg-slate-950/80 p-8 shadow-inner">
              <h3 className="text-xl font-semibold text-white">Core Values</h3>
              <ul className="mt-6 space-y-3 text-slate-300">
                {['Innovative thinking', 'Analytical problem solving', 'Hands-on prototyping', 'Collaborative leadership'].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="mt-1 h-2 w-2 rounded-full bg-sky-400" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section id="skills" className="mt-24">
          <div className="mb-10 flex items-center gap-4">
            <span className="text-sky-300">02</span>
            <h2 className="text-3xl font-semibold text-white">Skills</h2>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {skills.map((skill) => (
              <div key={skill} className="rounded-3xl border border-white/10 bg-slate-900/80 px-5 py-4 text-slate-100 shadow-sm transition hover:-translate-y-1 hover:border-sky-400/30">
                {skill}
              </div>
            ))}
          </div>
        </section>

        <section id="projects" className="mt-24">
          <div className="mb-10 flex items-center gap-4">
            <span className="text-sky-300">03</span>
            <h2 className="text-3xl font-semibold text-white">Projects</h2>
          </div>
          <div className="grid gap-8 xl:grid-cols-2">
            {projects.map((project) => (
              <article key={project.title} className="group overflow-hidden rounded-[32px] border border-white/10 bg-slate-900/70 shadow-glow backdrop-blur-xl transition-transform duration-300 hover:-translate-y-2">
                <div className="flex h-64 items-center justify-center bg-slate-950/90 text-slate-500">
                  <span className="uppercase tracking-[0.3em]">Project Image</span>
                </div>
                <div className="space-y-5 p-8">
                  <span className="text-sm font-semibold uppercase tracking-[0.25em] text-sky-300">
                    {project.type}
                  </span>
                  <h3 className="text-2xl font-semibold text-white">{project.title}</h3>
                  <p className="text-slate-300">{project.description}</p>
                  {project.details && (
                    <div className="space-y-3 rounded-3xl bg-slate-950/80 p-5 text-slate-300">
                      {project.details.map((detail) => (
                        <p key={detail.label}>
                          <strong className="text-slate-100">{detail.label}:</strong> {detail.value}
                        </p>
                      ))}
                    </div>
                  )}
                  {project.href && (
                    <a href={project.href} className="inline-flex items-center rounded-full bg-sky-400 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-sky-300">
                      {project.cta}
                    </a>
                  )}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="education" className="mt-24">
          <div className="mb-10 flex items-center gap-4">
            <span className="text-sky-300">04</span>
            <h2 className="text-3xl font-semibold text-white">Education</h2>
          </div>
          <div className="space-y-8">
            {[
              {
                year: '2024 - Present',
                title: 'Bachelor of Engineering',
                description: 'Specialized in electronics, embedded systems, and IoT with coursework in automation design, control systems, and startup innovation.',
              },
              {
                year: '2021 - 2024',
                title: 'Pre-University Science',
                description: 'Focused on physics, mathematics, and computer basics, building a strong foundation for engineering projects and technical problem solving.',
              },
            ].map((entry) => (
              <div key={entry.title} className="relative rounded-[32px] border border-white/10 bg-slate-900/70 p-8 shadow-glow backdrop-blur-xl">
                <div className="absolute left-4 top-8 h-4 w-4 rounded-full bg-sky-400 shadow-glow" />
                <div className="pl-12">
                  <p className="mb-3 text-sm uppercase tracking-[0.3em] text-slate-400">{entry.year}</p>
                  <h3 className="text-2xl font-semibold text-white">{entry.title}</h3>
                  <p className="mt-4 text-slate-300">{entry.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="certifications" className="mt-24">
          <div className="mb-10 flex items-center gap-4">
            <span className="text-sky-300">05</span>
            <h2 className="text-3xl font-semibold text-white">Certifications</h2>
          </div>
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {[
              {
                title: 'IoT Fundamentals',
                description: 'Certificate in connected device design and sensor-to-cloud system architecture.',
              },
              {
                title: 'Embedded Systems',
                description: 'Hands-on training in microcontroller programming, sensors, and real-time applications.',
              },
              {
                title: 'Startup Bootcamp',
                description: 'Practical startup planning, product-market fit, and pitch development experience.',
              },
            ].map((cert) => (
              <div key={cert.title} className="rounded-[32px] border border-white/10 bg-slate-900/70 p-7 shadow-glow backdrop-blur-xl">
                <h3 className="text-xl font-semibold text-white">{cert.title}</h3>
                <p className="mt-4 text-slate-300">{cert.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="contact" className="mt-24 rounded-[40px] border border-white/10 bg-slate-900/70 p-8 shadow-glow backdrop-blur-xl">
          <div className="mb-10 flex items-center gap-4">
            <span className="text-sky-300">06</span>
            <h2 className="text-3xl font-semibold text-white">Contact</h2>
          </div>
          <div className="grid gap-10 lg:grid-cols-[1fr_1.2fr]">
            <div className="space-y-5 rounded-[32px] border border-white/10 bg-slate-950/80 p-8">
              <h3 className="text-xl font-semibold text-white">Let&apos;s collaborate</h3>
              <p className="text-slate-300">
                Reach out if you want to discuss internships, placements, startup ideas, or IoT collaboration.
              </p>
              <div className="space-y-3 text-slate-300">
                <p>
                  <span className="font-semibold text-white">Email:</span>{' '}
                  <a href="mailto:basavaraj@example.com" className="text-sky-300 hover:text-sky-200">
                    basavaraj@example.com
                  </a>
                </p>
                <p>
                  <span className="font-semibold text-white">Phone:</span>{' '}
                  <a href="tel:+919876543210" className="text-sky-300 hover:text-sky-200">
                    +91 98765 43210
                  </a>
                </p>
                <p>
                  <span className="font-semibold text-white">LinkedIn:</span>{' '}
                  <a href="#" className="text-sky-300 hover:text-sky-200">
                    linkedin.com/in/basavaraj
                  </a>
                </p>
                <p>
                  <span className="font-semibold text-white">GitHub:</span>{' '}
                  <a href="#" className="text-sky-300 hover:text-sky-200">
                    github.com/basavaraj
                  </a>
                </p>
              </div>
            </div>
            <form onSubmit={handleSubmit} className="space-y-6 rounded-[32px] border border-white/10 bg-slate-950/80 p-8">
              <label className="block text-sm font-medium text-slate-200">
                Name
                <input
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="mt-3 w-full rounded-3xl border border-slate-700 bg-slate-900/90 px-4 py-3 text-slate-100 outline-none transition focus:border-sky-400"
                  placeholder="Your name"
                />
              </label>
              <label className="block text-sm font-medium text-slate-200">
                Email
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="mt-3 w-full rounded-3xl border border-slate-700 bg-slate-900/90 px-4 py-3 text-slate-100 outline-none transition focus:border-sky-400"
                  placeholder="Your email"
                />
              </label>
              <label className="block text-sm font-medium text-slate-200">
                Message
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="5"
                  required
                  className="mt-3 w-full rounded-3xl border border-slate-700 bg-slate-900/90 px-4 py-3 text-slate-100 outline-none transition focus:border-sky-400"
                  placeholder="How can I help?"
                />
              </label>
              <button type="submit" className="inline-flex w-full items-center justify-center rounded-full bg-sky-400 px-6 py-3 text-base font-semibold text-slate-950 transition hover:bg-sky-300">
                Send Message
              </button>
            </form>
          </div>
        </section>
      </main>

      <footer className="border-t border-white/10 bg-slate-950/70 py-8 text-center text-slate-500">
        © 2026 Basavaraj Choudri. Built for internships, placements, and startup showcases.
      </footer>
    </div>
  );
}

export default App;
