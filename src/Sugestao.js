export default function Sugestao(props) {
    const {imagemUsuario, nomeUsuario, razaoUsuario} = props;
    return (
        <div class="sugestao">
            <div class="usuario">
                <img src={imagemUsuario} />
                <div class="texto">
                    <div class="nome">{nomeUsuario}</div>
                    <div class="razao">{razaoUsuario}</div>
                </div>
            </div>

            <div class="seguir">Seguir</div>
        </div>
    )
}