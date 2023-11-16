import { error } from '@sveltejs/kit';

import BLOG_POSTS from '$lib/meta/blogPosts.mjs';
const SHOW = 10;

/** @type {import('./$types').PageLoad} */
export async function load({ url }) {
	try {
		let after = 0;

		const requestedAfter = Number.parseInt(url.searchParams.get('after'));
		if (requestedAfter > 0 && requestedAfter != NaN && requestedAfter < BLOG_POSTS.length) {
			after = requestedAfter;
		}

		const isEnd = after + SHOW > BLOG_POSTS.length;
		const isStart = after == 0;

		return {
			blogPosts: BLOG_POSTS.reverse().slice(after, after + SHOW),
			next: after + SHOW,
			previous: after - SHOW,
			isEnd: isEnd,
			isStart: isStart
		};
	} catch (e) {
		throw error(500, e);
	}
}
