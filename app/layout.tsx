 
import './tailwind.css'

export const metadata = {
  title: 'Shepherd Bikes',
  description: 'Shepherd custom bikes, bike clothing',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className='w-100 h-screen  '>{children}</body>
    </html>
  )
}
 