import Image from "next/image"
import React from "react"
import { ContactComponent } from "../components/ContactComponent"
import { Divider } from '../components/Divider'

export default function Products () {
    return (
        <section className="pt-10 pb-5  mb-5 container">
            <Image className="Image-fluid" src="/image-products.png" alt="image-products.png" />

            <ContactComponent />
            <Divider />
        </section>
    )
}