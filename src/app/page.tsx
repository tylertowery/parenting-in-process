import Image from 'next/image'
import styles from './page.module.css';
import Banner from './components/Banner';
import Welcome from './components/Welcome';
import Process from './components/Process';
import GuidingPrinciples from './components/GuidingPrinciples';
import Icons from './components/Icons';
import AboutMe from './components/AboutMe';
import Footer from './components/Footer';
import Layout from './components/Layout';

export default function Home() {
  return (
    <main className={styles.main}>
      <Layout>
        <Welcome />
        <Process />
        <GuidingPrinciples />
        <Icons />
        <AboutMe />
      </Layout>
    </main>
  )
}
