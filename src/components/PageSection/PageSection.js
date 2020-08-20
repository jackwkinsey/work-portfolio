import React from 'react';
import './PageSection.css';

const PageSection = props => {
  const sectionImage = props.image ? (
    <div>
      <img
        className="section__container__image"
        src={props.image.src}
        alt={props.image.altText}
        data-testid="PageSection.contentImage"
      />
    </div>
  ) : null;

  return (
    <section className={`section ${props.className}`}>
      <div className="section__title" data-testid="PageSection.title">
        {props.title}
      </div>
      <div className="section__container">
        {sectionImage}
        <div className="section__container__content" data-testid="PageSection.content">
          {props.children}
        </div>
      </div>
    </section>
  );
};

export default PageSection;
