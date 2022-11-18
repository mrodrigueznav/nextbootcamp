import { Controller } from 'react-hook-form'
import TextField from '@mui/material/TextField'

export default function TextForm(props) {

    return (
        <Controller
            name={props.name}
            control={props.control}
            defaultValue=""
            rules={props.rules}
            render={({ field: { onChange, value } }) => (
                <TextField onChange={onChange} value={value} label={props.label} />
            )}
        />
    )
}