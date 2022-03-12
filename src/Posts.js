import Post from "./Post";

const posts = [
    {
        imagem:"assets/img/meowed.svg",
        nome:"meowed",
        imagemPost:"assets/img/gato-telefone.svg",
        imagemUserCurtida:"assets/img/respondeai.svg",
        nomeUserCurtida:"respondeai",
        numeroCurtida:"101.523"
    },
    {
        imagem:"assets/img/barked.svg",
        nome:"barked",
        imagemPost:"assets/img/dog.svg",
        imagemUserCurtida:"assets/img/adorable_animals.svg",
        nomeUserCurtida:"adorable_animals",
        numeroCurtida:"99.159"
    }
]

export default function Posts() {
    return (
        <div class="posts">
            {posts.map( post => 
                <Post 
                    imagemUsuario={post.imagem}
                    nomeUsuario={post.nome}
                    imagemPost={post.imagemPost}
                    imagemUserCurtida={post.imagemUserCurtida}
                    nomeUserCurtida={post.nomeUserCurtida}
                    numeroCurtida={post.numeroCurtida}/>
            )}        
        </div>
    );
}
