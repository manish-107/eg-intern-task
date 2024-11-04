import Link from "next/link";

export default function StickyGuide() {
  return (
    <div className="fixed top-4 right-4 border-2 border-[#13307b6d] bg-[#7e9eee6d] text-[#1a326e] px-3 py-1 rounded-lg shadow-lg flex items-center space-x-2">
      <Link href="/guide" className="text-black">
        ⚡Check out Features page
      </Link>
      {/* <button
        className="text-white bg-gray-700 rounded-full w-4 h-4 flex items-center justify-center focus:outline-none hover:bg-gray-600"
        aria-label="Close"
      >
        &times;
      </button> */}
    </div>
  );
}
