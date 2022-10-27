import React from 'react';
import { PhoneIcon, MapPinIcon, EnvelopeIcon } from "@heroicons/react/24/solid";
import { useForm, SubmitHandler } from "react-hook-form";

type Props = {}

type Inputs = {
    name: string,
    email: string,
    subject: string,
    message: string,
}

function ContactMe({}: Props) {
  const { register, handleSubmit, } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (formData) =>
    window.location.href = `mailto:l.riveraa664@hotmail?subject=${formData.subject}&body=Hi, my name is ${formData.name}. ${formData.message}
    (${formData.email})`; 

  return (
    <div className="h-screen flex relative flex-col text-center md:text-left md:flex-row
    max-w7xl px-10 justify-evenly mx-auto items-center">
        <h3 className="absolute top-24 uppercase tracking-[20px] text-[#7FFFD4] text-2xl">
            Contacto
        </h3>

         <div className="flex flex-col space-y-10">
            <h4 className="text-4xl font-semibold text-center">
                ¿Necesitas de mis servicios informáticos?{ " " }
                <span className="decoration-[#7FFFD4]/50 underline">Contactame.</span>
            </h4>
          <div className="space-y-10">
            <div className="flex items-center space-x-5 justify-center">
                <PhoneIcon className="text-[#7FFFD4] h-7 w-7 animate-pulse" />
                <p className="text-2xl">+56940898950</p>
            </div>

            <div className="flex items-center space-x-5 justify-center">
                <EnvelopeIcon className="text-[#7FFFD4] h-7 w-7 animate-pulse" />
                <p className="text-2xl">l.riveraa664@hotmail.com</p>
            </div>

            <div className="flex items-center space-x-5 justify-center">
                <MapPinIcon className="text-[#7FFFD4] h-7 w-7 animate-pulse" />
                <p className="text-2xl">Chile</p>
            </div>
          </div>

         <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col space-y-2 w-fit mx-auto"
          >
            <div className="flex space-x-2">
                <input {...register('name')} placeholder="Nombre" className="contactInput" type="text" />
                <input {...register('email')} placeholder="Email" className="contactInput" type="email" />
            </div>

            <input {...register('subject')} placeholder="Asunto" className="contactInput" type="text" />

            <textarea {...register('message')} placeholder="Mensaje" className="contactInput" />
            <br>
            </br>
            <button className="bg-[#7FFFD4] py-5 px-10 rounded-md text-black font-bold
            text-lg hover:animate-bounce">
                Enviar
            </button>
         </form>
         </div>
        </div>
  )
}

export default ContactMe