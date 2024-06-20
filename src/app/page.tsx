import { fetchCommits } from './_lib/githubApi';
import { CommitResponse } from './_lib/types';
import { CommitsList } from './components/commitsList/commitsList';

export const dynamic = 'force-dynamic';

export default async function Home() {
  const commits: CommitResponse[] = await fetchCommits();
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-5 max-h-screen">
      <CommitsList initialCommits={commits}>Refetch commits</CommitsList>
    </main>
  );
}
