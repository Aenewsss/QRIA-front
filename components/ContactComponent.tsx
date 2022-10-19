import Image from "next/image"
import Link from "next/link"
import React from "react"

export const ContactComponent = () => {
    return (
        <section className="pt-5 mt-5 pb-5 container">
            <div className="row ">
                <div className="col-md-6">
                    <h2 className="display-2 text-start mb-5 pb-5 gradient-text2 fw-bold">
                        Ajudamos Você A <br />
                        Transformar Ideias <br />
                        Em Realidade
                    </h2>
                    <div className="d-flex gap-3 mt-5 pt-5">
                        <Link href="/contato" className="link-social text-secondary mt-3 ls fs-5"><a>LINKEDIN</a></Link>
                        <Link href="/contato" className="link-social text-secondary mt-3 ls fs-5"><a>GITHUB</a></Link>
                        <Link href="/contato" className="link-social text-secondary mt-3 ls fs-5"><a>INSTAGRAM</a></Link>
                    </div>
                </div>
                <div className="col-md-6">
                    <form action="" className=" d-flex flex-column gap-5 pe-5 ps-5">
                        <input className="bg-transparent border-0 pt-3 border-bottom text-white ps-5" placeholder="Nome *" type="text" />
                        <input className="bg-transparent border-0 pt-3 border-bottom text-white ps-5" placeholder="Email *" type="text" />
                        <input className="bg-transparent border-0 pt-3 border-bottom text-white ps-5" placeholder="Mensagem *" type="text" />
                        <Link href="/contato" className="text-pink mt-3 fw-bold">
                            <a>
                                ENTRAR EM CONTATO
                                <img className="ms-2 align-middle img-fluid" src="/arrow-right.svg" alt="arrow-right.svg"/>
                            </a>
                        </Link>
                    </form>
                </div>
            </div>

        </section>
    )
}
