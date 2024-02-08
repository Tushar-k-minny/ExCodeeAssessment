export const NavItems: NavItemType[] = [
  {
    name: "Home",
    to: "/",
  },
  {
    name: "About us",
    to: "/about",
  },
  {
    name: "Services",
    to: "/services",
  },
  {
    name: "Contact us",
    to: "/contacts",
  },
];

export type NavItemType = {
  name: string;
  to: string;
};
