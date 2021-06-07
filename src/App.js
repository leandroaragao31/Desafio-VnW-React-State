import React, { Component } from "react";
import "./styles.css";
import Fruta from "./assets/Morango--Bandeja-.jpg";

class Perfil extends Component {
  state = {
    nome: "Leandro",
    idade: 30,
    comida: "Escondidinho de carne moida",
    musica: ["Spiders", "take a five", "soul to squeeze", "Um dia de Domingo"]
  };
  render() {
    return (
      <section>
        <div>
          <h1>Meu nome é: {this.state.nome}</h1>
          <h2>Minha idade é: {this.state.idade}</h2>
          <h3>Minha comida Favorita é: {this.state.comida}</h3>
        </div>
        <div>
          <p>Minhas musicas favoritas são:</p>
          <ul>
            <li>{this.state.musica[0]}</li>
            <li>{this.state.musica[1]}</li>
            <li>{this.state.musica[2]}</li>
            <li>{this.state.musica[3]}</li>
          </ul>
        </div>
        <figure>
          <p>Aqui está uma imagem da minha fruta favorita</p>
          <img className="box-img" src={Fruta} alt="morango" />
        </figure>
      </section>
    );
  }
}

export default Perfil;
