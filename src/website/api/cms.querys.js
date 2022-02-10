// @flow
export const WEBSITE_QUERY: string = `
{
  webCollection(limit: 1) {
    items {
      siteTitle
      heroTitle
      heroSubtitle
      hireUs
      aboutTitle
      aboutParagraph
    }
  }
  teamMembersCollection(limit: 3) {
    items {
      image {
        url
      }
      order
      name
      jobTitle
      description
      cta
    }
  }
  featuredAppCollection(limit: 3) {
    items {
      slideshowCollection {
        items {
          url
        }
      }
      order
      appName
      appTagline
      description
      appStoreLink
      playStoreLink
    }
  }
}
`;
