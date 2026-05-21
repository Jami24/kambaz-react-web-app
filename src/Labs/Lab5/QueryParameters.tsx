import { useState } from "react";

const HTTP_SERVER = import.meta.env.VITE_REMOTE_SERVER;

export default function QueryParameters() {
    const [a, setA] = useState("34");
    const [b, setB] = useState("23");

    return (
        <div id="wd-query-parameters">
            <h3>Query Parameters</h3>

            <input
                id="wd-query-parameter-a"
                className="form-control mb-2"
                type="number"
                defaultValue={a}
                onChange={(e) => setA(e.target.value)}
            />

            <input
                id="wd-query-parameter-b"
                className="form-control mb-2"
                type="number"
                defaultValue={b}
                onChange={(e) => setB(e.target.value)}
            />

            <a
                id="wd-query-parameter-add"
                href={`${HTTP_SERVER}/lab5/calculator?operation=add&a=${a}&b=${b}`}
            >
                Add {a} + {b}
            </a>

            <br />

            <a
                id="wd-query-parameter-subtract"
                href={`${HTTP_SERVER}/lab5/calculator?operation=subtract&a=${a}&b=${b}`}
            >
                Subtract {a} - {b}
            </a>

            <br />

            <a
                id="wd-query-parameter-multiply"
                href={`${HTTP_SERVER}/lab5/calculator?operation=multiply&a=${a}&b=${b}`}
            >
                Multiply {a} * {b}
            </a>

            <br />

            <a
                id="wd-query-parameter-divide"
                href={`${HTTP_SERVER}/lab5/calculator?operation=divide&a=${a}&b=${b}`}
            >
                Divide {a} / {b}
            </a>

            <hr />
        </div>
    );
}