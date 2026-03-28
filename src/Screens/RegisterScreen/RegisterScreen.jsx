import './RegisterScreen.css'

// Components
import HeaderComponent from '../../components/layout/HeaderComponent/HeaderComponent'
import InformationFormComponent from '../../components/ui/InformationFormComponent/InformationFormComponent'

// Constants
import { REGISTER_FORM_CONSTANTS } from '../../constants/registerForm.constants'
import ButtonComponent from '../../components/ui/ButtonComponent/ButtonComponent'
import { Link } from 'react-router'

function RegisterScreen() {
  const { form_title, form_subtitle, sections, button, footer } = REGISTER_FORM_CONSTANTS
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
          />
        </section>
      </main>
    </>
  )
}

export default RegisterScreen