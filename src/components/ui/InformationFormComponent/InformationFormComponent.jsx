import { Link } from 'react-router'
import './InformationFormComponent.css'
import ButtonComponent from '../ButtonComponent/ButtonComponent'

/* 
    El formulario tendrá un título, un subtítulo y los campos para ingresar la información.
    El título y subtítulo van en la sección form-header.
    Los campos van en la sección form-body.
    El botón de enviar va en la sección form-footer.
*/

function InformationFormComponent() {
    return (
        <div className='form-container'>
            {/* Header del formulario */}
            <div className='form-header'>
                <h1>Crea una cuenta</h1>
                <span>Ingresa tus datos para crear una cuenta y realizar pedidos</span>
            </div>

            {/* Body del formulario */}
            {/* Primera sección: Información personal */}
            <div className='form-body'>
                <div className="form-section">
                    <div className="form-section-header">
                        <span>1</span>
                        <h2>Información personal</h2>
                    </div>

                    {/* Grupos de inputs */}
                    <div className="form-section-flex-container">
                        {/* Primera fila: Nombre y Apellido */}
                        <div className="form-section-row form-row-50-50">
                            <div className="form-section-group">
                                <label htmlFor="name" className='required'>Nombre</label>
                                <input 
                                    type="text" 
                                    id="name" 
                                    name="name" 
                                    placeholder='Ingresa tu nombre' 
                                />
                            </div>
                            <div className="form-section-group">
                                <label htmlFor="lastname" className='required'>Apellido</label>
                                <input 
                                    type="text" 
                                    id="lastname" 
                                    name="lastname" 
                                    placeholder='Ingresa tu apellido' 
                                />
                            </div>
                        </div>
                        {/* Segunda fila: teléfono y fecha de nacimiento */}
                        <div className="form-section-row form-row-50-50">
                            <div className="form-section-group">
                                <label htmlFor="phone" className='required'>Teléfono</label>
                                <input 
                                    type="text" 
                                    id="phone" 
                                    name="phone" 
                                    placeholder='Ingresa tu teléfono' 
                                />
                            </div>
                            <div className="form-section-group">
                                <label htmlFor="birthdate" className='required'>Fecha de nacimiento</label>
                                <input 
                                    type="text" 
                                    id="birthdate" 
                                    name="birthdate" 
                                    placeholder='Ingresa tu fecha de nacimiento' 
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Segunda sección: Detalles de la cuenta */}
            <div className="form-section">
                <div className="form-section-header">
                    <span>2</span>
                    <h2>Detalles de la cuenta</h2>
                </div>
                <div className="form-section-flex-container">
                    {/* Primera fila: email y contraseña */}
                    <div className="form-section-row form-row-100-0">
                        <div className="form-section-group">
                            <label htmlFor="email" className='required'>Email</label>
                            <input 
                                type="text" 
                                id="email" 
                                name="email" 
                                placeholder='Ingresa tu email' 
                            />
                        </div>
                        
                    </div>
                    {/* Segunda fila: confirmar contraseña */}
                    <div className="form-section-row form-row-50-50">
                        <div className="form-section-group">
                            <label htmlFor="password" className='required'>Contraseña</label>
                            <input 
                                type="password" 
                                id="password" 
                                name="password" 
                                placeholder='Ingresa tu contraseña' 
                            />
                        </div>
                        <div className="form-section-group">
                            <label htmlFor="confirm-password" className='required'>Confirmar contraseña</label>
                            <input 
                                type="password" 
                                id="confirm-password" 
                                name="confirm-password" 
                                placeholder='Confirma tu contraseña' 
                            />
                        </div>
                    </div>
                </div>
            </div>

            {/* Tercera sección: Dirección */}
            <div className="form-section">
                <div className="form-section-header">
                    <span>3</span>
                    <h2>Dirección</h2>
                </div>
                <div className="form-section-flex-container">
                    {/* Primera fila: Calle y altura */}
                    <div className="form-section-row form-row-75-25">
                        <div className="form-section-group">
                            <label htmlFor="street" className='required'>Calle</label>
                            <input 
                                type="text" 
                                id="street" 
                                name="street" 
                                placeholder='Ingresa tu calle' 
                            />
                        </div>
                        <div className="form-section-group">
                            <label htmlFor="height" className='required'>Altura</label>
                            <input 
                                type="text" 
                                id="height" 
                                name="height" 
                                placeholder='Ingresa tu altura' 
                            />
                        </div>
                    </div>
                    {/* Segunda fila: Piso y Departamento */}
                    <div className="form-section-row form-row-50-50">
                        <div className="form-section-group">
                            <label htmlFor="floor">Piso</label>
                            <input 
                                type="text" 
                                id="floor" 
                                name="floor" 
                                placeholder='Ingresa tu piso' 
                            />
                        </div>
                        <div className="form-section-group">
                            <label htmlFor="apartment">Departamento</label>
                            <input 
                                type="text" 
                                id="apartment" 
                                name="apartment" 
                                placeholder='Ingresa tu departamento' 
                            />
                        </div>
                    </div>
                    {/* Tercera fila: ciudad y código postal */}
                    <div className="form-section-row form-row-50-50">
                        <div className="form-section-group">
                            <label htmlFor="city" className='required'>Localidad</label>
                            <input 
                                type="text" 
                                id="city" 
                                name="city" 
                                placeholder='Ingresa tu localidad' 
                            />
                        </div>
                        <div className="form-section-group">
                            <label htmlFor="postal-code" className='required'>Código postal</label>
                            <input 
                                type="text" 
                                id="postal-code" 
                                name="postal-code" 
                                placeholder='Ingresa tu código postal' 
                            />
                        </div>
                    </div>
                    {/* Cuarta fila: Provincia y País */}
                    <div className="form-section-row form-row-50-50">
                        <div className="form-section-group">
                            <label htmlFor="province" className='required'>Provincia</label>
                            <input 
                                type="text" 
                                id="province" 
                                name="province" 
                                placeholder='Ingresa tu provincia' 
                            />
                        </div>
                        <div className="form-section-group">
                            <label htmlFor="country" className='required'>País</label>
                            <input 
                                type="text" 
                                id="country" 
                                name="country" 
                                placeholder='Ingresa tu país' 
                            />
                        </div>
                    </div>
                </div>
            </div>

            {/* Footer del formulario */}
            <div className='form-footer'>
                <ButtonComponent
                    text="Registrarse"
                    type="submit"
                />
                <p>¿Ya tenés una cuenta? <Link to="/login" className='form-footer-link'>Iniciá sesión</Link></p>
            </div>
        </div>
    )
}

export default InformationFormComponent