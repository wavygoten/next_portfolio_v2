import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Main from "../src/pages/Main";
const Home: NextPage = () => {
	return (
		<>
			<Head>
				<title>Ihsaan&apos;s Portfolio</title>
				<meta name="description" content="Generated by create next app" />
				<meta
					name="viewport"
					content="user-scalable=no, width=device-width, initial-scale=1"
				/>

				<link rel="icon" href="/favicon.ico" />
			</Head>
			<Main />
		</>
	);
};

export default Home;
