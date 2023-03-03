import { Subscribe } from "@/app/components/Subscribe";

import "./globalStyles.css";

export default function Home() {
	return (
		<main>
			<h1>
				Se junte à 10.000+ usuários e fique por dentro das notícias de
				tecnologia e empreendedorismo
			</h1>
			<h2>
				Quer empreender no ramo da tecnologia? Se inscreva na nossa newsletter e
				receba diariamente novas notícias sobre tecnologia e empreendedorismo
			</h2>
			<Subscribe />
		</main>
	);
}
