export default defineEventHandler(async (event) => {
  const apiToken = '062cb83ada9b68aa62bfa55f46202d35f2dcf035657e5e38c522ce40de966a2703f7f32aab8f4578d374bcb1b9c534169af1ff4433f14a81ff053275f48caab3e7035e7932cb34c7faa91a904a8992e000919939b09d0654953a150e9c4f047e80f5636959ed5c8fd298a3c053e953ff095fe30c729803f31402614797752966'; // replace with your actual API token
  const response = await fetch('https://admin.shakhrisabz-2024.uz/api/projects?pagination[pageSize]=100&populate=*', {
    headers: {
      'Authorization': `Bearer ${apiToken}`
    }
  });

  if (!response.ok) {
    console.error('Failed to fetch projects:', response.status, response.statusText);
    return;
  }

  const projects = await response.json();
  return projects.data.map((projectsItem) => ({ 
    id: projectsItem.id,
    title_uz: projectsItem.attributes.title_uz,
    title_ru: projectsItem.attributes.title_ru,
    title_en: projectsItem.attributes.title_en,
    content_uz: projectsItem.attributes.content_uz,
    content_ru: projectsItem.attributes.content_ru,
    content_en: projectsItem.attributes.content_en,
    photo: 'https://admin.shakhrisabz-2024.uz' + projectsItem.attributes.photo.data.attributes.url
   }));
});
