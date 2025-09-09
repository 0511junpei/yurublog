import Footer from "@/app/_components/footer";
import { BLOG_NAME } from "@/lib/constants";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

import "./globals.css";
import Header from "./_components/header";
import Container from "./_components/container";
import Sidebar from "./_components/sidebar";
import ToastProvider from "./_components/toast-provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: `${BLOG_NAME}`,
  description: `${BLOG_NAME}`,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <head>
        <link rel="icon" href="/assets/favicon/favicon.ico"></link>
      </head>
      <body>
        <Header />
        <div className="bg-gray-300">
          <Container>
            <div className="py-4">
              <div className="grid grid-cols-1 md:grid-cols-7 gap-5 ">
                <div className="col-span-5 item bg-white rounded-lg">
                  <ToastProvider>{children}</ToastProvider>
                </div>
                <div className="col-span-2 item bg-white rounded-lg mb-auto">
                  <Sidebar />
                </div>
              </div>
            </div>
          </Container>
        </div>
        <Footer />
      </body>
    </html>
  );
}
