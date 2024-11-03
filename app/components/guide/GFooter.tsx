import Link from "next/link";

export default function GFooter() {
  return (
    <header className="p-3 sm:p-5 bg-black h-28 sm:h-32 mt-10 border-b-2 border-[#e16815]">
      <div className="bg-[#4e260b] p-3 sm:p-5 max-w-xl sm:max-w-4xl flex flex-col sm:flex-row justify-between items-center mx-auto rounded-xl border-2 border-[#e16815]">
        <h3 className="text-lg sm:text-xl font-semibold text-center sm:text-left">
          <a
            href="https://manish-107.github.io/manish-portfolio/"
            target="_blank"
            rel="noopener noreferrer"
          >
            🏷️ By Manish
          </a>
        </h3>

        <Link
          href="/"
          className="bg-black border-2 py-1 text-[#f9f9f9] font-semibold px-2 rounded-lg hover:bg-[#08080815] hover:text-white border-[#e16815] transition duration-500 ease-in-out mt-2 sm:mt-0"
          type="button"
        >
          {"📌"} Back to To-Do List
        </Link>
      </div>
    </header>
  );
}
