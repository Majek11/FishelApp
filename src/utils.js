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

export function getFilteredData(questions,setupDetails){
  let filteredObj = questions.objective.splice(0,+setupDetails.question_type.objective)
  let filteredSub = questions.subjective.splice(0,+setupDetails.question_type.subjective)
  let filteredThy = questions.theory.splice(0,+setupDetails.question_type.theory)

  return {
    objective:filteredObj,
    subjective:filteredSub,
    theory:filteredThy,
  }
}

export function generateScoringSheet(setupDetails){
  let objScoreSheet = []
  let subScoreSheet = []
  let thyScoreSheet = []

  for(let i = 0; i < +setupDetails.question_type.objective; i++){
    objScoreSheet[i] = ""
  }
  for(let i = 0; i < +setupDetails.question_type.subjective; i++){
    subScoreSheet[i] = ""
  }
  for(let i = 0; i < +setupDetails.question_type.theory; i++){
    thyScoreSheet[i] = ""
  }
    return {
      objective: objScoreSheet,
      subjective: subScoreSheet,
      theory: thyScoreSheet,
    }
}

export function createAiArray(num,init){
  
  let thyScoreSheet = []

  for(let i = 0; i < num; i++){
    thyScoreSheet[i] = init
  }
 return  thyScoreSheet
}