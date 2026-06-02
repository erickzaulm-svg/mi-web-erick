import "./globals.css";
import Carcasa from "./components/Carcasa";

export const metadata = {
  title: "Mi Sede Frutiger Aero",
  description: "Mi sitio web personal",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body>
        <Carcasa>
          {children}
        </Carcasa>
      </body>
    </html>
  );
}