const Button = ( {label, iconURL} ) => {
  return (
    <button className="flex justify-center items-center gap-1 px-4 py-3 border font-montserrat text-l leading-none bg-coral-red rounded-full text-white border-coral-red">
        {label}
        <img src={iconURL}
          alt="arrowRight icon"
          className="ml-2 rounded-full w-5 h-5"
        />
    </button>
  )
}

export default Button