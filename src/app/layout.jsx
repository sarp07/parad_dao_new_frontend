import Footer from "./components/common/footer";
import Header from "./components/common/header";
import "./globals.css";

export const metadata = {
   title: "Parad Website",
   description: "paradpadar",
};

export default function RootLayout({ children }) {
   return (
      <html lang="en">
         <body className={`antialiased`}>
            <>
               <Header /> {children} <Footer />
            </>
         </body>
      </html>
   );
}
