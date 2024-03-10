import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Head>
        <title>period.</title>
      </Head>
      <header className="p-4 ml-2 text-2xl font-gabriela text-period-red">
        period.
      </header>
      <main className="flex flex-col items-center justify-center h-screen">
        <div className="flex items-center">
          <textarea
            className="w-64 p-2 rounded-full border border-medium-rose focus:outline-none focus:border-dark-rose text-center resize-none text-black"
            placeholder="Explore the wonders of the female body..."
          />
        </div>
          <Link href="/ailearning" passHref>
            <div className="text-dark-rose p-4">
              <button className="rounded-full border border-medium-rose text-white p-2 bg-period-red hover:bg-dark-rose hover:border-dark-rose transition duration-300 ease-in-out">Enlighten Me</button>
            </div>
          </Link>
      </main>
    </>
  );
}
