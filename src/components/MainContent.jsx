import React from 'react';
import { Card, Badge, Button, Form } from 'react-bootstrap';
import './MainContent.css';

const MainContent = () => {
  return (
    <div className="main-content">
      {/* Feed Header */}
      <h4 className="feed-header mb-4">Feed</h4>

      {/* Anniversary Post */}
      <Card className="mb-3 feed-card">
        <Card.Body>
          <div className="d-flex align-items-center mb-2">
            <div className="avatar me-2">AH</div>
            <strong>Alison Hata</strong>
          </div>
          <Card.Text>
            Alison just completed 2 years in the company. <strong>Congratulate her!</strong>
          </Card.Text>
        </Card.Body>
      </Card>

      {/* Points Reward Post */}
      <Card className="mb-3 feed-card">
        <Card.Body>
          <div className="d-flex align-items-center mb-2">
            <div className="avatar me-2">HS</div>
            <strong>Harith Swanson</strong>
            <span className="mx-2">gave</span>
            <Badge bg="warning" text="dark" className="points-badge">
              200 points
            </Badge>
            <span className="mx-2">to</span>
            <strong>Rosia Thorpe</strong>
          </div>
          <Card.Text className="mb-3">
            Thanks for leading one of the most productive design sprints ever, Rosia. 
            Great win for the team and even greater outcome for the challenge.
          </Card.Text>
          <div className="d-flex justify-content-between align-items-center">
            <div className="d-flex">
              <div className="avatar me-2">BL</div>
              <div>
                <strong>Bern Leader</strong>
                <div className="text-muted small">200 Points</div>
              </div>
            </div>
            <Badge bg="light" text="dark" className="comments-badge">
              3 comments
            </Badge>
          </div>
        </Card.Body>
      </Card>

      {/* Comment Section */}
      <Card className="mb-3 feed-card">
        <Card.Body>
          <Form className="mb-3">
            <Form.Control 
              as="textarea" 
              rows={2} 
              placeholder="Write a comment" 
              className="comment-box"
            />
          </Form>
          <div className="comment">
            <div className="d-flex mb-2">
              <div className="avatar me-2">CG</div>
              <div>
                <strong>Clarence Gale</strong>
                <Card.Text>
                  Had an amazing experience working on the sprint and Rosia was a great manager. 
                  Learned a lot from her. Thanks for all the support and guidance.
                </Card.Text>
              </div>
            </div>
          </div>
          <Button variant="link" className="px-0">
            View 2 more comments
          </Button>
        </Card.Body>
      </Card>

      {/* Birthday Wishes */}
      <Card className="feed-card">
        <Card.Body>
          <div className="d-flex align-items-center">
            <div className="avatar me-2">AK</div>
            <div>
              <strong>Asma Khouri</strong>
              <Card.Text>
                <span className="text-muted">+6 more</span> wished Asma a happy birthday. 
                <Button variant="link" className="wish-link p-0 ms-1">
                  Wish her now!
                </Button>
              </Card.Text>
            </div>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
};

export default MainContent;
