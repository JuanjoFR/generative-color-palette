export default async function Navbar() {
  return (
    <>
      <div className="absolute top-0 left-0 z-30 flex w-dvw flex-row items-center justify-between border-b border-white bg-gradient-to-r from-blue-100/70 via-pink-100/70 to-yellow-100/70 px-3 py-2 shadow-xs backdrop-blur-md">
        <div className="flex flex-row items-center gap-3 py-1.5">
          <div className="w-fit truncate text-sm dark:text-zinc-300">
            Generative color palette
          </div>
        </div>
      </div>
    </>
  );
}
