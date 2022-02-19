
import './App.css';
import Header from './Components/Header'
import Balance from './Components/Balance'
import InComeExpense from './Components/InComeExpense'
import TranctionList from './Components/TranctionList';
import Transcation from './Components/Transcation';
import {GlobleProvider} from './context/GlobleState'

function App() {
  return (
    <GlobleProvider>
   <Header />
   <div>
     <Balance />
     <InComeExpense />
     <TranctionList/>
     <Transcation />
   </div>
    </GlobleProvider>
  );
}

export default App;
