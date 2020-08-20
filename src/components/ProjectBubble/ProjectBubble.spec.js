import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import { ProjectBubble } from '.';

describe('ProjectBubble component', () => {
  const testProject = {
    name: 'My Awesome Project',
    type: 'website',
    // url: 'http://www.example.com',
    // repo: 'https://wwww.github.com/jackwkinsey/my-awesome-project',
    // description: 'This project is flippin awesome',
    imageUrl: '/files/images/awesome-project.jpg',
  };

  describe('smoke test', () => {
    it('renders without crashing', () => {
      const div = document.createElement('div');
      ReactDOM.render(<ProjectBubble project={testProject} />, div);
    });
  });

  describe('template', () => {
    it('has project name text', () => {
      // Arrange
      const wrapper = shallow(<ProjectBubble project={testProject} />);

      // Act
      const projectName = wrapper.find('[data-testid="ProjectBubble.name"]');

      // Assert
      expect(projectName.length).toBe(1);
      expect(projectName.text()).toBe(testProject.name);
    });

    it('has project type text with `type:` prefix', () => {
      // Arrange
      const wrapper = shallow(<ProjectBubble project={testProject} />);
      const typeText = `type: ${testProject.type}`;

      // Act
      const projectName = wrapper.find('[data-testid="ProjectBubble.type"]');

      // Assert
      expect(projectName.length).toBe(1);
      expect(projectName.text()).toBe(typeText);
    });

    it('calls click handler when clicked', () => {
      // Arrange
      const mockHandleClick = jest.fn();
      const wrapper = shallow(<ProjectBubble project={testProject} clickHandler={mockHandleClick} />);

      // Act
      wrapper.simulate('click');

      // Assert
      expect(mockHandleClick).toHaveBeenCalledTimes(1);
    });

    it('uses provided project image as background image', () => {
      // Arrange
      const wrapper = shallow(<ProjectBubble project={testProject} />);
      const imageUrl = testProject.imageUrl;
      const backgroundImage = `url(${imageUrl})`;
      const projectBubble = wrapper.find('[data-testid="ProjectBubble.image"]');

      // Act
      const style = projectBubble.prop('style');

      // Assert
      expect(style).toHaveProperty('backgroundImage', backgroundImage);
    });
  });
});
