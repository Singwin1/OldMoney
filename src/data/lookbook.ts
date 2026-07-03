// Unsplash photo IDs for the Lookbook section.
// Images are served directly from Unsplash CDN — no local download needed.
// All photos are from the "Old Money" and "Fashion Editorial" collections.
// Photo credit: Unsplash (https://unsplash.com)

export type LookbookPhoto = {
  photoId: string;
  unsplashPageId: string;
};

export const lookbook: Record<string, LookbookPhoto[]> = {
  "st-moritz": [
    { photoId: "1602792474659-274fd5a2b784", unsplashPageId: "XEzBIPaOdvc" },
    { photoId: "1602114038142-864149820397", unsplashPageId: "Y5PHMWRuFWo" },
    { photoId: "1607699032287-f58742a2693d", unsplashPageId: "ggcEFpKzflQ" },
  ],
  "portofino": [
    { photoId: "1651854051085-63657aa9edde", unsplashPageId: "qWGzp1LRK7k" },
    { photoId: "1651772578986-7e64d63991fc", unsplashPageId: "0V9GdoXYIcI" },
    { photoId: "1654119955303-156bdc9dfb17", unsplashPageId: "3Vwy73Xv7ZY" },
  ],
  "london-club": [
    { photoId: "1601557030026-c608b229d364", unsplashPageId: "bcUxBx6mIEs" },
    { photoId: "1614822180018-0620b4250ed1", unsplashPageId: "oSkwy3kKkeg" },
    { photoId: "1587922342985-30ff0587b90c", unsplashPageId: "UG9AWY8Zo_0" },
  ],
  "amalfi-coast": [
    { photoId: "1661911853406-1f1b18b7af7d", unsplashPageId: "r13sao-Gmnc" },
    { photoId: "1650339157072-b9f44e26e7a4", unsplashPageId: "DERpTeW6__4" },
    { photoId: "1569597773147-690dfdc3bb4c", unsplashPageId: "UTLqS1wa104" },
  ],
  "normandy-manor": [
    { photoId: "1683488780136-5f838bc5f021", unsplashPageId: "VVnbRP0RZB4" },
    { photoId: "1683488780112-f47a64de5d15", unsplashPageId: "Uog_iw8dARU" },
    { photoId: "1602792474720-d8d61d8d839f", unsplashPageId: "mkYFZtRFDb4" },
  ],
  "geneva-lake": [
    { photoId: "1603139835562-32d47f7fdae6", unsplashPageId: "3lVNTOIKOZ8" },
    { photoId: "1573570076683-b3b495f6b339", unsplashPageId: "gEGUF2Kz9FI" },
    { photoId: "1676557848869-14f62045ed03", unsplashPageId: "XF9v9eUx2Q0" },
  ],
  "nantucket-grey": [
    { photoId: "1682956101605-422d8c137256", unsplashPageId: "za7bUDcIYNs" },
    { photoId: "1691155056059-82a814c79240", unsplashPageId: "0q5e3uiAOHA" },
    { photoId: "1691154928997-5d839847e4e7", unsplashPageId: "Q2Us4yAhe5g" },
  ],
  "marrakech-dusk": [
    { photoId: "1571513800374-df1bbe650e56", unsplashPageId: "K0DxxljcRv0" },
    { photoId: "1692191798521-f146083a283d", unsplashPageId: "5jAugXlg0u8" },
    { photoId: "1607623198457-7aad066a4ade", unsplashPageId: "s6pKmNcqov0" },
  ],
  "biarritz-blue": [
    { photoId: "1686956344716-334c591c30a1", unsplashPageId: "BrXxh_GbCXw" },
    { photoId: "1694179023466-cb438ce7ae0b", unsplashPageId: "zZcaCSE2Bl8" },
    { photoId: "1694179023771-43ef9a54b784", unsplashPageId: "M3ond7qmflw" },
  ],
  "positano-sunset": [
    { photoId: "1694179024141-4065e1aa2441", unsplashPageId: "G9-xHmJq85Y" },
    { photoId: "1558618666-fcd25c85cd64", unsplashPageId: "BIjP0GHhkGU" },
    { photoId: "1507679799987-c73779587ccf", unsplashPageId: "pjVbVc_YJIY" },
  ],
  "newport-prep": [
    { photoId: "1515886657613-9f3515b0c78f", unsplashPageId: "9N5G7B7bE9Q" },
    { photoId: "1521341957697-b93449760f30", unsplashPageId: "y3ZZV7HPKUA" },
    { photoId: "1509631179647-0177331693ae", unsplashPageId: "nS5NU5Jmgk0" },
  ],
  "lake-como": [
    { photoId: "1519085360753-af0119f7cbe7", unsplashPageId: "oJUZo3mUSN8" },
    { photoId: "1534528741775-53994a69daeb", unsplashPageId: "7YVZYZeITc8" },
    { photoId: "1488426862026-3ee34a7d66df", unsplashPageId: "TuVIjMnNlSc" },
  ],
  "bermuda-blush": [
    { photoId: "1542291026-7eec264c27ff", unsplashPageId: "JXGdsmBxw7E" },
    { photoId: "1512436991641-6745cdb1723f", unsplashPageId: "dADQdBNA0Bc" },
    { photoId: "1504204267155-aaad8e81290d", unsplashPageId: "Lf4HuOyUHXA" },
  ],
  "aspen-lodge": [
    { photoId: "1572635148818-ef6fd45eb394", unsplashPageId: "9V6YIuSN8mY" },
    { photoId: "1469334031218-e382a71b716b", unsplashPageId: "2mv-fVBDnXI" },
    { photoId: "1673386409679-9060cbf4b8de", unsplashPageId: "CIa7Gpmnkz8" },
  ],
  "kyoto-autumn": [
    { photoId: "1692029830194-b761c95a5467", unsplashPageId: "dQmGWPIjzA8" },
    { photoId: "1673386638974-4866c9d661c7", unsplashPageId: "MmEeldBHxfA" },
    { photoId: "1668086682634-726157bfdece", unsplashPageId: "pv3jy-p8RHE" },
  ],
  "antibes-garden": [
    { photoId: "1762148039826-06811e4d4d99", unsplashPageId: "evEg5HbmNuE" },
    { photoId: "1779405831183-c6d645ca946e", unsplashPageId: "70iWhG2zfgQ" },
    { photoId: "1603189343302-e603f7add05a", unsplashPageId: "PKMvkg7vnUo" },
  ],
  "edinburgh-grey": [
    { photoId: "1574015974293-817f0ebebb74", unsplashPageId: "UqT55tGBqzI" },
    { photoId: "1562151270-c7d22ceb586a", unsplashPageId: "FO-zQd7Wqio" },
    { photoId: "1538329972958-465d6d2144ed", unsplashPageId: "bWUOx0SaSAk" },
  ],
  "rio-golden": [
    { photoId: "1580478491436-fd6a937acc9e", unsplashPageId: "qUp0UsT89BY" },
    { photoId: "1553544260-f87e671974ee", unsplashPageId: "6ugQ978v-zg" },
    { photoId: "1662532577856-e8ee8b138a8b", unsplashPageId: "1tjMpBTvFAA" },
  ],
  "black-forest": [
    { photoId: "1549298222-1c31e8915347", unsplashPageId: "DQP03Vq78Z4" },
    { photoId: "1602792474659-274fd5a2b784", unsplashPageId: "XEzBIPaOdvc" },
    { photoId: "1614822180018-0620b4250ed1", unsplashPageId: "oSkwy3kKkeg" },
  ],
  "capri-blue": [
    { photoId: "1651854051085-63657aa9edde", unsplashPageId: "qWGzp1LRK7k" },
    { photoId: "1683488780136-5f838bc5f021", unsplashPageId: "VVnbRP0RZB4" },
    { photoId: "1573570076683-b3b495f6b339", unsplashPageId: "gEGUF2Kz9FI" },
  ],
};

export function lookbookImgUrl(photoId: string, width = 600, height = 800) {
  return `https://images.unsplash.com/photo-${photoId}?w=${width}&h=${height}&fit=crop&q=80&auto=format`;
}
