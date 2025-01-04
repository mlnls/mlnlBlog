const getCategoryName = (category) => {
  switch (category) {
    case "0":
      return "All";
    case "1":
      return "Language - C/C++";
    case "2":
      return "Language - Python";
    case "3":
      return "Language - JavaScript";
    case "4":
      return "CS";
    case "5":
      return "Algorithm - Concept";
    case "6":
      return "Algorithm - Solving";
    case "7":
      return "Network";
    case "8":
      return "FrontEnd - Concept";
    case "9":
      return "FrontEnd - TroubleShooting";
    case "10":
      return "BackEnd - Concept";
    case "11":
      return "BackEnd - TroubleShooting";
    case "12":
      return "Security";
  }
};

export default getCategoryName;
