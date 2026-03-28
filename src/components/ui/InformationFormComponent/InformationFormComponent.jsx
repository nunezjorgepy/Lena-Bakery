import { Link } from 'react-router'
import './InformationFormComponent.css'
import ButtonComponent from '../ButtonComponent/ButtonComponent'

/* 
    El formulario tendrá un título, un subtítulo y los campos para ingresar la información.
    El título y subtítulo van en la sección form-header.
    Los campos van en la sección form-body.
    El botón de enviar va en la sección form-footer.
*/

function InformationFormComponent(props) {
    const { form_title, form_subtitle, sections } = props
    
    const submitForm = (e) => {
        e.preventDefault()
        console.log('Form submitted')
    }

    // Renderizar las secciones
    const renderSections = () => {
        return sections.map((section, index) => (
            <div key={index} className="form-section" onSubmit={submitForm}>
                <div className="form-section-header">
                    <span>{section.section_number}</span>
                    <h2>{section.section_title}</h2>
                </div>
                <div className="form-section-flex-container">
                    {section.inputs.map((input, index) => (
                        <div key={index} className={`form-section-group ${input.flex}`}>
                            <label htmlFor={input.id} className={input.required ? 'required' : ''}>
                                {input.label}
                            </label>
                            <input 
                                type={input.type} 
                                id={input.id} 
                                name={input.name} 
                                placeholder={input.placeholder} 
                            />
                        </div>
                    ))}
                </div>
            </div>
        ))
    }

    return (
        <form className='form-container' onSubmit={submitForm}>
            {/* Header del formulario */}
            <div className='form-header'>
                <h1>{form_title}</h1>
                <span>{form_subtitle}</span>
            </div>

            {/* Body del formulario */}
            <div className='form-body'>
                {renderSections()}
            </div>

            {/* Footer del formulario */}
            <div className='form-footer'>
                <ButtonComponent
                    text="Registrarse"
                    type="submit"
                />
                <p>¿Ya tenés una cuenta? <Link to="/login" className='form-footer-link'>Iniciá sesión</Link></p>
            </div>
        </form>
    )
}

export default InformationFormComponent