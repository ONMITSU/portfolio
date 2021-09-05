import './App.css';
import {Helmet} from "react-helmet";

import About from './components/About'
import WorkExperiences from './components/WorkExperiences'
import SchoolExperiences from './components/SchoolExperiences';

function App() {
  return (
    <main className="container mx-auto px-4">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Yossapon's Portfolio</title>
      </Helmet>
      <About/>
      <WorkExperiences/>
      <SchoolExperiences/>
    </main>
  );
}

export default App;
