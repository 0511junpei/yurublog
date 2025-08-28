// DB保存用
export type CommentFormData = {
  authorName?: string;
  comment: string;
};

// 画面表示用
export type CommentDisplay = {
  id: string;
  authorName: string;
  timestamp: string;
  comment: string;
};
