import { StaticImageData } from "next/image";
import Org0 from "../../Assets/Organization.png";
import Org1 from "../../Assets/Organization-1.png";
import Org2 from "../../Assets/Organization-2.png";
import Org3 from "../../Assets/Organization-3.png";
import Org4 from "../../Assets/Organization-4.png";

export const Team: {
  img: StaticImageData;
  role: string;
}[] = [
  {
    img: Org0,
    role: "Software Developers",
  },
  {
    img: Org1,
    role: "QA Engineers",
  },
  {
    img: Org2,
    role: "Ux Designers",
  },
  {
    img: Org3,
    role: "Data Scientists",
  },
  {
    img: Org4,
    role: "Project Managers",
  },
];
