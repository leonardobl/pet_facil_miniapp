import { H1 } from "../../atoms/typhograph/h1/h1";
import { H2 } from "../../atoms/typhograph/h2/h2";
import { Wrapper } from "../../atoms/wrapper/wrapper";
import { Layout } from "../../template/layout/layout";

export const UserDefinition = () => {
  return (
    <Layout theme="bg-medium">
      <Wrapper>
        <header className="text-center mt-3">
          <H2>Responde pra gente:</H2>
          <H1>Quem é você?</H1>
          <img
            src="/assets/svg/dog.svg"
            alt="cachorro"
            className=" block h-[400px] object-cover"
          />
        </header>
      </Wrapper>
    </Layout>
  );
};
