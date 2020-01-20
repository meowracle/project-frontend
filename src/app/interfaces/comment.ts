import {Post} from './post';

export interface Comment {
  id: number;
  description: string;
  user: any;
  post: Post;
}
