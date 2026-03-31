// Mock API service to simulate data fetching
const mockProducts = [
  {
    id: 1,
    name: "Premium Coffee Beans",
    price: 18.99,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSd8KrjnGJkOEa8RSeFSyh1vjAbMNnlGG1y5q189HyqXSkDZ_2MWqB5ncCWA22eHVQ7ZspVu6tojuG7_x-KtehFb0Oo2qDDgw5GRGDFrpZx&s=10",
  },
  {
    id: 2,
    name: "Handcrafted Mug",
    price: 24.5,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTee-1umSbOsRzyi_ObE7-Gt4nrW_LFY1Cnww&s=10",
  },
  {
    id: 3,
    name: "Eco-Friendly Filter",
    price: 12.0,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTH-ZIobq8RxBro_CYrwSP90Ym7NGwcOOmHTg&s",
  },
];

export const fetchProducts = async () => {
  // Simulate network delay
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(mockProducts);
    }, 1000);
  });
};
