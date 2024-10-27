"use client";

import { useState, useEffect } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";

const MAX_POINTS = {
  homeworks: [2.5, 2.5, 2.5, 2.5],
  tests: [20, 20, 20, 20],
  mathematica: [5, 5, 5],
};

const LABEL_KEY = {
  homeworks: "HW",
  tests: "Test",
  mathematica: "Math",
};

export default function GradeCalculator() {
  const [grades, setGrades] = useState({
    homeworks: [null, null, null, null],
    tests: [null, null, null, null],
    mathematica: [null, null, null],
  });
  const [useMathematica3, setUseMathematica3] = useState(false);
  const [finalGrade, setFinalGrade] = useState<number | null>(null);
  const [testPercentages, setTestPercentages] = useState(Array(4).fill(20));

  const handleGradeChange = (
    category: "homeworks" | "tests" | "mathematica",
    index: number,
    value: string
  ) => {
    setGrades((prev) => ({
      ...prev,
      [category]: prev[category].map((grade, i) =>
        i === index ? (value === "" ? null : Number(value)) : grade
      ),
    }));
  };

  const calculateWeightedSum = (
    grades: (number | null)[],
    maxPoints: number[],
    percentages: number[]
  ): number => {
    return grades.reduce<number>(
      (sum, grade, index) =>
        grade !== null
          ? sum + (grade / maxPoints[index]) * percentages[index]
          : sum,
      0
    );
  };

  useEffect(() => {
    const newTestPercentage = useMathematica3 ? 18.75 : 20;
    setTestPercentages(Array(4).fill(newTestPercentage));
  }, [useMathematica3]);

  useEffect(() => {
    const homeworkSum = calculateWeightedSum(
      grades.homeworks,
      MAX_POINTS.homeworks,
      [2.5, 2.5, 2.5, 2.5]
    );
    const testSum = calculateWeightedSum(
      grades.tests,
      MAX_POINTS.tests,
      testPercentages
    );
    const mathematicaSum = calculateWeightedSum(
      grades.mathematica,
      MAX_POINTS.mathematica,
      [5, 5, useMathematica3 ? 5 : 0]
    );

    const totalSum = homeworkSum + testSum + mathematicaSum;

    const totalPossiblePoints =
      grades.homeworks.reduce(
        (sum, grade) => (grade !== null ? sum + 2.5 : sum),
        0
      ) +
      grades.tests.reduce(
        (sum, grade, index) =>
          grade !== null ? sum + testPercentages[index] : sum,
        0
      ) +
      grades.mathematica.reduce(
        (sum, grade, index) =>
          grade !== null
            ? sum + (index === 2 ? (useMathematica3 ? 5 : 0) : 5)
            : sum,
        0
      );

    const scaledGrade =
      totalPossiblePoints > 0 ? (totalSum / totalPossiblePoints) * 100 : 0;
    setFinalGrade(Number(scaledGrade.toFixed(2)));
  }, [grades, useMathematica3, testPercentages]);

  const resetGrades = () => {
    setGrades({
      homeworks: [null, null, null, null],
      tests: [null, null, null, null],
      mathematica: [null, null, null],
    });
    setUseMathematica3(false);
  };

  return (
    <div className="w-full max-w-7xl mx-auto p-4">
      <h2 className="text-2xl font-bold text-center mb-4">Grade Calculator</h2>
      <div className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Homeworks</h3>
            {grades.homeworks.map((grade, index) => (
              <div key={`hw-${index}`} className="space-y-1">
                <Label htmlFor={`hw-${index}`} className="text-sm">
                  {LABEL_KEY.homeworks} {index + 1} (2.5%)
                </Label>
                <Input
                  id={`hw-${index}`}
                  type="number"
                  min="0"
                  max={MAX_POINTS.homeworks[index]}
                  step="0.1"
                  value={grade ?? ""}
                  onChange={(e) =>
                    handleGradeChange("homeworks", index, e.target.value)
                  }
                  className="w-full"
                />
              </div>
            ))}
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Tests</h3>
            {grades.tests.map((grade, index) => (
              <div key={`test-${index}`} className="space-y-1">
                <Label htmlFor={`test-${index}`} className="text-sm">
                  {LABEL_KEY.tests} {index + 1} (
                  {testPercentages[index].toFixed(2)}%)
                </Label>
                <Input
                  id={`test-${index}`}
                  type="number"
                  min="0"
                  max={MAX_POINTS.tests[index]}
                  step="0.1"
                  value={grade ?? ""}
                  onChange={(e) =>
                    handleGradeChange("tests", index, e.target.value)
                  }
                  className="w-full"
                />
              </div>
            ))}
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Mathematica</h3>
            {grades.mathematica.map((grade, index) => (
              <div key={`math-${index}`} className="space-y-1">
                <Label htmlFor={`math-${index}`} className="text-sm">
                  {LABEL_KEY.mathematica} {index + 1}{" "}
                  {index === 2 ? "(Optional)" : ""} (5%)
                </Label>
                <Input
                  id={`math-${index}`}
                  type="number"
                  min="0"
                  max={MAX_POINTS.mathematica[index]}
                  step="0.1"
                  value={grade ?? ""}
                  onChange={(e) =>
                    handleGradeChange("mathematica", index, e.target.value)
                  }
                  className="w-full"
                  disabled={index === 2 && !useMathematica3}
                />
              </div>
            ))}
            <div className="flex items-center space-x-2">
              <Checkbox
                id="use-math-3"
                checked={useMathematica3}
                onCheckedChange={(checked) =>
                  setUseMathematica3(checked as boolean)
                }
              />
              <Label htmlFor="use-math-3" className="text-sm">
                Use {LABEL_KEY.mathematica} 3 (5%)
              </Label>
            </div>
          </div>
        </div>
        <div className="mt-4 space-y-2">
          <div className="flex items-center gap-2 flex-wrap">
            <div className="text-xl font-bold">
              Current Grade: {finalGrade !== null ? `${finalGrade}%` : "N/A"}
            </div>
            <Button
              onClick={resetGrades}
              variant="outline"
              className="shrink-0"
            >
              Reset
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
