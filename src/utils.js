export function questionGenerationValidation(generationData) {

  if (generationData.subject === "") return [false, "No Subject selected"];
  if (generationData.topics.length === 0) return [false, "No topics selected"];
  if (generationData.difficulty_level === "")
    return [false, "No Difficulty Level selected"];
  if (generationData.generation_mode === "")
    return [false, "No Generation Mode selected"];

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

export function getFilteredData(questions,filterParams){
  let filteredObj = questions.objective.splice(0,+filterParams.question_type.objective)
  let filteredSub = questions.subjective.splice(0,+filterParams.question_type.subjective)
  let filteredThy = questions.theory.splice(0,+filterParams.question_type.theory)

  return {
    objective:filteredObj,
    subjective:filteredSub,
    theory:filteredThy,
  }
}
