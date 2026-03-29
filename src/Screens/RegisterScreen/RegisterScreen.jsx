import './RegisterScreen.css'

// Components
import HeaderComponent from '../../components/layout/HeaderComponent/HeaderComponent'
import InformationFormComponent from '../../components/ui/InformationFormComponent/InformationFormComponent'

// Constants
import { REGISTER_FORM_CONSTANTS, initialFormState } from '../../constants/registerForm.constants'
import ButtonComponent from '../../components/ui/ButtonComponent/ButtonComponent'
import { Link } from 'react-router'

function RegisterScreen() {
  const { 
    form_title, 
    form_subtitle, 
    sections, 
    button, 
    footer 
  } = REGISTER_FORM_CONSTANTS

  const onRegister = () => {
        try {
            sendRequest({
                requestCb: () => {
                    return authService.register(formState)
                }
            })
        } catch (error) {
            console.log(error)
        }
    }
  
  // TODO: la función onRegister debería escribirse acá y pasarse como parámetro, pero no puedo hacerlo. 
  // No sé si es por el hook useForm o por el hook useRequest.
  
  return (
    <>
      <HeaderComponent />
      <main>
        <section className='register-section'>
          <InformationFormComponent 
            form_title={form_title}
            form_subtitle={form_subtitle}
            sections={sections}
            button={button}
            footer={footer}
            initialFormState={initialFormState}
            onSubmitFuntion
          />
        </section>
      </main>
    </>
  )
}

export default RegisterScreen