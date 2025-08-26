// 投稿の基本情報（マークダウンから取得する情報）
export type PostBase = {
  slug: string;
  title: string;
  date: string;
  coverImage: string;
  excerpt: string;
  content: string;
  preview?: boolean;
  previewNumber: number;
};

// 投稿の動的情報（DBから取得）
export type PostMetrics = {
  views: number;
  // comments: number;
};

export type postsWithMetrics = PostBase & PostMetrics;
