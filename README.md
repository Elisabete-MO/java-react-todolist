# :notebook_with_decorative_cover: Boas-vindas ao repositório do projeto To Do List! :ballot_box_with_check:

<h3 align="center"><strong> API Rest para gerenciamento de tarefas </strong></h3>
<p align="center">
     <a alt="JavaScript" href="https://www.javascript.com/" target="_blank">
        <img src="https://img.shields.io/badge/JavaScript-ES14-F7DF1E.svg" />
    </a>
     <a alt="React" href="https://react.dev/" target="_blank">
        <img src="https://img.shields.io/badge/React-v18.2.0-61DAFB.svg" />
    </a>
     <a alt="Java" href="https://java.com" target="_blank">
        <img src="https://img.shields.io/badge/Java-v17.0.6-ED8B00.svg" />
    </a>
    <a alt="Spring Boot" href="https://spring.io/projects/spring-boot" target="_blank">
        <img src="https://img.shields.io/badge/SpringBoot-v3.2.1-6DB33F.svg" />
    </a>
    <a alt="MySQL" href="https://www.mysql.com/" target="_blank">
        <img src="https://img.shields.io/badge/MySQL-v8.0.32-blue.svg" />
    </a>
</p>

<h3>Descrição do Projeto</h3>

Essa é uma aplicação que gerencia tarefas, onde, através de uma API Rest, é 
possível criar, editar, excluir e listar tarefas.

<h3> :bookmark_tabs: O usuário será capaz de: </h3>

:heavy_check_mark: Adicionar, remover e editar uma tarefa;<br>
:heavy_check_mark: Marcar e desmarcar uma tarefa como concluída;<br>
:heavy_check_mark: Visualizar uma lista com as tarefas cadastradas;<br>

<h3> Objetivo: </h3>
  <p> O principal propósito deste projeto é aplicar os padrões de projeto 
MVC em uma aplicação Java e Spring Boot com frontend desenvolvido em React. 
A intenção é criar uma API Rest totalmente documentada com o auxílio do Swagger. A API será responsável por gerenciar as tarefas de um usuário, integrando o sistema com um banco de dados relacional sem esquecer de aplicar os conceitos de boas práticas em desenvolvimento de software no atendimento aos seguintes requisitos:</p>

<h3><strong> :memo: Requisitos </strong></h3>

- [x] Desenhar o **diagrama de classes** da aplicação com Mermaid;
      
 <details> <summary><strong> Diagrama de Classes </strong></summary>
<span> O diagrama de classes abaixo oferece uma representação visual clara 
da arquitetura do projeto, destacando as principais entidades e suas 
inter-relações. <br>
Ao analisar este diagrama, destaca-se a presença central da classe Task, que 
desempenha um papel fundamental nas operações do sistema. Essa representação 
visual simplificada não apenas facilita a compreensão da estrutura existente,
mas também oferece um recurso valioso para orientar futuras implementações e modificações e, estabelece uma base sólida para adaptações e expansões.</span>

```mermaid
classDiagram
class Task { 
    +id: number
    +description: string
    +checked: boolean
    +save(task: Task) Task
    +update(task: Task) Task
    +delete(id: number) void
    +findAll() List~Task~
    +findById(id: number) Optional~Task~
}
```
  </details>

- [x] Desenvolver a API em Java e Spring Boot; <br>
- [x] Documentar a API com o Swagger; <br>
- [x] Estruturar a classe Task no banco de dados com Spring Data JPA; <br>
- [x] Desenvolver o frontend em React; <br>
- [ ] Aplicar virtualização de contêineres. <br>

</details>

<h3> :pencil: Orientações </h3>

<p> :heavy_check_mark: No Terminal/Console:</p>

<h6> :information_source: Visando facilitar a demostração da aplicação, recomendo a execução do projeto através da IDE do IntelliJ IDEA. </h6>

<ol>
	<li>Faça um clone do projeto na sua máquina: <code>git clone git@github.com:Elisabete-MO/java-react-todolist.git</code></li>
    <li>Abra o projeto no IntelliJ IDEA;</li>
    <li>Entre na pasta raiz do projeto: <code>cd <nome_da_pasta> </code></li>
	<li>Execute o comando: <code>mvn install</code></li>
    <li>Execute o comando: <code>mvn spring-boot:run</code></li>
    <li>Abra o navegador e digite: <code>http://localhost:8080/swagger-ui.html</code></li>
    <li>Para acessar o banco de dados, digite: <code></code></li>
</ol>


