import Link from "next/link";

export default function GHeader() {
  return (
    <header className="p-3 sm:p-5 bg-black h-28 sm:h-32 border-b-2 border-[#ffffff39]">
      <div className="bg-[#0d3e20] p-3 sm:p-5 max-w-xl sm:max-w-4xl flex flex-col sm:flex-row justify-between items-center mx-auto rounded-xl border-2 border-[#1fb256]">
        <h3 className="text-lg sm:text-xl font-semibold text-center sm:text-left">
          📑 Features of To-Do List
        </h3>
        <Link
          href="/"
          className="bg-black border-2 py-1 text-[#1fb256] font-semibold px-2 rounded-lg hover:bg-[#08080815] hover:text-white border-[#1fb256] transition duration-500 ease-in-out mt-2 sm:mt-0"
          type="button"
        >
          {"📌"} Back to To-Do List
        </Link>
      </div>
    </header>
  );
}
