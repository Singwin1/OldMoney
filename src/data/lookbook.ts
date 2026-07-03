// Unsplash photo IDs for the Lookbook section.
// All photos show people in fashion editorial outfits.
// Served directly from Unsplash CDN — no local assets needed.
// Photo credit: Unsplash (https://unsplash.com)

export type LookbookPhoto = {
  photoId: string;
  unsplashPageId: string;
};

export const lookbook: Record<string, LookbookPhoto[]> = {
  // ── 10 ATELIER PALETTES ──────────────────────────────────────────────────────
  "italian-riviera": [
    { photoId: "1557161622-5f50ca344787", unsplashPageId: "53XgbTbIAXk" },
    { photoId: "1651854051085-63657aa9edde", unsplashPageId: "qWGzp1LRK7k" },
    { photoId: "1664076458686-3449062080ac", unsplashPageId: "XIzZ0eRDUuo" },
  ],
  "monte-carlo": [
    { photoId: "1617113930975-f9c7243ae527", unsplashPageId: "YGJ9vfuwyUg" },
    { photoId: "1663220274232-740f07723310", unsplashPageId: "9ckIBniJKfk" },
    { photoId: "1730177202748-5055c2a85222", unsplashPageId: "Ca3SxXBfdj0" },
  ],
  "scottish-highlands": [
    { photoId: "1607464501280-237b5f87fd77", unsplashPageId: "5hDEoI4GD6Y" },
    { photoId: "1614252368727-99517bc90d7b", unsplashPageId: "bE6OvxczIc8" },
    { photoId: "1613915617430-8ab0fd7c6baf", unsplashPageId: "HlVjI5WmoQY" },
  ],
  "palm-beach": [
    { photoId: "1664076458686-3449062080ac", unsplashPageId: "XIzZ0eRDUuo" },
    { photoId: "1580598985914-441688a7f98a", unsplashPageId: "gynNLnsjJpk" },
    { photoId: "1557161622-5f50ca344787", unsplashPageId: "53XgbTbIAXk" },
  ],
  "vienna-winter": [
    { photoId: "1618886614638-80e3c103d31a", unsplashPageId: "vS0Kya7E5V4" },
    { photoId: "1613915617430-8ab0fd7c6baf", unsplashPageId: "HlVjI5WmoQY" },
    { photoId: "1730177202748-5055c2a85222", unsplashPageId: "Ca3SxXBfdj0" },
  ],
  "cote-dazur": [
    { photoId: "1557161622-5f50ca344787", unsplashPageId: "53XgbTbIAXk" },
    { photoId: "1651854051085-63657aa9edde", unsplashPageId: "qWGzp1LRK7k" },
    { photoId: "1652473291442-7a2e034a00d1", unsplashPageId: "7LiRr9RWIoU" },
  ],
  "oxbridge": [
    { photoId: "1534030347209-467a5b0ad3e6", unsplashPageId: "h5cd51KXmRQ" },
    { photoId: "1572271381288-34c6c39a76ed", unsplashPageId: "pD2d4dMEd78" },
    { photoId: "1614252368727-99517bc90d7b", unsplashPageId: "bE6OvxczIc8" },
  ],
  "tuscan-villa": [
    { photoId: "1664076458686-3449062080ac", unsplashPageId: "XIzZ0eRDUuo" },
    { photoId: "1651854051085-63657aa9edde", unsplashPageId: "qWGzp1LRK7k" },
    { photoId: "1577909687863-91bb3ec12db5", unsplashPageId: "UfETna4IUuY" },
  ],
  "connecticut-autumn": [
    { photoId: "1607464501280-237b5f87fd77", unsplashPageId: "5hDEoI4GD6Y" },
    { photoId: "1614252368727-99517bc90d7b", unsplashPageId: "bE6OvxczIc8" },
    { photoId: "1668952135120-7d997b1b3778", unsplashPageId: "Qy8IEssqkYU" },
  ],
  "cape-cod-grey": [
    { photoId: "1668952135120-7d997b1b3778", unsplashPageId: "Qy8IEssqkYU" },
    { photoId: "1630173250799-2813d34ed14b", unsplashPageId: "YAWSHBdjdO0" },
    { photoId: "1572271381288-34c6c39a76ed", unsplashPageId: "pD2d4dMEd78" },
  ],

  // ── 20 PREMIUM PALETTES ──────────────────────────────────────────────────────
  "st-moritz": [
    { photoId: "1618886614638-80e3c103d31a", unsplashPageId: "vS0Kya7E5V4" },
    { photoId: "1663220274232-740f07723310", unsplashPageId: "9ckIBniJKfk" },
    { photoId: "1630173250799-2813d34ed14b", unsplashPageId: "YAWSHBdjdO0" },
  ],
  "portofino": [
    { photoId: "1618244985759-a8a1dc26bce3", unsplashPageId: "wUKY9lw2Y5Y" },
    { photoId: "1651854051085-63657aa9edde", unsplashPageId: "qWGzp1LRK7k" },
    { photoId: "1557161622-5f50ca344787", unsplashPageId: "53XgbTbIAXk" },
  ],
  "london-club": [
    { photoId: "1617113930975-f9c7243ae527", unsplashPageId: "YGJ9vfuwyUg" },
    { photoId: "1629511565591-a1d494ad6c58", unsplashPageId: "GfL5pokzQEk" },
    { photoId: "1618886614638-80e3c103d31a", unsplashPageId: "vS0Kya7E5V4" },
  ],
  "amalfi-coast": [
    { photoId: "1651854051085-63657aa9edde", unsplashPageId: "qWGzp1LRK7k" },
    { photoId: "1580598985914-441688a7f98a", unsplashPageId: "gynNLnsjJpk" },
    { photoId: "1764236027288-01496bf7489a", unsplashPageId: "UPKo6hMUfHg" },
  ],
  "normandy-manor": [
    { photoId: "1668952135120-7d997b1b3778", unsplashPageId: "Qy8IEssqkYU" },
    { photoId: "1572271381288-34c6c39a76ed", unsplashPageId: "pD2d4dMEd78" },
    { photoId: "1625502709763-f5f3880c17ba", unsplashPageId: "zCSlmX3-98I" },
  ],
  "geneva-lake": [
    { photoId: "1770644935626-f61d233f4827", unsplashPageId: "dnCcCJvk0Ic" },
    { photoId: "1767372274086-1c4f41f9f4c3", unsplashPageId: "vX6HacZIIh8" },
    { photoId: "1618244965061-1d27b208d6e8", unsplashPageId: "ydT30WRWeEc" },
  ],
  "nantucket-grey": [
    { photoId: "1668952135120-7d997b1b3778", unsplashPageId: "Qy8IEssqkYU" },
    { photoId: "1630173250799-2813d34ed14b", unsplashPageId: "YAWSHBdjdO0" },
    { photoId: "1771512680999-7b454d97d76d", unsplashPageId: "wy-XtR_ldK0" },
  ],
  "marrakech-dusk": [
    { photoId: "1654512697681-8434b50096dd", unsplashPageId: "zi5QQl26vaM" },
    { photoId: "1642886512785-b5fee9faad7f", unsplashPageId: "N_dEi1iG69s" },
    { photoId: "1654512697854-3380048c5b03", unsplashPageId: "wTFrasPG4d4" },
  ],
  "biarritz-blue": [
    { photoId: "1634133118553-1e6e18299886", unsplashPageId: "4qb7W1J0HeA" },
    { photoId: "1607464501280-237b5f87fd77", unsplashPageId: "5hDEoI4GD6Y" },
    { photoId: "1617113930975-f9c7243ae527", unsplashPageId: "YGJ9vfuwyUg" },
  ],
  "positano-sunset": [
    { photoId: "1664076458686-3449062080ac", unsplashPageId: "XIzZ0eRDUuo" },
    { photoId: "1758900727792-e411697fc0a7", unsplashPageId: "R6npcChI8SU" },
    { photoId: "1557161622-5f50ca344787", unsplashPageId: "53XgbTbIAXk" },
  ],
  "newport-prep": [
    { photoId: "1634133118553-1e6e18299886", unsplashPageId: "4qb7W1J0HeA" },
    { photoId: "1557161622-5f50ca344787", unsplashPageId: "53XgbTbIAXk" },
    { photoId: "1679487042326-d1b7aae83256", unsplashPageId: "q0E0nFEW5WY" },
  ],
  "lake-como": [
    { photoId: "1651854051085-63657aa9edde", unsplashPageId: "qWGzp1LRK7k" },
    { photoId: "1580598985914-441688a7f98a", unsplashPageId: "gynNLnsjJpk" },
    { photoId: "1618244972963-dbee1a7edc95", unsplashPageId: "vj-_S20w04o" },
  ],
  "bermuda-blush": [
    { photoId: "1557161622-5f50ca344787", unsplashPageId: "53XgbTbIAXk" },
    { photoId: "1664076458686-3449062080ac", unsplashPageId: "XIzZ0eRDUuo" },
    { photoId: "1513094735237-8f2714d57c13", unsplashPageId: "Xn7GvimQrk8" },
  ],
  "aspen-lodge": [
    { photoId: "1607464501280-237b5f87fd77", unsplashPageId: "5hDEoI4GD6Y" },
    { photoId: "1767372273601-846f8595c815", unsplashPageId: "9nstKHsDPRM" },
    { photoId: "1668952135120-7d997b1b3778", unsplashPageId: "Qy8IEssqkYU" },
  ],
  "kyoto-autumn": [
    { photoId: "1607464501280-237b5f87fd77", unsplashPageId: "5hDEoI4GD6Y" },
    { photoId: "1613915617430-8ab0fd7c6baf", unsplashPageId: "HlVjI5WmoQY" },
    { photoId: "1775257796092-59d2247d12b7", unsplashPageId: "7oRnb94oGD0" },
  ],
  "antibes-garden": [
    { photoId: "1618244965061-1d27b208d6e8", unsplashPageId: "ydT30WRWeEc" },
    { photoId: "1513094735237-8f2714d57c13", unsplashPageId: "Xn7GvimQrk8" },
    { photoId: "1652473291442-7a2e034a00d1", unsplashPageId: "7LiRr9RWIoU" },
  ],
  "edinburgh-grey": [
    { photoId: "1617113930975-f9c7243ae527", unsplashPageId: "YGJ9vfuwyUg" },
    { photoId: "1613915617430-8ab0fd7c6baf", unsplashPageId: "HlVjI5WmoQY" },
    { photoId: "1679487042326-d1b7aae83256", unsplashPageId: "q0E0nFEW5WY" },
  ],
  "rio-golden": [
    { photoId: "1654512697681-8434b50096dd", unsplashPageId: "zi5QQl26vaM" },
    { photoId: "1642886512785-b5fee9faad7f", unsplashPageId: "N_dEi1iG69s" },
    { photoId: "1618244972963-dbee1a7edc95", unsplashPageId: "vj-_S20w04o" },
  ],
  "black-forest": [
    { photoId: "1618886614638-80e3c103d31a", unsplashPageId: "vS0Kya7E5V4" },
    { photoId: "1663220274232-740f07723310", unsplashPageId: "9ckIBniJKfk" },
    { photoId: "1668952135120-7d997b1b3778", unsplashPageId: "Qy8IEssqkYU" },
  ],
  "capri-blue": [
    { photoId: "1651854051085-63657aa9edde", unsplashPageId: "qWGzp1LRK7k" },
    { photoId: "1580598985914-441688a7f98a", unsplashPageId: "gynNLnsjJpk" },
    { photoId: "1519085360753-af0119f7cbe7", unsplashPageId: "WMD64tMfc4k" },
  ],
};

export function lookbookImgUrl(photoId: string, width = 600, height = 800) {
  return `https://images.unsplash.com/photo-${photoId}?w=${width}&h=${height}&fit=crop&q=80&auto=format`;
}
