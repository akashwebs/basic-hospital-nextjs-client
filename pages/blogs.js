import Link from "next/link";

export const getStaticProps = async () => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts`);
  const data = await res.json();

  // Pass data to the page via props
  return { props: { data } };
};

const Blogs = ({ data }) => {
  return (
    <div>
      {data?.map((curr, index) => (
        <div key={index}>
          <Link href={`/Blogs/${curr.id}`}>{curr.title}</Link>
        </div>
      ))}
    </div>
  );
};

export default Blogs;
