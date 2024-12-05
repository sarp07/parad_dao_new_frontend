import Footer from "./components/common/footer";
import Header from "./components/common/header";
import "./globals.css";

export const metadata = {
  title: "Parad - Your Gateway to Crypto",
  description: "Track, swap, and manage Parad tokens effortlessly.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`antialiased overflow-x-hidden`}>
        <div className="overflow-x-hidden">
          <Header /> {children} <Footer />
        </div>
      </body>
    </html>
  );
}
