import * as React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import TableContainer from '@mui/material/TableContainer';
import Table from '@mui/material/Table';
import TableHead from '@mui/material/TableHead';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

//Style File

import { LabelStyle} from './Labelstyle';

export default function Label(){
       const [open, setOpen] = React.useState(false);
       const handleClickOpen = () => {
    setOpen(true);
  };
       const handleClose = () => {
    setOpen(false);
  };

    return(
    
    
//Main Grid   

          <Grid>
                            {/*Product Label Grid */}

        <Grid sx={LabelStyle.grid}>
              <Typography variant="h6" sx={LabelStyle.typo}>Add Products To Generate Labels</Typography>
              <TextField sx={LabelStyle.input}size="small" required placeholder="Enter Product Name To Print Label..."></TextField>
             
            <TableContainer>
                 <Table sx={LabelStyle.table}>
                      <TableHead >
                           <TableRow>
                                <TableCell sx={LabelStyle.head} align="center">PRODUCTS</TableCell>
                                <TableCell sx={LabelStyle.head} align="center">NO.OF LABELS</TableCell>
                                <TableCell sx={LabelStyle.head} align="center">PURCHASE DATE</TableCell>
                            </TableRow>
                      </TableHead>

                       <TableBody>
                            <TableRow>
                                 <TableCell align="center">xxx</TableCell>
                                 <TableCell align="center">xxx</TableCell>
                                 <TableCell align="center">xxx</TableCell>
                       </TableRow>
                       <TableRow>  
                                <TableCell align="center">xxx</TableCell>
                                <TableCell align="center">xxx</TableCell>
                                <TableCell align="center">xxx</TableCell>
                       </TableRow> 
                     </TableBody>

                </Table>
             </TableContainer>
       </Grid>
                       {/*Information Label Grid*/}

<Grid sx={LabelStyle.grid}>
             <Typography variant="h6" sx={LabelStyle.typo} >Information Show In Labels</Typography>
                       {/*CheckBox*/}
        
      <Grid sx={LabelStyle.checkbox}>
            <FormControlLabel control={<Checkbox/>} label="Product Name" />
            <FormControlLabel control={<Checkbox/>} label="Product Varuation" />
            <FormControlLabel control={<Checkbox/>} label="Product Price" />
      </Grid>

      <Grid sx={LabelStyle.checkbox} >
            <FormControlLabel sx={LabelStyle.checkbox1} control={<Checkbox/>} label="Business Name" />
            <FormControlLabel sx={LabelStyle.checkbox2} control={<Checkbox/>} label="Print Rate" />
                          {/*Tax Dropdown*/}
            <Typography sx={LabelStyle.Para} variant="body1">Show Tax:
                      <Select sx={LabelStyle.select}>
                         <MenuItem value=""><em>None</em></MenuItem>
                         <MenuItem value={10}>Ten</MenuItem>
                         <MenuItem value={20}>Twenty</MenuItem>
                         <MenuItem value={30}>Thirty</MenuItem>
                       </Select>
            </Typography>
        </Grid>
                         {/*Barcode Selling Dropdown*/}

       <Grid sx={LabelStyle.checkbox}>
          <Typography  variant="body1">Barcode Selling:
              <Select sx={LabelStyle.select}>
                    <MenuItem value=""><em>None</em></MenuItem>
                    <MenuItem value={10}>Ten</MenuItem>
                    <MenuItem value={20}>Twenty</MenuItem>
                    <MenuItem value={30}>Thirty</MenuItem>
              </Select>
         </Typography>
                        {/*Dialog Box*/}

    <div className="dialog">
    <Button sx={LabelStyle.button} onClick={handleClickOpen}>Preview</Button>
         <Dialog
             open={open}
             onClose={handleClose}
             aria-labelledby="alert-dialog-title"
             aria-describedby="alert-dialog-description">
         <DialogTitle id="alert-dialog-title">{"Preview"}</DialogTitle>
         <DialogContent>
         <DialogContentText id="alert-dialog-description">
            Add Products - Choose Information To Showin Labels - Select Barcode Selling - Preview Labels - Print.
         </DialogContentText>
         </DialogContent>
         <DialogActions>
                <Button   onClick={handleClose}>Ok</Button>
                <Button  onClick={handleClose} autoFocus> Close</Button>
         </DialogActions>
        </Dialog>
    </div>
   </Grid>

</Grid>

    </Grid>
           )
};