import React from "react"
import { Divider } from "./Divider"

export const PorfolioMain = () => {
    return (
        <section className="pt-5 pb-5 container mb-5 mt-5">
            <h2 className="display-2 text-start mb-5 pb-5">Mais Recentes <br /> Portfolio Jobs.</h2>

            <div className="row mt-5 pt-5 mb-5">
                <div className="col-md-6">

                    {/* THIAGOS  */}
                    <div className="d-flex justify-content-between mb-5">
                        <div className="d-flex flex-column gap-3">
                            <h3 className="text-start display-5">
                                Website <br />
                                Thiagos Prime
                            </h3>
                            <p className="text-l-gray">UX UI Design - Front End - Back End</p>
                        </div>
                        <img src="/arrow-right.svg" alt="arrow-right.svg" width={60} />
                    </div>
                    <Divider />


                    {/* VINUM  */}
                    <div className="d-flex justify-content-between mt-5">
                        <div className="d-flex flex-column gap-3">
                            <h3 className="text-start display-5 gradient-text">
                                Website <br />
                                Vinum
                            </h3>
                            <p className="text-l-gray">UX UI Design - Front End - Back End</p>
                        </div>
                        <img src="/arrow-right.svg" alt="arrow-right.svg" width={60} />
                    </div>
                    <Divider />


                </div>
                <div className="col-md-6"></div>
            </div>

            <a href="/jobs" className="text-pink mt-5 ">
                PRÓXIMOS JOBS
                <img className="ms-2 align-middle" src="/arrow-right.svg" alt="arrow-right.svg" />
            </a>
        </section>
    )
}
