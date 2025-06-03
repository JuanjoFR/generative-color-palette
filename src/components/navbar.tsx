export default function Navbar() {
  return (
    <div className="absolute top-0 left-0 z-30 flex w-dvw flex-row items-center justify-between bg-gradient-to-r from-pink-400/10 via-transparent to-blue-500/10 px-3 py-2 backdrop-blur-md">
      <div className="flex flex-row items-center gap-3">
        <div className="flex flex-row items-center gap-2">
          <div className="w-28 truncate py-1.5 text-sm md:w-fit dark:text-zinc-300">
            Generative Color Palette
          </div>
        </div>
      </div>
    </div>
  );
}
