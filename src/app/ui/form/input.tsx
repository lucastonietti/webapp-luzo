import { ComponentProps } from 'react';

interface InputProps extends ComponentProps<'input'> {
    cs?: string,
}

export default function Input(props: InputProps) {

   return ( 
       <input {...props} className={`${props.cs} p-2 rounded border border-slate-100 sorber-solid`}/>
   );
}