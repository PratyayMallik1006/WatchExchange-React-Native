const categories = [
  {
    id: 1,
    name: "Rolex",
    icon: "R",
    backgroundColor: "blue",
    color: "white",
  },
  {
    id: 2,
    name: "Cartier",
    icon: "C",
    backgroundColor: "blue",
    color: "white",
  },
  {
    id: 3,
    name: "Tudor",
    icon: "T",
    backgroundColor: "blue",
    color: "white",
  },
  {
    id: 4,
    name: "Omega",
    icon: "O",
    backgroundColor: "blue",
    color: "white",
  },
];

const getCategories = () => categories;

const getCategory = (id) => categories.find((c) => c.id === id);

module.exports = {
  getCategories,
  getCategory,
};
