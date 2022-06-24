import Hotel from "../components/Hotel";
import Flight from "../components/Flight";
import CarRental from "../components/CarRental";
import Tours from "../components/Tours";
import { ReactComponent as Home } from "../assets/icons/home.svg";
import { ReactComponent as Plane } from "../assets/icons/plane.svg";
import { ReactComponent as Key } from "../assets/icons/key.svg";
import { ReactComponent as Map } from "../assets/icons/map.svg";
export const navbarItems = [
  { id: 1, path: "/hotel", icon: <Home />, title: "Hotel", visible: true, Element: <Hotel /> },
  { id: 2, path: "/flight", icon: <Plane />, title: "Flight", visible: true, Element: <Flight /> },
  {
    id: 3,
    path: "/carrental",
    icon: <Key />,
    title: "Car Rental",
    visible: true,
    Element: <CarRental />,
  },
  { id: 4, path: "/tours", icon: <Map />, title: "Tours", visible: true, Element: <Tours /> },
];
