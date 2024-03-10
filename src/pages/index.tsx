import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import Link from "next/link";
import { useState } from "react";

// header text will probably change

export default function Home() {
  return (
    <>
      <Head>
        <title>period.</title>
      </Head>
      <header className="p-4 ml-2 text-2xl font-gabriela text-dark-rose">
        period.
      </header>
      <main className="flex flex-col items-center justify-center h-screen">
        <div className="flex items-center">
          <textarea
            className="w-64 p-2 rounded-full border border-medium-rose focus:outline-none focus:border-dark-rose text-center resize-none text-black"
            placeholder="Explore the wonders of the female body..."
          />
        </div>
        <div className="text-center ml-4">
          <Link href="/ailearning" passHref>
            <div className="text-dark-rose p-4">
              <span>Ai</span>
            </div>
          </Link>
        </div>
      </main>
    </>
  );
}
