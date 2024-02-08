import UIIcon from "../../Assets/Icons/brush.svg";
import SDEIcon from "../../Assets/Icons/document-code.svg";
import QAIcon from "../../Assets/Icons/setting-5.svg";
import AIIcon from "../../Assets/Icons/data.svg";
import mobileIcon from "../../Assets/Icons/mobile.svg";
import ShapesIcon from "../../Assets/Icons/shapes.svg";
// import { ReactHTMLElement } from "react";
import { StaticImageData } from "next/image";

export interface ServiceType {
  icon: StaticImageData;
  heading: string;
  subText: string;
}

export const Services: ServiceType[] = [
  {
    icon: SDEIcon,
    heading: "Custom SoftwareDevelopment",
    subText:
      "Create custom software tailored for your unique needs, including front-end, and core back-end technology.",
  },
  {
    icon: QAIcon,
    heading: "QA and Testing",
    subText:
      "Create custom software tailored for your unique needs, including front-end, and core back-end technology.",
  },
  {
    icon: AIIcon,
    heading: "AI and Data Science",
    subText:
      "Use leading AI, machine learning, and data engineering technologies to unlock business value.",
  },
  {
    icon: UIIcon,
    heading: "UX/UI Design",
    subText:
      "Create beautiful, pixel-perfect, and easy-to-use designs that delight your end users.",
  },
  {
    icon: mobileIcon,
    heading: "Mobile App Development",
    subText:
      "Build performant, scalable, and secure mobile applications for iOS and Android devices.",
  },
  {
    icon: ShapesIcon,
    heading: "Platform and Infrastructure",
    subText:
      "Ensure applications are secure, fault tolerant and highly available with our DevOps and Security engineers.",
  },
];
