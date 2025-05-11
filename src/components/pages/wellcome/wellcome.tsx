import { useState } from "react";
import { Step1 } from "./step1/step1";
import { Step2 } from "./step2/step2";

type StepValues = 1 | 2;
export const Wellcome = () => {
  const [step, setStep] = useState<StepValues>(1);

  return (
    <div>
      {step === 1 ? <Step1 handleNextStep={() => setStep(2)} /> : <Step2 />}
    </div>
  );
};
