import QRScanner from '@/components/QRScanner'

export const metadata = {
  title: 'Validador de Entradas — Codigo exclusivo',
}

export default function ValidarPage() {
  return (
    <main className="page-container dark">
      <QRScanner />
    </main>
  )
}
