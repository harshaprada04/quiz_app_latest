import JsonDataEnglish from "../QuestionSource/questionEnglish.json";
import JsonDataHindi from "../QuestionSource/questionHindi.json";

export const FetchQuestionList = async (language:string) => {
  function languageHandler(language:string) {
    if (language === "English") {
      return JsonDataEnglish;
    } else {
      return JsonDataHindi;
    }
  }
  return languageHandler(language);
};
