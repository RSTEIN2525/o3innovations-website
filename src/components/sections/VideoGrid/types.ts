export interface Tag {
  id: string;
  name: string;
}

export interface Project {
  id: number;
  name: string;
  tags: Tag[];
  idealFor: string[];
  logo: React.ReactNode;
  video: string;
  description: string;
  link: string;
}