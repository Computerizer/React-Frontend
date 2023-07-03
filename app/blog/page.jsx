import Slider from "@components/blog/Slider";
import BlogCard from "@components/blog/BlogCard";

const Blog = () => {
  const slides = [
    {
      id: 1,
      body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias autem, facilis consequuntur sequi fuga beatae, veritatis sunt, excepturi amet voluptatum debitis. Perspiciatis, accusamus voluptates. Ipsum?",
    },
    {
      id: 2,
      body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias autem, facilis consequuntur sequi fuga beatae, veritatis sunt, excepturi amet voluptatum debitis. Perspiciatis, accusamus voluptates. Ipsum?",
    },
    {
      id: 3,
      body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias autem, facilis consequuntur sequi fuga beatae, veritatis sunt, excepturi amet voluptatum debitis. Perspiciatis, accusamus voluptates. Ipsum?",
    },
    {
      id: 4,
      body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias autem, facilis consequuntur sequi fuga beatae, veritatis sunt, excepturi amet voluptatum debitis. Perspiciatis, accusamus voluptates. Ipsum?",
    },
    {
      id: 5,
      body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias autem, facilis consequuntur sequi fuga beatae, veritatis sunt, excepturi amet voluptatum debitis. Perspiciatis, accusamus voluptates. Ipsum?",
    },
  ];

  return (
    <>
      <h1 className="mb-10 text-5xl ">Blog</h1>
      <Slider slides={slides} />
      <div className="grid w-full gap-8 md:grid-cols-2 lg:grid-cols-3">
        <BlogCard />
        <BlogCard />
        <BlogCard />
        <BlogCard />
        <BlogCard />
        <BlogCard />
        <BlogCard />
        <BlogCard />
        <BlogCard />
      </div>
    </>
  );
};

export default Blog;
