import "@styles/globals.css";
import NavBar from "@components/NavBar";

export const metadata = {
  title: "Computerizer",
  description: "Your go to PC website!",
};

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <NavBar />
        <main className="pt-20">{children}</main>
      </body>
    </html>
  );
};

export default RootLayout;
