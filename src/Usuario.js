export default function Usuario() {
    return (
        <User imagem="assets/img/catanacomics.svg" usuario="catanacomics" nome="Catana"/>
    )
}

function User(props) {
    const {imagem, usuario, nome} = props;
    return(
        <div class="usuario">
            <img src={imagem} />
            <div class="texto">
                <strong>{usuario}</strong>
                {nome}
            </div>
        </div>
    )
}