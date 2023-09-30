import Slider from "@components/blog/SliderSection";
import BlogGrid from "@components/blog/BlogGrid";
import fetchRecents from "@lib/fetchRecents";

// Consts var

const Blog = async () => {
  const data = await fetchRecents();

  return (
    <>
      <h1 className="mb-10 text-5xl font-semibold">Blog</h1>
      <Slider posts={data} />
      <BlogGrid />
    </>
  );
};

export default Blog;
