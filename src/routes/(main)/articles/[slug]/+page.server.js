import { redirect, error } from '@sveltejs/kit';

import BLOG_POSTS from '$lib/meta/blogPosts.mjs';

/** @type {import('./$types').PageLoad} */
export async function load({ params }) {
	try {
		for (const blogPost of BLOG_POSTS) {
			if (blogPost.slug == params.slug) {
				return blogPost;
			}
		}

		throw redirect(302, '/');
	} catch (e) {
		throw error(500, e);
	}
}
