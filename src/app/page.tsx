import Image from "next/image";
import Sidebar from '../components/Sidebar'
import Forum from '../components/Forum'

export default function Home() {
  return (
    <main className="flex">
        <Sidebar />
        <Forum />
    </main>
  );
}


