import useMediaQuery from "@/hooks/useMediaQuery";
import { NavPage, SetNavPage } from "@/shared/types";
import HomePageText from "@/assets/HomePageText.png";
import HomePageGraphic from "@/assets/HomePageGraphic.png";
import SponsorRedBull from "@/assets/SponsorRedBull.png";
import SponsorForbes from "@/assets/SponsorForbes.png";
import SponsorFortune from "@/assets/SponsorFortune.png";
import ActionButton from "@/shared/ActionButton";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { motion } from "framer-motion";

interface Props {
    setSelectedPage: SetNavPage,
}

const Home = ({ setSelectedPage }: Props) => {
    const isExpandedView = useMediaQuery("(min-width: 1060px)");

    return (
        <section
            id={NavPage.Home}
            className="gap-16 bg-gray-20 py-10 md:h-full md:pb-0"
        >
            {/* Flex container */}
            <motion.div
                className="md:flex md:h-5/6 w-5/6 mx-auto items-center justify-center"
                onViewportEnter={() => setSelectedPage(NavPage.Home)}
            >
                {/* Left/Top */}
                <div className="mt-32 z-10 md:basis-3/5">
                    <div className="md:-mt-20 relative">
                        {/* Banner with evolved content and introduction text */}
                        <motion.div
                            className="before:absolute md:before:content-evolvetext before:-top-20 before:-left-20 before:z-[-1]"
                            initial="hidden"
                            whileInView="visible"
                            transition={{ duration: 0.5 }}
                            viewport={{ once: true, amount: 0.5 }}
                            variants={{
                                hidden: { opacity: 0, x: -50 },
                                visible: { opacity: 1, x: 0 },
                            }}
                        >
                            <img
                                alt="home-page-text"
                                src={HomePageText}
                            />

                            <p className="mt-8 text-sm">
                                Unrivaled Gym. Unparalleled Training Fitness Classes. World Class
                                Studios to get the Body Shapes That you Dream of.. Get Your Dream
                                Body Now.
                            </p>
                        </motion.div>

                        {/* Action buttons */}
                        <motion.div
                            className="flex items-center gap-8 mt-8"
                            initial="hidden"
                            whileInView="visible"
                            transition={{ delay: 0.2, duration: 0.5 }}
                            viewport={{ once: true, amount: 0.5 }}
                            variants={{
                                hidden: { opacity: 0, x: -50 },
                                visible: { opacity: 1, x: 0 },
                            }}
                        >
                            <ActionButton
                                setSelectedPage={setSelectedPage}
                            >
                                Join Now
                            </ActionButton>
                            <AnchorLink
                                className="text-sm font-bold text-primary-500 hover:text-primary-300 underline"
                                onClick={() => setSelectedPage(NavPage.Contact)}
                                href={`#${NavPage.Contact}`}
                            >
                                Learn More
                            </AnchorLink>
                        </motion.div>
                    </div>
                </div>

                {/* Right/Bottom */}
                <div className="flex basis-3/5 md:ml-40 md:md-16 md:z-10 justify-center md:justify-items-end">
                    <img
                        alt="home-page-graphic"
                        src={HomePageGraphic}
                    />
                </div>
            </motion.div>

            {/* Sponsors */}
            {isExpandedView && (
                <div className="justify-center h-[150px] w-full py-10 bg-primary-100">
                    <div className="w-5/6 mx-auto">
                        <div className="flex gap-8 w-3/5 items-center justify-between">
                            <img
                                alt="redbull-sponsor"
                                src={SponsorRedBull}
                            />
                            <img
                                alt="forbes-sponsor"
                                src={SponsorForbes}
                            />
                            <img
                                alt="fortune-sponsor"
                                src={SponsorFortune}
                            />
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
};

export default Home;