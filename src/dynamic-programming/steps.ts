const calculateSteps = (step: number): number => {
  if (step <= 0) return 0;
  if (step === 1) return 1;
  if (step === 2) return 2;
  return calculateSteps(step - 1) + calculateSteps(step - 2);
};

console.log("total posibilities: ", calculateSteps(3));
