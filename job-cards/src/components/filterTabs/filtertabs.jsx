import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';


// const ITEM_HEIGHT = 48;
// const ITEM_PADDING_TOP = 8;
// const MenuProps = {
//   PaperProps: {
//     style: {
//       maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
//       width: 250,
//     },
//   },
// };


// const Roles= [
//   'Backend',
//   'Frontend',
//   'FullStack',
//   'IOS',
//   'Flutter',
//   'React Native',
// ]
// const numberOfEmployees = ['1-10', '51-100', '201-500', '500+'];

// function getStyles(Role, personName, theme) {
//   return {
//     fontWeight:
//       personName.indexOf(Role) === -1
//         ? theme.typography.fontWeightRegular
//         : theme.typography.fontWeightMedium,
//   };
// }

export default function FilterTabs() {
//   const theme = useTheme();
//   const [personName, setPersonName] = React.useState([]);

//   const handleChange = (event) => {
//     const {
//       target: { value },
//     } = event;
//     setPersonName(
//       typeof value === 'string' ? value.split(',') : value,
//     );
//   };

  return (
    <div>
      {/* <FormControl sx={{ m: 1, width: 200 }}>
        <InputLabel id="demo-multiple-name-label">Roles</InputLabel>
        <Select
          labelId="demo-multiple-name-label"
          id="demo-multiple-name"
          multiple
          value={personName}
          onChange={handleChange}
          input={<OutlinedInput label="Name" />}
          MenuProps={MenuProps}
        >
          {Roles.map((role) => (
                <MenuItem key={role} value={role}>
                  {role}
                </MenuItem>
              ))}
        </Select>
      </FormControl> */}
    </div>
  );
}