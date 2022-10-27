import { useQuery } from "@tanstack/react-query";
import AllDoctors from "../../Components/AllDoctors";
import { allDoctors } from "../../lib/helper";
import { useRouter } from "next/router";

const SearchName = () => {
  const router = useRouter();

  const department = router.query.depName;

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
