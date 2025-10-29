import { motion } from 'framer-motion';
import { Smartphone, Globe, Apple, Layers, Code, Rocket, Mail, Phone, MapPin, Shield } from 'lucide-react';

const container = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

function Section({ id, title, subtitle, children }) {
  return (
    <section id={id} className="py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div variants={container} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }}>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-neutral-900 dark:text-white">{title}</h2>
          {subtitle && (
            <p className="mt-3 text-neutral-700 dark:text-neutral-300 max-w-3xl">{subtitle}</p>
          )}
        </motion.div>
        <div className="mt-10">{children}</div>
      </div>
    </section>
  );
}

function ServiceCard({ icon: Icon, title, points }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="group relative rounded-2xl border border-neutral-200/70 dark:border-neutral-800 bg-white/70 dark:bg-neutral-900/70 backdrop-blur p-6 hover:shadow-xl hover:shadow-violet-500/10"
    >
      <div className="inline-flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-tr from-fuchsia-600 via-violet-600 to-cyan-500 text-white">
        <Icon className="h-6 w-6" />
      </div>
      <h3 className="mt-4 text-xl font-semibold text-neutral-900 dark:text-white">{title}</h3>
      <ul className="mt-3 space-y-1 text-sm text-neutral-700 dark:text-neutral-300 list-disc list-inside">
        {points.map((p) => (
          <li key={p}>{p}</li>
        ))}
      </ul>
    </motion.div>
  );
}

