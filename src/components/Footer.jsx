export default function Footer() {
  return (
    <footer className="border-t border-neutral-200 dark:border-neutral-800 py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-neutral-600 dark:text-neutral-400">© {new Date().getFullYear()} Code Aspect. All rights reserved.</p>
          <div className="text-sm text-neutral-600 dark:text-neutral-400">
            Built with love for Android, iOS, Web, Flutter & React Native.
          </div>
        </div>
      </div>
    </footer>
  );
}
