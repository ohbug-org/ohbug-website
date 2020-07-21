export interface AllDirectory {
  edges: {
    node: {
      name: string;
      relativePath: string;
    };
  }[];
}
export interface AllMdx {
  edges: {
    node: {
      fields: {
        slug: string;
        title: string;
      };
      rawBody: string;
      body: string;
      parent: {
        relativeDirectory: string;
      };
    };
  }[];
}
interface Item {
  title: string;
  url: string;
  items: Item[];
}
export interface Mdx {
  fields: {
    id: string;
    title: string;
    slug: string;
  };
  frontmatter: {
    title: string;
    metaTitle: string;
    metaDescription: string;
    sectionName?: string;
  };
  body: string;
  tableOfContents: {
    items: Item[];
  };
  parent: {
    relativeDirectory: string;
  };
}
export interface Data {
  allDirectory: AllDirectory;
  allMdx: AllMdx;
  mdx: Mdx;
}
