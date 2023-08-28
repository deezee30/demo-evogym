import AnchorLink from "react-anchor-link-smooth-scroll";
import { NavPage } from "./types";
import { ReactNode } from "react";

interface Props {
    children: ReactNode,
    setSelectedPage: (page: NavPage) => void,
}

const ActionButton = ({ children, setSelectedPage, }: Props) => {
    return (
        <AnchorLink
            className="rounded-md bg-secondary-500 px-10 py-2 hover:bg-primary-500 hover:text-white"
            onClick={() => setSelectedPage(NavPage.Contact)}
            href={`#${NavPage.Contact}`}
        >
            {children}
        </AnchorLink>
    );
};

export default ActionButton;