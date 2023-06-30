import { Roboto_Mono, Roboto } from 'next/font/google'

export const robotoMono = Roboto_Mono({ subsets: ['latin'], variable: '--font-roboto-mono' });

export const roboto = Roboto({ subsets: ['latin'], weight: ['300', '400'], variable: '--font-roboto' });