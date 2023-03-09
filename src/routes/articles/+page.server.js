import { error } from '@sveltejs/kit';

import BLOG_POSTS from '$lib/meta/blogPosts.mjs';
const SHOW = 10;

/** @type {import('./$types').PageLoad} */
export async function load({ url }) {
	try {
		let after = 0;

		const requestedAfter = Number.parseInt(url.searchParams.after);
		if (requestedAfter > 0 && requestedAfter != NaN && requestedAfter < BLOG_POSTS.length) {
			after = requestedAfter;
		}

		const isEnd = after + SHOW > BLOG_POSTS.length;

		return {
			recentBlogPosts: BLOG_POSTS.slice(after, SHOW),
			isEnd: isEnd
		};
	} catch (e) {
		throw error(500, e);
	}
}
