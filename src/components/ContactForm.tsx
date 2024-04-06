import Button from "./Button"
import Input from "./Input"

import { useForm } from 'react-hook-form' 
import { server_calls } from "../api/server"
import { useDispatch, useStore } from "react-redux"
import { chooseName, chooseStyle, chooseABV, chooseBrewery } from "../redux/slices/RootSlice" 

interface ContactFormProps { 
    id?: string[];
    onClose: () => void;
}

const ContactForm = ( props:ContactFormProps ) => {
    const { register, handleSubmit } = useForm({})
    const dispatch = useDispatch();
    const store = useStore();

    const onSubmit = (data: any, event: any) => {
        console.log(`ID: ${props.id}`);
        console.log(props.id)
        console.log(data)
        if (props.id && props.id.length > 0) {
            server_calls.update(props.id[0], data)
            console.log(`Updated: ${data.first} ${props.id}`)
            setTimeout(() => {window.location.reload()}, 1000)
            event.target.reset()
        } else {
            dispatch(chooseName(data.name));
            dispatch(chooseStyle(data.style));
            dispatch(chooseABV(data.abv));
            dispatch(chooseBrewery(data.brewery));

            server_calls.create(store.getState())
            setTimeout(() => {window.location.reload()}, 1000)
            event.target.reset()

            props.onClose()
        }
    }

    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <label htmlFor="name">Name</label>
                    <Input {...register('name')} name='name' placeholder="Name"/>
                </div>
                <div>
                    <label htmlFor="style">Style</label>
                    <Input {...register('style')} name='style' placeholder="Style"/>
                </div>
                <div>
                    <label htmlFor="abv">ABV</label>
                    <Input {...register('abv')} name='abv' placeholder="ABV"/>
                </div>
                <div>
                    <label htmlFor="brewery">Brewery</label>
                    <Input {...register('brewery')} name='brewery' placeholder="Brewery"/>
                </div>
                <div className="flex p-1">
                    <Button className="flex justify-start m-3 bg-slate-300 p-2 rounded hover:bg-slate-800 text-white"
                    >
                        Submit
                    </Button>
                </div>
            </form>
        </div>
    )
}

export default ContactForm