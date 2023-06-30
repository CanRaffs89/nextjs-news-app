import '../styles/globals.scss'
import { roboto, robotoMono } from './utils/font'
import Navbar from './components/Navbar'
import SearchBar from './components/SearchBar'

export const metadata = {
  title: 'News App',
  description: 'A Next JS news app powered by GNews API',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={robotoMono.className}>
        <Navbar />
        <SearchBar/>
        {children}
      </body>
    </html>
  )
}
