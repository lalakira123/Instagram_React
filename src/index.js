import ReactDOM from 'react-dom';

import Navbar from './Navbar';
import Corpo from './Corpo';
import Mobile from './Mobile';

function App() {
    return (
        <div>
            <Navbar />
            <Corpo />
            <Mobile />
        </div>
    );
}

ReactDOM.render(<App />, document.querySelector(".root"));
