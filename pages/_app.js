import "@/node_modules/react-modal-video/css/modal-video.css"
import "@/public/assets/css/style.css"
import 'swiper/css'
// import "swiper/css/navigation"
import "swiper/css/pagination"
import 'swiper/css/free-mode';
import Head from 'next/head'

export default function App({ Component, pageProps }) {
    return (
        <>
            <Head>
                <title>CLHEI</title>
                <meta name="description" content="Community for Learning, Health and Education Initiatives" />
                <link rel="icon" href="/assets/images/resources/favicon.png" />
            </Head>
            <Component {...pageProps} />
        </>
    )
}
