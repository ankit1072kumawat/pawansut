type Author = {
  name: string;
  image: string;
  // designation: string;
  Location: string;
};

export type Project = {
  id: number;
  title: string;
  paragraph: string;
  image: string;
  author: Author;
  tags: string[];
  publishDate: string;
};
