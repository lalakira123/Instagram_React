export default function Story(props) {
    const {imagem, usuario} = props;
    return(
        <div class="story">
            <div class="imagem">
                <img src={imagem} />
            </div>
            <div class="usuario">
                {usuario}
            </div>
        </div>
    )
}