import { error } from '@sveltejs/kit';

import BLOG_POSTS from '$lib/meta/blogPosts.mjs';

/** @type {import('./$types').PageLoad} */
export async function load() {
	try {
		return {
			recentBlogPosts: BLOG_POSTS.slice(0, 3) // Grab the first 3 entries.
		};
	} catch (e) {
		throw error(500, e);
	}
}
