import Link from 'next/link';
// import Illustration from '../components/Illustration';
import Image from "next/image";
import styles from '../styles/HomePage.module.css';

export default function HomePage() {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.background}>
          <h1>AI</h1>
          <h1>Research</h1>
        </div>
        <div className={styles.foreground}>
          <div className={styles.content}>
            <h1 className={styles.name}>Mingxuan LIU - Miu</h1>
            <h6 className={styles.bio}>Second-year PhD Student @UniTrento</h6>
            <h6 className={styles.bio}>Visiting Researcher @NaverLabsEurope</h6>
            <div className={styles.cardContainer}>
              <div className={styles.card}>
                <div className={styles.content}>
                  <h4>Research Interests and Skill Set</h4>
                  <div className={styles.tags}>
                    <span key='Research' className='Research'>
                      Open-world Perception
                    </span>
                    <span key='Computer-Vision' className='Computer-Vision'>
                      Vision-Language
                    </span>
                    <span key='MIM' className='MIM'>
                      Object Detection
                    </span>
                    <span key='LLMs' className='LLMs'>
                      LLMs
                    </span>
                    <span key='GenAI' className='GenAI'>
                      Open-vocabulary
                    </span>
                    <span key='PyTorch' className='PyTorch'>
                      Knowledge Discovery
                    </span>
                    <span key='Tensorflow' className='Tensorflow'>
                      Robotics
                    </span>
                    <span key='Apache-Spark' className='Apache-Spark'>
                      Python
                    </span>
                    <span key='SQL' className='SQL'>
                      C++
                    </span>
                    <span key='MLOps' className='MLOps'>
                      Unity
                    </span>
                    <span key='Software-Design' className='Software-Design'>
                      Maple
                    </span>
                    <span key='Bots' className='Bots'>
                      Piano
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <Link href="/resume">
              <button className={styles.button}>Resume</button>
            </Link>
            {/* <Link href="/projects">
              <button className={styles.button}>View Projects</button>
            </Link> */}
            <Link href="/contact">
              <button className={styles.outlined}>Contact</button>
            </Link>
          </div>
          {/* <Illustration className={styles.illustration} /> */}
          <div className={styles.right}>
            <div className={styles.picture_boader}>
              <Image
                className={styles.picture}
                src="/me.jpeg"
                width={500}
                height={500}
                alt="Kostas' Picture"
              />
            </div>

          </div>
        </div>
      </div>
    </>
  );
}

export async function getStaticProps() {
  return {
    props: { title: 'Home' },
  };
}
