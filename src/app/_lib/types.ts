interface Author {
  login?: string;
  id?: number;
  node_id?: string;
  avatar_url?: string;
  gravatar_id?: string | null;
  url?: string;
  html_url?: string;
  followers_url?: string;
  following_url?: string;
  gists_url?: string;
  starred_url?: string;
  subscriptions_url?: string;
  organizations_url?: string;
  repos_url?: string;
  events_url?: string;
  received_events_url?: string;
  type?: string;
  site_admin?: boolean;
}

interface Commit {
  url?: string;
  author?: {
    name?: string;
    email?: string;
    date?: string;
  } | null;
  committer?: {
    name?: string;
    email?: string;
    date?: string;
  } | null;
  message?: string;
  tree?: {
    url?: string;
    sha?: string;
  };
  comment_count?: number;
  verification?: {
    verified?: boolean;
    reason?: string;
    signature?: string | null;
    payload?: string | null;
  };
}

export interface CommitResponse {
  url?: string;
  sha?: string;
  node_id?: string;
  html_url?: string;
  comments_url?: string;
  commit?: Commit;
  author?: Author | null;
  committer?: Author | null;
  parents?: Array<{
    url?: string;
    sha?: string;
  }>;
}
