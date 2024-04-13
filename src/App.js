import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './App.css';
import Name from './components/name.js';
import Price from './components/price.js';
import Description from './components/description.js';
import Image from './components/image.js';

const firstname = "Hamza"

function App() {
  return (
    <>
    <Card style={{ width: '18rem' }}>
      <Image/>
      <Card.Body>
        <Name/>
        <Description/>
        <Button variant="primary"><Price/></Button>
      </Card.Body>
    </Card>
    {firstname? <h1>Hello, {firstname}!</h1>:<h1>Hello there!</h1>}
    {firstname? <img style={{borderRadius:20}} src='my-app/public/zzzzzaaaaeeeerrrr123.jpg'/>:<></>}
    </>
  );
}

export default App;
