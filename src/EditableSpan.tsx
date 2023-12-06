import React, {ChangeEvent, useState} from "react";

type EditablePropsType = {
    title: string
    onChange: (newTitle: string) => void
}

function EditableSpan(props: EditablePropsType) {

    const [editMode, setEditMode] = useState(false)
    const [title, setTitle] = useState("")

    function activateEditMode () {
        setEditMode(true)
        setTitle(props.title)
    }
    function activateViewMode () {
        setEditMode(false)
        props.onChange(title)
    }
    function onChangeHandler (e: ChangeEvent<HTMLInputElement>) {
        setTitle(e.currentTarget.value)
    }

    return editMode
        ? <input value={title} autoFocus onBlur={activateViewMode} onChange={onChangeHandler}/>
        : <span onDoubleClick={activateEditMode}>{props.title}</span>
}

export default EditableSpan