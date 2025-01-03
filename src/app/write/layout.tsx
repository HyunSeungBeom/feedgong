import Footer from "../components/Footer";
import TopBar from "../components/TopBar";

export default function WriteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <TopBar />
      <main className="flex-1 my-10">{children}</main>
      <Footer />
    </>
  );
}
