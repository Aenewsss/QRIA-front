import Image from "next/image"
import React from "react"
import { Divider } from "./Divider"

export const Team = () => {
    return (
        <section className="pt-5 pb-5 mt-5 mb-5 container">
            <div className="row mt-5 d-flex align-items-center pb-5">
                <div className="col-md-6 d-flex flex-row">
                    <div className="d-flex flex-column justify-content-start">
                        <div className="d-flex flex-row gap-4">
                            <div className="d-flex flex-column mt-5 pt-5 text-center">
                                <Image src="/rodrigo.png" alt="rodrigo.png" />
                                <h3 className="mt-4 fw-bold">Rodrigo Abreu</h3>
                                <p className="text-l-gray fs-5">Product Design</p>
                            </div>
                            <div className="d-flex flex-column mb-5 pb-5 text-center">
                                <Image src="/davi.png" alt="davi.png" />
                                <h3 className="mt-4 fw-bold">Davi Speck</h3>
                                <p className="text-l-gray fs-5">Arquiteto De Software</p>
                            </div>
                        </div>
                        <div className="d-flex flex-row gap-4">
                            <div className="d-flex flex-column mt-5 pt-5 text-center">
                                <Image src="/ale.png" alt="ale.png" />
                                <h3 className="mt-4 fw-bold">Alexandre Oliveira</h3>
                                <p className="text-l-gray fs-5">Analista De Negócios</p>
                            </div>
                            <div className="d-flex flex-column mb-5 pb-5 text-center">
                                <Image src="/aena.png" alt="aena.png" />
                                <h3 className="mt-4 fw-bold">Aenã Martinelli</h3>
                                <p className="text-l-gray fs-5">Desenvolvedor Full Stack</p>
                            </div>
                        </div>
                    </div>
                    <div className="divider-vertical h-100 ms-5"></div>
                </div>
                <div className="col-md-6 d-flex flex-column justify-content-start">
                    <div className="position-relative">
                        <Image className="Image-fluid" src="/calendar.svg" alt="calendar.svg" />
                        <div className="position-absolute team">
                            <h2 className="display-2 text-white">Mentes <br /> Geniais Por <br /> Trás Da <br /> QRIA</h2>
                            <p className="text-l-gray mt-4 fs-5">
                                Conheça quem realmente faz acontecer na QRIA
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <Divider margin={5} />

        </section>

    )
}