import "@styles/globals.css";
import Box from "./components/box";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <main>
          {children}
          <Box />
        </main>
      </body>
    </html>
  );
}
