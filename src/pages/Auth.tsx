import Wrapper from "@/components/wrapper";

import H1 from "@/components/typo/H1";
import H2 from "@/components/typo/H2";
import H4 from "@/components/typo/H4";
import InlineCode from "@/components/typo/InlineCode";

const Auth = () => {
  return (
    <Wrapper className="flex flex-col items-center justify-center">
      <H1>Auth</H1>
      <H2>Look's like you are not authenticated</H2>
      <H4 className="mt-2 text-muted-foreground">
        Checkout <InlineCode>@/components/ui/protected-route.tsx</InlineCode> to
        add protected contents logic.
      </H4>
    </Wrapper>
  );
};

export default Auth;
