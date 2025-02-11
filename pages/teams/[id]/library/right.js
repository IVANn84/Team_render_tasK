import Layout from '../../../../components/layout';
import { getAllTeamsIds, getIdlibraryRight } from '../../../../lib/teams';

export default function Post({ postData }) {
  return <Layout>{postData.right.join(', ')}</Layout>;
}

export async function getStaticPaths() {
  const paths = getAllTeamsIds();
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const postData = getIdlibraryRight(params.id);
  return {
    props: {
      postData,
    },
  };
}
