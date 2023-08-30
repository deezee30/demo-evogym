import HText from "@/shared/HText";
import { NavPage, SetNavPage } from "@/shared/types";
import { motion } from "framer-motion";
import ContactUsPageGraphic from "@/assets/ContactUsPageGraphic.png";
import { useForm } from "react-hook-form";

interface Props {
    setSelectedPage: SetNavPage,
};

const Contact = ({ setSelectedPage }: Props) => {
    const inputClass = "mb-5 w-full rounded-lg px-5 py-3 bg-primary-300 placeholder-white";

    const {
        register,
        trigger,
        formState: { errors },
    } = useForm();

    const onSubmit = async (e: any) => {
        const isValid = await trigger();
        if (!isValid) {
            e.preventDefault();
        }
    };

    return (
        <section
            className="w-full pt-24 pb-32"
            id={NavPage.Contact}
        >
            <motion.div
                className="w-5/6 mx-auto"
                onViewportEnter={() => setSelectedPage(NavPage.Contact)}
            >
                {/* Header */}
                <motion.div
                    className="md:w-3/5"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.5 }}
                    variants={{
                        hidden: { opacity: 0, x: -50 },
                        visible: { opacity: 1, x: 0 },
                    }}
                >
                    <HText>
                        <span className="text-primary-500">JOIN NOW</span>
                        {" "}TO GET IN SHAPE.
                    </HText>
                    <p className="my-5">
                        Congue adipiscing risus commodo placerat. Tellus et in feugiat nisl
                        sapien vel rhoncus. Placerat at in enim pellentesque. Nulla
                        adipiscing leo egestas nisi elit risus sit. Nunc cursus sagittis.
                    </p>
                </motion.div>

                {/* Form and image */}
                <div className="md:flex mt-10 justify-between gap-8">
                    {/* Form */}
                    <motion.div
                        className="basis-3/5 mt-10 md:mt-0"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.5 }}
                        transition={{ duration: 0.5 }}
                        variants={{
                            hidden: { opacity: 0, y: 50 },
                            visible: { opacity: 1, y: 0 },
                        }}
                    >
                        <form
                            target="_blank"
                            action="https://formsubmit.co/0d5d144813a98f9c1b793c366f1eba54"
                            onSubmit={onSubmit}
                            method="POST"
                        >
                            {/* Name */}
                            <input
                                className={inputClass}
                                type="text"
                                placeholder="NAME"
                                {...register("name", {
                                    required: true,
                                    maxLength: 100,
                                })}
                            />
                            {errors.name && (
                                <p className="mt-1 text-primary-500">
                                    {errors.name.type === "required" && "This field is required."}
                                    {errors.name.type === "maxLength" && "Maximum number of characters is 100."}
                                </p>
                            )}

                            {/* Email */}
                            <input
                                className={inputClass}
                                type="text"
                                placeholder="EMAIL"
                                {...register("email", {
                                    required: true,
                                    maxLength: 100,
                                    pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                })}
                            />
                            {errors.email && (
                                <p className="mt-1 text-primary-500">
                                    {errors.email.type === "required" && "This field is required."}
                                    {errors.email.type === "maxLength" && "Maximum number of characters is 100."}
                                    {errors.email.type === "pattern" && "Invalid email."}
                                </p>
                            )}

                            {/* Message */}
                            <textarea
                                className={inputClass}
                                rows={4}
                                cols={50}
                                placeholder="MESSAGE"
                                {...register("message", {
                                    required: true,
                                    maxLength: 2000,
                                })}
                            />
                            {errors.message && (
                                <p className="mt-1 text-primary-500">
                                    {errors.message.type === "required" && "This field is required."}
                                    {errors.message.type === "maxLength" && "Maximum number of characters is 2000."}
                                </p>
                            )}

                            {/* Submit */}
                            <button
                                className="mt-5 px-20 py-3 rounded-lg bg-secondary-500 transition duration-200 hover:text-white hover:bg-primary-500"
                                type="submit"
                            >
                                Submit
                            </button>
                        </form>
                    </motion.div>

                    {/* Image */}
                    <motion.div
                        className="relative mt-16 md:mt-0 basis-2/5"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.5 }}
                        transition={{ delay: 0.2, duration: 0.5 }}
                        variants={{
                            hidden: { opacity: 0, y: 50 },
                            visible: { opacity: 1, y: 0 },
                        }}
                    >
                        <div className="before:absolute md:before:content-evolvetext w-full before:-bottom-20 before:-right-10 before:z-[-1]">
                            <img
                                className="w-full"
                                alt={`${ContactUsPageGraphic}`}
                                src={ContactUsPageGraphic}
                            />
                        </div>
                    </motion.div>
                </div>
            </motion.div>
        </section>
    );
};

export default Contact;