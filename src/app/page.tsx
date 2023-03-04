import { Subscribe } from "@/app/components/Subscribe";

import styles from "./page.module.css";
import "./globalStyles.css";

export default function Home() {
	return (
		<main className={styles.container}>
			<div className={styles.page}>
				<div>
					<h1 className={styles.page__title}>
						Se junte à 10.000+ usuários e fique por dentro das notícias de
						tecnologia e empreendedorismo
					</h1>
					<h2 className={styles.page__subtitle}>
						Quer empreender no ramo da tecnologia? Se inscreva na nossa
						newsletter e receba diariamente novas notícias sobre tecnologia e
						empreendedorismo
					</h2>
				</div>
				<Subscribe />
			</div>
		</main>
	);
}
