
export type Language = "en" | "hi" | "te";

export interface Job {
  id: number;
  category: string;
  title: Record<Language, string>;
  salary: string;
  location: Record<Language, string>; 
  verified: boolean;
  rating: number;
  phone: string;
  description: Record<Language, string>;
  [key: string]: any; 
}


export interface Props {
  job: Job;
  onClick: () => void;
}
