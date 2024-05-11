import { Metadata } from "next";
import "../../../styles/custom.scss";
import "../../../styles/globals.css";
import PortfolioProfile from "../../components/Portfolio/PortfolioProfile";
import PortfolioSidebarNavigation from "../../components/Portfolio/PortfolioSidebarNavigation";
import PortfolioNavigation from "../../components/Portfolio/PortfolioNavigation";
import bg from "../../../assets/images/background-portfolio-1.jpg";
export const metadata: Metadata = {
  title: "Home",
  description: "Welcome to Next.js",
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
