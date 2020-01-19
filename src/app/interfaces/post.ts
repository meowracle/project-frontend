import {Picture} from '../component/post/picture';

export interface Post {
  id: number;
  user: any;
  title: string;
  content: string;
  date: any;
  shareStatus: boolean;
  picture: Picture[];
}
