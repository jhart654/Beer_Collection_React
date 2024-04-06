
import ContactForm from './ContactForm'

type Props = {
    id?: string[],
    open: boolean;
    onClose: () => void;
}

const Modal = ( props: Props ) => {
    if ( !props.open ) return (<></>)
    return (
        <div
            
            onClick={ props.onClose }
            className=" fixed inset-0 flex items-center justify-center bg-gray-300 bg-opacity-25"
            >
                <div id="modal" className="max-w-600px w-2/5 fixed flex mt-20 bg-white shadow-xl rounded"
                onClick={(e) => {
                    e.stopPropagation()
                }}
                >
                <div className="w-full flex flex-col">
                    <div className="flex flex-row space-apart">
                        <p className="flex justify-start m-3 bg-slate-300 p-2 rounded hover:bg-slate-800 text-white"
                        onClick={props.onClose}>
                            X
                        </p>
                    </div>
                    <div id='contactform' className="flex flex-col items-center z-1 text-center mt-3 p-2">
                        <ContactForm id={props.id } onClose={props.onClose} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Modal