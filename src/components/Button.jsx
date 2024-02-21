import {Link} from "react-router-dom"

function Button({bgcolor, text, textColor, border, bordercolor, slug}) {
  let hoverClass = ""

  switch (bgcolor) {
    case "#D87D4A":
      hoverClass = "hover:bg-[#FBAF85]"
      break
    case "#000000":
      hoverClass = "hover:bg-[#4C4C4C]"
      break
    case "":
      hoverClass = "hover:bg-[#000000]"
      break
    default:
      hoverClass = ""
  }

  return (
    <Link to={`/product/${slug || ""}`}>
      <button
        className={`w-40 h-12 ${hoverClass} text-[${textColor}] text-[13px] transition leading-[17px] tracking-[1px] font-bold bg-[${bgcolor}] ${border} border-${bordercolor}`}
      >
        {text}
      </button>
    </Link>
  )
}

export default Button
