import { useState } from 'react'
import Button from "./Button"
import Modal from "./Modal"
import { server_calls } from '../api/server';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { useGetData } from '../custom-hooks/FetchData';


const columns: GridColDef[] = [
    { field: 'id', headerName: "ID", width: 90, hide: true },
    { field: 'name', headerName: "Name", flex: 1 },
    { field: 'style', headerName: "Style", flex: 1 },
    { field: 'abv', headerName: "ABV", flex: 1 },
    { field: 'brewery', headerName: "Brewery", flex: 1 },
]


function DataTable() {
    let [ open, setOpen ] = useState(false);
    const { contactData, getData } = useGetData();
    const [ selectionModel, setSelectionModel ] = useState<string[]>([])

    const handleOpen = () => {
        setOpen(true)
    }

    const handleClose = () => {
        setOpen(false)
    }

    const deleteData = () => {
        server_calls.delete(selectionModel[0])
        getData();
        console.log(`Selection model: ${selectionModel}`)
        setTimeout( () => {window.location.reload()}, 500 )
    }

    return (
        <>
            
            <Modal
                id={selectionModel}
                open={open}
                onClose={handleClose}
            />
            
            <div id='actionbuttons' className="flex flex-row ">
                <div>
                    <button id="newbeer"
                    className="p-3 bg-red-300 rounded m-3 hover:bg-red-700 hover:text-white"
                    onClick={() => handleOpen()}
                    >
                        Enter New Beer
                    </button>
                </div>
                    <Button onClick={handleOpen} className="p-3 bg-red-300 rounded m-3 hover:bg-red-700 hover:text-white">Update</Button>
                    <Button onClick={deleteData} className="p-3 bg-red-300 rounded m-3 hover:bg-red-700 hover:text-white">Delete</Button>
            </div>
           <div id="grid" className={ open ? "hidden" : "container rounded mx-10 my-5 flex flex-col"}
                
                >
                    <h2 className="p-3 bg-yellow-400 text-center font-bold my-2 rounded">My Beer</h2>
                    <DataGrid rows={contactData} columns={columns} rowsPerPageOptions={[5]}
                    checkboxSelection={true}
                    onSelectionModelChange={ (item:any) => {
                        setSelectionModel(item)
                    }}
                    />
                </div>
                
        </>
    )
}

export default DataTable