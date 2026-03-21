import Parser from 'rss-parser';
import fs from 'fs';
import path from 'path';

// Standalone script for cron/build usage to fetch RSS and write to JSON

const parser = new Parser({
  customFields: {
    item: ['media:content', 'description'],
  }
});

const RSS_FEEDS = [
  'https://news.google.com/rss/search?q="Bijender+Yadav"+Moradabad&hl=hi&gl=IN&ceid=IN:hi',
  // Can add more specific feeds here if available
];

async function fetchNews() {
  console.log('Fetching news updates...');
  try {
    let allNews: any[] = [];

    for (const url of RSS_FEEDS) {
      const feed = await parser.parseURL(url);
      
      const mappedItems = feed.items.map(item => {
        // Very basic extraction of source from Google News title format (e.g. "Headline - Source Name")
        const titleParts = item.title?.split('-') || [];
        const source = titleParts.length > 1 ? titleParts.pop()?.trim() : 'News Source';
        const title = titleParts.join('-').trim() || item.title;

        return {
          id: `news-${Buffer.from(item.link || '').toString('base64').substring(0, 8)}`,
          title: title,
          source: source,
          publishedAt: item.isoDate || new Date().toISOString(),
          url: item.link,
          snippet: item.contentSnippet?.substring(0, 150) + '...',
          isBreaking: false
        };
      });

      allNews = [...allNews, ...mappedItems];
    }

    // Sort by date desc
    allNews.sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime());

    // Take top 20
    const topNews = allNews.slice(0, 20);

    // Provide absolute path for script execution
    const jsonPath = path.resolve(process.cwd(), 'public/data/news-feed.json');
    
    // Read existing to preserve curated items (if we had a mechanism to flag them)
    // For now, we'll just overwrite
    fs.writeFileSync(jsonPath, JSON.stringify(topNews, null, 2));

    console.log(`Successfully fetched and saved ${topNews.length} news items.`);
  } catch (error) {
    console.error('Error fetching news:', error);
  }
}

// If run directly via node
if (process.argv[1] === new URL(import.meta.url).pathname) {
  fetchNews();
}

export { fetchNews };
