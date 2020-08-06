import React, { Component } from 'react';

export default class ExampleWorkModal extends Component {
  render() {
    const {
      title,
      href,
      description,
      image: { src },
    } = this.props.example;

    return (
      <div className="background--skyBlue modal--closed">
        <span className="color--cloud modal__closeButton">
          <i className="fa fa-window-close-o"></i>
        </span>
        <img alt="example screenshot of a project involving code" className="modal__image" src={src} />
        <div className="color--cloud modal__text">
          <h2 className="modal__title">{title}</h2>
          <a className="color--skyBlue modal__link" href={href}>
            Check it out
          </a>
          <p className="modal__description">{description}</p>
        </div>
      </div>
    );
  }
}
