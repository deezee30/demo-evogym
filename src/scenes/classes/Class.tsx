import { ClassModel } from "@/shared/types";

interface Props {
    model: ClassModel,
};

const Class = ({ model }: Props) => {
    const overlayStyles = `flex flex-col absolute z-30 transition duration-500
    opacity-0 hover:opacity-90 text-white text-center bg-primary-500
    whitespace-normal items-center  justify-center p-5 h-[380px] w-[450px]`;

    return (
        <li
            className="relative mx-5 inline-block h-[380px] w-[450px]"
        >
            <div className={overlayStyles}>
                <p className="text-2xl">{model.name}</p>
                <p className="mt-5">{model.description}</p>
            </div>
            <img
                alt={`${model.image}`}
                src={model.image}
            />
        </li>
    );
};

export default Class;