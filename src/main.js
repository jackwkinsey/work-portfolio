import React from 'react';
import ReactDOM from 'react-dom';
import ExampleWork from './components/ExampleWork.js';

const myWork = [
  {
    title: 'Portfolio',
    href: 'https://www.example.com',
    description:
      'Nostrud minim minim ea consequat laborum commodo reprehenderit. Adipisicing aliquip ad magna labore veniam eiusmod quis proident exercitation. Velit consectetur nulla est velit aliquip eu in minim id elit quis reprehenderit consectetur. Cupidatat quis cupidatat non ullamco ad nisi fugiat enim labore deserunt anim ad adipisicing. Et labore nisi eiusmod consectetur anim incididunt veniam do. Cupidatat veniam officia dolore elit fugiat labore esse elit.',
    image: {
      description: 'example screenshot of a project involving code',
      src: 'images/example1.png',
      comment: '',
    },
  },
  {
    title: 'Chemistry Project',
    href: 'https://www.example.com',
    description:
      'Et adipisicing aliqua culpa sint nulla minim nostrud. Magna nulla dolor aliquip dolor proident enim culpa elit aute tempor dolor excepteur aliqua ea. Nostrud ea ut tempor consequat velit. Id incididunt minim sint sunt. Exercitation laboris non ipsum laboris minim. Adipisicing in laboris labore nisi esse est eiusmod veniam ea ullamco. Anim laboris Lorem minim do.',
    image: {
      description: 'example screenshot of a project involving chemistry',
      src: 'images/example2.png',
      comment: `“Chemistry” by Surian Soosay is licensed under CC BY 2.0
      https://www.flickr.com/photos/ssoosay/4097410999`,
    },
  },
  {
    title: 'Cats Project',
    href: 'https://www.example.com',
    description:
      'Nisi aliqua cupidatat adipisicing aliqua. Commodo sint occaecat nostrud ut fugiat eiusmod excepteur nostrud laborum sit. Veniam exercitation reprehenderit eu consequat est labore eiusmod Lorem velit proident. Quis eiusmod consequat dolore dolor pariatur velit consectetur ea laboris ipsum. Eiusmod cillum incididunt sint Lorem elit nostrud dolore officia do eu Lorem fugiat. Aute enim aliquip aliqua pariatur eiusmod adipisicing amet mollit velit labore voluptate.',
    image: {
      description: 'example screenshot of a project involving cats',
      src: 'images/example3.png',
      comment: `“Bengal cat” by roberto shabs is licensed under CC BY 2.0
      https://www.flickr.com/photos/37287295@N00/2540855181`,
    },
  },
];

ReactDOM.render(<ExampleWork work={myWork} />, document.getElementById('example-work'));
