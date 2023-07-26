export interface GLinkData {
  key: string;
  red: string;
  url: string;
}

export interface GCardData {
  id: string;
  date: string;
  rol: string;
  time: string;
  name: string;
  img: string;
  links: GLinkData[];
}

export interface GIconData {
  id: string;
  name: string;
  path: string;
}
