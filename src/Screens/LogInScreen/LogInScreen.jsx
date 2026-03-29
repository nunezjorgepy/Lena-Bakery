import './LogInScreen.css'
import HeaderComponent from '../../components/layout/HeaderComponent/HeaderComponent'
import { LOG_IN_FORM_CONSTANTS, initialFormState } from '../../constants/logInForm.constants'
import InformationFormComponent from '../../components/ui/InformationFormComponent/InformationFormComponent'
import useRequest from '../../hooks/useRequest'
import authService from '../../services/authService'
import { useContext, useEffect } from 'react'
import { AuthContext } from '../../context/authContext'

function LogInScreen() {
    const { form_title, form_subtitle, sections, button, footer } = LOG_IN_FORM_CONSTANTS

    const { sendRequest, response, error, loading } = useRequest()
    const { manageLogin } = useContext(AuthContext)

    const onLogIn = (formState) => {
        try {
            sendRequest({
                requestCb: () => {
                    return authService.login(formState)
                }
            })
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(
        () => {
            if (response && response.status === 200) {
                manageLogin(response.data.login_token)
            }
        }, 
        [response]
    )

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
                        onSubmitFunction={onLogIn}
                    />
                </section>
            </main>
        </>
    )
}

export default LogInScreen