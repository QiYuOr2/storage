import React, { useState } from 'react';
import reactDom from 'react-dom';
import { local, cookie, memory } from '../../dist/index.esm';

const App = () => {
  const [text, setText] = useState('');
  const [value, setValue] = useState('');

  return (
    <div>
      <h1>Test Page</h1>
      <section>
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.currentTarget.value)}
        />
        <button onClick={() => local.set('text', text)}>
          存入localStorage
        </button>
        <button onClick={() => cookie.set('text', text)}>存入Cookie</button>
        <button onClick={() => memory.set('text', text)}>存入Memory</button>
      </section>
      <section>
        <button
          onClick={() => {
            setValue(local.get('text'));
          }}
        >
          从localStorage取
        </button>
        <button
          onClick={() => {
            setValue(cookie.get('text'));
          }}
        >
          从Cookie取
        </button>
        <button
          onClick={() => {
            setValue(memory.get('text'));
          }}
        >
          从Memory取
        </button>
        <p>{value}</p>
      </section>
    </div>
  );
};

reactDom.render(<App />, document.getElementById('app'));
