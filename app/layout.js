import Navbar from "../app/components/NavBar";
export const metadata = {
  title: 'Probando Next.js',
  description: 'Generated by Next.js',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
       <Navbar/>
        {children}
      </body>
    </html>
  )
}
