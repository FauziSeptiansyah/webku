import "./globals.css";
import { Montserrat } from "next/font/google";


const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});
export const metadata = {
  title: {
    default: "Webku",
    template: "%s | Nama Website Kamu",
  },

  description: "",
 

};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id">
      <body className={montserrat.className}>
        {children}
      </body>
    </html>
  );
}
