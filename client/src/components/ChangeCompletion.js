import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { purple } from '@material-ui/core/colors';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

const PurpleCheckbox = withStyles({
    root: {
        color: purple[400],
        '&$checked': {
            color: purple[600],
        },
    },
    checked: {},
})((props) => <Checkbox color="default" {...props} />);

export default function CheckboxLabels(props) {

    const {isChecked, onChange, id} = props;


    return (
        <FormControlLabel
            control={<PurpleCheckbox checked={isChecked} onChange={() => {onChange(id, isChecked);}} name="checkedG" />}
            label="Task Complete"
        />
    );
}
