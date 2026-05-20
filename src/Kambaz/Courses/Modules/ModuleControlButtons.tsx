import { useSelector } from "react-redux";
import { IoEllipsisVertical } from "react-icons/io5";
import { BsPlus } from "react-icons/bs";
import { FaTrash, FaPencilAlt } from "react-icons/fa";
import GreenCheckmark from "./GreenCheckmark";

export default function ModuleControlButtons({
                                                 moduleId,
                                                 deleteModule,
                                                 editModule,
                                             }: {
    moduleId: string;
    deleteModule: (moduleId: string) => void;
    editModule: (moduleId: string) => void;
}) {
    const { currentUser } = useSelector(
        (state: any) => state.accountReducer
    );

    const isFaculty = currentUser?.role === "FACULTY";

    return (
        <div className="float-end">
            {isFaculty && (
                <>
                    <FaPencilAlt
                        className="text-primary me-4 mb-1"
                        onClick={() => editModule(moduleId)}
                    />

                    <FaTrash
                        className="text-danger me-4 mb-1"
                        onClick={() => deleteModule(moduleId)}
                    />
                </>
            )}

            <span className="me-4">
                <GreenCheckmark />
            </span>

            {isFaculty && <BsPlus className="fs-4 me-4" />}

            <IoEllipsisVertical className="fs-4" />
        </div>
    );
}