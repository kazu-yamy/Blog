import { Footer } from "../../components/Blog/Footer";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <div>{children}</div>
      <Footer />
    </div>
  );
}
