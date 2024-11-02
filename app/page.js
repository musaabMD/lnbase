import LandingPage from "@/components/Heropage";
import ComparisonSection from "@/components/Compare";
import RevenueCalculator from "@/components/reve";
import { Analytics } from "@vercel/analytics/react"
export default function Page() {
  return (
    <>
    <LandingPage/>
<ComparisonSection/>
<Analytics />

    </>
  );
}
