import createElement from "../dom/createElement";
import Card from "./generateCharacterCard";

export default function CardList(arrayOfUsers) {
  return createElement({
    tagName: 'div',
    classList: ['users'],
    children: arrayOfUsers.map(({ element }) => Card({ element }))
  })
}