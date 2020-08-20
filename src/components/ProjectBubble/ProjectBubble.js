import React from 'react';
import './ProjectBubble.css';

const ProjectBubble = props => {
  const {
    project: { name, type, imageUrl },
    clickHandler,
  } = props;
  const backgroundImage = `url(${imageUrl})`;

  return (
    <div className="project" onClick={clickHandler} data-testid="ProjectBubble">
      <div className="project__image" data-testid="ProjectBubble.image" style={{ backgroundImage }}></div>
      <div className="project__text-container">
        <div className="project__name" data-testid="ProjectBubble.name">
          {name}
        </div>
        <div className="project__type" data-testid="ProjectBubble.type">
          type: {type}
        </div>
      </div>
    </div>
  );
};

export default ProjectBubble;
