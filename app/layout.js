
import { ClerkProvider } from "@clerk/nextjs";
import "./globals.css"

export const metadata = {
  title: "Helpdesk",
  description: "Role-based support system",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body>{children}</body>
      </html>
    </ClerkProvider>
  );
}
