import {Post} from '../../interfaces/post';

export interface Picture {
  id: number;
  src: string;
  post: Post;
}
