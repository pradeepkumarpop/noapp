import Head from 'next/head';
import { signIn, signOut, useSession } from 'next-auth/client';
import styles from '../styles/Home.module.css';
import Router from 'next/router'

export default function Home() {
  const [session, loadingSession] = useSession();


  console.log(session)

  if (loadingSession) {
    return <p>Loading...</p>;
  }
  const dashBoard = () => {
    Router.push('/homescreen')
  }
  return (
    <div className={styles.container}>

      <h1>Hi  there! Welcome to our website Technical Rajni </h1>

      {!session && (
        <>
          <button className={styles.primaryButton} onClick={() => signIn("google")}>
            Sign In
          </button >
          <button className={styles.primaryButton} onClick={() => signIn("github")}>
            Sign in with GitHub
          </button>
        </>
      )}

      {session && (
        <>
          <h4>You are logged as: {session.user.name}</h4>
          <div className={styles.boxCenter}>
            <h4>Email: {session.user.email} </h4>
            <br />
            {session.user.image && (
              <span>
                <img src={String(session.user.image)} alt={session.user.name} width={100} height={80} />
              </span>
            )}
          </div>
          <br />
          <br />
          <button className={styles.primaryButton} onClick={() => signOut()}>
            Sign Out
          </button>
          <br />
          <br />
          <button className={styles.primaryButton} onClick={() => dashBoard()}>
            Go to dashBoard
          </button>

        </>
      )}
    </div>
  );
}  
