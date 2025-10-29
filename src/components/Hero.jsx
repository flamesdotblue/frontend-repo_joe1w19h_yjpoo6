import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[90vh] w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/LU2mWMPbF3Qi1Qxh/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Overlay gradients that don't block interaction */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/60 via-white/20 to-white dark:from-neutral-950/80 dark:via-neutral-950/30 dark:to-neutral-950" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-28 md:py-36">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl"
        >
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-white/70 dark:bg-neutral-900/70 backdrop-blur border border-white/30 dark:border-neutral-800">
            <span className="h-2 w-2 rounded-full bg-green-500" />
            We build apps that ship
          </span>
          <h1 className="mt-5 text-4xl md:text-6xl font-bold tracking-tight text-neutral-900 dark:text-white">
            Code Aspect — your full‑stack product engineering studio
          </h1>
          <p className="mt-4 text-lg md:text-xl text-neutral-700 dark:text-neutral-300">
            Android, iOS, Web, Flutter, React Native and everything in between. From strategy to launch, we design, build and scale delightful digital products.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href="#services"
              className="inline-flex items-center justify-center rounded-md bg-gradient-to-tr from-fuchsia-600 via-violet-600 to-cyan-500 px-5 py-3 text-white font-medium shadow-lg shadow-violet-500/30 hover:brightness-110 transition"
            >
              Explore Services
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-md border border-neutral-300 dark:border-neutral-700 px-5 py-3 font-medium text-neutral-900 dark:text-white hover:bg-neutral-100 dark:hover:bg-neutral-800 transition"
            >
              Start a project
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
