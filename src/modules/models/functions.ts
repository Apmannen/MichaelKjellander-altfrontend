export type Model = {};

export type Category = Model & {
  name: string;
  slug: string;
  typeString: 'Unknown' | 'Game' | 'Other' | 'GameReview';
};
export type Post = Model & {
  title: string;
};
