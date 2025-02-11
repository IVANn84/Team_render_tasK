// import Layout from '../../../../components/layout';
// import { getIdMembers, getMembers } from '../../../../lib/teams';

// export default function Post({ postData }) {
//   return (
//     <Layout>
//       {postData.map((member) => `${member.name} - ${member.role}`).join('\n')}
//     </Layout>
//   );
// }

// export async function getStaticPaths() {
//   const paths = getMembers();
//   console.log(paths);
//   return {
//     paths,
//     fallback: false,
//   };
// }

// export async function getStaticProps({ params }) {
//   const postData = getIdMembers(params.id);
//   return {
//     props: {
//       postData,
//     },
//   };
// }
export default function Member() {
  return <p>НЕ смог</p>;
}
