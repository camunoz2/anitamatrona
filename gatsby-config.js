/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: "Anita Matrona - Atención respetuosa de la mujer sus procesos",
    description:
      "En esta página encontraras material interesante con respecto a mi trabajo, la salud de la mujer, sus procesos y cambios a lo largo de su ciclo vital.",
    baseUrl: "https://anitamatrona.cl", // No trailing slash allowed!
    image: "/images/site_image.png",
  },
  plugins: [
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Anita Matrona`,
        short_name: `Anitamatrona`,
        start_url: `/`,
        background_color: `#DDDBDC`,
        theme_color: `#A842A5`,
        display: `standalone`,
        icon: `static/icon.png`,
      },
    },
    `gatsby-plugin-postcss`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-purgecss`,
      options: {
        printRejected: true, // Print removed selectors and processed file names
        // develop: true, // Enable while using `gatsby develop`
        tailwind: true, // Enable tailwindcss support
        // whitelist: ['whitelist'], // Don't remove this selector
        // ignore: ['/ignored.css', 'prismjs/', 'docsearch.js/'], // Ignore files/folders
        // purgeOnly : ['components/', '/main.css', 'bootstrap/'], // Purge only these files/folders
      },
    },
  ],
}
