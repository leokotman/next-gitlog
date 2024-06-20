import { CommitResponse } from '@/app/_lib/types';

interface CommitProps {
  commit: CommitResponse;
}

export const Commit = (props: CommitProps) => {
  const { commit } = props;
  const commitTime = commit.commit?.author?.date
    ? new Date(commit.commit?.author?.date).toUTCString()
    : '';
  console.log('commitTime', commitTime);

  return (
    <li className="bg-blue-100 rounded p-3">
      <p className="text-lg">{commit.commit?.message}</p>
      <p className="flex justify-between italic text-sm">
        <span>by {commit.commit?.author?.name}</span>
        <span>{commitTime}</span>
      </p>
    </li>
  );
};
