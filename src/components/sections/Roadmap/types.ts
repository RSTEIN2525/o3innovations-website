export interface RoadmapItem {
  id: number;
  title: string;
  date: string;
  description: string;
  status: 'Completed' | 'In Progress' | 'Upcoming';
}