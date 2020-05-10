import React, { useState , useEffect} from 'react';

function Deneme() {
  const [count, setCount] = useState(0);
  const [fruit, setFruit] = useState('banana');
  const [todos, setTodos] = useState([{ title: 'IBOBEY', text: 'Learn Hooks' }]);

  useEffect(() => {
    document.title = `DENEME ${count} PAGE`;
  });

  return (
    <section className="contentBox">
      <ul>
        <li>
          <br></br>
          <br></br>
          <br></br>
          <p>You clicked {count} times</p>
          <button onClick={() => setCount(count + 1)}>Click me</button>
        </li>

        <li>
          <br></br>
          <br></br>
          <br></br>
          <p>You clicked {fruit} times</p>
          <button onClick={() => handleOrangeClick(setFruit)}>Click me</button>
        </li>

        <li>
          <br></br>
          <br></br>
          <br></br>
          <p>Array to {todos[0].title}</p>
        </li>
      </ul>
    </section>
  );

  function handleOrangeClick(setFruit) {
    setFruit('orange');
  }
}

export default Deneme;