export default function Sections() {
  return (
    <div>
      {/* Services */}
      <Section
        id="services"
        title="Services"
        subtitle="Full-cycle engineering across platforms. Flexible engagement for startups and enterprises."
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <ServiceCard
            icon={Smartphone}
            title="Android Engineering"
            points={[
              'Kotlin, Jetpack Compose, Material 3',
              'CI/CD with Play Console & Gradle',
              'Performance, analytics & growth',
            ]}
          />
          <ServiceCard
            icon={Apple}
            title="iOS Engineering"
            points={[
              'Swift, SwiftUI, UIKit',
              'App Store workflows & TestFlight',
              'Integrations, auth, subscriptions',
            ]}
          />
          <ServiceCard
            icon={Globe}
            title="Web Applications"
            points={[
              'React, Next.js, Tailwind',
              'Design systems & accessibility',
              'SSR, SEO and performance',
            ]}
          />
          <ServiceCard
            icon={Layers}
            title="Flutter Apps"
            points={[
              'Multi-platform from one codebase',
              'Pixel-perfect UI & animations',
              'Native integrations & plugins',
            ]}
          />
          <ServiceCard
            icon={Code}
            title="React Native"
            points={[
              'Expo & bare workflows',
              'Bridging native modules',
              'OTA updates & release automation',
            ]}
          />
          <ServiceCard
            icon={Rocket}
            title="Backend & DevOps"
            points={[
              'Node, Python, FastAPI, Firebase',
              'Cloud infra, observability, security',
              'Scalable APIs & data platforms',
            ]}
          />
        </div>
      </Section>

      {/* About */}
      <Section
        id="about"
        title="About Code Aspect"
        subtitle="We are a product-driven software agency blending strategy, design and engineering to ship impactful apps."
      >
        <div className="grid md:grid-cols-2 gap-8">
          <div className="rounded-2xl p-6 border border-neutral-200/70 dark:border-neutral-800 bg-white/70 dark:bg-neutral-900/70 backdrop-blur">
            <p className="text-neutral-700 dark:text-neutral-300 leading-relaxed">
              From MVPs to global-scale platforms, our team partners with you to define, design and deliver. We focus on outcomes: faster iteration cycles, maintainable codebases, and delightful experiences. Engagements span discovery sprints, dedicated squads, and end-to-end delivery.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            {["Discovery & strategy","Product design & UX","Engineering excellence","QA & release"].map((tag) => (
              <div key={tag} className="rounded-xl border border-neutral-200/70 dark:border-neutral-800 p-4 bg-white/70 dark:bg-neutral-900/70">
                <p className="font-medium text-neutral-900 dark:text-white">{tag}</p>
                <p className="mt-1 text-sm text-neutral-600 dark:text-neutral-400">Structured processes, clear communication and measurable progress.</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Blogs */}
      <Section
        id="blogs"
        title="Latest from the blog"
        subtitle="Insights on mobile, web, performance and product delivery."
      >
        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              title: 'Compose vs SwiftUI: patterns that scale',
              tag: 'Mobile',
            },
            { title: 'Design systems with Tailwind + Radix', tag: 'Web' },
            { title: 'Shipping faster with CI/CD for apps', tag: 'DevOps' },
          ].map((post) => (
            <motion.a
              key={post.title}
              href="#"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="group block rounded-2xl overflow-hidden border border-neutral-200/70 dark:border-neutral-800 bg-white/70 dark:bg-neutral-900/70 hover:shadow-xl hover:shadow-violet-500/10"
            >
              <div className="h-36 bg-gradient-to-tr from-fuchsia-500 via-violet-500 to-cyan-400" />
              <div className="p-5">
                <span className="text-xs font-semibold px-2 py-1 rounded-full bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300">{post.tag}</span>
                <h3 className="mt-3 text-lg font-semibold text-neutral-900 dark:text-white group-hover:text-violet-600 dark:group-hover:text-violet-400">
                  {post.title}
                </h3>
                <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-400">Read time: 5 min</p>
              </div>
            </motion.a>
          ))}
        </div>
      </Section>

      {/* Careers */}
      <Section
        id="careers"
        title="Careers"
        subtitle="Join a team that values craft, curiosity and ownership. Remote-first across time zones."
      >
        <div className="grid md:grid-cols-3 gap-6">
          {[
            { role: 'Senior Android Engineer', type: 'Remote · Full-time' },
            { role: 'iOS Engineer', type: 'Remote · Full-time' },
            { role: 'Full‑stack Engineer', type: 'Remote · Contract' },
          ].map((job) => (
            <div key={job.role} className="rounded-2xl border border-neutral-200/70 dark:border-neutral-800 p-6 bg-white/70 dark:bg-neutral-900/70">
              <h3 className="font-semibold text-neutral-900 dark:text-white">{job.role}</h3>
              <p className="mt-1 text-sm text-neutral-600 dark:text-neutral-400">{job.type}</p>
              <a href="#contact" className="mt-4 inline-flex text-violet-600 dark:text-violet-400 font-medium">Apply now →</a>
            </div>
          ))}
        </div>
      </Section>

      {/* Contact */}
      <Section
        id="contact"
        title="Let’s build together"
        subtitle="Tell us about your product idea and timelines — we’ll get back within 24 hours."
      >
        <div className="grid lg:grid-cols-3 gap-8">
          <div className="rounded-2xl border border-neutral-200/70 dark:border-neutral-800 p-6 bg-white/70 dark:bg-neutral-900/70">
            <div className="space-y-4 text-neutral-700 dark:text-neutral-300">
              <p className="flex items-center gap-3"><Mail className="h-5 w-5" /> hello@codeaspect.studio</p>
              <p className="flex items-center gap-3"><Phone className="h-5 w-5" /> +1 (555) 010-2025</p>
              <p className="flex items-center gap-3"><MapPin className="h-5 w-5" /> Remote · Worldwide</p>
            </div>
            <div className="mt-6 rounded-xl p-4 bg-gradient-to-tr from-fuchsia-600 via-violet-600 to-cyan-500 text-white">
              <p className="font-medium">Preferred stack</p>
              <p className="text-sm opacity-90">React, Flutter, Kotlin, Swift, FastAPI, Node</p>
            </div>
          </div>
          <form className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-4">
            <input required className="w-full rounded-lg border border-neutral-300 dark:border-neutral-700 bg-white/80 dark:bg-neutral-900/80 px-4 py-3" placeholder="Your name" />
            <input type="email" required className="w-full rounded-lg border border-neutral-300 dark:border-neutral-700 bg-white/80 dark:bg-neutral-900/80 px-4 py-3" placeholder="Email" />
            <input className="w-full rounded-lg border border-neutral-300 dark:border-neutral-700 bg-white/80 dark:bg-neutral-900/80 px-4 py-3 sm:col-span-2" placeholder="Company (optional)" />
            <textarea rows={5} className="w-full rounded-lg border border-neutral-300 dark:border-neutral-700 bg-white/80 dark:bg-neutral-900/80 px-4 py-3 sm:col-span-2" placeholder="Tell us about your project" />
            <button type="submit" className="sm:col-span-2 inline-flex items-center justify-center rounded-md bg-gradient-to-tr from-fuchsia-600 via-violet-600 to-cyan-500 px-5 py-3 text-white font-medium shadow-lg shadow-violet-500/30 hover:brightness-110 transition">
              Send message
            </button>
          </form>
        </div>
      </Section>

      {/* Terms */}
      <Section id="terms" title="Terms & Policies" subtitle="Straightforward policies that protect your IP and ensure transparency.">
        <div className="grid md:grid-cols-3 gap-6">
          {[
            { title: 'Engagement', desc: 'Clear SOWs, milestones and acceptance criteria for every phase.' },
            { title: 'Security', desc: 'Strict access control, secure repos and encrypted secrets.' },
            { title: 'IP & Ownership', desc: 'You own the code, assets and infrastructure upon delivery.' },
          ].map((item) => (
            <div key={item.title} className="rounded-2xl border border-neutral-200/70 dark:border-neutral-800 p-6 bg-white/70 dark:bg-neutral-900/70">
              <div className="flex items-center gap-3">
                <Shield className="h-5 w-5 text-violet-600" />
                <h3 className="font-semibold text-neutral-900 dark:text-white">{item.title}</h3>
              </div>
              <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-400">{item.desc}</p>
            </div>
          ))}
        </div>
      </Section>
    </div>
  );
}
