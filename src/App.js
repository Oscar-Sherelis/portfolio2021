import './App.css';
import Skills from './components/Skills';
import Projects from "./components/Projects";

function App() {
  return (
    <div className="App">
      <main id="home">
        <div className="main-text">
          <h1>Oscar Sherelis</h1>
          <h2>Web developer</h2>
          <Skills></Skills>
        </div>
      </main>
      <section className="skills-projects">
        <Projects></Projects>
      </section>
      <section id="contact">
          <form action="https://formspree.io/mrgywkqo" method="POST">
            <h3>Contact</h3>
                <input type="email" name="_replyto" placeholder="Your email" required></input>
                <textarea name="message" placeholder="Message" required></textarea>
            <button type="submit">Send</button>
          </form>
      </section>
      <footer>
        <a href="#home">Home</a>
        <a href="#contact">Contact</a>
      </footer>
    </div>
  );
}

export default App;
