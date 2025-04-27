import { useState } from "react";
import { Title } from "../../atoms/title/title";
import { Text } from "../../atoms/text/text";
import { Button } from "../../atoms/button/button";
import { Wrapper } from "../../atoms/wrapper/wrapper";
import { useNavigate } from "react-router-dom";

type StepValues = 1 | 2;
export const Wellcome = () => {
  const [step, setStep] = useState<StepValues>(1);
  const navigate = useNavigate();

  return (
    <div>
      {step === 1 ? (
        <div className="h-dvh flex flex-col justify-between">
          <div className="wellcome-background1 min-h-[80%]">
            <div className="pt-28 px-6 flex flex-col gap-8">
              <Title className="text-center">Boas vindas!</Title>
              <Text className="text-center ">
                Texto de apoio explicando o problema veterinário-tutor que o app
                resolve.
              </Text>
            </div>
          </div>
          <div className="h-fit">
            <div className="pb-8 px-6 flex flex-col items-center gap-8">
              <img src="/assets/svg/step1.svg" alt="step1" />
              <Button onClick={() => setStep(2)}>Avançar</Button>
            </div>
          </div>
        </div>
      ) : (
        <div className="h-dvh flex flex-col justify-between">
          <div className="wellcome-background2 min-h-[80%]">
            <Wrapper className="pt-28 flex flex-col gap-8">
              <Title className="text-center">Essa é a sua central pet</Title>
              <Text className="text-center ">
                Texto de apoio explicando o problema veterinário-tutor que o app
                resolve.
              </Text>
            </Wrapper>
          </div>
          <Wrapper className="h-fit">
            <div className="pb-8 flex flex-col items-center gap-8">
              <img src="/assets/svg/step2.svg" alt="step1" />
              <Button onClick={() => navigate("/register")}>Começar</Button>
            </div>
          </Wrapper>
        </div>
      )}
    </div>
  );
};
