import React, { Component } from 'react';

export default class ExampleWork extends Component {
  render() {
    return (
      <section className="section section--alignCentered section--description">
        {this.props.work.map((example, idx) => {
          return <ExampleWorkBubble example={example} key={idx} />;
        })}
      </section>
    );
  }
}

class ExampleWorkBubble extends Component {
  render() {
    const { title, image } = this.props.example;
    return (
      <div className="section__exampleWrapper">
        <div className="section__example">
          <img alt={image.description} className="section__exampleImage" src={image.src} />
          <dl className="color--cloud">
            <dt className="section__exampleTitle section__text--centered">{title}</dt>
            <dd></dd>
          </dl>
        </div>
      </div>
    );
  }
}
