import { Raleway } from "next/font/google";
import "./globals.css";

const raleway = Raleway({
  weight: ['400','500','600','700'],
  subsets: ['latin'],
});

export const metadata = {
  title: "A & B - Estudio de abogados",
  description: "Estudio de abogados con una trayectoria de mas de 30 años en Cordoba Capital",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={raleway.className}>{children}</body>
    </html>
  );
}
