import { useState, useEffect } from 'react';
import { Button, Form, Modal } from 'react-bootstrap';
import { getGame } from '../api';

export default function GameModal(props) {
  const { GamePreviewData, show, onHide } = props;
  const [title, setTitle] = useState(GamePreviewData.GamePreviewData.title);
  const [description, setDescription] = useState(GamePreviewData.GamePreviewData.description);
  const [playersPerTeam, setPlayersPerTeam] = useState(GamePreviewData.GamePreviewData.players_per_team);
  const [address, setAddress] = useState("");
  const [city, setCity] = useState(GamePreviewData.GamePreviewData.location.city);
  const [state, setState] = useState(GamePreviewData.GamePreviewData.location.state);
  const [dateTime, setDateTime] = useState(GamePreviewData.GamePreviewData.date_time);
  const [skillLevel, setSkillLevel] = useState("");
  const [notes, setNotes] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
        // TODO: Add logged in user to registered users for game
        onHide();
    } catch (err) {
        console.log(err);
        alert.message(err);
    }
  };

  const fetchGame = async () => {
    const game = await getGame(GamePreviewData.GamePreviewData.id);
    setAddress(game.location.address);
    setSkillLevel(game.skill_level);
    setNotes(game.notes);
  }

  useEffect(() => {
    fetchGame();
  }, [show]);

  return (
    <Modal centered show={show}>
      <Modal.Header>
        <Modal.Title>{title}</Modal.Title>
        <Button onClick={onHide}>Close</Button>
      </Modal.Header>
      <Form onSubmit={handleSubmit}>
        <Modal.Body>
            <p>Description: {description}</p>
            <p>Match Type: {playersPerTeam}v{playersPerTeam}</p>
            <p>Location: {address}, {city}, {state}</p>
            <p>Date/Time: {dateTime}</p>
            <p>Skill Level: {skillLevel}</p>
            <p>Notes: {notes}</p>
        </Modal.Body>
        <Modal.Footer>
            <Button type="submit">Sign Up</Button>
        </Modal.Footer>
      </Form>
    </Modal>
  );
}
