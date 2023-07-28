export interface GLinkData {
  key: string;
  network: string;
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
