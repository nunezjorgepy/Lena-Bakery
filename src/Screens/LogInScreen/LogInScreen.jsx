import './LogInScreen.css'
import HeaderComponent from '../../components/layout/HeaderComponent/HeaderComponent'
import InformationFormComponent2 from '../../components/ui/InformationFormComponent2/InformationFormComponent2'

function LogInScreen() {
    return (
        <>
            <HeaderComponent />
            {/* <div>LogInScreen</div> */}
            {/* TODO: borar el componente de InformationFormComponent2. Lo uso acá a modo de prueba */}
            <main className='main-container'>
                <InformationFormComponent2 />
            </main>
        </>
    )
}

export default LogInScreen