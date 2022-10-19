import Image from "next/image"
import React from "react"
import { ContactComponent } from "../components/ContactComponent"
import { Divider } from '../components/Divider'

export default function Jobs() {
    return (
        <section className="pt-10 pb-5  mb-5 container">

            <img className="img-fluid mb-5" src="/image-services.png" alt="image-services.png" />

            <div className="row mt-5 pt-5 mb-5 pb-5">
                <div className="col-md-6 d-flex justify-content-start">
                    <h2 className="display-3 text-white">Design de Produtos <br /> Digitais</h2>
                </div>
                <div className="col-md-6 d-flex justify-content-start align-items-center fs-5">
                    <p className="text-l-gray">
                        Geramos uma melhor experiência para seu produto por
                        meio de User Experience Design, User Interface Design
                        e testes de usabilidade.
                    </p>
                </div>
            </div>
            <Divider margin={5} />

            <div className="row mt-5 pt-5 mb-5 pb-5">
                <div className="col-md-6 d-flex justify-content-start">
                    <p className="text-l-gray">
                        De uma tela &quot;bonitinha&quot; e funcional a sistemas robustos com toda
                        estrutura Front-End, Back-End com APIs e Integrações.
                    </p>
                </div>
                <div className="col-md-6 d-flex justify-content-start align-items-center fs-5">
                    <h2 className="display-3 text-white">Desenvolvimento</h2>

                </div>
            </div>
            <Divider margin={5} />

            <div className="row mt-5 pt-5 mb-5 pb-5">
                <div className="col-md-6 d-flex justify-content-start">
                    <h2 className="display-3 text-white">Branding</h2>
                </div>
                <div className="col-md-6 d-flex justify-content-start align-items-center fs-5">
                    <p className="text-l-gray">
                        Gestão de marca tais como seu nome, imagens, símbolos, logotipos e outros elementos de identidade visual que a representam ou aos seus produtos e serviços.

                    </p>
                </div>
            </div>
            <Divider margin={5} />

            <div className="row mt-5 pt-5 mb-5 pb-5">
                <div className="col-md-6 d-flex justify-content-start">
                    <p className="text-l-gray">
                        Acompanhamos as métricas do seu negócio digital e
                        ajudamos mensurar o impacto do negócio e apresentamos
                        soluções para a evolução do seu negócio.
                    </p>
                </div>
                <div className="col-md-6 d-flex justify-content-start align-items-center fs-5">
                    <h2 className="display-3 text-white">Monitoramento</h2>

                </div>
            </div>
            <Divider margin={5} />

            <div className="row mt-5 pt-5 mb-5 pb-5">
                <div className="col-md-6 d-flex justify-content-start">
                    <h2 className="display-3 text-white">Social media</h2>
                </div>
                <div className="col-md-6 d-flex justify-content-start align-items-center fs-5">
                    <p className="text-l-gray">
                        Acompanhamos o crescimento das redes sociais do seu negócio,
                        procurando ampliar alcance da empresa e aproximação com o cliente
                    </p>
                </div>
            </div>
            <Divider margin={5} />

            <div className="row mt-5 pt-5 mb-5 pb-5">
                <div className="col-md-6 d-flex justify-content-start">
                    <p className="text-l-gray">
                        Anúncios intuitivos que vão ajudar a alavancar
                        suas vendas de maneita assertiva!
                    </p>
                </div>
                <div className="col-md-6 d-flex justify-content-start align-items-center fs-5">
                    <h2 className="display-3 text-white">Tráfego Pago</h2>

                </div>
            </div>
            <Divider margin={5} />

            <ContactComponent />
            <Divider />
        </section>
    )
}