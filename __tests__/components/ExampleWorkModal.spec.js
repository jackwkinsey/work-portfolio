import React from 'react';
import { shallow } from 'enzyme';
import ExampleWorkModal from '../../src/components/ExampleWorkModal.js';

describe('ExampleWorkModal component', () => {
  const testExample = {
    title: 'Portfolio',
    href: 'https://www.example.com',
    description:
      'Nostrud minim minim ea consequat laborum commodo reprehenderit. Adipisicing aliquip ad magna labore veniam eiusmod quis proident exercitation. Velit consectetur nulla est velit aliquip eu in minim id elit quis reprehenderit consectetur. Cupidatat quis cupidatat non ullamco ad nisi fugiat enim labore deserunt anim ad adipisicing. Et labore nisi eiusmod consectetur anim incididunt veniam do. Cupidatat veniam officia dolore elit fugiat labore esse elit.',
    image: {
      description: 'example screenshot of a project involving code',
      src: 'images/example1.png',
      comment: '',
    },
  };

  let component = shallow(<ExampleWorkModal example={testExample} open={false} />);
  let openComponent = shallow(<ExampleWorkModal example={testExample} open={true} />);
  let anchors = component.find('a');

  it('contains a single anchor element', () => {
    // Assert
    expect(anchors.length).toEqual(1);
  });

  it('sets `href` attribute of anchor element correctly', () => {
    // Assert
    expect(anchors.prop('href')).toEqual(testExample.href);
  });

  it('sets the modal class modifier correctly for open and closed states', () => {
    // Arrange
    const closed = component.find('.modal--closed');
    const open = openComponent.find('.modal--open');

    // Assert
    expect(closed.length).toBe(1);
    expect(open.length).toBe(1);
  });
});
