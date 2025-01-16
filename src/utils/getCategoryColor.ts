export const getCategoryColor = (category: string) => {
  const categoryLowerCase = category.toLowerCase();
  switch (categoryLowerCase) {
    case "tecnologia":
      return "#37FF8B";
    case "saúde":
      return "#FB3640";
    case "viagem":
      return "#51D6FF";
    case "comidas e receitas":
      return "#F9CFF2";
    case "esportes":
      return "#FEEA00";
    case "diversão":
      return "#FFB900";
    default:
      return "#A8A8A8";
  }
};
