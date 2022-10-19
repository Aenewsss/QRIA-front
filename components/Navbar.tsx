import Image from "next/image"
import Link from "next/link"
import React from "react"

export const Navbar = () => {
    return (
        <nav className="bg-gray d-flex justify-content-center pt-3 pb-3 position-fixed w-100">
            <div className="container-fluid d-flex justify-content-center">
                <Link className="navbar-brand me-5" href="/">
                    <Image className="Image-fluid" src="/logo-nav.svg" alt="logo-nav.svg" />
                </Link>
                <button className="navbar-button d-md-none d-block" type="button" >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="sidebar d-flex gap-3 align-items-center" id="navbarNavAltMarkup">
                    <Link className="nav-link text-white fw-lighter" href="/sobre-nos">QUEM SOMOS</Link>
                    <Link className="nav-link text-white fw-lighter" href="/servicos">SERVIÇOS</Link>
                    <Link className="nav-link text-white fw-lighter" href="/jobs">JOBS</Link>
                    <Link className="nav-link text-white fw-lighter" href="/produtos">PRODUTOS</Link>
                    <Link className="nav-link text-white fw-lighter" href="/contato">CONTATO</Link>
                </div>
            </div>
        </nav>
    )
}