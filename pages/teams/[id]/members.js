import Layout from '../../../components/layout';
import { getAllTeamsIds, getIdMembers } from '../../../lib/teams';

export default function Post({ postData }) {
  return (
    <Layout>
      {postData.map((member) => `${member.name} - ${member.role}`).join('\n')}
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
  const postData = getIdMembers(params.id);
  return {
    props: {
      postData,
    },
  };
}
