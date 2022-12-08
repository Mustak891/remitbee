import './App.css';
import Scheduler from './components/Scheduler';
import ButtonAppBar from './components/Navbar';
import DataTable from './components/Table';

function App() {
  return (
    <div className="App">
      <ButtonAppBar />
      <Scheduler />
      <DataTable />
    </div>
  );
}

export default App;
