// needed to render components
// contains the main component that defines the structure and behavior of your application
import './App.css';
import Contacts from './components/Contacts';
import Projects from './components/Projects';

function App() {
  return (
    <>
    <Contacts />
    <Projects />
    </>
  );
}

export default App;
