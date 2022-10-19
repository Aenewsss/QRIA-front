import Head from "next/head"
import React from "react"
import { Footer } from "./Footer"
import { Navbar } from "./Navbar"

export const MainContainer = ({ children }) => {
    return (
        <>
            <Head>
                <title>QRIA tech</title>
                <meta name="description" content="QRIA tech. Empresa de serviços digitais" />
                <link rel="icon" href="/favicon.svg" />
                <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css" rel="stylesheet" />
                <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/js/bootstrap.bundle.min.js"></script>
            </Head>

            <Navbar />

            <div>{children}</div>

            <Footer />
        </>
    )
}