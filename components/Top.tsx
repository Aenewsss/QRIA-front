import Image from "next/image"

export const Top = () => {
    return (
        <section className="pt-10 pb-10 d-flex justify-content-center align-items-center  bg-top">
            <div className="position-relative container pt-5 pb-5 d-flex flex-column justify-content-center align-items-center">
                <h1 className="display-1 text-center fw-bold pt-5 pb-5">
                    Somos
                    <p className="gradient-text">
                        Fermentadores
                    </p>
                    De Suas Ideias.
                </h1>
                <img className="pt-5 mt-5" src="/arrow-down.svg" alt="arrow-down.svg"/>
            </div>
        </section>
    )
}