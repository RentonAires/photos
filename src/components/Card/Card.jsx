import React from "react";
import "./Card.css";

export default function Card() {

    const card = {
            img: "https://www1.udesc.br/agencia/arquivos/32753/images/Florianopolis.jpeg",
            titulo: "imagen de floripa ",
            descricao: "Foto tirar na av beira mar",
            alt: "imagen de floripa",
            link:"https://www.youtube.com/"
        }

    return (
        <>
            <div className="card">
                <img src={card.img} alt={card.alt} />
                <h2>{card.titulo}</h2>
                <p>{card.descricao}</p>
                <a href={card.link}>Link</a>

            </div>
        </>
    )
}