import React from 'react';
import FileSaver from 'file-saver';
import { PageSection } from './components/PageSection';
import './App.css';

function App() {
  const downloadResume = () => {
    FileSaver.saveAs(`${process.env.PUBLIC_URL}/files/JackKinsey-Resume.pdf`, 'JackKinsey-Resume.pdf');
  };
  return (
    <div className="App">
      <div className="header">
        Jack Kinsey<span className="cursor">_</span>
      </div>
      <PageSection
        title="About Me"
        image={{ src: `${process.env.PUBLIC_URL}/files/headshot.jpg`, altText: 'A headshot of Jack Kinsey' }}
      >
        <p>
          Hello, my name is Jack Kinsey. I am a professional, full stack web developer with over 5 years of experience.
          I am also the founder of{' '}
          <a href="https://www.hexbitstudios.com" target="_blank" rel="noopener noreferrer">
            Hexbit Studios
          </a>
          , a small independent and hobbyist game studio.
        </p>
        <p>
          The vast majority of my experience stems from working on various web app projects across many different roles
          and teams. I aim to be a great mentor to my fellow teammates and share my knowledge and experience with anyone
          interested in software development.
        </p>
        <p>
          Crafting pleasant user experiences and interesting game worlds are among my chief passions in my career; as
          well as engineering app backends to help deliver content to users.
        </p>
        <p>
          When not saving the world through web development, I can be found implementing new game mechanics or creating
          pixel art for{' '}
          <a href="https://www.voidcallers.com" target="_blank" rel="noopener noreferrer">
            Voidcallers
          </a>{' '}
          or composing music with my guitar or synthesizer.
        </p>
      </PageSection>
      <PageSection title="Links" className="links-section">
        <p className>
          I'd love to help bring value to your next project! Reach out on LinkedIn or browse my GitHub. I've also
          included my resume for download.
        </p>
        <ul className="links-list">
          <li>
            <a
              title="LinkedIn Profile"
              href="https://www.linkedin.com/in/jackkinsey/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-linkedin"></i>
            </a>
          </li>
          <li>
            <a
              title="GitHub Profile"
              href="https://www.github.com/jackwkinsey/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-github"></i>
            </a>
          </li>
          <li>
            <span onClick={downloadResume}>
              <i className="fal fa-file-download"></i>
            </span>
          </li>
        </ul>
      </PageSection>
    </div>
  );
}

export default App;
