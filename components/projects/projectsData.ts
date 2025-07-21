// components/projects/projectsData.ts

export interface Project {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  fullDescription: string;
  image: string;
  images: string[];
  tools: string[];
  githubUrl?: string;
  liveUrl?: string;
  videos?: string[];
}

export const projects: Project[] = [
  {
    id: 1,
    title: "Project 1",
    subtitle: "Subtitle 1",
    description: "Description 1",
    fullDescription: "Full Description 1",
    image: "https://via.placeholder.com/150",
    images: ["https://via.placeholder.com/150", "https://via.placeholder.com/150"],
    tools: ["Tool 1", "Tool 2"],
    githubUrl: "https://github.com/example/project1",
    liveUrl: "https://example.com/project1",
    videos: ["https://www.youtube.com/watch?v=1234567890"],
  },
  {
    id: 2,
    title: "Project 2",
    subtitle: "Subtitle 2",
    description: "Description 2",
    fullDescription: "Full Description 2",
    image: "https://via.placeholder.com/150",
    images: ["https://via.placeholder.com/150"],
    tools: ["Tool 1"],
    githubUrl: "https://github.com/example/project2",
    liveUrl: "https://example.com/project2",
    videos: ["https://www.youtube.com/watch?v=1234567890"],
  },
  {
    id: 3,
    title: "Project 3",
    subtitle: "Subtitle 3",
    description: "Description 3",
    fullDescription: "Full Description 3",
    image: "https://via.placeholder.com/150",
    images: ["https://via.placeholder.com/150"],
    tools: ["Tool 1"],
    githubUrl: "https://github.com/example/project3",
    liveUrl: "https://example.com/project3",
    videos: ["https://www.youtube.com/watch?v=1234567890"],
  },
]; 