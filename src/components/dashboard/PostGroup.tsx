import { FC } from "react";
import { BlogCard } from "../common";
import { BlogPost } from "../../types/posts";
type Props = {
  posts: BlogPost[];
};
const PostGroup: FC<Props> = ({ posts }) => {
  return (
    <div className="row u-vertically-center" >
      {posts.map((post) => (
        <div className="col-4" key={post.id}>
        <BlogCard  {...post} />
        </div>
      ))}
      </div>
  );
};
export default PostGroup;
