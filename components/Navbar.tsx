import React from "react"

export const Navbar = () => {
    return (
        <nav className="bg-gray d-flex justify-content-center pt-3 pb-3 position-fixed w-100">
            <div className="container-fluid d-flex justify-content-center">
                <a className="navbar-brand me-5" href="/">
                    <img className="img-fluid" src="/logo-nav.svg" alt="logo-nav.svg" />
                </a>
                <button className="navbar-button d-md-none d-block" type="button" >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="sidebar d-flex gap-3 align-items-center" id="navbarNavAltMarkup">
                    <a className="nav-link text-white fw-lighter" href="/sobre-nos">QUEM SOMOS</a>
                    <a className="nav-link text-white fw-lighter" href="/servicos">SERVIÇOS</a>
                    <a className="nav-link text-white fw-lighter" href="/jobs">JOBS</a>
                    <a className="nav-link text-white fw-lighter" href="/produtos">PRODUTOS</a>
                    <a className="nav-link text-white fw-lighter" href="/contato">CONTATO</a>
                </div>
            </div>
        </nav>
    )
}