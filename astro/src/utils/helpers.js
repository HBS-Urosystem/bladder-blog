import { parseISO, format } from 'date-fns';
import { client } from '../lib/sanityClient.js';
import imageUrlBuilder from '@sanity/image-url';
import BlocksToMarkdown from '@sanity/block-content-to-markdown';

const builder = imageUrlBuilder(client);

export function formatBlogPostDate(date) {
  //console.log(date)
  const year = date && parseISO(date, 'YYYY') || 0;
  const d = new Date();
  //console.log(year, d.getFullYear() - year)
  if (d.getFullYear() - year > 2) return 'Article is older than 2 years'

  const dateString = parseISO(date, 'YYYY/MM/Do');
  const formattedDateString = format(dateString, 'MMMM do, yyyy');
  return `${formattedDateString}`;
}

export function getSanityImageUrl(source) {
  return source ? builder.image(source) : '';
}

export async function convertBlockContentToMarkdown(postBody) {
  return BlocksToMarkdown(postBody);
}
