import Logo from "@/assets/Logo.png";
import Link from "./Link";
import { NavPage } from "@/shared/types";
import useMediaQuery from "@/hooks/useMediaQuery";
import { ReactNode, useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import ActionButton from "@/shared/ActionButton";

const flexBetween = "flex items-center justify-between";

interface Props {
    selectedPage: NavPage,
    setSelectedPage: (page: NavPage) => void,
    isTopOfPage: boolean,
};

function InnerNavBarExpanded(
    selectedPage: NavPage,
    setSelectedPage: (page: NavPage) => void,
): ReactNode {
    return (
        <div className={`${flexBetween} w-full`}>
            {/* Inner left side */}
            <div className={`${flexBetween} gap-8 text-sm`}>
                <Link
                    page={NavPage.Home}
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage}
                />
                <Link
                    page={NavPage.Benefits}
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage}
                />
                <Link
                    page={NavPage.Classes}
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage}
                />
                <Link
                    page={NavPage.Contact}
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage}
                />
            </div>

            {/* Inner right side */}
            <div className={`${flexBetween} gap-8`}>
                <p>Sign In</p>
                <ActionButton
                    setSelectedPage={setSelectedPage}
                >
                    Become a Member
                </ActionButton>
            </div>
        </div>
    );
}

function InnerNavBarContracted(
    isMenuBarToggled: boolean,
    setMenuBarToggled: (value: boolean) => void
): ReactNode {
    return (
        <button
            className="rounded-full bg-secondary-500 p-2"
            onClick={() => setMenuBarToggled(!isMenuBarToggled)}
        >
            <Bars3Icon className="h-6 w-6 text-white" />
        </button>
    );
}

const NavBar = ({
    selectedPage,
    setSelectedPage,
    isTopOfPage,
}: Props) => {
    const isExpandedView = useMediaQuery("(min-width: 1060px)");
    const [isMenuBarToggled, setMenuBarToggled] = useState(false);
    const navBarBackground = isTopOfPage ? "bg-primary-100 drop-shadow" : "";

    return (
        <nav>

            {/* Default navigation bar */}
            <div className={`${flexBetween} ${navBarBackground} fixed top-0 z-30 w-full py-6`}>
                <div className={`${flexBetween} mx-auto w-5/6`}>
                    <div className={`${flexBetween} w-full gap-16`}>
                        {/* Left side */}
                        <img alt="logo" src={Logo} />

                        {/* Right side */}
                        {isExpandedView ?
                            InnerNavBarExpanded(selectedPage, setSelectedPage) :
                            InnerNavBarContracted(isMenuBarToggled, setMenuBarToggled)
                        }
                    </div>
                </div>
            </div>

            {/* Mobile navigation bar */}
            {!isExpandedView && isMenuBarToggled && (
                <div className="fixed right-0 bottom-0 z-40 h-full w-[300px] bg-primary-100 drop-shadow-xl">
                    {/* Close Icon */}
                    <div className="flex justify-end p-12">
                        <button
                            onClick={() => setMenuBarToggled(!isMenuBarToggled)}
                        >
                            <XMarkIcon className="h-6 w-6 text-gray-400" />
                        </button>
                    </div>

                    {/* Menu Items */}
                    <div className="ml-[33%] flex flex-col gap-10 text-2xl">
                        <Link
                            page={NavPage.Home}
                            selectedPage={selectedPage}
                            setSelectedPage={setSelectedPage}
                        />
                        <Link
                            page={NavPage.Benefits}
                            selectedPage={selectedPage}
                            setSelectedPage={setSelectedPage}
                        />
                        <Link
                            page={NavPage.Classes}
                            selectedPage={selectedPage}
                            setSelectedPage={setSelectedPage}
                        />
                        <Link
                            page={NavPage.Contact}
                            selectedPage={selectedPage}
                            setSelectedPage={setSelectedPage}
                        />
                    </div>
                </div>
            )}
        </nav>
    );
};

export default NavBar;