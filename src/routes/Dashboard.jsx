import { useState } from 'react';
import { Button } from 'react-bootstrap';
import CreateGameModal from './CreateGameModal';
import GamePreview from './GamePreview';

const GamePreviewData = [
  {
    title: 'Game 1',
    description: 'Description 1',
    date_time: 'Oct 1, 2022 7:00PM',
    players_per_team: 7,
    location: {
      city: 'San Francisco',
      state: 'CA'
    }
  },
  {
    title: 'Game 2',
    description: 'Description 2',
    date_time: 'Sept 1, 2021 8:00PM',
    players_per_team: 11,
    location: {
      city: 'Hayward',
      state: 'CA'
    }
  },
];

export default function Dashboard() {
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  return (
    <div>
      <h1>Dashboard</h1>
      {GamePreviewData &&
        GamePreviewData.length > 0 &&
        GamePreviewData.map((gamePreviewData) => (
          <GamePreview GamePreviewData={gamePreviewData} />
        ))}
      <Button onClick={toggleModal}>Create New Game</Button>
      <CreateGameModal show={showModal} onHide={toggleModal} />
    </div>
  );
}
