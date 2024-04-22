const apiToken = '062cb83ada9b68aa62bfa55f46202d35f2dcf035657e5e38c522ce40de966a2703f7f32aab8f4578d374bcb1b9c534169af1ff4433f14a81ff053275f48caab3e7035e7932cb34c7faa91a904a8992e000919939b09d0654953a150e9c4f047e80f5636959ed5c8fd298a3c053e953ff095fe30c729803f31402614797752966'; // replace with your actual API token

export default defineEventHandler(async (event) => {
  const data = await readBody(event);

  const isCode = await fetch(`http://207.154.250.85:4011/api/codes?filters[code][$eq]=${data.code}`, {
    headers: {
      'Authorization': `Bearer ${apiToken}`
    }
  });

  // Is code exist?


  const code = await isCode.json();
  if (code.data.length === 0) {
    return { success: false, message: 'no-code' };
  }

  // Image uplod

  const imageBase64 = data.image;

  function base64ToBlob(base64String) {
    // Remove optional "data:..." part in Base64 strings
    const cleanBase64 = base64String.replace(/^data:\w+\/\w+;base64,/, '');
    const contentType = base64String.match(/^data:(\w+\/\w+);base64,/)[1];
  
    // Convert to a Buffer
    const binaryData = Buffer.from(cleanBase64, 'base64');
  
    // Create a Blob with the correct content type
    return new Blob([binaryData], { type: contentType });
  }
  

  const imageBlob = base64ToBlob(imageBase64);
  
  const imageFormData = new FormData();
  imageFormData.append('files', imageBlob, 'image.png');

  const imageUploadResponse = await fetch('http://207.154.250.85:4011/api/upload', {
    method: 'post',
    body: imageFormData,
    headers: {
      'Authorization': `Bearer ${apiToken}`,
      // 'Content-Type': 'multipart/form-data',
    }
  });

  const [photo] = (await imageUploadResponse.json());


  function generateUniqueCode() {
    const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const numbers = '0123456789';
    
    let result = '';
    for (let i = 0; i < 2; i++) {
      result += letters.charAt(Math.floor(Math.random() * letters.length));
    }
    for (let i = 0; i < 5; i++) {
      result += numbers.charAt(Math.floor(Math.random() * numbers.length));
    }
    return result;
  }

  const uid = generateUniqueCode();

  const jsonn = {
    ...data,
    image: undefined,
    photo: photo.id,
    uid
  };

  const res = await fetch('http://207.154.250.85:4011/api/requesters', {
    method: 'post',
    body: JSON.stringify({
      data: jsonn
    }),
    headers: {
      'Authorization': `Bearer ${apiToken}`,
      'Content-Type': 'application/json',
    }
  });

  if (!res.ok) {
    console.error('Failed to submit:', res.status, res.statusText);
    return { success: false, message: 'failed' };
  } else {
    return { success: true, message: 'success', uid };
  }
});
