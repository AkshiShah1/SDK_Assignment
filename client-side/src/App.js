
import './App.css';
import { Route, Routes } from 'react-router-dom';



import CreateBucket from './Components/s3/create';
import ListBucket from './Components/s3/list';


function App() {
    return (
        <div className="container">
            
            <br />
            <center><h1>Welcome to S3 Handler</h1></center>
            <Routes>

                <Route path='/s3/create' element={<CreateBucket />} />
                <Route path='/s3/list' element={<ListBucket />} />
                

            </Routes>
        </div>
    );
}

export default App;