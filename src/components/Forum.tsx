import Image from "next/image";
import Tweet from "./Tweet"

export default function Forum() {
  return (
    <main className="w-full">
        <h1 className="capitalize lg:uppercase text-2xl text-white lg:text-red-400 bg-blue-800 lg:bg-slate-200">Discussion forum</h1>
        <Tweet />
    </main>
  );
}


