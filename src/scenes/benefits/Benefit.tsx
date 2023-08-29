import { BenefitModel, NavPage, SetNavPage } from "@/shared/types";
import { motion } from "framer-motion";
import AnchorLink from "react-anchor-link-smooth-scroll";

const childVariant = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1 },
};

interface Props {
    model: BenefitModel,
    setSelectedPage: SetNavPage,
};

const Benefit = ({ model, setSelectedPage }: Props) => {
    return (
        <motion.div
            className="mt-5 rounded-md border-2 border-gray-100 px-5 py-16 text-center"
            variants={childVariant}
        >
            {/* Icon */}
            <div className="mb-4 flex justify-center">
                <div className="p-4 rounded-full border-2 border-gray-100 bg-primary-100">
                    {model.icon}
                </div>
            </div>

            {/* Title */}
            <h4 className="font-bold">
                {model.title}
            </h4>

            {/* Description */}
            <p className="my-3">
                {model.description}
            </p>

            {/* Learn more */}
            <AnchorLink
                className="text-sm font-bold text-primary-500 hover:text-primary-300 underline"
                onClick={() => setSelectedPage(NavPage.Contact)}
                href={`#${NavPage.Contact}`}
            >
                Learn More
            </AnchorLink>
        </motion.div>
    );
};

export default Benefit;