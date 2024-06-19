'use client';

import { CommitResponse } from '@/app/_lib/types';
import { useState } from 'react';

interface CommitsListProps {
  children: React.ReactNode;
  initialCommits: CommitResponse[];
}

export const CommitsList = (props: CommitsListProps) => {
  const { children, initialCommits } = props;
  const [commits, setCommits] = useState<CommitResponse[]>(initialCommits);

  const handleRefetchCommits = async () => {
    const response = await fetch('/api/commits');
    if (response.ok) {
      const newCommits: CommitResponse[] = await response.json();
      setCommits(newCommits);
    } else {
      console.error('Failed to fetch commits');
    }
  };

  return (
    <div>
      <button onClick={handleRefetchCommits}>{children}</button>
      <ul>
        {commits.map((commit) => (
          <li key={commit.sha}>
            {commit.commit?.author?.name}, {commit.commit?.message},{' '}
            {commit.commit?.author?.date}
          </li>
        ))}
      </ul>
    </div>
  );
};
