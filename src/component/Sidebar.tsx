import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <ul className="bg-amber-200 w-60">
      <li className="list-primary list-container">Flex Container</li>
      <li className="list-primary list-container">display</li>
      <li className="list-primary list-container">flex-direction</li>
      <li className="list-primary list-container">flex-wrap</li>
      <li className="list-primary list-container">justify-content</li>
      <li className="list-primary list-container">align-items</li>
      <li className="list-primary list-container">align-content</li>
      <li className="list-primary list-item">Flex Item</li>
      <li className="list-primary list-item">order</li>
      <li className="list-primary list-item">flex-grow</li>
      <li className="list-primary list-item">flex-basis</li>
      <li className="list-primary list-item">flex-shrink</li>
      <li className="list-primary list-item">align-self</li>
    </ul>
  );
}

// 하드코딩한 부분, map 고차함수 사용하여 boilerplate 줄이기
