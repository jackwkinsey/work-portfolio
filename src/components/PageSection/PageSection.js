import React from 'react';

const PageSection = props => {
  const sectionImage = props.image ? (
    <div>
      <img
        className="section__content__image"
        src={props.image.src}
        alt={props.image.altText}
        data-testid="PageSection.contentImage"
      />
    </div>
  ) : null;

  return (
    <section>
      <div className="section__title" data-testid="PageSection.sectionTitle">
        {props.title}
      </div>
      <div className="section__content">
        {sectionImage}
        <div className="section__content__text" data-testid="PageSection.contentText">
          {props.text}
        </div>
      </div>
    </section>
  );
};

export default PageSection;
