import Link from 'next/link'
import '@src/styles/globals.scss'
import styles from './styles.module.scss'

function Home ({ Component, pageProps }) {
  return (
    <div className={styles.home}>
      <div className={styles.home_left}>
        <ul>
          <li><Link href="/">Home</Link></li>
          <li><Link href="/experience_00000">Experience 00000</Link></li>
        </ul>
      </div>
      <div className={styles.home_right}>
        <Component {...pageProps} />
      </div>
    </div>
  )
}

export default Home
