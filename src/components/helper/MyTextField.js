import React from 'react'

import TextField from '@material-ui/core/TextField';


export default function MyTextField(props) {
    const {
        label,
        type = "text",
        value,
        disabled,
        multiline = false,
        onChange,
        styles,
        required = false,
        helperText = "",
        error = false,
        reference,
        placeholder,
        _startAdornment,
        _endAdornment,
        onClick,
        _editable,
        size
    } = props
    return (
        <>
            <TextField
                variant="outlined"
                ref={reference}
                placeholder={placeholder || ""}
                id={`standard-${label}`}
                required={required}
                label={label}
                type={type}
                value={value}
                disabled={disabled}
                multiline={multiline}

                onChange={(e) => {
                    if (onChange) {
                        onChange(e)
                    }

                }}
                onBlur={(e) => {
                    e.preventDefault()
                }}
                onClick={() => {
                    if (onClick) {
                        onClick()
                    }
                }}
                style={{
                    ...styles,
                    marginBottom: 20,
                }}
                fullWidth
                margin="normal"

                helperText={helperText}
                error={error}

                InputLabelProps={{
                    shrink: true,
                    style: {
                        marginTop: 1,
                        fontSize: 15.5,

                    }
                }}
                InputProps={{

                    style: {
                        fontSize: 15.5,
                        fontWeight: 500,
                        // marginBottom: 20,
                        height: 56,
                    },
                    startAdornment: _startAdornment,
                    endAdornment: _endAdornment
                }}
            />

        </>
    )
}
