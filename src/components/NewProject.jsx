import {useRef} from 'react';
import Input from './Input.jsx';
import Modal from './Modal.jsx';
//-------------------------------------------------

export default function NewProject({onAdd, onCancel}) {
const modal = useRef();

const inputTitle = useRef();
const inputDescription = useRef();
const inputDueDate = useRef();

function handleSave() {
    const enteredTitle = inputTitle.current.value;
    const enteredDescription = inputDescription.current.value;
    const enteredDueDate = inputDueDate.current.value;

   
    // FORM VALIDATION
    
    if(enteredTitle.trim() === "" || enteredDescription === "" || enteredDueDate === ""){
        modal.current.open();
        return;
    }

    onAdd({
        title: enteredTitle,
        description: enteredDescription,
        dueDate: enteredDueDate,
    });
}

    //-------------------------------------------------
    return (
        <>
            <Modal ref={modal}>
                <h2 className='text-xl font-bold text-stone-800 my-4'>Invalid input</h2>
                <p className="text-stone-700 mb-4">Opps... Looks like you did not complete the required data.</p>
                <p className="text-stone-700 mb-4">Please make sure you provide all the valid data</p>
            </Modal>
            <div className="w-[35rem] mt-16">
                <menu className="flex items-center justify-end gap-4 my-4">
                    <li><button onClick={onCancel} className='text-stone-800 hover:text-stone-950'>Cancel</button></li>
                    <li><button onClick={handleSave} className="px-6 py-2 rounded-md bg-stone-800 text-stone-50 hover:bg-stone-950">Save</button></li>
                </menu>
                <div>
                    <Input ref={inputTitle} label="Title"></Input>
                    <Input ref={inputDescription} label="Description" isTextarea></Input>
                    <Input type="date" ref={inputDueDate} label="Due Date"></Input>
                </div>
            </div>
        </>
    )
}