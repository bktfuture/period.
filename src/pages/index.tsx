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
			<main>
				<Link href="/ailearning">Ai</Link>
			</main>
		</>
	);
}
