import React from "react";

class Content extends React.Component {
    render() {
        const conteudos = [
            {
              conteudo: 'High Order Functions',
              bloco: 8,
              status: 'Aprendido'
            },
            {
              conteudo: 'Composicao de Componentes',
              bloco: 11,
              status: 'Aprendendo',
            },
            {
              conteudo: 'Composicao de Estados',
              bloco: 12,
              status: 'Aprenderei'
            },
            {
              conteudo: 'Redux',
              bloco: 16,
              status: 'Aprenderei'
            },
        ];

        return (
            <>
            { 
            conteudos.map((element, index) =>
            <div key={index}>
               <h3> { `O conteúdo é: ${element.conteudo}` } </h3>
               <p> { `Status: ${ element.status }` } </p>
                <p> { `Bloco: ${ element.bloco}` } </p>
            </div>)
            }
            </>
        );  
    }
}

export default Content;