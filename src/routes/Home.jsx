import { React } from 'react';
import PuzzleIntros from '../components/PuzzleIntros.jsx';

export default function Home() {
  const heading = 'Welcome!';
  const greeting = 'You have just entered space near a black hole. Can you escape?'

  return (
    <>
      <PuzzleIntros title={heading} blurb={greeting} />
    </>
  );
}
