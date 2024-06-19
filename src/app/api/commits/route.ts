import { fetchCommits } from '@/app/_lib/githubApi';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(req: NextRequest) {
  try {
    const commits = await fetchCommits();
    return NextResponse.json(commits);
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to fetch commits' },
      { status: 500 }
    );
  }
}
