// Constants for the register form
// TODO: Faltan los mensjaes de error
export const REGISTER_FORM_CONSTANTS = {
    form_title: "Crea una cuenta",
    form_subtitle: "Ingresa tus datos para crear una cuenta y realizar pedidos",
    sections: [
        {
            section_title: "Información personal",
            section_number: "1",
            inputs: [
                {
                    id: "name",
                    name: "name",
                    label: "Nombre",
                    placeholder: "Ingresa tu nombre",
                    required: true,
                    type: "text",
                    flex: "flex-50",
                    required: true
                },
                {
                    id: "lastName",
                    name: "lastName",
                    label: "Apellido",
                    placeholder: "Ingresa tu apellido",
                    required: true,
                    type: "text",
                    flex: "flex-50",
                    required: true
                },
                {
                    id: "phone",
                    name: "phone",
                    label: "Teléfono",
                    placeholder: "Ingresa tu teléfono",
                    required: true,
                    type: "text",
                    flex: "flex-50",
                    required: true
                },
                {
                    id: "birthDate",
                    name: "birthDate",
                    label: "Fecha de nacimiento",
                    placeholder: "Ingresa tu fecha de nacimiento",
                    required: true,
                    type: "date",
                    flex: "flex-50",
                    required: true
                }
            ]
        },
        {
            section_title: "Detalles de la cuenta",
            section_number: "2",
            inputs: [
                {
                    id: "email",
                    name: "email",
                    label: "Email",
                    placeholder: "Ingresa tu email",
                    required: true,
                    type: "text",
                    flex: "flex-100",
                    required: true
                },
                {
                    id: "password",
                    name: "password",
                    label: "Contraseña",
                    placeholder: "Ingresa tu contraseña",
                    required: true,
                    type: "password",
                    flex: "flex-50",
                    required: true
                },
                {
                    id: "confirmPassword",
                    name: "confirmPassword",
                    label: "Confirmar contraseña",
                    placeholder: "Confirma tu contraseña",
                    required: true,
                    type: "password",
                    flex: "flex-50",
                    required: true
                }
            ]
        },
        {
            section_title: "Dirección",
            section_number: "3",
            inputs: [
                {
                    id: "street",
                    name: "street",
                    label: "Calle",
                    placeholder: "Ingresa tu calle",
                    required: true,
                    type: "text",
                    flex: "flex-50",
                    required: true
                },
                {
                    id: "number",
                    name: "number",
                    label: "Número",
                    placeholder: "Ingresa tu número",
                    required: true,
                    type: "text",
                    flex: "flex-50",
                    required: true
                },
                {
                    id: "floor",
                    name: "floor",
                    label: "Piso",
                    placeholder: "Ingresa tu piso",
                    required: false,
                    type: "text",
                    flex: "flex-50",
                    required: false
                },
                {
                    id: "department",
                    name: "department",
                    label: "Departamento",
                    placeholder: "Ingresa tu departamento",
                    required: false,
                    type: "text",
                    flex: "flex-50",
                    required: false
                },
                {
                    id: "city",
                    name: "city",
                    label: "Ciudad",
                    placeholder: "Ingresa tu ciudad",
                    required: true,
                    type: "text",
                    flex: "flex-50",
                    required: true
                },
                {
                    id: "zipCode",
                    name: "zipCode",
                    label: "Código postal",
                    placeholder: "Ingresa tu código postal",
                    required: true,
                    type: "text",
                    flex: "flex-50",
                    required: true
                },
                {
                    id: "province",
                    name: "province",
                    label: "Provincia",
                    placeholder: "Ingresa tu provincia",
                    required: true,
                    type: "text",
                    flex: "flex-50",
                    required: true
                },
                {
                    id: "country",
                    name: "country",
                    label: "País",
                    placeholder: "Ingresa tu país",
                    required: true,
                    type: "text",
                    flex: "flex-50",
                    required: true
                }
            ]
        }
    ],
    button: {
        text: "Registrarse",
        type: "submit"
    },
    footer: {
        text: "¿Ya tenés una cuenta?",
        link: "/login",
        link_text: "Iniciá sesión"
    }
}

export const initialFormState = {
    [REGISTER_FORM_CONSTANTS.sections[0].inputs[0].name]: "",
    [REGISTER_FORM_CONSTANTS.sections[0].inputs[1].name]: "",
    [REGISTER_FORM_CONSTANTS.sections[0].inputs[2].name]: "",
    [REGISTER_FORM_CONSTANTS.sections[0].inputs[3].name]: "",
    [REGISTER_FORM_CONSTANTS.sections[1].inputs[0].name]: "",
    [REGISTER_FORM_CONSTANTS.sections[1].inputs[1].name]: "",
    [REGISTER_FORM_CONSTANTS.sections[1].inputs[2].name]: "",
    [REGISTER_FORM_CONSTANTS.sections[2].inputs[0].name]: "",
    [REGISTER_FORM_CONSTANTS.sections[2].inputs[1].name]: "",
    [REGISTER_FORM_CONSTANTS.sections[2].inputs[2].name]: "",
    [REGISTER_FORM_CONSTANTS.sections[2].inputs[3].name]: "",
    [REGISTER_FORM_CONSTANTS.sections[2].inputs[4].name]: "",
    [REGISTER_FORM_CONSTANTS.sections[2].inputs[5].name]: "",
    [REGISTER_FORM_CONSTANTS.sections[2].inputs[6].name]: "",
    [REGISTER_FORM_CONSTANTS.sections[2].inputs[7].name]: ""
}