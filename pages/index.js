import styles from '../styles/Home.module.css';
import Head from 'next/head';

export default function Home() {
  return (
    <div className={styles.home}>
      <Head>
        <title>A!!most - Home</title>
        <meta http-equiv='X-UA-Compatible' content='IE=edge' />
        <meta
          name='description'
          content='A!!most is a online website where you can find guides about bad words. It is free to Sign Up on.'
        />
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
        <meta
          name='keywords'
          content='Allmost, A!!most, Profanity, Bad, Words, Online, Website'
        />
      </Head>
      <h2>
        Welcome to <span className='logo'>A!!most</span>
      </h2>
      <div>
        <p>
          <span className='logo'>A!!most </span>
          is a online website where you can find guides about bad words.
        </p>
        <a href='/guides' className='btn'>
          Get Started
        </a>
      </div>
    </div>
  );
}
