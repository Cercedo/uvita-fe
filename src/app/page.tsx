import { LeftArrowIcon, LogoIcon } from '@/components/ui/icons';

export default function Home() {
  return (
    <>
      <main
        id="content"
        className="relative px-4 sm:px-6 lg:px-8 flex flex-col justify-center sm:items-center mx-auto size-full -bg-neutral-900 h-screen"
      >
        <div className="text-center py-8 px-4 sm:px-6 lg:px-8">
          <LogoIcon className="w-16 sm:w-24 h-auto mx-auto mb-4 sm:mb-8 text-indigo-600" />
          <h1 className="text-2xl  sm:text-4xl">
            Let&apos;s get started with{' '}
          </h1>
          <h2 className="mt-1 sm:mt-3 text-4xl font-bold sm:text-6xl">
            <span className="bg-clip-text bg-gradient-to-tr from-blue-600 to-purple-400 text-transparent">
              Uvita Pro
            </span>
          </h2>
          <div className="mt-8 space-y-4">
            <div className="grid">
              <button
                type="button"
                className="sm:p-4 py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-neutral-100 hover:bg-neutral-200 focus:bg-neutral-200 dark:bg-white/10 dark:hover:bg-white/20 focus:outline-none dark:focus:bg-white/20 disabled:opacity-50 disabled:pointer-events-none"
              >
                Start
                <LeftArrowIcon className="shrink-0 size-4" />
              </button>
            </div>
          </div>
        </div>
      </main>

      <footer className="absolute bottom-0 inset-x-0 text-center py-5">
        <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-sm text-stone-400">
            © {new Date().getFullYear()} Uvita. A product of{' '}
            <a
              className="text-indigo-500 font-medium hover:text-indigo-400 focus:outline-none focus:text-indigo-400"
              href="https://github.com/Cercedo"
            >
              @Cercedo
            </a>
          </p>
        </div>
      </footer>
    </>
  );
}
