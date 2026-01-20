export default async function handler(req, res) {
  try {
    // Fetch the original SVG
    const response = await fetch(
      'https://raw.githubusercontent.com/AbdulDevHub/AbdulDevHub/main/profile-3d-contrib/profile-night-green.svg'
    );
    
    if (!response.ok) {
      throw new Error('Failed to fetch SVG');
    }
    
    let svg = await response.text();
    
    // Use regex to replace any rect with these dimensions and the old fill color
    svg = svg.replace(
      /(<rect[^>]*x="0"[^>]*y="0"[^>]*width="1280"[^>]*height="850"[^>]*fill=")#00000f(")/gi,
      '$1#0d1117$2'
    );
    
    // Set appropriate headers
    res.setHeader('Content-Type', 'image/svg+xml');
    res.setHeader('Cache-Control', 's-maxage=3600, stale-while-revalidate');
    
    return res.status(200).send(svg);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
}