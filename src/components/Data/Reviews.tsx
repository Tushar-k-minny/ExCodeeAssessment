import { ReactNode } from "react";
import Loom from "../../Assets/Icons/Loom.svg";
import Inovate from "../../Assets/Icons/InovateNow.svg";
import Vision from "../../Assets/Icons/Visionary.svg";
import Image from "next/image";

export interface ReviewsType {
  stars: string;
  heading: string;
  subHeading: string;
  userName: string;
  userImage: ReactNode;
  userCompany: string;
}
export const Reviews: ReviewsType[] = [
  {
    stars: "⭐⭐⭐⭐⭐",
    heading: "Exceptional Solutions, Exceeded Expectations!",
    subHeading:
      "Working with Nearshore has been an absolute pleasure. Their team took the time to understand our unique needs and delivered a solution that not only met but exceeded our expectations. Their expertise and commitment to excellence are truly commendable.",
    userName: "Mary Johnson",
    userImage: <Image src={Loom} alt="" />,
    userCompany: "CEO of TechCraft Solutions",
  },
  {
    stars: "⭐⭐⭐⭐⭐",
    heading: "Transformed Our Business with Innovative Tech!",
    subHeading:
      "We owe a significant part of our success to [Company Name]. Their custom software solution streamlined our processes, saving us time and resources. Their team's dedication to innovation and problem-solving is unmatched. We're grateful for their partnership.",
    userName: "Mark Williams",
    userImage: <Image src={Inovate} alt="" />,

    userCompany: "COO of InnovateNow Inc",
  },
  {
    stars: "⭐⭐⭐⭐⭐",
    heading: "Sculpted User Experiences Beyond Imagination!",
    subHeading:
      "The UI/UX design crafted by [Company Name] turned our app into a masterpiece. The attention to detail, intuitive design, and user-centric approach have resulted in rave reviews from our customers. Their design expertise has taken our brand to a whole new level.",
    userName: "Emily Clark",
    userImage: <Image src={Vision} alt="" />,

    userCompany: "CMO of Visionary Apps",
  },
  {
    stars: "⭐⭐⭐⭐⭐",
    heading: "Exceptional Solutions, Exceeded Expectations!",
    subHeading:
      "Working with Nearshore has been an absolute pleasure. Their team took the time to understand our unique needs and delivered a solution that not only met but exceeded our expectations. Their expertise and commitment to excellence are truly commendable.",
    userName: "Mary Johnson",
    userImage: <Image src={Loom} alt="" />,

    userCompany: "CEO of TechCraft Solutions",
  },
  {
    stars: "⭐⭐⭐⭐⭐",
    heading: "Transformed Our Business with Innovative Tech!",
    subHeading:
      "We owe a significant part of our success to [Company Name]. Their custom software solution streamlined our processes, saving us time and resources. Their team's dedication to innovation and problem-solving is unmatched. We're grateful for their partnership.",
    userName: "Mark Williams",
    userImage: <Image src={Inovate} alt="" />,
    userCompany: "COO of InnovateNow Inc",
  },
  {
    stars: "⭐⭐⭐⭐⭐",
    heading: "Sculpted User Experiences Beyond Imagination!",
    subHeading:
      "The UI/UX design crafted by [Company Name] turned our app into a masterpiece. The attention to detail, intuitive design, and user-centric approach have resulted in rave reviews from our customers. Their design expertise has taken our brand to a whole new level.",
    userName: "Emily Clark",
    userImage: <Image src={Vision} alt="" />,

    userCompany: "CMO of Visionary Apps",
  },
  {
    stars: "⭐⭐⭐⭐⭐",
    heading: "Exceptional Solutions, Exceeded Expectations!",
    subHeading:
      "Working with Nearshore has been an absolute pleasure. Their team took the time to understand our unique needs and delivered a solution that not only met but exceeded our expectations. Their expertise and commitment to excellence are truly commendable.",
    userName: "Mary Johnson",
    userImage: <Image src={Loom} alt="" />,

    userCompany: "CEO of TechCraft Solutions",
  },
  {
    stars: "⭐⭐⭐⭐⭐",
    heading: "Transformed Our Business with Innovative Tech!",
    subHeading:
      "We owe a significant part of our success to [Company Name]. Their custom software solution streamlined our processes, saving us time and resources. Their team's dedication to innovation and problem-solving is unmatched. We're grateful for their partnership.",
    userName: "Mark Williams",
    userImage: <Image src={Inovate} alt="" />,

    userCompany: "COO of InnovateNow Inc",
  },
  {
    stars: "⭐⭐⭐⭐⭐",
    heading: "Sculpted User Experiences Beyond Imagination!",
    subHeading:
      "The UI/UX design crafted by [Company Name] turned our app into a masterpiece. The attention to detail, intuitive design, and user-centric approach have resulted in rave reviews from our customers. Their design expertise has taken our brand to a whole new level.",
    userName: "Emily Clark",
    userImage: <Image src={Vision} alt="" />,
    userCompany: "CMO of Visionary Apps",
  },
  {
    stars: "⭐⭐⭐⭐⭐",
    heading: "Transformed Our Business with Innovative Tech!",
    subHeading:
      "We owe a significant part of our success to [Company Name]. Their custom software solution streamlined our processes, saving us time and resources. Their team's dedication to innovation and problem-solving is unmatched. We're grateful for their partnership.",
    userName: "Mark Williams",
    userImage: <Image src={Inovate} alt="" />,

    userCompany: "COO of InnovateNow Inc",
  },
  {
    stars: "⭐⭐⭐⭐⭐",
    heading: "Sculpted User Experiences Beyond Imagination!",
    subHeading:
      "The UI/UX design crafted by [Company Name] turned our app into a masterpiece. The attention to detail, intuitive design, and user-centric approach have resulted in rave reviews from our customers. Their design expertise has taken our brand to a whole new level.",
    userName: "Emily Clark",
    userImage: <Image src={Vision} alt="" />,
    userCompany: "CMO of Visionary Apps",
  },
];
