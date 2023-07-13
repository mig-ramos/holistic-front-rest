import Head from 'next/head'
// import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import { Sobre } from '@/components/Sobre'
import { Hero } from '@/components/hero'

// const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Energia Holística</title>
        <meta name="description" content="Sistema web para terapeutas com agendamento de consultas" />
      </Head>
      {/* <main className={`${styles.main} ${inter.className}`}> */}
      <main className={styles.main}>
        <Hero titulo='Terapia Holística a um click!' subTitulo='A Terapia Holística é um conjunto de terapias que visam a promoção a saúde, a prevenção de doenças e agravos, alívio de sintomas e cura, através do cuidado integral do ser humano. Seus componentes, em sua maioria, têm berço na medicina oriental e trazem consigo uma mistura entre o conhecimento prático e científico.' />

        <Sobre />
      </main>
    </>
  )
}
