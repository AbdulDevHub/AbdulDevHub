const https = require('https');

function fetchSVG(url) {
  return new Promise((resolve, reject) => {
    https.get(url, (res) => {
      let data = '';
      res.on('data', (chunk) => {
        data += chunk;
      });
      res.on('end', () => {
        resolve(data);
      });
    }).on('error', (err) => {
      reject(err);
    });
  });
}

exports.handler = async function(event, context) {
  try {
    // Fetch the original SVG
    const svg = await fetchSVG(
      'https://raw.githubusercontent.com/AbdulDevHub/AbdulDevHub/main/profile-3d-contrib/profile-night-green.svg'
    );
    
    // Use regex to replace any rect with these dimensions and the old fill color
    const modifiedSvg = svg.replace(
      /(<rect[^>]*x="0"[^>]*y="0"[^>]*width="1280"[^>]*height="850"[^>]*fill=")#00000f(")/gi,
      '$1#0d1117$2'
    );
    
    return {
      statusCode: 200,
      headers: {
        'Content-Type': 'image/svg+xml',
        'Cache-Control': 'public, max-age=3600, s-maxage=3600'
      },
      body: modifiedSvg
    };
  } catch (error) {
    return {
      statusCode: 500,
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ error: error.message })
    };
  }
};