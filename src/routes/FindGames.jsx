import GamePreview from './GamePreview';

const GamePreviewData = [
  {
    title: 'Game 1',
    description: 'Description 1'
  },
  {
    title: 'Game 2',
    description: 'Description 2'
  },
];

export default function FindGames() {
  return (
    <div>
      <h1>Find Games</h1>
      {GamePreviewData &&
        GamePreviewData.length > 0 &&
        GamePreviewData.map((gamePreviewData) => (
          <GamePreview GamePreviewData={gamePreviewData} />
        ))}
    </div>
  );
}
