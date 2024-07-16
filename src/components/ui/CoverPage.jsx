export const CoverPage = () => {
    const handleScroll = (event, id) => {
        event.preventDefault();
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };
    return (
        <>
            <div className="container-intro">
                <div className="hello-intro">
                    <h1 tabIndex="1">I&apos;M JORGE</h1>
                </div>
                <ul>
                    <li onClick={(e) => handleScroll(e, 'about')}
                        className="about"
                        tabIndex="2"
                        title="🔻"
                    >
                        ABOUT ME

                    </li>
                    <li className="pipe">
                        |
                    </li>

                    <li onClick={(e) => handleScroll(e, 'projects')}
                        className="portfolio"
                        tabIndex="3"
                        title="🔻"
                    >
                        PORTFOLIO
                    </li>
                </ul>
            </div>
            <div>
                <div className="scroll_down" onClick={(e) => handleScroll(e, 'about')}>
                    <svg
                        id="arrow"
                        width="19px"
                        height="19px"
                        version="1.1"
                        xmlns="http://www.w3.org/2000/svg"
                        xmlnsXlink="http://www.w3.org/1999/xlink"
                    >
                        <polygon
                            id="Triangle-1"
                            transform="translate(9.500000, 9.500000) rotate(-180.000000) translate(-9.500000, -9.500000) "
                            points="9.5 0 19 19 0 19 "
                        ></polygon>
                    </svg>
                </div>
            </div>
        </>
    );
};
