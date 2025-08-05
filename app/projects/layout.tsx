import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects",
  description: "Explore my portfolio of creative projects including web development, design campaigns, and digital solutions. From web apps to creative campaigns, discover my work across various industries.",
  openGraph: {
    title: "Projects | Cesar Paublini",
    description: "Explore my portfolio of creative projects including web development, design campaigns, and digital solutions.",
  },
};

export default function ProjectsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
} 