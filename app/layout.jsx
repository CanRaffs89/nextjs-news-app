import '../styles/globals.scss'
import { roboto, robotoMono } from './utils/font'
import Navbar from './components/Navbar'
import SearchBar from './components/SearchBar'
import Footer from './components/Footer'

export const metadata = {
  title: 'Tech Digest',
  description: 'A Next JS technology and gaming news app powered by GNews API',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={robotoMono.className}>
        <Navbar />
        <SearchBar/>
        {children}
        <Footer />
      </body>
    </html>
  )
}
