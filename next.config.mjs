/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      domains: [
        'media.istockphoto.com',
        'www.organicvoices.org',
        'www.organicfacts.net',
        'encrypted-tbn0.gstatic.com', // Existing domain
        'cdn.pixabay.com',
        'www.loveandlemons.com' // Add this domain
      ],
    },
  };
  
  export default nextConfig;
  