export default function Sugestoes() {
    return (
        <div class="sugestoes">
                    <div class="titulo">
                        Sugestões para você
                        <div>Ver tudo</div>
                    </div>

                    <Sugestao 
                        imagemUsuario="assets/img/bad.vibes.memes.svg"
                        nomeUsuario="bad.vibes.memes"
                        razaoUsuario="Segue você"/>
                    <Sugestao 
                        imagemUsuario="assets/img/chibirdart.svg"
                        nomeUsuario="chibirdart"
                        razaoUsuario="Segue você"/>
                    <Sugestao 
                        imagemUsuario="assets/img/razoesparaacreditar.svg"
                        nomeUsuario="razoesparaacreditar"
                        razaoUsuario="Novo no Instagram"/>
                    <Sugestao 
                        imagemUsuario="assets/img/adorable_animals.svg"
                        nomeUsuario="adorable_animals"
                        razaoUsuario="Segue você"/>
                    <Sugestao 
                        imagemUsuario="assets/img/smallcutecats.svg"
                        nomeUsuario="smallcutecats"
                        razaoUsuario="Segue você"/>
        </div>
    );
}

function Sugestao(props) {
    return (
        <div class="sugestao">
            <div class="usuario">
                <img src={props.imagemUsuario} />
                <div class="texto">
                    <div class="nome">{props.nomeUsuario}</div>
                    <div class="razao">{props.razaoUsuario}</div>
                </div>
            </div>

            <div class="seguir">Seguir</div>
        </div>
    )
}