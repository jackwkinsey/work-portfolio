import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';

// How can I have path aliases so this line can be:
// import { Component } from '@/components/PageSection'?
import { PageSection } from '..';

describe('PageSection component', () => {
  describe('smoke test', () => {
    it('renders without crashing', () => {
      const div = document.createElement('div');
      ReactDOM.render(<PageSection />, div);
    });
  });

  describe('template', () => {
    it('has a section title', () => {
      // Act
      const wrapper = shallow(<PageSection />);

      // Assert
      expect(wrapper.exists('[data-testid="PageSection.sectionTitle"]')).toBe(true);
    });

    it('has a content image when image prop is provided', () => {
      // Arrange
      const image = {};

      // Act
      const wrapper = shallow(<PageSection image={image} />);

      // Assert
      expect(wrapper.exists('[data-testid="PageSection.contentImage"]')).toBe(true);
    });

    it('does not have a content image when image prop is not provided', () => {
      // Act
      const wrapper = shallow(<PageSection />);

      // Assert
      expect(wrapper.exists('[data-testid="PageSection.contentImage"]')).toBe(false);
    });

    it('has content', () => {
      // Act
      const wrapper = shallow(<PageSection />);

      // Assert
      expect(wrapper.exists('[data-testid="PageSection.content"]'));
    });
  });
});
