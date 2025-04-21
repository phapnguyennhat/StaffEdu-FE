export interface Category {
  id: number;
  name: string;
}

export interface Department {
  id: string;
  name: string;
}

export interface Course {
  id: string;
  title: string;
  description: string;
  image: string;
  level: string;
  instructor: string;
  categories: Category[];
}

export interface Employee {
  id: string;
  name: string;
  image: string;
  department: {
    id: string;
    name: string;
  };
  position: string;
  experience: string;
}
