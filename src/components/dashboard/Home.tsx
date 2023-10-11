import { FC, useEffect, useState } from "react";
import PostGroup from "./PostGroup";
import { getRequest } from "../../api";
import { BlogPost } from "../../types/posts";

const Home: FC = () => {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const getAllPosts = async () => {
    const result = await getRequest(`/~anthonydillon/wp-json/wp/v2/posts.json`);
    if (result) {
      setPosts(result);
    }
  };
  useEffect(() => {
    getAllPosts();
  }, []);
  return <div className="home-post"><PostGroup posts={posts} />;</div>
};
export default Home;
