const RightPanel = () => {
  return (
    <div className="right-panel">
      {/*1, Upcoming Events */}
      <div className="Widget">
        <h3>Upcoming Events</h3>
        <ul className="event-list">
          <li><strong>team sync</strong> -Today ,2:30 PM</li>
          <li><strong>Town hall</strong> -Friday ,7:45 PM</li>
        </ul>
        {/* 2, Quick Action */}
              <div className="Widget">
                <h3> Ouick Action </h3>
                <div className="quick-action">
                  <button className="action-button">Mark Attendance</button>
                  <button className="action-button">view payslip</button>
                  
                  </div>

</div>
        </div>
        </div>
  );
};

export default RightPanel;