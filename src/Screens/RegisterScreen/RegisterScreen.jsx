import './RegisterScreen.css'

// Components
import HeaderComponent from '../../components/layout/HeaderComponent/HeaderComponent'
import InformationFormComponent from '../../components/ui/InformationFormComponent/InformationFormComponent'

function RegisterScreen() {
  return (
    <>
      <HeaderComponent />
      <main>
        <section className='register-section'>
          <InformationFormComponent />
        </section>
      </main>
    </>
  )
}

export default RegisterScreen