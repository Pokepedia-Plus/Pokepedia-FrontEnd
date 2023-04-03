export const colorTypeGradients = (type1, type2, length) => {
  // debugger
  let color1, color2;

  switch (type1) {
    case "grass":
      color1 = "#00C300";
      break;
    case "poison":
      color1 = "#ca0cfd ";
      break;
    case "normal":
      color1 = "#cfcfcf";
      break;
    case "fire":
      color1 = "#ff833a";
      break;
    case "water":
      color1 = "#49b3db";
      break;
    case "electric":
      color1 = "#f7da39";
      break;
    case "ice":
      color1 = "#44e8e8";
      break;
    case "fighting":
      color1 = "#e25370";
      break;
    case "ground":
      color1 = "#e77146";
      break;
    case "flying":
      color1 = "#8fa5d5";
      break;
    case "psychic":
      color1 = "#ff8fd3";
      break;
    case "bug":
      color1 = "#76db54";
      break;
    case "rock":
      color1 = "#b3a97f";
      break;
    case "ghost":
      color1 = "#696ed4";
      break;
    case "dark":
      color1 = "#5f5d66";
      break;
    case "dragon":
      color1 = "#5888e8";
      break;
    case "steel":
      color1 = "#7ea8a9";
      break;
    case "fairy":
      color1 = "#f59ae9";
      break;
    default:
      color1 = "gainsboro";
      break;
  }
  
  if (length === 2) {
    switch (type2) {
        case "grass":
          color2 = "#00C300";
          break;
        case "poison":
          color2 = "#ca0cfd ";
          break;
        case "normal":
          color2 = "#cfcfcf";
          break;
        case "fire":
          color2 = "#ff833a";
          break;
        case "water":
          color2 = "#49b3db";
          break;
        case "electric":
          color2 = "#f7da39";
          break;
        case "ice":
          color2 = "#44e8e8";
          break;
        case "fighting":
          color2 = "#e25370";
          break;
        case "ground":
          color2 = "#e77146";
          break;
        case "flying":
          color2 = "#8fa5d5";
          break;
        case "psychic":
          color2 = "#ff8fd3";
          break;
        case "bug":
          color2 = "#76db54";
          break;
        case "rock":
          color2 = "#b3a97f";
          break;
        case "ghost":
          color2 = "#696ed4";
          break;
        case "dark":
          color2 = "#5f5d66";
          break;
        case "dragon":
          color2 = "#5888e8";
          break;
        case "steel":
          color2 = "#7ea8a9";
          break;
        case "fairy":
          color2 = "#f59ae9";
          break;
        default:
          color2 = "gainsboro";
          break;
      }
      
  } else if (length === 1) {
    color2 = color1;
  }

  const finalColor = [color1, color2];

  return finalColor;
};
