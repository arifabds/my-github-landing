import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Arif Emre Abdusoglu",
  description: "My Github Page",
};

const SiteChatWidget = () => {

  const apiKey = process.env.NEXT_PUBLIC_SITE_CHAT_API_KEY;

  if (!apiKey) {
    if (process.env.NODE_ENV === 'development') {
      console.warn('Site Chat Widget: NEXT_PUBLIC_SITE_CHAT_API_KEY is not defined. Widget will not be rendered.');
    }
    return null;
  }

  return (
    <iframe

      src={`http://localhost/widget-loader?apiKey=${apiKey}`}
      style={{
        position: 'fixed',
        bottom: '20px',
        right: '20px',
        border: 'none',
        width: '320px',
        height: '420px',
        borderRadius: '8px',
        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
        zIndex: 9999,
      }}
      title="Site Chat Widget"
      allow="clipboard-write; encrypted-media"
    ></iframe>
  );
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {/* Ana sayfa içeriği burada render edilecek */}
        {children}

        <SiteChatWidget />
      </body>
    </html>
  );
}