import { Cury, Link, Media, Render, SubPost } from "./common";

type BlogPost = {
  id: number;
  date: string;
  date_gmt: string;
  guid: Render;
  modified: string;
  modified_gmt: string;
  slug: string;
  status: string;
  type: string;
  link: string;
  title: Render;
  content: Render;
  excerpt: Render;
  author: number;
  featured_media: string;
  //todo
  comment_status: "closed" | "open";
  ping_status: "closed" | "open";
  sticky: boolean;
  template: string;
  format: string;
  meta: any[];
  categories: number[];
  tags: number[];
  topic: number[];
  group: number[];
  _event_location: string;
  _event_venue: string;
  _event_registration: "";
  _start_day: string;
  _start_month: string;
  _start_year: string;
  _end_day: string;
  _end_month: string;
  _end_year: string;
  _links: {
    self: Link[];
    collection: Link[];
    about: Link[];
    author: Link[];
    replies: Link[];
    "version-history": [
      {
        count: number;
        href: string;
      }
    ];
    "predecessor-version": [
      {
        id: number;
        href: string;
      }
    ];
    "wp:featuredmedia": Link[];
    "wp:attachment": Link[];
    "wp:term": TEH[];
    curies: Cury[];
  };
  _embedded: {
    author: Author[];
    "wp:featuredmedia": Media[];
    "wp:term": Array<SubPost[]>;
  };
};

type TEH = {
  taxonomy: string;
  embeddable: boolean;
  href: string;
};
