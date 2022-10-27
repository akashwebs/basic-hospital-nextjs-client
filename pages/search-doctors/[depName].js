import { useQuery } from "@tanstack/react-query";
import AllDoctors from "../../Components/AllDoctors";
import { allDoctors } from "../../lib/helper";

export async function getServerSideProps(context) {
  const department = context.params.depName;

  return { props: { department } };
}
const SearchName = ({ department }) => {
  const { data } = useQuery([department], allDoctors);

  const arr = [];

  const result = data?.map((cat) =>
    cat?.department?.map((e) => {
      if (e.depName == department) {
        arr.push(cat);
      }
    })
  );

  return <AllDoctors doctors={arr}></AllDoctors>;
};

export default SearchName;
