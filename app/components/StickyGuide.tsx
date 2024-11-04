import Link from "next/link";

//Features message link
export default function StickyGuide() {
  return (
    <div className="fixed right-4 top-4 z-50 flex items-center space-x-2 rounded-lg border-2 border-[#13307b6d] bg-[#7e9eee6d] px-3 py-1 text-[#1a326e] shadow-lg">
      <Link href="/guide" className="text-black">
        ⚡Check out Features page
      </Link>
     
    </div>
  );
}
