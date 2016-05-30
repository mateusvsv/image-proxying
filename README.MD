## [2] Teste Backend Shaw and Partners - Image proxying

Aplicação para upload de imagens utilizando arquitetura de duas camadas com Angular e Nodejs.
Desenvolvida como teste para a vaga de Desenvolvedor na empresa Shaw and Partners.


## Exemplo de utilização:

Clonando repositório:

    git clone https://github.com/mateusvsv/image-proxying.git 

Indo para pasta do projeto:

    cd image-proxying

Instalando dependências:

    npm install
    
Iniciando serviços:

    Como a aplicação utiliza uma API como proxy e uma API Back-end, as duas devem ser iniciadas.

    node index.js
    node server.js

    A aplicação estará disponível na porta 8080 e a Api back-end na porta 8081.

Exemplo de utilização:

    Acesse localhost:8080
    A interface é simples e permite apenas o envio de imagens.
    Após enviar as imagens elas estarão disponíveis em: https://angular-file-upload-cors-srv.appspot.com/upload
