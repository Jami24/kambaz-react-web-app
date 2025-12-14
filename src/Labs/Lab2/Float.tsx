export default function Float() {
    return (
        <div id="wd-float-divs">
            <h2>Float</h2>

            {/* Example with floating text and images interspersed */}
            <div>
                {/* first image floats right */}
                <img
                    className="wd-float-right wd-float-img"
                    src="https://www.staradvertiser.com/wp-content/uploads/2021/08/web1_Starship-gap2.jpg"
                    alt="Starship (right)"
                />

                <p>
                    Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex
                    sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis
                    convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus
                    fringilla lacus nec metus bibendum egestas.
                </p>
                <p>
                    Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit
                    semper vel class aptent taciti sociosqu ad litora torquent per conubia
                    nostra inceptos himenaeos. Lorem ipsum dolor sit amet consectetur
                    adipiscing elit.
                </p>

                {/* second image floats left */}
                <img
                    className="wd-float-left wd-float-img"
                    src="https://www.staradvertiser.com/wp-content/uploads/2021/08/web1_Starship-gap2.jpg"
                    alt="Starship (left)"
                />

                <p>
                    Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi
                    pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor.
                    Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa
                    nisl malesuada lacinia integer nunc posuere.
                </p>
                <p>
                    Ut hendrerit semper vel class aptent taciti sociosqu ad litora torquent per
                    conubia nostra inceptos himenaeos. Lorem ipsum dolor sit amet consectetur
                    adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat.
                </p>

                {/* third image floats right */}
                <img
                    className="wd-float-right wd-float-img"
                    src="https://www.staradvertiser.com/wp-content/uploads/2021/08/web1_Starship-gap2.jpg"
                    alt="Starship (right)"
                />

                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                    incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                    nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
                    fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                    culpa qui officia deserunt mollit anim id est laborum.
                </p>

                {/* fourth image floats left */}
                <img
                    className="wd-float-left wd-float-img"
                    src="https://www.staradvertiser.com/wp-content/uploads/2021/08/web1_Starship-gap2.jpg"
                    alt="Starship (left)"
                />

                <p>
                    Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex
                    sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis
                    convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla
                    lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer
                    nunc posuere. Ut hendrerit semper vel class aptent taciti sociosqu. Ad litora
                    torquent per conubia nostra inceptos himenaeos.
                </p>

                {/* clear both so following sections start below the floated images */}
                <div className="wd-float-done" />
            </div>


            {/* Example with colored floated boxes */}
            <div>
                <div className="wd-float-left wd-dimension-portrait wd-bg-color-yellow">
                    Yellow
                </div>
                <div className="wd-float-left wd-dimension-portrait wd-bg-color-blue wd-fg-color-white">
                    Blue
                </div>
                <div className="wd-float-left wd-dimension-portrait wd-bg-color-red">
                    Red
                </div>

                <img
                    className="wd-float-right"
                    src="https://www.staradvertiser.com/wp-content/uploads/2021/08/web1_Starship-gap2.jpg"
                />

                <div className="wd-float-done"></div>
            </div>
        </div>
    );
}
