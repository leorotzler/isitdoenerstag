/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sass',
    'gatsby-plugin-dark-mode',
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
          fonts: [
              `Open+Sans\:400`,
          ],
      }
  },
  ],
}
