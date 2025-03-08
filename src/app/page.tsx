import ComparisonGraph from "@/components/ComparisonGraph";
import QuestionAnalysis from "@/components/QuestionAnalysis";
import QuickStatistics from "@/components/QuickStatistics";
import QuizCard from "@/components/QuizCard";
import SyllabusAnalysis from "@/components/SyllabusAnalysis";
import StatsProvider from "@/context/statsContext";

export default function HomePage() {
  return (
    <StatsProvider>
      <div className="flex w-full flex-col gap-4 p-7 px-4">
        <h2 className="mb-2">Skill Test</h2>

        <div className="flex flex-col gap-8 lg:flex-row">
          <div className="flex flex-7 flex-col gap-5">
            <QuizCard />
            <QuickStatistics />
            <ComparisonGraph />
          </div>

          <div className="flex flex-5 flex-col gap-5">
            <SyllabusAnalysis />
            <QuestionAnalysis />
          </div>
        </div>
      </div>
    </StatsProvider>
  );
}
