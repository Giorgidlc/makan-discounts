import React from 'react'
import { SessionProvider } from 'next-auth/react'
import '../globals.css'
import './styles.css'

export const metadata = {
  title: 'Descuento MAKAN',
  description: 'Descuento exclusivo para trabajodores de TAI en MAKAN de Recoletos.',
}

export default async function RootLayout(props: { children: React.ReactNode }) {
  const { children } = props

  return (
    <html lang="es">
      <head>
        <style>
          @import
          url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap');
        </style>
      </head>
      <body>
        <SessionProvider>{children}</SessionProvider>
      </body>
    </html>
  )
}
