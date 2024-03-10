import Head from 'next/head';
import Image from 'next/image';
import { Inter } from 'next/font/google';
import Link from 'next/link';

export default function Home() {
  return (
    <>
      <Head>
        <title>period.</title>
      </Head>
      <main className='flex items-center justify-center h-screen'>
        <div className='text-center'>
          <Link href="/ailearning" passHref>
            <div className="text-dark-rose">
              <span>Ai</span>
            </div>
          </Link>
        </div>
      </main>
    </>
  );
}
