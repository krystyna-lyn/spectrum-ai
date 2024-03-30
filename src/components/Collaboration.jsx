import { collabText } from "../constants";
import Button from "./Button";
import Section from "./Section";

const Collaboration = () => {
    return (
        <Section crosses>
            <div className="container lg:flex">
                <div className="max-w-[25rem]">
                    <h2 className="h2 mb-4 md:mb-8">
                        AI Chat App for seamless collaboration
                    </h2>

                    <ul className="max-w-[22rem] mb-10 md:mb-14">

                    </ul>

                    <Button>Try it now</Button>
                </div>

                <div className="lg:ml-auto xl:w-[38rem] mt-4">
                    <p className="body-2 mb-8 text-n-4 md:mb-16 lg:mb-32 lg:w-[22rem] lg:mx-auto">
                        {collabText}
                    </p>

                    <div className="relative left-1/2 flex w-[22rem] aspect-square border border-n-6 rounded-full -translate-x-1/2 scale:75 md:scale-100">
                        <div className="flex w-60 aspect-square m-auto border border-n-6 rounded-full">
                            <div className="w-[6rem] aspect-square m-auto p-[0.2rem] bg-conic-gradient rounded-full">
                                <div className="flex items-center justify-center w-full h-full bg-n-8 rounded-full">

                                </div>
                            </div>
                        </div>

                        <ul>

                        </ul>

                    </div>
                </div>
            </div>
        </Section>
    );
};

export default Collaboration;