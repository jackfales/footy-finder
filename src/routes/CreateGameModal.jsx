import { Button, Form, Modal } from 'react-bootstrap';

export default function CreateGameModal(props) {
  const { show, onHide } = props;

  return (
    <Modal centered show={show} backdrop="static">
      <Modal.Header>
        <Modal.Title>New Game</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group controlId="createGameTitle">
            <Form.Label>Title</Form.Label>
            <Form.Control type="title" />
            <Form.Text>Enter the name of your match</Form.Text>
          </Form.Group>
          <Form.Group controlId="createGameDescription">
            <Form.Label>Description</Form.Label>
            <Form.Control type="description" as="textarea" />
            <Form.Text>Detailed description</Form.Text>
          </Form.Group>
          <Form.Group controlId="createGamePlayersPerTeam">
            <Form.Label>Players Per Team</Form.Label>
            <Form.Control type="players-per-team" />
            <Form.Text>
              Number of players on each team (7v7, 11v11, etc.)
            </Form.Text>
          </Form.Group>
          <Form.Group controlId="createGameLocation">
            <Form.Label>Address</Form.Label>
            <Form.Control type="address" />
            <Form.Label>City</Form.Label>
            <Form.Control type="city" />
            <Form.Label>State</Form.Label>
            <Form.Control type="state" />
          </Form.Group>
          <Form.Group controlId="createGameDateTime">
            <Form.Label>Date</Form.Label>
            <Form.Control type="date" />
            <Form.Label>Time</Form.Label>
            <Form.Control type="time" />
          </Form.Group>
          <Form.Group controlId="createGameSkillLevel">
            <Form.Label>Skill Level</Form.Label>
            <Form.Select type="skill-level">
              <option>Beginner</option>
              <option>Intermediate</option>
              <option>Advanced</option>
            </Form.Select>
            <Form.Text>Recommended skill level</Form.Text>
          </Form.Group>
          <Form.Group controlId="createGameNotes">
            <Form.Label>Notes</Form.Label>
            <Form.Control type="notes" />
            <Form.Text>(Optional) Any extra notes?</Form.Text>
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={onHide}>Submit</Button>
      </Modal.Footer>
    </Modal>
  );
}
