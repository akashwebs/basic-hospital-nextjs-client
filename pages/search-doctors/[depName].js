export async function getServerSideProps(context) {
  // Fetch data from external API
  const id = context.params.depName;
  /* const res = await fetch(
    `https://basic-hospital-server.vercel.app/single-page-post/` + id
  );
  const data = await res.json(); */

  // Pass data to the page via props
  return { props: { data: id } };
}
const SearchName = ({ data }) => {
  return <div>hello docotor {data}</div>;
};

export default SearchName;
