export default function Flex() {
    return (
        <div id="wd-css-flex">
            <h2>Flex</h2>

            {/* 2.1.19.a */}
            <div id="wd-css-flex">
                <h2>Flex A</h2>
                <div className="wd-flex-row-container">
                    <div className="wd-bg-color-yellow">Column 1</div>
                    <div className="wd-bg-color-blue">Column 2</div>
                    <div className="wd-bg-color-red">Column 3</div>
                </div>
            </div>

            <br />

            {/* 2.1.19.b */}
            <div id="wd-css-flex">
                <h2>Flex B</h2>
                <div className="wd-flex-row-container">
                    <div className="wd-bg-color-yellow">
                        Column 1</div>
                    <div className="wd-bg-color-blue">
                        Column 2</div>
                    <div className="wd-bg-color-red wd-flex-grow-1">
                        Column 3</div>
                </div>
            </div>


            <br />

            {/* 2.1.19.c */}
            <div id="wd-css-flex">
                <h2>Flex C</h2>
                <div className="wd-flex-row-container">
                    <div className="wd-bg-color-yellow wd-width-75px">
                        Column 1</div>
                    <div className="wd-bg-color-blue">
                        Column 2</div>
                    <div className="wd-bg-color-red wd-flex-grow-1">
                        Column 3</div>
                </div>
            </div>

        </div>
    );
}
