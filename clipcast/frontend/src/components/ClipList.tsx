import React from 'react';
import { Clip } from '../types';

interface ClipListProps {
  clips: Clip[];
}

const ClipList: React.FC<ClipListProps> = ({ clips }) => {
  return (
    <div>
      <h2>Clip List</h2>
      <ul>
        {clips.map((clip) => (
          <li key={clip.id}>
            <h3>{clip.title}</h3>
            <p>{clip.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ClipList;