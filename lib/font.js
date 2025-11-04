import { Inter, Karla } from 'next/font/google'

export const dmSans = Inter({
    weight: ['400', '500', '600', '700', '800', '900'],
    subsets: ['latin'],
    variable: "--anity-font",
    display: 'swap',
})

export const libreBaskerville = Karla({
    weight: ['400', '700'],
    subsets: ['latin'],
    variable: "--anity-font-two",
    display: 'swap',
})
