export const CustomNavLink = [
  { name: "Our Group", path: "/our-groups" },
  {
    name: "Shop",
    path: "/products",
    submenu: [
      { name: "Jackets", path: "/products", group: "Winter Wear" },
      { name: "Hoodies", path: "/products", group: "Winter Wear" },
      { name: "Sweatshirts", path: "/products", group: "Winter Wear" },
      { name: "T-Shirts", path: "/products", group: "Summer Collection" },
      { name: "Polo Shirts", path: "/products", group: "Summer Collection" },
      { name: "Cargo Pants", path: "/products", group: "Bottoms" },
      { name: "Denim Jeans", path: "/products", group: "Bottoms" },
      { name: "Joggers", path: "/products", group: "Bottoms" },
    ],
  },
  { name: "Our Promise", path: "/our-promise" },
  { name: "Global Location", path: "/global-location" },
  { name: "Newsfeed", path: "/newsfeed" },
  { name: "Contact", path: "/contact" },
];
