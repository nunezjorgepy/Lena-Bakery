import './LogInScreen.css'
import HeaderComponent from '../../components/layout/HeaderComponent/HeaderComponent'
import { LOG_IN_FORM_CONSTANTS, initialFormState } from '../../constants/logInForm.constants'
import InformationFormComponent from '../../components/ui/InformationFormComponent/InformationFormComponent'

function LogInScreen() {
    const { form_title, form_subtitle, sections, button, footer } = LOG_IN_FORM_CONSTANTS

    return (
        <>
            <HeaderComponent />
            <main>
                <section className='login-section'>
                    <InformationFormComponent
                        form_title={form_title}
                        form_subtitle={form_subtitle}
                        sections={sections}
                        button={button}
                        footer={footer}
                        initialFormState={initialFormState}
                    />
                </section>
            </main>
        </>
    )
}

export default LogInScreen