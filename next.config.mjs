/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },

  // async headers() {
  //   return [
  //     {
  //       source: "/(.*)", // Apply to all routes
  //       headers: [
  //         {
  //           key: "Content-Security-Policy",
  //           value: `
            
  //             default-src 'self';
  //             script-src 'self' 'unsafe-inline' 'unsafe-eval'
  //               https://www.googletagmanager.com
  //               https://www.google-analytics.com
  //               https://va.vercel-scripts.com;
  //             style-src 'self' 'unsafe-inline' https://fonts.googleapis.com;
  //             font-src 'self' https://fonts.gstatic.com;
  //             img-src 'self' data: https:;
  //             frame-src https://www.youtube.com https://www.youtube-nocookie.com https://www.googletagmanager.com;
  //             object-src 'none';
  //             base-uri 'self';
  //             form-action 'self';
  //             upgrade-insecure-requests;
  //           `
  //             .replace(/\s{2,}/g, " ")
  //             .trim(),
  //         },
  //         {
  //           key: "X-Content-Type-Options",
  //           value: "nosniff",
  //         },
  //         {
  //           key: "Referrer-Policy",
  //           value: "strict-origin-when-cross-origin",
  //         },
  //         {
  //           key: "Permissions-Policy",
  //           value: "geolocation=(), microphone=(), camera=(), payment=()",
  //         },
  //       ],
  //     },
  //   ];
  // },

  webpack: (config) => {
    config.module.rules.push({
      test: /\.(pdf)$/,
      use: [
        {
          loader: "file-loader",
          options: {
            publicPath: "/_next/static/files",
            outputPath: "static/files",
            name: "[name].[ext]",
            esModule: false,
          },
        },
      ],
    });

    return config;
  },

  async redirects() {
    return [
      // {
      //   source: "/:path*",
      //   has: [
      //     {
      //       type: "host",
      //       value: "datascienceclub.charusat.ac.in",
      //     },
      //   ],
      //   destination: "https://charusat.edu.in/DataScienceClub/:path*",
      //   permanent: true,
      // },
      {
        source: "/:path*",
        has: [
          {
            type: "host",
            value: "olp.charusat.ac.in",
          },
        ],
        destination:
          "https://online-degree.swayam2.ac.in/univ_details/CUS:path*",
        permanent: true,
      },
      // {
      //   source: "/brochure",
      //   destination: "/flipbook/charusat/index.html",
      //   permanent: false,
      // },
      // {
      //   source: "/testcspit/cse",
      //   destination: "/testcspit/cse/index.php",
      //   permanent: false,
      // },
      {
        source: "/cspit",
        destination: "/cspit/index.html",
        permanent: false,
      },

      {
        source: "/testcspit",
        destination: "/testcspit/index.html",
        permanent: false,
      },
      // {
      //   source: "/cspit/trushitupadhyaya",
      //   destination: "/cspit/trushitupadhyaya/index.html",
      //   permanent: false,
      // },
      {
        source: "/iiim",
        destination: "https://iiim.charusat.ac.in",
        permanent: true,
      },
      {
        source: "/i2im",
        destination: "https://iiim.charusat.ac.in",
        permanent: true,
      },

      {
        source: "/data",
        destination: "/data/index.html",
        permanent: false,
      },

      {
        source: "/depstar",
        destination: "/depstar/index.html",
        permanent: false,
      },
      {
        source: "/rpcp",
        destination: "/rpcp/index.html",
        permanent: false,
      },
      {
        source: "/cmpica",
        destination: "/cmpica/index.html",
        permanent: false,
      },
      {
        source: "/i2im/index.html",
        destination: "https://iiim.charusat.ac.in",
        permanent: true,
      },
      {
        source: "/samvad",
        destination: "/samvad/index.html",
        permanent: false,
      },
      {
        source: "/pdpias",
        destination: "/pdpias/index.html",
        permanent: false,
      },

      {
        source: "/pdpias/biological-sciences",
        destination: "/pdpias/biological-sciences/index.html",
        permanent: false,
      },
      {
        source: "/mtin",
        destination: "/mtin/index.html",
        permanent: false,
      },

      {
        source: "/arip",
        destination: "/arip/index.html",
        permanent: false,
      },

      {
        source: "/bdips",
        destination: "/bdips/index.html",
        permanent: false,
      },
      // {
      //   source: "/icSoftComp2024",
      //   destination: "/icSoftComp2024/index.php",
      //   permanent: false,
      // },
      {
        source: "/icSoftComp2024",
        destination: "/icSoftComp2024/index.php",
        permanent: false,
      },
      {
        source: "/icsoftcomp2025",
        destination: "/icsoftcomp2025/index.html",
        permanent: false,
      },

      {
        source: "/cee2024.html",
        destination: "/cee2024",
        permanent: false,
      },
      {
        source: "/CEE-Workshop.html",
        destination: "/CEE-Workshop",
        permanent: false,
      },

      {
        source: "/careers.html",
        destination: "/careers",
        permanent: false,
      },
      {
        source: "/placement.html",
        destination: "/placement",
        permanent: false,
      },
      {
        source: "/kradle",
        destination: "https://kradle.charusat.ac.in",
        permanent: false,
      },
      {
        source: "/icreate",
        destination: "https://icreate.charusat.ac.in",
        permanent: false,
      },
      {
        source: "/iqac",
        destination: "https://iqac.charusat.ac.in",
        permanent: false,
      },
      {
        source: "/isc",
        destination: "https://isc.charusat.ac.in",
        permanent: false,
      },
      {
        source: "/documents-access",
        destination: "https://charusat.edu.in/documents-access",
        permanent: false,
      },
      {
        source: "/charusatjournal",
        destination: "https://charusat.edu.in/charusatjournal",
        permanent: false,
      },

      {
        source: "/Downloads/syllabus/:path*",
        destination:
          "https://drive.google.com/drive/folders/1f5T6Bq2SDdHuOC3OEwF4i3Nh8VAR-HGb?usp=drive_link",
        permanent: false,
      },

      {
        source: "/Downloads/:path*",
        destination:
          "https://drive.google.com/drive/folders/10-XqFw6ISXnDeyajK8oB3YIIj6NfrIyO?usp=sharing",
        permanent: false,
      },
      {
        source: "/getResultByID.php",
        destination: "https://www.charusat.edu.in/getResultByID.php",
        permanent: false, // Set to true if this is a permanent redirect (301)
      },

      // {
      //   source: "/i2im/FMS/IMS/index.html",
      //   destination: "https://www.charusat.edu.in//FMS/IMS/index.html",
      //   permanent: false, // Set to true if this is a permanent redirect (301)
      // },
      {
        source: "/ugc-ol-application-bba-bca",
        destination:
          "https://drive.google.com/file/d/1sMpHHguvXa9kOxeKrEXGnCeNLnam9tYj/view",
        permanent: false, // Set to true if this is a permanent redirect (301)
      },
      {
        source: "/ugc-ol-application-mba-mca",
        destination:
          "https://drive.google.com/file/d/1UwC4hpVzoxFHu6FjfXZCBp-9zlQ50aNh/view",
        permanent: false, // Set to true if this is a permanent redirect (301)
      },
      {
        source: "/cms",
        destination: "https://charusat.edu.in/cms",
        permanent: false, // Set to true if this is a permanent redirect (301)
      },
      {
        source: "/admission",
        destination: "https://admission.charusat.ac.in/",
        permanent: false, // Set to true if this is a permanent redirect (301)
      },
      // {
      //   source: "/testflipbook/:path*",
      //   destination: "https://charusat.edu.in:5000/:path*",
      //   permanent: false, // Set to true if this is a permanent redirect (301)
      // },
      {
        source: "/flipbookG/:path*",
        destination: "https://charusat.edu.in/flipbookG/:path",
        permanent: false, // Set to true if this is a permanent redirect (301)
      },
    ];
  },

  async rewrites() {
    return {
      beforeFiles: [
        {
          source: "/:path*",
          has: [
            {
              type: "host",
              value: "chrf.charusat.ac.in",
            },
          ],
          destination: "https://tan-hawk-909978.hostingersite.com/:path*",
        },
        {
          source: "/:path*",
          has: [
            {
              type: "host",
              value: "charuvidya.charusat.ac.in",
            },
          ],
          destination: "http://117.239.83.200:9000/:path*",
        },
        {
          source: "/:path*",
          has: [
            {
              type: "host",
              value: "convocation.charusat.ac.in",
            },
          ],
          destination: "https://seatbroadcaster.azurewebsites.net/:path*",
        },
        {
          source: "/:path*",
          has: [
            {
              type: "host",
              value: "online.charusat.ac.in",
            },
          ],
          destination: "https://charusat.online/:path*",
        },
        {
          source: "/:path*",
          has: [
            {
              type: "host",
              value: "verification.charusat.ac.in",
            },
          ],
          destination: "http://117.239.83.200:8087/:path*",
        },

        {
          source: "/:path*",
          has: [
            {
              type: "host",
              value: "iqac.charusat.ac.in",
            },
          ],
          destination: "https://charusat.edu.in/iqac/:path*",
        },
        {
          source: "/:path*",
          has: [
            {
              type: "host",
              value: "icacs.charusat.ac.in",
            },
          ],
          destination: "https://ravichanga101.github.io/ICTA-2024v4/:path*",
        },
        {
          source: "/:path*",
          has: [
            {
              type: "host",
              value: "ilms.charusat.ac.in",
            },
          ],
          destination: "https://charusat.edu.in/ilms/:path*",
        },
        {
          source: "/:path*",
          has: [
            {
              type: "host",
              value: "icreate.charusat.ac.in",
            },
          ],
          destination: "https://webmaster-charusat.github.io/icreate/:path*",
        },
        {
          source: "/:path*",
          has: [
            {
              type: "host",
              value: "kradle.charusat.ac.in",
            },
          ],
          destination: "https://charusat.edu.in/kradle/:path*",
        },
        {
          source: "/:path*",
          has: [
            {
              type: "host",
              value: "isc.charusat.ac.in",
            },
          ],
          destination: "https://charusat.edu.in/isc/:path*",
        },
        // {
        //   source: "/testcspit/cse/:path*",
        //   destination: "https://test-cspit.charusat.online/cse/:path*",
        // },
        {
          source: "/cspit/me/bouchure-25-26/:path*",
          destination: "https://charusat.ac.in/cspit/me/brochure-25-26/:path*",
        },
        {
          source: "/cspit/it/bouchure-25-26/:path*",
          destination: "https://charusat.ac.in/cspit/it/brochure-25-26/:path*",
        },
        {
          source: "/cspit/cse/bouchure-25-26/:path*",
          destination: "https://charusat.ac.in/cspit/cse/brochure-25-26/:path*",
        },
        {
          source: "/cspit/ce/bouchure-25-26/:path*",
          destination: "https://charusat.ac.in/cspit/ce/brochure-25-26/:path*",
        },
        {
          source: "/cspit/ee/bouchure-25-26/:path*",
          destination: "https://charusat.ac.in/cspit/ee/brochure-25-26/:path*",
        },
        {
          source: "/cspit/ec/bouchure-25-26/:path*",
          destination: "https://charusat.ac.in/cspit/ec/brochure-25-26/:path*",
        },
        {
          source: "/cspit/cl/bouchure-25-26/:path*",
          destination: "https://charusat.ac.in/cspit/cl/brochure-25-26/:path*",
        },
        {
          source: "/cspit/aiml/bouchure-25-26/:path*",
          destination:
            "https://charusat.ac.in/cspit/aiml/brochure-25-26/:path*",
        },
        {
          source: "/brochure/:path*",
          destination: "/brochure/flipbook/charusat/:path*",
        },
        {
          source: "/depstar/:path*",
          destination: "https://charusat.edu.in/depstar/:path*",
        },
        {
          source: "/depstar/:path*",
          destination: "https://depstar.vercel.app/:path*",
        },
        {
          source: "/flipbook/:path*",
          destination: "https://charusat.edu.in/flipbook/:path*",
        },
        {
          source: "/flipbookG/:path*",
          destination: "https://charusat.edu.in/flipbookG/:path*",
        },
        {
          source: "/cspit/trushitupadhyaya",
          destination:
            "https://trushitupadhyaya.github.io/mywebsite/index.html",
        },
        {
          source: "/cspit/trushitupadhyaya/:path*",
          destination: "https://trushitupadhyaya.github.io/mywebsite/:path*",
        },
        {
          source: "/cspit/:path*",
          destination: "https://charusat.edu.in/cspit/:path*",
        },
        // {
        //   source: "/testcspit/cse/:path*",
        //   destination: "https://test-cspit.charusat.online/cse/:path*",
        // },
        {
          source: "/testcspit/:path*",
          destination: "https://test-cspit.charusat.online/:path*",
        },
        {
          source: "/rpcp/:path*",
          destination: "https://webmaster-charusat.github.io/rpcp/:path*",
        },
        {
          source: "/cmpica/:path*",
          destination: "https://webmaster-charusat.github.io/cmpica/:path*",
        },
        // {
        //   source: "/i2im/:path*",
        //   destination: "https://webmaster-charusat.github.io/i2im/:path*",
        // },

        {
          source: "/pdpias/:path*",
          destination: "https://charusat.edu.in/pdpias/:path*",
        },
        {
          source: "/mtin/:path*",
          destination: "https://webmaster-charusat.github.io/mtin/:path*",
        },
        {
          source: "/arip/:path*",
          destination: "https://webmaster-charusat.github.io/arip/:path*",
        },
        {
          source: "/bdips/:path*",
          destination: "https://webmaster-charusat.github.io/bdips/:path*",
        },
        {
          source: "/icSoftComp2024/:path*",
          destination: "https://charusat.online/icSoftComp2024/:path*",
        },
        {
          source: "/icsoftcomp2025:path*",
          destination: "https://charusat.online/icsoftcomp2025/:path*",
        },
        {
          source: "/documents/:path*",
          destination: "https://charusat.edu.in/documents/:path*",
        },
        {
          source: "/files/:path*",
          destination: "https://charusat.edu.in/files/:path*",
        },
        {
          source: "/iqac/:path*",
          destination: "https://charusat.edu.in/iqac/:path*",
        },
        {
          source: "/data/:path*",
          destination: "https://charusat.edu.in/data/:path*",
        },
        {
          source: "/samvad/:path*",
          destination: "https://charusat.edu.in/samvad/:path*",
        },
        {
          source: "/flipbookG/:path*",
          destination: "https://charusat.edu.in/flipbookG/:path",
        },
      ],
    };
  },
};
export default nextConfig;
