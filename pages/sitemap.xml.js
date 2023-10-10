import { Data, cityData } from "@/components/Data";

function generateSiteMap(pages) {
  const currentDate = new Date();
  const day = String(currentDate.getDate()).padStart(2, '0');
  const month = String(currentDate.getMonth() + 1).padStart(2, '0');
  const year = currentDate.getFullYear();
  const formattedDate = `${year}-${month}-${day}`;

  const allPages = [...pages, ...Object.keys(cityData)]; // Combine pages and cityData keys

  return `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      <url>
        <loc>https://ArtFullinteriors.com</loc>
        <lastmod>${formattedDate}</lastmod>
        <changefreq>Daily</changefreq>
        <priority>1.0</priority>
      </url>
      <url>
        <loc>https://ArtFullinteriors.com/services</loc>
        <lastmod>${formattedDate}</lastmod>
        <changefreq>Daily</changefreq>
        <priority>1.0</priority>
      </url>
      <url>
      <loc>https://ArtFullinteriors.com/about-us</loc>
      <lastmod>${formattedDate}</lastmod>
      <changefreq>Daily</changefreq>
      <priority>1.0</priority>
    </url>
    <url>
      <loc>https://ArtFullinteriors.com/gallery</loc>
      <lastmod>${formattedDate}</lastmod>
      <changefreq>Daily</changefreq>
      <priority>1.0</priority>
    </url>
    <url>
      <loc>https://ArtFullinteriors.com/contact-us</loc>
      <lastmod>${formattedDate}</lastmod>
      <changefreq>Daily</changefreq>
      <priority>1.0</priority>
    </url>
      ${allPages
      .map((value) => {
        return `
        <url>
          <loc>${`https://ArtFullinteriors.com/${value}`}</loc>
          <lastmod>${formattedDate}</lastmod>
          <changefreq>Daily</changefreq>
          <priority>0.9</priority>
        </url>
        
      `;
      })
      .join('')}
    </urlset>`;
}

function SiteMap({ pages }) {
  const allPages = [...pages, ...Object.keys(cityData)]; // Combine pages and cityData keys

  return (
    <div>
      <h1>Sitemap</h1>
      <ul>
        {allPages.map((page) => (
          <li key={page}>
            <a href={`https://ArtFullinteriors.com/${page}`}>
              {`https://ArtFullinteriors.com/${page}`}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export async function getServerSideProps({ res }) {
  const pages = Object.keys(Data);

  const sitemap = generateSiteMap(pages);

  res.setHeader('Content-Type', 'text/xml');
  res.write(sitemap);
  res.end();

  return {
    props: {
      pages,
    },
  };
}

export default SiteMap;
