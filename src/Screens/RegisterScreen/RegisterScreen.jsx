import './RegisterScreen.css'

// Components
import HeaderComponent from '../../components/layout/HeaderComponent/HeaderComponent'
import InformationFormComponent from '../../components/ui/InformationFormComponent/InformationFormComponent'

// Constants
import { REGISTER_FORM_CONSTANTS, initialFormState } from '../../constants/registerForm.constants'
import ButtonComponent from '../../components/ui/ButtonComponent/ButtonComponent'
import { Link } from 'react-router'
import useRequest from '../../hooks/useRequest'
import authService from '../../services/authService'

function RegisterScreen() {
  const { 
    form_title, 
    form_subtitle, 
    sections, 
    button, 
    footer 
  } = REGISTER_FORM_CONSTANTS

  const { sendRequest, response, error, loading } = useRequest()

  const onRegister = (formState) => {
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
            onSubmitFunction={onRegister}
          />
        </section>
      </main>
    </>
  )
}

export default RegisterScreen