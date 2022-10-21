import './App.css';

import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import CardUser from './components/Card/Card';
import HolaMundo from './components/HolaMundo';



function App() {
  return (
    <div className="App">
      <Header title = "Clase de React" />
      <div className='userSeccion'>

        <CardUser name = "Mathew" img = "https://react.semantic-ui.com/images/avatar/large/matthew.png" joined = "2017" descrip = "Matthew is a musician living in Nashville" friends = "22"/>

        <CardUser name = "Elliot Bake" img = "https://react.semantic-ui.com/images/avatar/large/elliot.jpg" joined = "2015" descrip = "Elliot is a sound engineer living in Nashville who enjoys playing guitar and hanging with his cat." friends = "16"/>

        <CardUser name = "Daniel" img = "https://react.semantic-ui.com/images/avatar/large/daniel.jpg" joined = "2016" descrip = "Daniel is a comedian living in Nashville." friends = "10"/>

      </div>
  
      <Footer/>
    </div>
  );
}

export default App;
