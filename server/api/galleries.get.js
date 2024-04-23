export default defineEventHandler(async (event) => {
  const apiToken = '062cb83ada9b68aa62bfa55f46202d35f2dcf035657e5e38c522ce40de966a2703f7f32aab8f4578d374bcb1b9c534169af1ff4433f14a81ff053275f48caab3e7035e7932cb34c7faa91a904a8992e000919939b09d0654953a150e9c4f047e80f5636959ed5c8fd298a3c053e953ff095fe30c729803f31402614797752966'; // replace with your actual API token
  const response = await fetch('https://admin.shakhrisabz-2024.uz/api/galleries?pagination[pageSize]=100&populate=*', {
    headers: {
      'Authorization': `Bearer ${apiToken}`
    }
  });

  if (!response.ok) {
    console.error('Failed to fetch galleries:', response.status, response.statusText);
    return;
  }

  const galleries = await response.json();
  return galleries.data.map((gallery) => ({ photo: 'https://admin.shakhrisabz-2024.uz' + gallery.attributes.photo.data.attributes.url }));
});