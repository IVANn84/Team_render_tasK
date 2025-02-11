import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';
import { getNameTeams } from '../lib/teams';

export async function getStaticProps() {
  const allTeamsData = getNameTeams;
  return {
    props: {
      allTeamsData,
    },
  };
}

export default function Home({ allTeamsData }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
          Team_render_tasK
        </p>
        <p>
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>
        </p>
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Teams</h2>
        <ul className={utilStyles.list}>
          {allTeamsData.map(({ name, description }) => (
            <li className={utilStyles.listItem} key={name}>
              {name}
              <br />
              {description}
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  );
}
