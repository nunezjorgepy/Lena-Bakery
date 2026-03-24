import './RegisterScreen.css'

// Components
import HeaderComponent from '../../components/layout/HeaderComponent/HeaderComponent'
import InformationFormComponent from '../../components/ui/InformationFormComponent/InformationFormComponent'

function RegisterScreen() {
  return (
    <>
      <HeaderComponent />
      <main>
        <InformationFormComponent />
      </main>
    </>
  )
}

export default RegisterScreen