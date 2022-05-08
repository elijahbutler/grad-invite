import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import Navbar from './components/Navbar';
import Invite from './components/Invite';
import Event from './components/Event';

import background from './components/images/grad.png'


function App() {
  return (
    <>
    <div style={{ backgroundImage: `url(${background})`, backgroundSize: 'cover', backgroundPosition: 'center', width: '100vw', height: '100vh' }}>
    <Invite />
    <Event />
    </div>
    </>
    );
}

export default App;
