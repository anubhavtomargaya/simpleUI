import './App.css';
import Form from './components/form'
import Button from './components/button'
// import axios from 'axios'

function App() {
  return (
    <div className="App">
      <div className="box1">
        <h1>Lets do some work!</h1>
      </div>
      <div className="box2">
        <div>
          Home 
        </div>
        <div>
          Dashboard 
        </div>
      </div>
      <div className="box3">
        <div>
          Refresh Data
        </div>   
        <div>
          Add New Data
        </div>   
        <div className='postform'>
          <Form />
        </div>  
      </div>
      <div className="box4">
        Category wise insights
      </div>
      <div className="box5">
        
        <div>
        latest data
        </div>  
      </div>
      <div className="box6">Misc</div>
      
      {/* <header>
        <h2>Lets do some work</h2>
      </header>
     <div className="Event">
      <Button>Add Event</Button>
        
     </div>
     <div className="">
      <button type="submit" className="" value="View Report">
      <h4>View Report</h4>
      </button>
     </div>
     <div className="">
      <button type="submit" className="" value="Refresh Data">
      <h4>Refresh </h4>
      </button>
     </div> */}
     
    </div>

   
  );
}

export default App;
