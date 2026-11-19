// ✏️ EDIT THIS FILE to update the whole website. Empty links ("") show as placeholders.
export type Project = {
  title: string; summary: string; tech: string[]; contribution: string; outcome: string;
  github: string; live: string; mock: "list" | "grid"; features: string[];
};

export const content = {
  name: "Garima Paliwal",
  location: "Nagpur, India",
  email: "garimaplilwa@gmail.com", // ⚠️ check spelling: "paliwal"?
  resumeFile: "/Garima-Paliwal-Resume.docx",
  photo: "", // e.g. "/garima.jpg" (put the image in /public). Empty shows initials.
  links: { linkedin: "", github: "" }, // PLACEHOLDER: paste your full URLs
  headline: "I build clear, responsive websites that are easy to use.",
  intro:
    "B.Sc. Computer Science student and front-end developer. I turn everyday needs, like finding a college or choosing a laptop, into simple web apps people enjoy using.",
  about: [
    "I'm a third-year B.Sc. Computer Science student in Nagpur with a strong footing in web development and JavaScript. I enjoy the moment a layout comes together on screen and works just as well on a phone as on a laptop.",
    "My learning is project-first: I build something real, find where it breaks, and debug until it works. That habit has made me a quick learner who is comfortable with problem solving and logical thinking.",
    "I'm looking for opportunities where I can apply my skills, keep learning emerging technologies and grow alongside a team.",
  ],
  education: [
    { degree: "Bachelor of Science, Computer Science", school: "Institution name: add here", years: "2024 – 2027", note: "Currently in 3rd year" },
  ],
  skills: [
    { group: "Programming languages", items: ["Python", "PHP", "JavaScript", "C", "C++", "Java"] },
    { group: "Web development", items: ["HTML", "CSS", "Front-end development", "Responsive web design"] },
    { group: "Tools", items: ["VS Code", "Git (basic)"] },
    { group: "Core strengths", items: ["Problem solving", "Debugging", "Quick learning"] },
  ],
  projects: [
    {
      title: "CollegeFinder India",
      summary: "A responsive website for searching and exploring colleges across India, with a simple interface built around the choices students actually make.",
      features: ["Search and filters", "College details", "Favourites", "Comparison", "Applications"],
      tech: ["HTML", "CSS", "JavaScript", "LocalStorage"],
      contribution: "Designed and developed the website and its interface.",
      outcome: "Add what you learned or any feedback you received.",
      github: "", live: "", mock: "list",
    },
    {
      title: "Laptop Shopping Website",
      summary: "A responsive e-commerce site for browsing laptops, with a modern and easy-to-use shopping interface.",
      features: ["Product search", "Cart", "Wishlist", "Login", "Product details"],
      tech: ["HTML", "CSS", "JavaScript"],
      contribution: "Designed and developed the website and its interface.",
      outcome: "Add what you learned or any feedback you received.",
      github: "", live: "", mock: "grid",
    },
  ] as Project[],
  experience: [] as { role: string; org: string; period: string; points: string[] }[], // none in resume yet
  certifications: ["Certificate Course in Computer Awareness", "Certificate Course in Employment Skills"],
  interests: ["Front-end and web development", "Emerging technologies", "Logical problem solving", "Add hobbies here"],
};
