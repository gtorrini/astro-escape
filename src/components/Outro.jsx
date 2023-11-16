import { React } from 'react';
import PuzzleIntros from './PuzzleIntros.jsx';

export default function Outro() {
  const heading = '\u2726 CONGRATULATIONS \u2726';
  const closing = 'Thanks for playing!';
    return (
        <>
          <PuzzleIntros title={heading} blurb={closing} />
        </>
    );
}