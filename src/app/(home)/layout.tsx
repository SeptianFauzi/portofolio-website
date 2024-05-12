import { Metadata, Viewport } from "next";
import "../../../styles/custom.scss";
import "../../../styles/globals.css";
import PortfolioProfile from "../../components/Portfolio/PortfolioProfile";
import PortfolioSidebarNavigation from "../../components/Portfolio/PortfolioSidebarNavigation";
import PortfolioNavigation from "../../components/Portfolio/PortfolioNavigation";
import bg from "../../../assets/images/background-portfolio-1.webp";
export const metadata: Metadata = {
  title: "Septian Fauzi - Frontend Developer",
  description:
    "Septian Fauzi is a skilled front-end developer with over 3 years of experience in website development. Specializing in HTML, CSS, JavaScript, TypeScript, ReactJS, Next.JS, and more, he creates engaging and responsive web experiences. Hire Septian Fauzi for your next project and elevate your online presence today.",
  icons: {
    icon: { url: "/favicon.ico" },
  },
  keywords: [
    "portfolio",
    "septianfauzi",
    "septian",
    "fauzi",
    "developer",
    "frontend",
    "Bogor",
    "West Java",
    "Indonesia",
    "Website Developer",
    "Web Developer",
    "Frontend Developer",
    "ReactJS Developer",
    "NextJS Developer",
    "Laravel Developer",
    "TailwindCSS Developer",
    "TypeScript Developer",
    "JavaScript Developer",
    "HTML5",
    "CSS3",
    "JavaScript",
    "Responsive Web Design",
    "Front-End Development",
    "Web Development",
    "Bootstrap",
    "jQuery",
    "Mobile First Design",
    "Progressive Web Apps",
    "UI/UX Design",
    "Sass",
    "Less",
    "CSS Grid",
    "Flexbox",
    "Browser Compatibility",
    "Cross-Browser Compatibility",
    "Accessibility",
    "Performance Optimization",
    "SEO Best Practices",
    "Web Standards",
    "Git",
    "Version Control",
    "Front-End Frameworks",
    "Front-End Libraries",
    "ES6",
    "TypeScript",
    "AJAX",
    "JSON",
    "Front-End Architecture",
    "Modular Design",
    "Component-Based Development",
    "Front-End Tooling",
    "Task Runners",
    "Build Tools",
    "Package Managers",
    "Browser Developer Tools",
    "Debugging",
    "Front-End Testing",
    "Unit Testing",
    "Integration Testing",
    "Responsive Images",
    "Media Queries",
    "Front-End Optimization",
    "Code Minification",
    "Code Splitting",
    "Lazy Loading",
    "Progressive Enhancement",
    "Single Page Applications (SPAs)",
    "Web Performance Metrics",
    "User Interface (UI)",
    "User Experience (UX)",
    "Design Systems",
    "Wireframing",
    "Prototyping",
    "Color Theory",
    "Typography",
    "Iconography",
    "Animation",
    "Front-End Security",
    "Cross-Site Scripting (XSS)",
    "Content Security Policy (CSP)",
    "Front-End Trends",
    "Web Accessibility Guidelines (WCAG)",
    "ARIA Roles",
    "Usability Testing",
    "Design Patterns",
  ],
  openGraph: {
    title: "Septian Fauzi - Frontend Developer",
    description: "Personal Portfolio of Septian Fauzi",
    url: "https://septianfauzi.com",
  },
  twitter: {
    title: "Septian Fauzi - Frontend Developer",
    description: "Personal Portfolio of Septian Fauzi",
    card: "summary_large_image",
    creator: "@septianfauzi",
  },
  metadataBase: new URL("https://septianfauzi.com"),
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  creator: "Septian Fauzi",
  publisher: "Septian Fauzi",
  referrer: "origin-when-cross-origin",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  themeColor: "light",
  colorScheme: "light",
};
export default function RootLayout({
  // Layouts must accept a children prop.
  // This will be populated with nested layouts or pages
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <div
          className="h-screen w-screen bg-cover bg-center flex justify-center fixed overflow-x-hidden overflow-y-auto"
          style={{ backgroundImage: `url(${bg.src})` }}
        >
          <div className="container">
            <PortfolioNavigation />
            <div className="flex gap-3 md:px-4 flex-col lg:flex-row px-4 pb-8">
              <PortfolioProfile />
              {children}
              <PortfolioSidebarNavigation />
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
