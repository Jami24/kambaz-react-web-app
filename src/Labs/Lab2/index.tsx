import ForegroundColors from "./ForegroundColors";
import BackgroundColors from "./BackgroundColors";
import Borders from "./Borders";
import Paddings from "./Paddings";
import Margins from "./Margins";
import Corners from "./Corners";
import Dimensions from "./Dimensions";
import Positions from "./Positions";
import Zindex from "./Zindex";
import Float from "./Float";
import GridLayout from "./GridLayout";
import Flex from "./Flex";
import ReactIconsSampler from "./ReactIcons";

import { Container } from "react-bootstrap";
import BootstrapGrids from "./BootstrapGrids";
import ScreenSizeLabel from "./ScreenSizeLabel";
import BootstrapTables from "./BootstrapTables";
import BootstrapLists from "./BootstrapLists";
import BootstrapForms from "./BootstrapForms";

import BootstrapNavigation from "./BootstrapNavigation";


export default function Lab2() {
    return (
        <Container id="wd-lab2">
            <h2>Lab 2 - Cascading Style Sheets</h2>
            <div id="wd-css-document-structure" className="wd-selector-1">
                <h3>Document structure selectors</h3>

                <div className="wd-selector-2">
                    <p className="wd-selector-3">
                        This paragraph's red background is referenced as <br />
                        <code>.selector-2 .selector-3</code> <br />
                        meaning the descendant of some ancestor.
                        <br />
                        <span className="wd-selector-4">
              Whereas this span is a direct child of its parent
            </span>
                        <br />
                        You can combine these relationships to create specific styles
                        depending on the document structure.
                    </p>
                </div>
            </div>
            <ForegroundColors />
            <BackgroundColors />
            <Borders />
            <Paddings />
            <Margins />
            <Corners />
            <Dimensions />
            <Positions />
            <Zindex />
            <Float />
            <GridLayout />
            <Flex />

            <ReactIconsSampler />
            <BootstrapGrids />
            <ScreenSizeLabel />
            <BootstrapTables />
            <BootstrapLists />
            <BootstrapForms />

            <BootstrapNavigation />
        </Container>
    );
}
