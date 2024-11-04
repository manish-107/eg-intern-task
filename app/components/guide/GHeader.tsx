import Link from "next/link";

export default function GHeader() {
  return (
    <header className="h-32 border-b-2 border-[#ffffff39] bg-black p-3 sm:h-32 sm:p-5">
      <div className="mx-auto flex max-w-xl flex-col items-center justify-between rounded-xl border-2 border-[#1fb256] bg-[#0d3e20] p-3 sm:max-w-4xl sm:flex-row sm:p-5">
        <h3 className="text-center text-lg font-semibold sm:text-left sm:text-xl">
          📑 Features of To-Do List
        </h3>
        <Link
          href="/"
          className="mt-2 rounded-lg border-2 border-[#1fb256] bg-black px-2 py-1 font-semibold text-[#1fb256] transition duration-500 ease-in-out hover:bg-[#08080815] hover:text-white sm:mt-0"
          type="button"
        >
          {"📌"} Back to To-Do List
        </Link>
      </div>
    </header>
  );
}
