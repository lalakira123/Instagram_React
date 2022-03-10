import Stories from './Stories';
import Posts from './Posts';
import Usuario from './Usuario';
import Sugestoes from './Sugestoes';
import Links from './Links';
import Copyright from './Copyright';

export default function Corpo() {
    return (
        <div class="corpo">
            <div class="esquerda">
                <Stories />
                <Posts />
            </div>

            <div class="sidebar">
                <Usuario />
                <Sugestoes />
                <Links />
                <Copyright />
            </div>
        </div>
    );
}