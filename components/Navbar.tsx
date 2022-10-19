import Image from "next/image"
import Link from "next/link"
import React from "react"

// export const ImageNav = () => {
//     return (

//     )
// }

export const Navbar = () => {
    return (
        <nav className="bg-gray d-flex justify-content-center pt-3 pb-3 position-fixed w-100">
            <div className="container-fluid d-flex justify-content-center">
                <Link className="navbar-brand me-5 position-relative" href="/">
                    <a className="position-relative">
                        <Image objectFit="initial" className="img-fluid" src="/logo-nav.svg" alt="logo-nav.svg" width={150} height={100} />
                    </a>
                </Link>
                <button className="d-md-none d-block p-0 border-0" type="button" >
                    
                </button>
                <div className="sidebar d-flex gap-3 align-items-center" id="navbarNavAltMarkup">
                    <Link className="nav-link text-white fw-lighter" href="/sobre-nos"><a>QUEM SOMOS</a></Link>
                    <Link className="nav-link text-white fw-lighter" href="/servicos"><a>SERVIÇOS</a></Link>
                    <Link className="nav-link text-white fw-lighter" href="/jobs"><a>JOBS</a></Link>
                    <Link className="nav-link text-white fw-lighter" href="/produtos"><a>PRODUTOS</a></Link>
                    <Link className="nav-link text-white fw-lighter" href="/contato"><a>CONTATO</a></Link>
                </div>
            </div>
        </nav>
    )
}