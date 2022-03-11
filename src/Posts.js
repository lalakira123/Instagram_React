export default function Posts() {
    return (
        <div class="posts">
            <Post 
                imagemUsuario="assets/img/meowed.svg"
                nomeUsuario="meowed"
                imagemPost="assets/img/gato-telefone.svg"
                imagemUserCurtida="assets/img/respondeai.svg"
                nomeUserCurtida="respondeai"
                numeroCurtida="101.523"/>
            <Post 
                imagemUsuario="assets/img/barked.svg"
                nomeUsuario="barked"
                imagemPost="assets/img/dog.svg"
                imagemUserCurtida="assets/img/adorable_animals.svg"
                nomeUserCurtida="adorable_animals"
                numeroCurtida="99.159"/>
                
        </div>
    );
}

function Post(props) {
    return(
        <div class="post">
                <div class="topo">
                    <div class="usuario">
                    <img src={props.imagemUsuario} />
                    {props.nomeUsuario}
                    </div>
                    <div class="acoes">
                        <ion-icon name="ellipsis-horizontal"></ion-icon>
                    </div>
                </div>

                <div class="conteudo">
                    <img src={props.imagemPost} />
                </div>

                <div class="fundo">
                    <div class="acoes">
                        <div>
                            <ion-icon name="heart-outline"></ion-icon>
                            <ion-icon name="chatbubble-outline"></ion-icon>
                            <ion-icon name="paper-plane-outline"></ion-icon>
                        </div>
                        <div>
                            <ion-icon name="bookmark-outline"></ion-icon>
                        </div>
                    </div>

                    <div class="curtidas">
                        <img src={props.imagemUserCurtida} />
                            <div class="texto">
                                Curtido por <strong>{props.nomeUserCurtida}</strong> e <strong>outras {props.numeroCurtida} pessoas</strong>
                            </div>
                    </div>
                </div>
            </div>
    )
}