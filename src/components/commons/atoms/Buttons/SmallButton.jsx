const buttonVariants = {
    // Button primary small
    button_primary: "h-10 w-20 bg mr-2 bg-red-500 text-white cursor-pointer rounded-md font-semibold hover:bg-red-700 transition-colors font-roboto",

    // border primary small not filled
    button_primary_not_filled: "h-10 w-20 bg mr-2 border border-red-300 text-black-100 cursor-pointer rounded-md font-semibold hover:bg-red-500 hover:text-white transition-color font-roboto",

    // button secondary small
    button_secondary: "h-10 w-20 bg mr-2 bg-gray-400 text-white cursor-pointer rounded-md font-semibold hover:bg-gray-500 transition-colors font-roboto",

    // button secondary small not filled
    button_secondary_not_filled: "h-10 w-20 bg mr-2 border border-gray-400 text-black-100 cursor-pointer rounded-md font-semibold hover:bg-gray-400 hover:text-white transition-colors font-roboto",

    // button default
    button_default: "h-10 w-20 bg mr-2 bg-blue-500 cursor-pointer rounded-md font-semibold hover:bg-blue-700 text-white transition-colors font-roboto"
  
};

const SmallButton = ({ buttonType ,text }) => {
  const buttonStyle = buttonVariants[buttonType] || buttonVariants["button_default"]
  return (
    <button 
      onClick={(e) => e.preventDefault()}
      className={ buttonStyle }
    >{ text }</button>
  )
}

export default SmallButton;