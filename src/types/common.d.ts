import { type } from "os";

export type Link = {
  href: string;
  embeddable?: boolean;
};

export type Render = {
  //usually a link
  rendered: string;
  protected?: boolean;
};

export type Media = {
  id: number;
  date: string;
  slug: string;
  type: "attachment";
  link: string;
  title: Render;
  author: number;
  caption: Render;
  alt_text: string;
  media_type: string;
  mime_type: string;
  media_details: MediaDetails;
  source_url: string;
  _links: {
    self: Link[];
    collection: Link[];
    about: Link[];
    author: Link[];
    replies: Link[];
    "wp:term": thf[];
    curies: Cury[];
  };
};

type MediaDetails = {
  width: number;
  height: number;
  file: string;
  image_meta: {
    aperture: string;
    credit: string;
    camera: string;
    caption: string;
    created_timestamp: string;
    copyright: string;
    focal_length: string;
    iso: string;
    shutter_speed: string;
    title: string;
    orientation: string;
    keywords: string[];
  };
  sizes: {};
};

export type Author = {
  id: number;
  name: string;
  url: string;
  description: string;
  link: string;
  slug: string;
  avatar_urls: {
    [key: string]: string;
  };
  user_job_title: string;
  user_website_title: string;
  user_google: string;
  user_twitter: string;
  user_facebook: string;
  user_photo: string;
  user_location: string;
  _links: {
    self: Link[];
    collection: Link[];
  };
};
export type Cury = {
  name: string;
  href: string;
  templated: boolean;
};

export type  SubPost= {
    id: number;
    link: string;
    name: string;
    slug: string;
    taxonomy: string;
    _links: {
        self: {
            href: string;
        }[];
        collection: {
            href: string;
        }[];
        about: {
            href: string;
        }[];
        "wp:post_type": {
            href: string;
        }[];
        curies: Cury[];
        up?: {
            embeddable: boolean;
            href: string;
        }[];
    }}