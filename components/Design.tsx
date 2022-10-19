import Image from "next/image"
import Link from "next/link"
import React from "react"

export const Design = () => {
    return (
        <section className="pt-5 pb-5 mt-5 mb-5 d-flex justify-content-center flex-column align-items-center">
            <div className="position-relative">
                <img className="img-fluid" src="/design-images.png" alt="design-images.png" />
                <h2 className="display-3 position-absolute design-text">Design De <br /> Produtos Digitais</h2>
            </div>
            <div className="d-flex flex-column align-items-start w-100 container mt-4">
                <p className="text-l-gray">
                    Geramos uma melhor experiência para seu produto por meio de <br />
                    User Experience Design, User Interface Design e testes de <br />
                    usabilidade, além de desenvolvimento de sites e sistemas <br />
                    robustos.
                </p>
                <Link href="/servicos" className="text-pink mt-5">
                    <a>
                        VER NOSSOS SERVIÇOS
                        <img className="ms-2 align-middle" src="/arrow-right.svg" alt="arrow-right.svg" />
                    </a>
                </Link>
            </div>
        </section>
    )
}