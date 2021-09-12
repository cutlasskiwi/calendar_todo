import React from 'react';
import ReactDOM from 'react-dom';
import ".//calendar/styles.css";

import Calendar from "./calendar";

export default function App() {
    return <Calendar />;
}

ReactDOM.render(<App />, document.getElementById('root'));