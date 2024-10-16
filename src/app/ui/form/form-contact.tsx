'use client'

import { useForm } from "react-hook-form";
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';

const formContactSchema = z.object({
    name: z.string().min(2),
    phone: z.coerce.number().min(10),
    email: z.string().email()
})

type FormContactSchme = z.infer<typeof formContactSchema>

export default function FormContact() {

    const { register, handleSubmit, reset } = useForm<FormContactSchme>({ 
        resolver: zodResolver(formContactSchema)
    });

    async function handleFormContact(dataForm: FormContactSchme) {

        await fetch('/api/send', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(dataForm)
        })
        .then(res => res.json())
        .then(result => {
            alert(result.message)
            reset();
        })
    }

   return ( 
    <form onSubmit={handleSubmit(handleFormContact)}>
        <div className="grid grid-cols-2 gap-4 md:p-4 p-2">
            <input {...register('name', { required: true })} type="text" placeholder="Nome" className="p-2 rounded border border-slate-100 sorber-solid"/>
            <input {...register('phone', { required: true })} type="tel" placeholder="Número" className="p-2 rounded border border-slate-100 sorber-solid"/>
            <input {...register('email', { required: true })} type="email" placeholder="E-mail" className="col-span-2 p-2 rounded border border-slate-100 sorber-solid" />
            <button type="submit" className="col-span-2 bg-[#FFDF0A] text-l1 hover:text-white rounded-md px-4 py-1 font-bold hover:bg-blue-900" >
            Obter Consulta
            </button>
        </div>
    </form>
   );
}