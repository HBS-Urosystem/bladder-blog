export const allPosts = `*[_type == 'post']{categories[]->{slug, title},'author': author->{name, image, bio}, ...} | order(publishedAt desc)`;

export const allCategoriesWithPosts = `*[_type == 'category']{"posts": *[_type == "post" && references(^._id)]{'author': author->{name, image, bio}, ...} | order(publishedAt desc), ...}`;

export const allAuthors = `*[_type == 'author && publishedAt != null]']`;

export const allEvents = `*[_type == 'event']{...} | order(date1 desc)`;

