import {  useState } from "react";
import Information from "./components/steps/Information";
import LabelSteps from "./components/steps/LabelSteps";
import Profile from "./components/steps/Profile";
import UploadDocument from "./components/steps/UploadDocument";

const contentStepper = [
  {
    id:1,
    src: './svg/user.svg',
    alt: 'Profile',
    label: 'Perfil'
  },
  {
    id:2,
    src: './svg/document.svg',
    alt: 'Information',
    label: 'Informaciòn'
  },
  {
    id:3,
    src: './svg/upload.svg',
    alt: 'file-upload',
    label: 'Subir Documentos'
  }
]
function App() {
  let [step, setStep] = useState(0)
  

  const nextStep = () => {
    setStep(step + 1)
  }

  const prevStep =() =>{
    setStep(step - 1)
  }
  return(
      <div className="w-70  max-w-md grid grid-cols-1 mx-auto gap-4 place-content-center p-4">
        <LabelSteps step={step} content={contentStepper}/>
        {step === 0 ? <Profile nextStep={nextStep}/> 
        : step === 1 ? <Information prevStep={prevStep} nextStep={nextStep}/>
        : step === 2 ? <UploadDocument prevStep={prevStep}/>
        : null}
      </div>
  );
}

export default App;
