import "./globals.css";
import '@radix-ui/themes/styles.css';
import { Theme } from '@radix-ui/themes';
export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="mx-auto max-w-md">
      
        <Theme> 
          {children}
        </Theme>
        
        </body>
    </html>
  );
}
