import './App.css';
import DateBox from './Component/date_box';
import DateBoxTS from './Component/date_box_ts.tsx';
import FormBox from './Component/form_box.js';
import InputAndDisplay from './Component/input_and_display.js';
import ShowData from './Component/showdata.js';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="component">
          <h2>Date
          </h2>
          <DateBox />
          <DateBoxTS />
        </div>
        <div className="component">
          <h2>Form Alert</h2>
          <FormBox/>
        </div>
        <div className="component">
          <h2>Add and Display</h2>
          <InputAndDisplay/>
        </div>
        <div className="component">
          <h2>Show Data</h2>
          <ShowData/>
        </div>
      </header>
    </div>
  );
}

export default App;
