const https = require('https');

function searchWiki(query) {
  const url = `https://commons.wikimedia.org/w/api.php?action=query&format=json&prop=imageinfo&iiprop=url&generator=search&gsrsearch=${encodeURIComponent(query)}&gsrnamespace=6&gsrlimit=1`;
  
  https.get(url, (res) => {
    let data = '';
    res.on('data', chunk => data += chunk);
    res.on('end', () => {
      const json = JSON.parse(data);
      const pages = json.query.pages;
      for (let id in pages) {
        console.log(query, '->', pages[id].imageinfo[0].url);
      }
    });
  });
}

searchWiki('Dog bite');
searchWiki('Second degree burn');
searchWiki('Contact dermatitis');
