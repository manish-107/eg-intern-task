import Link from "next/link";

// Footer component for features page
export default function GFooter() {
  return (
    <header className="mt-10 h-32 border-b-2 border-[#e16815] bg-black p-3 sm:h-32 sm:p-5">
      <div className="mx-auto flex max-w-xl flex-col items-center justify-between rounded-xl border-2 border-[#e16815] bg-[#4e260b] p-3 sm:max-w-4xl sm:flex-row sm:p-5">
        <h3 className="text-center text-lg font-semibold sm:text-left sm:text-xl">
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
          className="mt-2 rounded-lg border-2 border-[#e16815] bg-black px-2 py-1 font-semibold text-[#f9f9f9] transition duration-500 ease-in-out hover:bg-[#08080815] hover:text-white sm:mt-0"
          type="button"
        >
          {"📌"} Back to To-Do List
        </Link>
      </div>
    </header>
  );
}
