import React from 'react';
import { PageSection } from './components/PageSection';
import './App.css';

function App() {
  return (
    <div className="App">
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
          When not saving the world with web app development, I can be found implementing new game mechanics or creating
          pixel art for{' '}
          <a href="https://www.voidcallers.com" target="_blank" rel="noopener noreferrer">
            Voidcallers
          </a>{' '}
          or composing music with my guitar or synthesizer.
        </p>
      </PageSection>
    </div>
  );
}

export default App;
