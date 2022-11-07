import { useState } from 'react';
import { Button, Form, Modal } from 'react-bootstrap';
import { createGame } from '../api';
import { Timestamp } from 'firebase/firestore';
import { createDate } from '../helper';

export default function CreateGameModal(props) {
  const { show, onHide } = props;
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [playersPerTeam, setPlayersPerTeam] = useState(0);
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [skillLevel, setSkillLevel] = useState("");
  const [notes, setNotes] = useState("");


  const handleSubmit = async (e) => {
    e.preventDefault();
    const dateTime = createDate(date, time);
    try {
        const gameInfo = {
            title: title,
            description: description,
            players_per_team: parseInt(playersPerTeam),
            location: {
                address: address,
                city: city,
                state: state
            },
            date_time: Timestamp.fromDate(dateTime),
            skill_level: skillLevel,
            notes: notes
        }
        console.log(gameInfo);
        createGame(gameInfo);
        onHide();
    } catch (err) {
        console.log(err);
        alert.message(err);
    }
  };

  return (
    <Modal centered show={show} backdrop="static">
      <Modal.Header>
        <Modal.Title>New Game</Modal.Title>
        <Button onClick={onHide}>Close</Button>
      </Modal.Header>
      <Form onSubmit={handleSubmit}>
        <Modal.Body>
            <Form.Group controlId="createGameTitle">
                <Form.Label>Title</Form.Label>
                <Form.Control type="title" onChange={(e) => setTitle(e.target.value)} value={title}/>
                <Form.Text>Enter the name of your match</Form.Text>
            </Form.Group>
            <Form.Group controlId="createGameDescription">
                <Form.Label>Description</Form.Label>
                <Form.Control type="description" as="textarea" onChange={(e) => setDescription(e.target.value)} value={description}/>
                <Form.Text>Detailed description</Form.Text>
            </Form.Group>
            <Form.Group controlId="createGamePlayersPerTeam">
                <Form.Label>Players Per Team</Form.Label>
                <Form.Control type="players-per-team" onChange={(e) => setPlayersPerTeam(e.target.value)} value={playersPerTeam}/>
                <Form.Text>
                Number of players on each team (7v7, 11v11, etc.)
                </Form.Text>
            </Form.Group>
            <Form.Group controlId="createGameLocation">
                <Form.Label>Address</Form.Label>
                <Form.Control type="address" onChange={(e) => setAddress(e.target.value)} value={address}/>
                <Form.Label>City</Form.Label>
                <Form.Control type="city" onChange={(e) => setCity(e.target.value)} value={city}/>
                <Form.Label>State</Form.Label>
                <Form.Control type="state" onChange={(e) => setState(e.target.value)} value={state}/>
            </Form.Group>
            <Form.Group controlId="createGameDateTime">
                <Form.Label>Date</Form.Label>
                <Form.Control type="date" onChange={(e) => setDate(e.target.value)} value={date}/>
                <Form.Label>Time</Form.Label>
                <Form.Control type="time" onChange={(e) => setTime(e.target.value)} value={time}/>
            </Form.Group>
            <Form.Group controlId="createGameSkillLevel">
                <Form.Label>Skill Level</Form.Label>
                <Form.Select type="skill-level" onChange={(e) => setSkillLevel(e.target.value)} value={skillLevel}>
                    <option>Beginner</option>
                    <option>Intermediate</option>
                    <option>Advanced</option>
                </Form.Select>
                <Form.Text>Recommended skill level</Form.Text>
            </Form.Group>
            <Form.Group controlId="createGameNotes">
                <Form.Label>Notes</Form.Label>
                <Form.Control type="notes" onChange={(e) => setNotes(e.target.value)} value={notes}/>
                <Form.Text>(Optional) Any extra notes?</Form.Text>
            </Form.Group>
        </Modal.Body>
        <Modal.Footer>
            <Button type="submit">Submit</Button>
        </Modal.Footer>
      </Form>
    </Modal>
  );
}
