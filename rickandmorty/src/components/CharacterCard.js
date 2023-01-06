/**
 * Generate a character object that is usable by the createDOMElement() method
 * @param character
 * @returns {{children: [{attributes: [{src: *}], tagName: string, classList: string[]},{children: [{children: [{children: [{tagName: string, classList: string[]}], attributes: [{target: string},{textContent: number | "fulfilled" | FontFaceSetLoadStatus | string | FontFaceLoadStatus | "rejected"}], tagName: string, classList: string[]}], attribute: [{textContent}], tagName: string, classList: string[]},{children: [{attributes: [{textContent: string},{target: string}], tagName: string, classList: string[]},{attributes: [{textContent: *}], tagName: string, classList: string[]}], tagName: string, classList: string[]},{children: [{attributes: [{textContent: string},{target: string}], tagName: string, classList: string[]},{attributes: [{textContent: *}], tagName: string, classList: string[]}], tagName: string, classList: string[]}], tagName: string, classList: string[]}], tagName: string, classList: string[]}}
 * @constructor
 */
export function generateCharacterCard(character) {
  console.log(character)
    return {
      tagName: 'div',
      classList: ['card'],eventListener: {
        name: 'click',
        function: () => {
          console.log("HELLO")
        }
      },
      attributes: {
        'data-id': character.id
      },
      children: [
        {
          tagName: 'img',
          classList: ['card-img'],
          attributes: {
              "src" : character.picture
          }
        },
        {
          tagName: 'div',
          classList: ['card-description'],
          children: [
            {
              tagName: 'h2',
              classList: ['character-name', 'link'],
              text: character.name,
              children: [
                {
                  tagName: 'span',
                  classList: ['status'],
                  text: character.status,
                  attributes: {
                     'target': '_blank',
                  },
                  children: [
                    {
                      tagName: 'span',
                      classList: ['status_icon_' + character.status]
                    }
                  ]
                }
              ]
            },
            {
              tagName: 'div',
              classList: ['section'],
              children: [
                {
                  tagName: 'span',
                  classList: ['text-gray'],
                  text: 'Last known location : ',
                  attributes: {
                    target: '_blank'
                  }
                },
                {
                  tagName: 'a',
                  classList: ['link', 'last-location'],
                  text: character.lastKnownLocation,
                }
              ]
            },
            {
              tagName: 'div',
              classList: ['section'],
              text: 'First seen in : ',
              children: [
                {
                  tagName: 'span',
                  classList: ['text-gray'],
                  attributes: {
                    target: '_blank'
                  }
                },
                {
                  tagName: 'a',
                  classList: ['link', 'first-location'],
                  text: character.firstSeenLocation,
                }
              ]
            }
          ]
        }
      ]
    }
  }