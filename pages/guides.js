import { useContext, useEffect, useState } from 'react';
import styles from '../styles/Guides.module.css';
import AuthContext from '../stores/authContext';
import Head from 'next/head';

export default function Guides() {
  const { user, authReady, login } = useContext(AuthContext);
  const [guides, setGuides] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (authReady) {
      fetch(
        '/.netlify/functions/guides',
        user && {
          headers: {
            Authorization: 'Bearer ' + user.token.access_token,
          },
        }
      )
        .then(res => {
          if (!res.ok) {
            login();
            throw Error('You must be logged in to view this content');
          }
          return res.json();
        })
        .then(data => {
          setError(null);
          setGuides(data);
        })
        .catch(err => {
          setError(err.message);
          setGuides(null);
        });
    }
  }, [user, authReady]);

  return (
    <div className={styles.guides}>
      <Head>
        <title>A!!most - Guides</title>
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
      {!authReady && <div>Loading...</div>}

      {error && (
        <div className={styles.error}>
          <p>{error}</p>
        </div>
      )}

      {guides &&
        guides.map(guide => (
          <div key={guide.title} className={styles.card}>
            <h3>{guide.title}</h3>
            <h4>written by {guide.author}</h4>
            <p>{guide.contentText}</p>
          </div>
        ))}
    </div>
  );
}
