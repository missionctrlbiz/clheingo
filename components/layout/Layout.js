
'use client'
import { useEffect, useState } from "react"
import BackToTop from '../elements/BackToTop'
import DataBg from "../elements/DataBg"
import Breadcrumb from './Breadcrumb'
import SearchPopup from "./SearchPopup"
import Sidebar from "./Sidebar"
import Header1 from "./header/Header1"
import Header2 from './header/Header2'
import Header3 from "./header/Header3"
import Header4 from "./header/Header4"
import Header5 from "./header/Header5"
import Footer1 from './footer/Footer1'
import Footer2 from './footer/Footer2'
import Footer3 from "./footer/Footer3"

export default function Layout({ headerStyle, footerStyle, headTitle, breadcrumbTitle, children, wrapperCls }) {
    const [scroll, setScroll] = useState(0)
    // Mobile Menu
    const [isMobileMenu, setMobileMenu] = useState(false)
    const handleMobileMenu = () => {
        setMobileMenu(!isMobileMenu)
        !isMobileMenu ? document.body.classList.add("mobile-menu-visible") : document.body.classList.remove("mobile-menu-visible")
    }

    // Popup
    const [isPopup, setPopup] = useState(false)
    const handlePopup = () => setPopup(!isPopup)

    // Sidebar
    const [isSidebar, setSidebar] = useState(false)
    const handleSidebar = () => setSidebar(!isSidebar)

    useEffect(() => {
        // Replace wowjs with a lightweight IntersectionObserver-based trigger.
        // It looks for elements with the `wow` class and, when they enter
        // the viewport, it applies animation-related inline styles from
        // data attributes (data-wow-delay, data-wow-duration, data-wow-iteration)
        // and adds the `animated` class so existing CSS animation classes (e.g. "fadeInUp") run.
        let observer = null
        try {
            const nodes = () => Array.from(document.querySelectorAll('.wow'))

            const applyDataAttributes = (el) => {
                // data-wow-delay / data-wow-duration are typically like ".5s" or "100ms"
                const delay = el.getAttribute('data-wow-delay') || el.dataset.wowDelay
                const duration = el.getAttribute('data-wow-duration') || el.dataset.wowDuration
                const iteration = el.getAttribute('data-wow-iteration') || el.dataset.wowIteration
                if (delay) el.style.animationDelay = delay
                if (duration) el.style.animationDuration = duration
                if (iteration) el.style.animationIterationCount = iteration
            }

            const handleIntersect = (entries, obs) => {
                for (const entry of entries) {
                    const el = entry.target
                    if (entry.isIntersecting) {
                        applyDataAttributes(el)
                        // Add a marker so we don't retrigger repeatedly
                        if (!el.classList.contains('animated')) el.classList.add('animated')
                        el.classList.remove('wow')
                        obs.unobserve(el)
                    }
                }
            }

            if (typeof window !== 'undefined' && 'IntersectionObserver' in window) {
                observer = new IntersectionObserver(handleIntersect, {
                    root: null,
                    rootMargin: '0px 0px -10% 0px',
                    threshold: 0.05,
                })

                nodes().forEach((el) => {
                    // prepare element with initial styles if provided
                    const delay = el.getAttribute('data-wow-delay') || el.dataset.wowDelay
                    const duration = el.getAttribute('data-wow-duration') || el.dataset.wowDuration
                    if (delay) el.style.animationDelay = delay
                    if (duration) el.style.animationDuration = duration
                    observer.observe(el)
                })
            } else {
                // Fallback: mark all as visible so animations still run on older browsers
                nodes().forEach((el) => {
                    applyDataAttributes(el)
                    if (!el.classList.contains('animated')) el.classList.add('animated')
                    el.classList.remove('wow')
                })
            }
        } catch (err) {
            if (process.env.NODE_ENV !== 'production') {
                // eslint-disable-next-line no-console
                console.warn('IntersectionObserver init failed for .wow fallback to immediate', err)
            }
        }
        const onScroll = () => {
            const current = window.scrollY > 100
            setScroll(prev => (prev !== current ? current : prev))
        }

        document.addEventListener('scroll', onScroll)
        return () => {
            document.removeEventListener('scroll', onScroll)
            try {
                if (observer && typeof observer.disconnect === 'function') observer.disconnect()
            } catch (e) { /* ignore */ }
        }
    }, [])
    return (
        <>
            <DataBg />
            <div className={`page-wrapper ${wrapperCls ? wrapperCls : ""}`} id="#top">
                {!headerStyle && <Header1 scroll={scroll} isMobileMenu={isMobileMenu} handleMobileMenu={handleMobileMenu} handlePopup={handlePopup} isSidebar={isSidebar} handleSidebar={handleSidebar} />}
                {headerStyle == 1 ? <Header1 scroll={scroll} isMobileMenu={isMobileMenu} handleMobileMenu={handleMobileMenu} handlePopup={handlePopup} isSidebar={isSidebar} handleSidebar={handleSidebar} /> : null}
                {headerStyle == 2 ? <Header2 scroll={scroll} isMobileMenu={isMobileMenu} handleMobileMenu={handleMobileMenu} handlePopup={handlePopup} isSidebar={isSidebar} handleSidebar={handleSidebar} /> : null}
                {headerStyle == 3 ? <Header3 scroll={scroll} isMobileMenu={isMobileMenu} handleMobileMenu={handleMobileMenu} handlePopup={handlePopup} isSidebar={isSidebar} handleSidebar={handleSidebar} /> : null}
                {headerStyle == 4 ? <Header4 scroll={scroll} isMobileMenu={isMobileMenu} handleMobileMenu={handleMobileMenu} handlePopup={handlePopup} isSidebar={isSidebar} handleSidebar={handleSidebar} /> : null}
                {headerStyle == 5 ? <Header5 scroll={scroll} isMobileMenu={isMobileMenu} handleMobileMenu={handleMobileMenu} handlePopup={handlePopup} isSidebar={isSidebar} handleSidebar={handleSidebar} /> : null}


                <Sidebar isSidebar={isSidebar} handleSidebar={handleSidebar} />
                <SearchPopup isPopup={isPopup} handlePopup={handlePopup} />

                {breadcrumbTitle && <Breadcrumb breadcrumbTitle={breadcrumbTitle} />}

                {children}

                {!footerStyle && < Footer1 />}
                {footerStyle == 1 ? < Footer1 /> : null}
                {footerStyle == 2 ? < Footer2 /> : null}
                {footerStyle == 3 ? < Footer3 /> : null}
            </div>
            <BackToTop scroll={scroll} />
        </>
    )
}
