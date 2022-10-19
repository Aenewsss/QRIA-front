import React from "react"
import { ContactComponent } from "../components/ContactComponent"
import { Divider } from '../components/Divider'

export default function Jobs() {
    return (
        <section className="pt-10 pb-5  mb-5 container">
            <h1 className="display-1 text-center">JOBS PAGE</h1>
            <ContactComponent />
            <Divider />
        </section>
    )
}