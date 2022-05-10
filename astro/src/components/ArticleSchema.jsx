import site from '../data/site.js';

function ArticleSchema({title, permalink, publishDate, ogImageUrl, description}) {
    const ldData = {
        "@context": "https://schema.org",
        "@type": "Article",
        "publisher": {
            "@type": "Organization",
            "name": `${site.title}`,
            "url": `${site.url}`,
        },
        "author": {
            "@type": "Person",
            "name": `${site.name}`,
            "image": {
                "@type": "ImageObject",
                "url": `${site.url}/assets/img/favicon.png`,
                "width": 512,
                "height": 512
            },
            "url": `${site.url}`,
            "sameAs": [
                `${site.url}`,
                `${site.facebookURL}`,
                `${site.twitterURL}`,
                `${site.instagramURL}`
            ]
        },
        "headline": `${title}`,
        "url": `${permalink}`,
        "datePublished": `${publishDate}`,
        "image": {
            "@type": "ImageObject",
            "url": `${ogImageUrl}`,
            "width": 1200,
        },
        "description": `${description}`,
            "mainEntityOfPage": {
                "@type": "WebPage",
                "@id": `${site.url}`
            }
        }
    return (
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify(ldData, null, 4)}} />
        </>
    );
}

export default ArticleSchema;