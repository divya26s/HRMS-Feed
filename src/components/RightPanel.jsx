import React from 'react';
import { Card, ListGroup, Badge } from 'react-bootstrap';
import { FaBirthdayCake, FaCalendar, FaUser } from 'react-icons/fa';
import './RightPanel.css';

const RightPanel = () => {
  return (
    <div className="right-panel p-3">
      {/* Points Section */}
      <Card className="mb-3 shadow-sm border-0">
        <Card.Body>
          <div className="d-flex justify-content-between align-items-center my-2">
            <h6 className="mb-0 fw-semibold">Your Points</h6>
           <span className="Badge bg-primary rounded-pill fs-3 px-4 py-2"style={{ color: 'white'}}>1284</span>
          </div>
          <div className="d-flex mt-3">
            <button className="btn btn-sm btn-outline-primary me-2">SEND</button>
            <button className="btn btn-sm btn-outline-success">REDEEM</button>
          </div>
        </Card.Body>
      </Card>

      {/* Calendar Section */}
      <Card className="mb-3">
        <Card.Body>
          <h6 className="text-muted">February</h6>
          <div className="calendar-grid">
            {['MON 7', 'TUE 8', 'WED 9', 'THU 10', 'FRI 11'].map(day => (
              <div key={day} className="calendar-day">
                {day}
              </div>
            ))}
            <div className="calendar-event"> < FaBirthdayCake className="m-1"/>Birthdays</div>
            <div className="calendar-event empty"></div>
            <div className="calendar-event empty"></div>
            <div className="calendar-event empty"></div>
            <div className="calendar-event marked">X</div>
          </div>
          <div className="mt-2">
            <small className="text-muted">Work anniversary</small>
          </div>
        </Card.Body>
      </Card>

      {/* Meetings Section */}
      <Card className="mb-3">
        <Card.Body>
          <ListGroup variant="flush">
            <ListGroup.Item className="d-flex justify-content-between align-items-center">
              <div>
              <FaUser size={28} className="me-2" /> <strong>Weekly Review Meeting</strong>
                <div className="text-muted small">11:00 am - 12:00 pm</div>
              </div>
              <Badge bg="light" text="dark">+6 attending</Badge>
            </ListGroup.Item>
            
            <ListGroup.Item>
              <strong>Client Meeting - RAB</strong>
              <div className="text-muted small">01:00 pm - 02:00 pm</div>
            </ListGroup.Item>
          </ListGroup>
        </Card.Body>
      </Card>

      {/* Upcoming Events */}
      <Card>
        <Card.Body>
                 <h6> <FaCalendar className="m-2"/>Upcoming Events</h6>

          <ListGroup variant="flush">
            <ListGroup.Item>
              <div className="d-flex justify-content-between">
                <span>Team Building Workshop</span>
                <small className="text-muted">15 Oct</small>
              </div>
              <small className="text-muted">10:00 AM - 2:00 PM</small>
            </ListGroup.Item>
            
            <ListGroup.Item>
              <div className="d-flex justify-content-between">
                <span>Employee of the Month Award</span>
                <small className="text-muted">20 Oct</small>
              </div>
              <small className="text-muted">3:00 PM - 4:30 PM</small>
            </ListGroup.Item>
            
            <ListGroup.Item>
              <div className="d-flex justify-content-between">
                <span>Diversity and Inclusion Seminar</span>
                <small className="text-muted">5 Nov</small>
              </div>
              <small className="text-muted">9:30 AM - 12:00 PM</small>
            </ListGroup.Item>
            
            <ListGroup.Item className="fw-bold">
              <div className="d-flex justify-content-between">
                <span>Town Hall Meeting</span>
                <small className="text-muted">10 Nov</small>
              </div>
            </ListGroup.Item>
          </ListGroup>
        </Card.Body>
      </Card>
    </div>
  );
};

export default RightPanel;
