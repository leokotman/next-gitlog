import { Octokit } from '@octokit/core';
import { CommitResponse } from './types';

export const fetchCommits = async (): Promise<CommitResponse[]> => {
  const octokit = new Octokit({ auth: process.env.GITHUB_TOKEN });
  octokit;

  const owner = 'leokotman';
  const repo = 'next-gitlog';
  const perPage = 5;
  const authentication = await octokit.auth();
  console.log('authentication', authentication);

  const fiveMostRecentCommits = await octokit
    .request('GET /repos/{owner}/{repo}/commits', {
      owner,
      repo,
      per_page: perPage,
    })
    .then((res) => res.data);
  return fiveMostRecentCommits;
};
