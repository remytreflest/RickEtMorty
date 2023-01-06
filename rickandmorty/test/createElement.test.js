import { expect, test } from 'vitest';
import createDOMElement from '../src/dom/createDOMElement';

const tree = {
    tagName: 'div',
    text: "Hello World",
    children: [
        {
          tagName: 'img',
          text: "",
          classList: ['card']
        }
      ],
  };

test('should create an element', () => {
    const element = createDOMElement(tree);
    expect(element.textContent).toContain("Hello World");
    expect(element.querySelectorAll('.card').length).toEqual(1);
});