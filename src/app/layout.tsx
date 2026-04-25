import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Anum Ahtesham | Full Stack & Agentic AI Developer",
  description:
    "Portfolio of Anum Ahtesham — Full Stack Developer & Agentic AI Developer specializing in Next.js, TypeScript, Python, and AI-powered applications.",
  keywords: [
    "Full Stack Developer", "Agentic AI Developer", "Next.js",
    "TypeScript", "React", "Python", "FastAPI", "RAG", "AI Chatbot",
  ],
  authors: [{ name: "Anum Ahtesham" }],
  openGraph: {
    title: "Anum Ahtesham | Full Stack & Agentic AI Developer",
    description: "Building modern web apps with AI-powered experiences",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    /*
     * suppressHydrationWarning: ThemeProvider adds/removes "dark" class on
     * the html element after hydration — suppressing the mismatch warning.
     *
     * Default class="dark": prevents white flash before JS runs.
     * ThemeProvider will override this with the user's saved preference.
     */
    <html lang="en" className="dark" suppressHydrationWarning>
      <body className={`${inter.variable} ${poppins.variable} font-sans antialiased w-full min-h-screen`}>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
