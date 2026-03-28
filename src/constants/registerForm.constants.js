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
                    id: "lastname",
                    name: "lastname",
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
                    id: "birthdate",
                    name: "birthdate",
                    label: "Fecha de nacimiento",
                    placeholder: "Ingresa tu fecha de nacimiento",
                    required: true,
                    type: "text",
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
                    id: "confirm-password",
                    name: "confirm-password",
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
                    id: "apartment",
                    name: "apartment",
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
                    id: "zip",
                    name: "zip",
                    label: "Código postal",
                    placeholder: "Ingresa tu código postal",
                    required: true,
                    type: "text",
                    flex: "flex-50",
                    required: true
                },
                {
                    id: "state",
                    name: "state",
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
    ]
}