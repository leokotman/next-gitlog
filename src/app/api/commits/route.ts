import { fetchCommits } from '@/app/_lib/githubApi';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(req: NextRequest) {
  try {
    const commits = await fetchCommits();
    const response = NextResponse.json(commits);
    response.headers.set('Cache-Control', 'public, max-age=60');
    return response;
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to fetch commits' },
      { status: 500 }
    );
  }
}
