import TopBar from "@/app/components/TopBar";
import Footer from "@/app/components/Footer";

export default function DetailLayout({
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
