import BenefitsDetails from "./benefits/BenefitsDetails";
import BenefitsTitle from "./benefits/BenefitsTitle";
import Container from "./global/Container";

function Benefits() {
  return (
    <div className="bg-slate-100">
      <Container>
        <BenefitsTitle />
        <BenefitsDetails />
      </Container>
    </div>
  );
}

export default Benefits;
