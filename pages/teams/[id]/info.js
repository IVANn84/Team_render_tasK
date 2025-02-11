import Layout from '../../../components/layout';
import { getIdTeams, getAllTeamsIds } from '../../../lib/teams';

export default function Post({ postData }) {
  return (
    <Layout>
      {postData.description}
      <br />
      {postData.name}
      <br />
    </Layout>
  );
}

export async function getStaticPaths() {
  const paths = getAllTeamsIds();
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const postData = getIdTeams(params.id);
  return {
    props: {
      postData,
    },
  };
}
