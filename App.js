import React from 'react';
import './style.css';

function App() {
  return (
    <div className="planner">
      <div className="header">
        <h1>FRIDAY</h1>
      </div>
      <div className="time-block">
        <div className="time-slot">7:00</div>
        <div className="activity">Representing</div>
        <div className="arena">Arena</div>
        <div className="priorities">Priorities</div>
        <div className="time-slot">8:00</div>
      </div>
      <div className="time-block">
        <div className="time-slot">9:00</div>
        <div className="activity">Representing</div>
        <div className="arena">Arena</div>
        <div className="priorities">Priorities</div>
        <div className="time-slot">10:00</div>
      </div>
      <div className="time-block">
        <div className="time-slot">11:00</div>
        <div className="close-out">
          <span>✔</span>
          <span>🏃</span>
          <span>👍</span>
          <span>🗝</span>
        </div>
        <div className="time-slot">12:00</div>
      </div>
    </div>
  );
}

export default App;
