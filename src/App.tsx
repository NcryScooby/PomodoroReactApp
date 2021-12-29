import React from 'react';
import {PomodoroTimer} from './components/Pomodoro-Timer';

function App(): JSX.Element {
  return (
    <div className="App">
      <PomodoroTimer defaultPomodoroTime={1500}/>
    </div>
  );
}

export default App;
