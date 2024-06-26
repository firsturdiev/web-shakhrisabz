export default defineEventHandler(async (event) => {
  const apiToken = '062cb83ada9b68aa62bfa55f46202d35f2dcf035657e5e38c522ce40de966a2703f7f32aab8f4578d374bcb1b9c534169af1ff4433f14a81ff053275f48caab3e7035e7932cb34c7faa91a904a8992e000919939b09d0654953a150e9c4f047e80f5636959ed5c8fd298a3c053e953ff095fe30c729803f31402614797752966'; // replace with your actual API token
  const response = await fetch('https://admin.shakhrisabz-2024.uz/api/news?pagination[pageSize]=100&populate=*', {
    headers: {
      'Authorization': `Bearer ${apiToken}`
    }
  });

  if (!response.ok) {
    console.error('Failed to fetch news:', response.status, response.statusText);
    return;
  }

  const news = await response.json();
  return news.data.map((newsItem) => ({ 
    id: newsItem.id,
    title_uz: newsItem.attributes.title_uz,
    title_ru: newsItem.attributes.title_ru,
    title_en: newsItem.attributes.title_en,
    title_ar: newsItem.attributes.title_ar,
    title_fr: newsItem.attributes.title_fr,
    content_uz: newsItem.attributes.content_uz,
    content_ru: newsItem.attributes.content_ru,
    content_en: newsItem.attributes.content_en,
    content_ar: newsItem.attributes.content_ar,
    content_fr: newsItem.attributes.content_fr,
    photo: 'https://admin.shakhrisabz-2024.uz' + newsItem.attributes.photo.data.attributes.url
   }));
});
