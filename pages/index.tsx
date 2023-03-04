import Head from "next/head";
// import { Inter } from "@next/font/google";
// import styles from '@/styles/Home.module.css'

// const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Mr. Manish Hedau | Personal Portfolio</title>
        <meta name="description" content="A personal portfolio site" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <h1 className="text-3xl font-bold underline">
          Name : MR Manish Hedau
        </h1>
        <h1 className="text-3xl font-bold underline">
          Profession : Full Stack developer
        </h1>
      </main>
    </>
  );
}
