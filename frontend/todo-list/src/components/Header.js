import React, { Component } from 'react';
import '../styles/header.css';

class Header extends Component {
  render() {
    return (
      <div className="box_header">
        <h1 className="h1_header">Gerenciador de Tarefas</h1>
      </div>
    );
  }
}

export default Header;
