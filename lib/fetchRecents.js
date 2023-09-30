const baseURL = "http://127.0.0.1:8000/";

const fetchRecents = async () => {
  const res = await fetch(baseURL + "blog/recent-posts/5/1");
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }
  return res.json();
};

export default fetchRecents;
