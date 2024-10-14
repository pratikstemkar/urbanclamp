import React from "react";
import { QuestionsAccordion } from "./QuestionsAccordion";

const Questions = () => {
    return (
        <div className="flex flex-col lg:flex-row w-full space-y-5 lg:space-y-0 justify-between px-2 lg:px-0">
            <div className="flex-col space-y-5 items-center justify-center text-center lg:text-left">
                <h1 className="text-4xl font-extrabold tracking-tighter">
                    Questions?
                </h1>
            </div>
            <div className="lg:w-1/3">
                <QuestionsAccordion />
            </div>
        </div>
    );
};

export default Questions;
