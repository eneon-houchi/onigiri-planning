import React from 'react';
import ReactDom from 'react-dom';

function App(): JSX.Element {
  return <div>test</div>;
}

ReactDom.render(<App />, document.getElementById('app'));
