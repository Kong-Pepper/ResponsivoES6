
<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Sayosozin</title>
    <link rel="stylesheet" href="Responsivo.css"/>
    </head>
<body>
        
        <div id="myNavbar">
            <ul>
                <li><a href="javascript:void(0)" id="myClosebtn">&times;</a></li>
                <li><a href="#home">Home</a></li>
                <li><a href="#news">Notícias</a></li>
                <li><a href="#contact">Contato</a></li>
                <li><a href="#about">Sobre</a></li>
                <li><a href="#services">Serviços</a></li>
                <li><a href="#portfolio">Portfólio</a></li>
                <li><a href="#team">Equipe</a></li>
                <li><a href="#clients">Clientes</a></li>
                <li><a href="#pricing">Preços</a></li>
            </ul>
        </div>
    <div id="myContent">
        <button id="myButton">Menu</button>
        <h1 class="body">Sayosozin Creative Inc.</h1>
        <p class="body">
            Este é um exemplo de uma barra de navegação vertical responsiva com um
            botão para abrir e fechar a navegação em dispositivos de tela pequena.
        </p>
    </div>
   
    <script type="module">
        import {AppInstance} from "../js/controller/Responsivo.js";
        window.app = AppInstance;
    </script>
        
</body>

</html>

