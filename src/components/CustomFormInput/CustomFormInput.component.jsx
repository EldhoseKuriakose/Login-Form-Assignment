import React from 'react';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
import './CustomFormInput.styles.scss';

const CustomFormInput = ({label, valid, ...otherProps}) => (
    <div className="form-input-container">
        <FormControl error={!valid} required fullWidth>
            <InputLabel htmlFor="my-input">{label}</InputLabel>
            <Input id="my-input" aria-describedby="my-helper-text" {...otherProps} />
        </FormControl>
    </div>
);

export default CustomFormInput;