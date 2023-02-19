export function questionGenerationValidation(generationData) {

  if (generationData.subject === "") return [false, "No Subject selected"];
  if (generationData.difficulty_level === "")
    return [false, "No Difficulty Level selected"];
  if (generationData.generation_mode === "")
    return [false, "No Generation Mode selected"];
  if (generationData.topics.length === 0) return [false, "No topics selected"];

  if (!Object.values(generationData.question_type).some(checkQuestionType))
    return [
      false,
      "At least one question type must have a value greater than 0",
    ];

  return [true, "Validation Successful"];
}

function checkQuestionType(questionType) {
  return questionType >= 1;
}
