import AllDoctors from "../../Components/AllDoctors";

export async function getServerSideProps(context) {
  const department = context.params.depName;
  const res = await fetch(
    `https://basic-hospital-server.vercel.app/search-department/` + department
  );
  const data = await res.json();

  // Pass data to the page via props
  return { props: { data } };
}
const SearchName = ({ data }) => {
  return <AllDoctors doctors={data}></AllDoctors>;
};

export default SearchName;
