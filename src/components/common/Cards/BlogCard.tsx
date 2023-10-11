import React, { FC, useMemo } from "react";
import { BlogPost } from "../../../types/posts";
import { formatDate } from "../../../utils/helper";

type Props = BlogPost;
const BlogCard: FC<Props> = ({ _embedded, date, featured_media, title }) => {
  const { author } = _embedded;
  const formattedDate = useMemo(() => formatDate(date), [date]);
  const heading = useMemo(
    () => _embedded?.["wp:term"]?.[2]?.[0]?.name ?? " ",
    [_embedded]
  );
  const category = useMemo(
    () => _embedded?.["wp:term"][0][0].name ?? " ",
    [_embedded]
  );
  return (
    <div className="p-card pow-card">
      <p className="p-heading--5  head-group">{heading}</p>
      <hr className="u-sv1" />
      <div className="p-card__content">
        <img
          className="p-card__image"
          alt="feautured image"
          height="185"
          width="330"
          src={featured_media}
        />
        <div className="title-author-group">
          <h4 className="p-heading--4 ">
            <a href="#">{title.rendered}</a>
          </h4>
          <p className="u-no-padding--bottom p-heading--6">
            By{" "}
            <span>
              <a href={author[0].link}>{author[0].name}</a>
            </span>{" "}
            on <span>{formattedDate}</span>
          </p>
        </div>
      </div>
      <hr className="u-no-margin--bottom" />
      <p>{category}</p>
    </div>
  );
};
export default BlogCard;
