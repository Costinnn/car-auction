import "./globals.css";
import { Poppins } from "next/font/google";
import { headers } from "next/headers";

import { getLanguage } from "@/lib/getLanguage";
import { getServerSession } from "@/lib/getServerSession";

import AuthProvider from "@/lib/AuthProvider";
import Navigation from "@/components/global/Navigation";
import Footer from "@/components/global/Footer";
import getNotifications from "@/lib/getNotifications";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  display: "swap",
  variable: "--font--poppins",
});

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

// export async function generateStaticParams() {
//   return [{ lang: "en-US" }, { lang: "de" }];
// }

export default async function RootLayout({ children, params }) {
  const language = await getLanguage(params.lang);
  const session = await getServerSession(headers().get("cookie") ?? "");
  const notifications = await getNotifications();

  return (
    <html lang={params.lang}>
      <body className={`app ${poppins.variable}`}>
        <AuthProvider>
          <Navigation
            language={language.navigation}
            session={session}
            langParam={params.lang}
            notifications={notifications}
          />
          {children}
          <Footer language={language.footer} />
        </AuthProvider>
      </body>
    </html>
  );
}
