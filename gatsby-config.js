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
  plugins: [`gatsby-plugin-postcss`, `gatsby-plugin-react-helmet`],
}
