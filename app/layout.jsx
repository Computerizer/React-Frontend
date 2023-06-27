import "@styles/globals.css";
import NavBar from "@components/navbar/NavBar";
import Footer from "@components/Footer";

export const metadata = {
  title: "Computerizer",
  description: "Your go to PC website!",
};

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <NavBar />
        <main className="lg:pt-20">{children}</main>
        <Footer />
      </body>
    </html>
  );
};

export default RootLayout;
