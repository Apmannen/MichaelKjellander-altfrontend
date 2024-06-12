export type Model = {};

export type Category = Model & {
  name: string;
  slug: string;
  typeString: CategoryType;
};
export type Post = Model & {
  title: string;
};

export type CategoryType = 'Unknown' | 'Game' | 'Other' | 'GameReview';
