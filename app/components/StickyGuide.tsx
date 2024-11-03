import Link from "next/link";

export default function StickyGuide() {
  return (
    <div className="fixed top-4 right-4 bg-black text-white px-3 py-1 rounded-lg shadow-lg flex items-center space-x-2">
      <Link href="/guide" className="text-white">
        ⚡Check out Features
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
