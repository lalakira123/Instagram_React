export  default function Post(props) {
    const {imagemUsuario, nomeUsuario, imagemPost, imagemUserCurtida, nomeUserCurtida, numeroCurtida} = props;
    return(
        <div class="post">
                <div class="topo">
                    <div class="usuario">
                    <img src={imagemUsuario} />
                    {nomeUsuario}
                    </div>
                    <div class="acoes">
                        <ion-icon name="ellipsis-horizontal"></ion-icon>
                    </div>
                </div>

                <div class="conteudo">
                    <img src={imagemPost} />
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
                        <img src={imagemUserCurtida} />
                            <div class="texto">
                                Curtido por <strong>{nomeUserCurtida}</strong> e <strong>outras {numeroCurtida} pessoas</strong>
                            </div>
                    </div>
                </div>
            </div>
    )
}