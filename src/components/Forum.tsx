import Image from "next/image";
import Tweet from "./Tweet"

export default function Forum() {
  return (
    <main className="w-full overflow-y-scroll scrollbar-hide lg:w-[70%] px-4">
        <h1 className="hidden lg:block capitalize lg:uppercase text-2xl text-white lg:text-red-400 bg-blue-800 lg:bg-gray-200 w-fit font-semibold p-2 mb-6">Discussion forum</h1>
        <Tweet />
    </main>
  );
}


