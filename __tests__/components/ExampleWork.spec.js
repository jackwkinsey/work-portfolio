import React from 'react';
import { shallow } from 'enzyme';
import ExampleWork, { ExampleWorkBubble } from '../../src/components/ExampleWork.js';

const testWork = [
  {
    title: 'Test Work 1',
    image: {
      description: 'A test image',
      src: 'images/image.jpg',
      comment: 'Test comment 1',
    },
  },
  {
    title: 'Test Work 2',
    image: {
      description: 'A second test image',
      src: 'images/another-image.jpg',
      comment: 'Test comment 2',
    },
  },
];

describe('ExampleWork component', () => {
  let component;

  beforeEach(() => {
    jest.clearAllMocks();
    component = shallow(<ExampleWork work={testWork} />);
  });

  // I don't like this as a test because it ties the use of a <section> element to our implementation
  // it('is a section element', () => {
  //   // Assert
  //   expect(component.type()).toEqual('section');
  // });

  it('contains a child for each work item provided in `work` prop', () => {
    // Arrange
    const numberOfChildren = component.children().length;
    const numberOfWorkItems = testWork.length;

    // Assert
    expect(numberOfChildren).toEqual(numberOfWorkItems);
  });

  it('allows modal to open', () => {
    // Act
    component.instance().openModal();

    // Assert
    expect(component.state('modalOpen')).toBe(true);
  });

  it('allows modal to close', () => {
    // Act
    component.instance().closeModal();

    // Assert
    expect(component.state('modalOpen')).toBe(false);
  });
});

describe('ExampleWorkBubble component', () => {
  const testExample = testWork[0];
  let component;

  beforeEach(() => {
    jest.clearAllMocks();
    component = shallow(<ExampleWorkBubble example={testExample} />);
  });

  it("contains a single 'img' element", () => {
    // Arrange
    const image = component.find('img');

    // Assert
    expect(image.length).toEqual(1);
  });

  it('sets the image `src` attribute correctly', () => {
    // Arrange
    const image = component.find('img');
    const src = image.prop('src');

    // Assert
    expect(src).toEqual(testExample.image.src);
  });
});
