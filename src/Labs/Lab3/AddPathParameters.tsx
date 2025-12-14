import { useParams } from "react-router-dom";

export default function AddPathParameters() {
    const { a, b } = useParams();

    const aNum = parseInt(a as string, 10);
    const bNum = parseInt(b as string, 10);

    return (
        <div id="wd-add-path-parameters">
            <h4>Add Path Parameters</h4>
            {a} + {b} = {aNum + bNum}
            <hr />
        </div>
    );
}
