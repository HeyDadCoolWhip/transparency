import './globals.css'

export const metadata = {
  title: 'transparency',
  description: 'transparency - web app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
