import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import Header from './components/Header.js';
import OrderForm from './components/OrderForm.js';
import Footer from './components/Footer.js';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header/>
      </header>
      <main>
      <OrderForm/>
      </main>
      <footer>
        <Footer/>
      </footer>
    </div>
  );
}

export default App;
