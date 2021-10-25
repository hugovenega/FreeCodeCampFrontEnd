import React from 'react';
import './App.css';
import marked from 'marked';

marked.setOptions({
  breaks: true
});

const renderer = new marked.Renderer ();

function App() {
  const [text, setText] = React.useState('');
  return (
    <div className='text-center px-4'>
      <h1 className='p-4'>markdown preview</h1>
    <textarea
    name='text'
    id='text'
    rows='10'
    value={text}
    className='textarea'
    onChange={(e) => setText(e.target.value)}
    ></textarea>
    <h3 className='mt-3'>Output</h3>
    <Preview markdown={text}/>
    </div>
  );
}


export default App;
