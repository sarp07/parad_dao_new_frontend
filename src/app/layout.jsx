import Footer from "./components/common/footer";
import Header from "./components/common/header";
import "./globals.css";

export const metadata = {
  title: "parad",
  description: "paradpadar",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      style={{
        scrollBehavior: "smooth",
        "--vw": "10.28px",
        "--dvh": "9.28px",
        "--svh": "9.28px",
        "--lvh": "1vh",
      }}
    >
      <body className="antialiased">
        <>
          <Header /> {children} <Footer />
        </>
      </body>
    </html>
  );
}
