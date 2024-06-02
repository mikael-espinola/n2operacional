import FormField from "@/components/form/FormField";
import { Container } from "./style";
import { Suspense } from "react";

export default function Home() {
  return (
    <Container>
      <Suspense fallback={<></>}>
        <FormField />
      </Suspense>
    </Container>
  );
}
