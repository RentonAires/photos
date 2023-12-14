import React from "react";
import "./header.css";
import logo from '../../assets/photography-icon.png'
import { Link, useNavigate } from "react-router-dom";

export default function Header() {

    const navigate = useNavigate();

    return (
        <>
            <header className="header">
                <img src={logo} alt="imagem da logo" />

                <nav className="nav">
                    <ul>
                        <li >
                            <Link to="/">Home</Link>
                        </li>
                        <li >
                            <Link to="/empresa">Empresa</Link>
                        </li>
                        <li >
                            <Link to="/contato">Contato</Link>
                        </li>
                        <li >
                            <Link to="/cadastro">Cadastra</Link>
                        </li>
                    </ul>
                </nav>
            </header>
        </>
    )
}