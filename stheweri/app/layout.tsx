import '../styles/globals.css'
import ThemeToggle from '../components/ThemeToggle'
export const metadata = { title: 'StheW — Sneakers on the Weri', description: 'StheW — Sneakers on the Weri. Streetwear clean.' }
export default function RootLayout({children}:{children:React.ReactNode}){
  return (
    <html lang="pt-BR">
      <body>
        <header className="container header"><ThemeToggle/></header>
        {children}
        <footer className="footer container"><small>© 2025 Sneakers on the Weri — Fundado por Mateus Silva & Guilherme Fonseca</small></footer>
      </body>
    </html>
  )
}
