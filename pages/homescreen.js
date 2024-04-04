import { getSession } from 'next-auth/client';
import styles from '../styles/Home.module.css';
import Router from 'next/router'
export default function Homescreen({ user }) {

  const   dashBoard = () => {
    Router.push('/')
   } 
  return (
    <div className={styles.container}>
      <h1>Dashboard</h1>
      <p>
        Welcome to dashboard: <b>{user.name}</b>
      </p>
      <p>{user.email}</p>


      <button className={styles.primaryButton} onClick={() => dashBoard()}>
                  Go to Home
          </button>
    </div>
  );
} 

export async function getServerSideProps(context) {
  const session = await getSession(context);
  if (!session) {
    context.res.writeHead(302, { Location: '/' });
    context.res.end();
    return {};
  }
  return {
    props: {
      user: session.user,
    },
  };
}
