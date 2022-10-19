import Image from "next/image"
import React from "react"
import { ContactComponent } from "../components/ContactComponent"
import { Divider } from '../components/Divider'

export default function About() {
    return (
        <section className="pt-10 pb-5  mb-5 container">
            <img className="img-fluid" src="/image-about.png" alt="image-about.png" />

            <ContactComponent />
            <Divider />
        </section>
    )
}