import "@/node_modules/react-modal-video/css/modal-video.css"
import "@/public/assets/css/style.css"
import 'swiper/css'
// import "swiper/css/navigation"
import "swiper/css/pagination"
import 'swiper/css/free-mode';

export const metadata = {
    title: 'Anity',
    description: 'Charity & Donation react next Js template',
}

export default function RootLayout({ children }) {
    return (
        <html lang="en" style={{ '--anity-font': 'Inter, system-ui, sans-serif', '--anity-font-two': 'Karla, sans-serif' }}>
            <head>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
                <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&family=Karla:wght@400;700&display=swap" rel="stylesheet" />
            </head>
            <body>{children}</body>
        </html>
    )
}
