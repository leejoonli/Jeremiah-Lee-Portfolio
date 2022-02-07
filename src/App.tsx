import Navigation from './components/Navigation/Navigation';
import Technologies from './components/Technologies/Technologies';
import Projects from './components/Projects/Projects';
import About from './components/About/About';

import styles from './App.module.css';

function App() {
  return (
    <main>
      <Navigation />
      <div className={styles.homeImg}>
        <div>
          <h1 className={styles.homeTitle}>Jeremiah Lee</h1>
          <h2 className={styles.homeTitle}>Software Engineer</h2>
        </div>
      </div>
      <Technologies />
      <Projects />
      <About />
    </main>
  );
}

export default App;
