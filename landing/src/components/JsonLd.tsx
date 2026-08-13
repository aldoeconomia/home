export default function JsonLd() {
 const data = {
  "@context": "https://schema.org",

  "@graph": [
   {
    "@type": "Organization",
    "@id": "https://www.theqontrol.com/#grupo-codiaz",

    "name": "Grupo Codiaz",

    "url": "https://www.theqontrol.com/grupo-codiaz/",

    "description":
        "Grupo empresarial mexicano enfocado en desarrollo tecnológico e innovación.",

    "founder": {
     "@type": "Person",
     "name": "Aldo Javier Díaz Padilla"
    },

    "location": {
     "@type": "Place",
     "name": "México"
    }
   },


   {
    "@type": "SoftwareApplication",

    "@id": "https://www.theqontrol.com/#qontrol",

    "name": "QONTROL",

    "applicationCategory": "BusinessApplication",

    "operatingSystem": "Web",

    "description":
        "Software mexicano para digitalizar inspecciones, mantenimiento y evidencias de extintores.",

    "url": "https://www.theqontrol.com",

    "provider": {
     "@id": "https://www.theqontrol.com/#grupo-codiaz"
    },

    "creator": {
     "@id": "https://www.theqontrol.com/#grupo-codiaz"
    },

    "areaServed": {
     "@type": "Country",
     "name": "México"
    }
   }
  ]
 };


 return (
     <script
         type="application/ld+json"
         dangerouslySetInnerHTML={{
          __html: JSON.stringify(data),
         }}
     />
 );
}