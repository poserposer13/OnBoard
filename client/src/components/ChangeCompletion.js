import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { indigo } from '@material-ui/core/colors';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

const IndigoCheckbox = withStyles({
    root: {
        color: indigo[400],
        '&$checked': {
            color: indigo[500],
        },
    },
    checked: {},
})((props) => <Checkbox color="primary" {...props} />);

export default function CheckboxLabels(props) {

    const { isChecked, onChange, id } = props;

    return (
        <FormControlLabel
            control={<IndigoCheckbox checked={isChecked} onChange={() => { onChange(id, isChecked); }} name="checkedG" />}
            label="Task Complete"
        />
    );
}
