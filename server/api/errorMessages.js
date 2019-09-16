module.exports = {
  invalidOriginType: {
    message: "That isn't a valid type of original link, please try again",
    type: 'ORIGIN',
    error: true,
  },
  invalidSuffixType: {
    message: "That isn't a valid type of suffix, please try again",
    type: 'SUFFIX',
    error: true,
  },
  noOrigin: {
    message: "Please supply a link which you'd like to shorten",
    type: 'ORIGIN',
    error: true,
  },
  noLinkMatch: {
    message:
      "That isn't a valid link - try adding 'https://' or 'www.' to the beginning of your link",
    type: 'ORIGIN',
    error: true,
  },
  siteMatch: {
    message: "That isn't a valid link - you can't shorten links from this site",
    type: 'ORIGIN',
    error: true,
  },
  suffixTaken: {
    message: 'Sorry, that suffix has already been used to shorten a link',
    type: 'SUFFIX',
    error: true,
  },
}
