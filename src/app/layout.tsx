'use client';

import Header from "./components/header";
import Footer from "./components/footer";
import { overpass } from "./components/fonts";
import "./globals.css";
import { motion, AnimatePresence } from "framer-motion";



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${overpass.className} antialiased`}>
        <Header />
        <motion.div
        initial={{ opacity: 0, }}
        animate= {{ opacity: 1, }}
        transition={{ duration: 1 }}
        exit={{ opacity: 0, x: -400 }}
        >
          {children}
        </motion.div>
        <Footer />   
      </body>
    </html>
  );
}
