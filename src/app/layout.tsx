import type { Metadata } from "next";
import { Inter } from "next/font/google";
import ReduxProvider from '../store/ReduxProvider'
import store from '../store/store'
import AuthProvider from '@/component/AuthProvider/AuthProvider'

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <ReduxProvider>
          <AuthProvider>            
              {children}           
          </AuthProvider>
          </ReduxProvider>
      </body>
    </html>
  );
}
