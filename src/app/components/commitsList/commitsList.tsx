'use client';

import { CommitResponse } from '@/app/_lib/types';
import { useState } from 'react';
import { Commit } from '../commit/commit';

interface CommitsListProps {
  children: React.ReactNode;
  initialCommits: CommitResponse[];
}

export const CommitsList = (props: CommitsListProps) => {
  const { children, initialCommits } = props;
  const [commits, setCommits] = useState<CommitResponse[]>(initialCommits);

  const handleRefetchCommits = async () => {
    const response = await fetch(`/api/commits?cache-bust=${Date.now()}`, {
      cache: 'no-store',
    });
    if (response.ok) {
      const newCommits: CommitResponse[] = await response.json();
      setCommits(newCommits);
    } else {
      console.error('Failed to fetch commits');
    }
  };
  const commitsNumberHeading =
    commits.length === 1
      ? `There is ${commits.length} commit`
      : `There are ${commits.length} commits`;

  return (
    <section className="flex flex-col items-center gap-6 w-full overflow-y-scroll max-h-full">
      <h2 className="text-xl">{commitsNumberHeading}</h2>
      <button
        className="bg-blue-50 border border-blue-950 rounded px-4 py-2 transition ease-in-out duration-300 hover:bg-blue-900 hover:text-white hover:border-white"
        onClick={handleRefetchCommits}
      >
        {children}
      </button>
      <ul className="flex flex-col gap-4 w-9/12">
        {commits.map((commit) => (
          <Commit commit={commit} key={commit.sha} />
        ))}
      </ul>
    </section>
  );
};
