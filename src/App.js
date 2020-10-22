import React from "react";
import "./App.css";
import Post from "./components/Post/Post";
import styled from "styled-components";

const FormPost = styled.form`
  display: flex;
  flex-direction: column;
  width: 300px;
`;
const FormInput = styled.input`
  margin-top: 5px;
  padding-left: 5px;
  height: 25px;
`;
const FormButton = styled.button`
  height: 25px;
  margin-top: 5px;
`;

class App extends React.Component {
  state = {
    posts: [
      {
        nome: "Capitão America",
        fotoUsuario: "https://img.elo7.com.br/product/zoom/30B7979/matriz-logo-capitao-america-logo-capitao-america.jpg",
        fotoPost: "https://4.bp.blogspot.com/-mD2phHmh9YE/VVikZVBom9I/AAAAAAAAEtM/3jCFJkWB9a4/s320/CaptainAmerica-Avengers.png",
      },
      {
        nome: "Homem de Ferro",
        fotoUsuario:
          "https://nerdshot.files.wordpress.com/2013/04/ironman-m-iii.png",
        fotoPost:
          "https://2.bp.blogspot.com/-q-9Z1Ef0fLI/VVij34oF6II/AAAAAAAAEs8/wq5w5PqRB0w/s320/homem+de+ferro.png",
      },
      {
        nome: "Gavião Arqueiro",
        fotoUsuario:
          "https://w7.pngwing.com/pngs/501/127/png-transparent-captain-america-thor-logo-library-icon-avengers-marvel-avengers-logo-angle-emblem-trademark.png",
        fotoPost:
          "https://4.bp.blogspot.com/-A0cyuS05xaU/VVihRIXRdhI/AAAAAAAAEr0/iHh9Rgf1hMc/s320/Render+-+the-avengers-hawkeye+By+Baixe+Renders.png",
      },
    ],
    valorInputUsuario: "",
    valorInputFotoUsuario: "",
    valorInputFotoPost: "",
  };

  adicionaPost = (event) => {
    event.preventDefault();
    const novoPost = {
      nome: this.state.valorInputUsuario,
      fotoUsuario: this.state.valorInputFotoUsuario,
      fotoPost: this.state.valorInputFotoPost,
    };

    const novoPosts = [...this.state.posts, novoPost];

    this.setState({
      posts: novoPosts,
      valorInputUsuario: "",
      valorInputFotoUsuario: "",
      valorInputFotoPost: "",
    });
  };

  onChangeInputUsuario = (event) => {
    this.setState({ valorInputUsuario: event.target.value });
  };

  onChangeInputFotoUsuario = (event) => {
    this.setState({ valorInputFotoUsuario: event.target.value });
  };

  onChangeInputFotoPost = (event) => {
    this.setState({ valorInputFotoPost: event.target.value });
  };

  render() {
    const listaDePosts = this.state.posts.map((post) => {
      return (
        <Post
          nomeUsuario={post.nome}
          fotoUsuario={post.fotoUsuario}
          fotoPost={post.fotoPost}
        />
      );
    });

    return (
      <div className={"app-container"}>
        <FormPost>
          <FormInput
            value={this.state.valorInputUsuario}
            onChange={this.onChangeInputUsuario}
            placeholder={"Nome do usuário"}
          />
          <FormInput
            value={this.state.valorInputFotoUsuario}
            onChange={this.onChangeInputFotoUsuario}
            placeholder={"URL da foto do usuário"}
          />
          <FormInput
            value={this.state.valorInputFotoPost}
            onChange={this.onChangeInputFotoPost}
            placeholder={"URL da foto do post"}
          />
          <FormButton onClick={this.adicionaPost}>Adicionar</FormButton>
        </FormPost>

        {listaDePosts}
      </div>
    );
  }
}

export default App;
