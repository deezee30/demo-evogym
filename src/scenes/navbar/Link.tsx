import { NavPage } from "@/shared/types";
import AnchorLink from "react-anchor-link-smooth-scroll";

interface Props {
    page: NavPage,
    selectedPage: NavPage,
    setSelectedPage: (page: NavPage) => void,
}

const Link = ({
    page,
    selectedPage,
    setSelectedPage,
}: Props) => {
    const pageName = page
        .replace(/-/g, " ")
        .replace(/(^\w{1})|(\s+\w{1})/g, letter => letter.toUpperCase());

    return <AnchorLink
        className={`
            ${selectedPage === page ? "text-primary-500" : ""}
            transition duration-500 hover:text-primary-300
        `}
        href={`#${page}`}
        onClick={() => setSelectedPage(page)}
    >
        {pageName}
    </AnchorLink>
};

export default Link;