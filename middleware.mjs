import { rewrite, next } from '@vercel/functions';

export const config = {
  matcher: '/',
};

export default function middleware(request) {
  const host = request.headers.get('host') || '';

  if (host === 'copy.sevenmedia.space') {
    return rewrite(new URL('/copy.html', request.url));
  }

  if (host === 'tasirra.com' || host === 'www.tasirra.com') {
    return rewrite(new URL('/tasirra_landing.html', request.url));
  }

  return next();
}
