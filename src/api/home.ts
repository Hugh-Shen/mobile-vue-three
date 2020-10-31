export interface PopularDestinationType {
  img: string;
  area: string;
  city: string;
}

export interface LocalType {
  site: string;
  img: string;
  count: number | string;
  rate: number | string;
}

export interface OnlineCelebrityType {
  nickname: string;
  site: string;
  img: string;
  avatar: string;
  like: number | string;
  has: boolean;
  list?: Array<object>;
}
