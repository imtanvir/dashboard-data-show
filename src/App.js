import { React } from 'react';
import PieCharts from './Components/PieCharts/PieCharts';
import TableData from './Components/TableData/TableData';
import DataChart from './Components/DataChart/DataChart';

function App() {
  return (
    <div>
      <div className="dashboard-data-section mx-4">
        <DataChart></DataChart>
      </div>
      <div className="piedata-section my-3">
        <h3 className='text-center text-primary'>Data show in Pie chart</h3>
        <PieCharts></PieCharts>
      </div>
      <div className="table-section">
        <TableData></TableData>
      </div>
      
      

    </div>
  );
}

export default App;
