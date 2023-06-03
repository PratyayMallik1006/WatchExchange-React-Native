const listings = [
  {
    id: 701,
    title: "Tudor Submariner Ref 75090",
    images: [{ fileName: "TudorSubBlue1" }],
    price: 400000,
    categoryId: 1,
    userId: 1,
    location: {
      latitude: 37.78825,
      longitude: -122.4324,
    },
  },
  {
    id: 702,
    title: "Rolex 16014 Buckley",
    images: [{ fileName: "RolexDJ1" }],
    price: 450000,
    categoryId: 5,
    userId: 1,
    location: {
      latitude: 37.78825,
      longitude: -122.4324,
    },
  },
  {
    id: 703,
    title: "Omega Speedmaster Professional",
    images: [{ fileName: "OmegaChrono1" }],
    price: 400000,
    categoryId: 5,
    userId: 1,
    location: {
      latitude: 37.78825,
      longitude: -122.4324,
    },
  },
  {
    id: 705,
    title: "Omega Seamaster Professional",
    images: [{ fileName: "OmegaDiver1" }],
    price: 200000,
    categoryId: 5,
    userId: 1,
    location: {
      latitude: 37.78825,
      longitude: -122.4324,
    },
  },
  {
    id: 706,
    title: "Cartier Tank",
    images: [{ fileName: "Cartier1" }],
    price: 250000,
    categoryId: 5,
    userId: 1,
    location: {
      latitude: 37.78825,
      longitude: -122.4324,
    },
  },
];

const addListing = (listing) => {
  listing.id = listings.length + 1;
  listings.push(listing);
};

const getListings = () => listings;

const getListing = (id) => listings.find((listing) => listing.id === id);

const filterListings = (predicate) => listings.filter(predicate);

module.exports = {
  addListing,
  getListings,
  getListing,
  filterListings,
};
