// import Image from "next/image"
import Link from "next/link"
import React from "react"

export const Transform = () => {
    return (
        <section className="pt-5 pb-5 mt-5 mb-5 container">
            <div className="row">
                <div className="col-md-8 d-flex justify-content-start">
                    <h2 className="display-3 text-white">Transformação Digital <br /> É O Futuro!</h2>
                </div>
                <div className="col-md-4 d-flex justify-content-start align-items-center fs-5">
                    <p className="text-l-gray">
                        As empresas hoje em dia precisam ser modernas e devem
                        acompanhar os avanços tecnológicos que não param de
                        surgir. Não há empresa no mundo que não tenha sido
                        impactada por esse processo.</p>
                </div>
            </div>

            <div className="row mt-5 d-flex align-items-center">
                <div className="col-md-6 d-flex justify-content-start">
                    <img className="img-fluid" src="/trio-image.png" alt="trio-image.png" />
                </div>

                <div className="col-md-6 d-flex flex-column justify-content-start">
                    <h2 className="display-5 text-white">Focamos Na Excelência De Nossas Entregas!</h2>
                    <p className="text-l-gray mt-4 fs-5">
                        Somos movidos a desafios de fazer o seu negócio aparecer e realmente ser reconhecido na internet.
                    </p>
                    <Link href="/jobs" className="text-pink mt-4">
                        <a>
                            CONHEÇA NOSSOS TRABALHOS
                            <img className="ms-2 align-middle img-fluid" src="/arrow-right.svg" alt="arrow-right.svg" />
                        </a>
                    </Link>
                </div>
            </div>

            <div className="row mt-5 d-flex align-items-center">
                <div className="col-md-6 d-flex justify-content-start flex-column">
                    <h2 className="display-5 text-white">Jeito QRIA Tech de ser</h2>
                    <p className="text-l-gray mt-4 fs-5">
                        Cada projeto é único e não costumamos trabalhar para clientes e sim COM os clientes,
                        uma equipe altamente capacitada para entregar sempre o melhor.
                    </p>
                    <Link href="/produtos" className="text-pink mt-4">
                        <a>
                            NOSSOS PRODUTOS
                            <img className="ms-2 align-middle img-fluid" src="/arrow-right.svg" alt="arrow-right.svg" />
                        </a>
                    </Link>
                </div>

                <div className="col-md-6 d-flex justify-content-end">
                    <img className="img-fluid" src="/tech-images.png" alt="trio-image.png" />

                </div>
            </div>
        </section>
    )
}