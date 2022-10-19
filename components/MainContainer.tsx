import Head from "next/head"
import Script from "next/script"
import React from "react"
import { Footer } from "./Footer"
import { Navbar } from "./Navbar"

export default function MainContainer ({ children }) {
    return (
        <>
            <Head>
                <title>QRIA tech</title>
                <meta name="description" content="QRIA tech. Empresa de serviços digitais" />
                <link rel="icon" href="/favicon.svg" />
                <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css" rel="stylesheet" />
            </Head>
            <Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/js/bootstrap.bundle.min.js" />
            <Navbar />

            <main>{children}</main>

            <Footer />
        </>
    )
}