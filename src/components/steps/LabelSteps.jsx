function LabelSteps({step, content}){
    return(
        <div className="flex w-full">
            {
                content.map((item, index)=>{
                   return (
                        <div className={"flex flex-col justify-center items-center w-1/3 " +(step ===index ? "motion:reduce animate-bounce": "animate")} key={index} >
                            <img src={item.src} alt={item.alt} className={"w-14 h-14 rounded-full border p-3 "+ (step === index ? "bg-orange-400": "boder-gray-400")}/>
                            <label htmlFor="document" className={"text-center "+ (step === index ? "text-orange-400" : "text-gray-400")}>{item.label}</label>
                        </div>
                    )
                })
            }
        </div>
    )
}


export default LabelSteps;