import { Navbar } from "./components/navbar";
import "./globals.css";
import { montserrat, playfair_Display } from "./utilities";
import "animate.css";
import "aos/dist/aos.css";

export const metadata = {
  title: "Real estate website",
  description: "A website showing real estate listings",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${montserrat.variable} ${playfair_Display.variable}`}
    >
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
