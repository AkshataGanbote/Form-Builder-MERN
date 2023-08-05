import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Question1 from './Question1'
import Question2 from './Question2';
import Question3 from './Question3';

function App() {

  return (
    <div>
      <h1 className='mb-3'>Custom Form Builder</h1>
      <Question1/>
      <Question2/>
      <Question3/>
    </div>
  )
}

export default App
