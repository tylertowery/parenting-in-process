import Image from 'next/image'
import styles from './page.module.css';
import Banner from './components/Banner';
import Welcome from './components/Welcome';
import Process from './components/Process';
import GuidingPrinciples from './components/GuidingPrinciples';
import Icons from './components/Icons';
import AboutMe from './components/AboutMe';
import Footer from './components/Footer';

export default function Home() {
  return (
    <main className={styles.main}>
      <Banner />
      <Welcome />
      <Process />
      <GuidingPrinciples />
      <Icons />
      <AboutMe />
      <Footer />
    </main>
  )
}
