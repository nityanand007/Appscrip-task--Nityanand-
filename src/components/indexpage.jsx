import React from 'react';
import Head from 'next/head';
import Image from 'next/image';

const YourComponent = () => {
  return (
    <div>
      <Head>
        {/* Page title */}
        <title>Your Page Title</title>
        {/* Page description */}
        <meta name="description" content="Your page description" />
      </Head>

      {/* H1 and H2 tags */}
      <h1>Main Heading</h1>
      <h2>Subheading</h2>

      {/* Schema settings */}
      {/* Example JSON-LD for schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: `
            {
              "@context": "https://schema.org",
              "@type": "WebPage",
              "name": "Your Page Title",
              "description": "Your page description"
            }
          `
        }}
      />

      {/* Images with appropriate SEO-friendly names and alt text */}
      {/* Example image with appropriate name and alt text */}
      <Image src="/path/to/your/image.jpg" width={500} height={500} alt="SEO friendly alt text" />
    </div>
  );
};

export default YourComponent;
