import React, {ChangeEvent, KeyboardEvent, useState} from "react";
import {Button, IconButton, TextField} from "@mui/material";
import {AddBox} from "@mui/icons-material";

type AddItemFormPropsType = {
    addItem: (title: string) => void
}

function AddItemForm(props: AddItemFormPropsType) {
    let [title, setTitle] = useState('')
    let [error, setError] = useState<string | null>(null)

    function addItem() {
        if (title.trim() !== '') {
            props.addItem(title);
            setTitle('')
        } else {
            setError("Title is required")
        }
    }

    function onChangeHandler(e: ChangeEvent<HTMLInputElement>) {
        setTitle(e.currentTarget.value)
    }

    function onKeyPressHandler(e: KeyboardEvent<HTMLInputElement>) {
        setError(null)
        if (e.key === 'Enter') {
            addItem()
        }
    }

    return (
        <div>
            <TextField value={title}
                       onKeyPress={onKeyPressHandler}
                       error={!!error}
                       onChange={onChangeHandler}
                       label={"Title"}
                       helperText={error}
                       className={error ? 'error' : ''}
                       variant={"outlined"}/>
            <IconButton color={"primary"}  onClick={addItem}>
                <AddBox/></IconButton>
        </div>
    )
}

export default AddItemForm