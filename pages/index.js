import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.home}>
      <h2>
        Welcome to <span className='logo'>A!!most</span>
      </h2>
      <div>
        <p>
          <span className='logo'>A!!most </span>
          is a online website where you can find guides about bad words.
        </p>
      </div>
    </div>
  );
}
