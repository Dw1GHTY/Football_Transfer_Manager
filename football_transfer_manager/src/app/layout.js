import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from './Navbar'

const inter = Inter({ subsets: ['latin'] })

//<head> elementi
export const metadata = {
  title: 'FTM',
  description: 'Football transfer application | Next.js + Neo4J',
}

//RootLayout mora da ima <html> i <body tagove>
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div class='container mx-auto'>
          <Navbar />
          {children}  {/* div u page.js */}
        </div>
      </body>
    </html>
  )
}
