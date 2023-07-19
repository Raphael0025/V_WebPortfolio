import 'animate.css'
import Nav from '../src/Components/NavBar'
import Home from '../src/Section/Home'
import Service from '../src/Section/Services'
import Project from '../src/Section/Projects'
import Feedbacks from '../src/Section/Feedback'
import Contact from '../src/Section/Contact'
import Footer from '../src/Section/Footer'

function App() {
  return (
    <div className="App m-0 p-0">
      <Nav />
      <Project />
    </div>
  );
}

export default App;
