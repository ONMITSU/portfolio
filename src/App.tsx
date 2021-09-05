import logo from './logo.svg';
import './App.css';

import About from './components/About'
import WorkExperiences from './components/WorkExperiences'
import SchoolExperiences from './components/SchoolExperiences';

function App() {
  return (
    <main className="container mx-auto px-4">
      <About/>
      <WorkExperiences/>
      <SchoolExperiences/>
    </main>
  );
}

export default App;
