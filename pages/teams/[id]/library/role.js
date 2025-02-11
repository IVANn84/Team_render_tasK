import Layout from '../../../../components/layout';
import { getAllTeamsIds, getIdlibraryRole } from '../../../../lib/teams';

export default function Post({ postData }) {
  return <Layout>{postData.role.join('...')}</Layout>;
}

export async function getStaticPaths() {
  const paths = getAllTeamsIds();
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const postData = getIdlibraryRole(params.id);
  return {
    props: {
      postData,
    },
  };
}
