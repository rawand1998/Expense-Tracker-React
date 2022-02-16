
import './App.css';
import Header from './Components/Header'
import Balance from './Components/Balance'
import InComeExpense from './Components/InComeExpense'
import TranctionList from './Components/TranctionList';
import Transcation from './Components/Transcation';


function App() {
  return (
    <div className="App">
   <Header />
   <div>
     <Balance />
     <InComeExpense />
     <TranctionList/>
     <Transcation />
   </div>
    </div>
  );
}

export default App;
