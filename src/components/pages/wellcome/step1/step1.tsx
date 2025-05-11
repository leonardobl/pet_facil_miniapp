import { ComponentProps } from "react";
import { Text } from "../../../atoms/text/text";
import { Wrapper } from "../../../atoms/wrapper/wrapper";
import { Button } from "../../../atoms/button/button";
import { H1 } from "../../../atoms/typhograph/h1/h1";

interface IStep1Props extends ComponentProps<"div"> {
  handleNextStep: () => void;
}
export const Step1 = ({ handleNextStep }: IStep1Props) => {
  return (
    <div className="h-dvh flex flex-col justify-between animate-fadein">
      <div className="wellcome-background1 min-h-[80%]">
        <Wrapper className="pt-28 px-6 flex flex-col gap-8">
          <H1 className="text-center">Boas vindas!</H1>
          <Text className="text-center ">
            Texto de apoio explicando o problema veterinário-tutor que o app
            resolve.
          </Text>
        </Wrapper>
      </div>
      <div className="h-fit">
        <div className="pb-8 px-6 flex flex-col items-center gap-8">
          <img src="/assets/svg/step1.svg" alt="step1" />
          <Button onClick={handleNextStep}>Avançar</Button>
        </div>
      </div>
    </div>
  );
};
