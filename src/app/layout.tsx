import "../styles/globals.css";
import { NavBar } from "../components/Navigation/NavBar";

export const metadata = {
  title: "MACCHA's BLOG",
  description: "My Blog Page",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <body>
        <NavBar />
        {children}
      </body>
    </html>
  );
}
