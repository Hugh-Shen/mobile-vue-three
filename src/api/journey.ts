export interface NewRecommendedType {
  img: string;
  destination: string;
  journey: string;
}

export interface TravelDiary {
  nickname: string;
  avatar: string;
  time: string;
  images: Array<string>;
  content: string;
  attention: boolean;
}
