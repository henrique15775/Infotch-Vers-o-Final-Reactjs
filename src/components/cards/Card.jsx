import React from 'react'
import './catalogo.css'
function Card({produto}){
    return(
        <>
        <div className="catalogo" id={produto.id}>
          <i className="fas fa-heart"></i>
          <img src={produto.imagem} alt=""/>
          <div className="valores">
              <h6>{produto.nome}</h6>
              <span>por</span>
              <p>R$ {produto.preco}</p>
          </div>
          <button type="submit" name="addcart" id="addcart">AddCart</button>
        </div>
        </>
    )
}

export default Card