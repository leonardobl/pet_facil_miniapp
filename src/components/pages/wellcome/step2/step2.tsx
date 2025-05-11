import { Button } from "../../../atoms/button/button";
import { Text } from "../../../atoms/text/text";
import { H1 } from "../../../atoms/typhograph/h1/h1";
import { Wrapper } from "../../../atoms/wrapper/wrapper";
import { useNavigate } from "react-router-dom";

export const Step2 = () => {
  const navigate = useNavigate();

  return (
    <div className="h-dvh flex flex-col justify-between animate-fadein">
      <div className="wellcome-background2 min-h-[80%]">
        <Wrapper className="pt-28 flex flex-col gap-8">
          <H1 className="text-center">Essa é a sua central pet</H1>
          <Text className="text-center ">
            Texto de apoio explicando o problema veterinário-tutor que o app
            resolve.
          </Text>
        </Wrapper>
      </div>
      <Wrapper className="h-fit">
        <div className="pb-8 flex flex-col items-center gap-8">
          <img src="/assets/svg/step2.svg" alt="step1" />
          <Button onClick={() => navigate("/user-definition")}>Começar</Button>
        </div>
      </Wrapper>
    </div>
  );
};
