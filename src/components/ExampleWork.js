import React, { Component } from 'react';
import ExampleWorkModal from './ExampleWorkModal.js';

export default class ExampleWork extends Component {
  constructor(props) {
    super(props);

    this.state = {
      modalOpen: false,
      selectedExample: props.work[0],
    };

    // bind methods to this context
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  openModal(_event, example) {
    this.setState({ modalOpen: true, selectedExample: example });
  }

  closeModal(_event) {
    this.setState({ modalOpen: false });
  }

  render() {
    const { selectedExample, modalOpen } = this.state;

    return (
      <>
        <section className="section section--alignCentered section--description">
          {this.props.work.map((example, idx) => {
            return <ExampleWorkBubble example={example} key={idx} openModal={this.openModal} />;
          })}
        </section>

        <ExampleWorkModal example={selectedExample} open={modalOpen} close={this.closeModal} />
      </>
    );
  }
}

export class ExampleWorkBubble extends Component {
  render() {
    const { example } = this.props;
    const { title, image } = example;
    return (
      <div className="section__exampleWrapper" onClick={evt => this.props.openModal(evt, example)}>
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
