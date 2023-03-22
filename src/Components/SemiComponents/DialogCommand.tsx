import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import { FormControl, FormControlLabel, FormLabel,Box, Grid, Radio, RadioGroup, Typography, CircularProgress } from '@mui/material';
import AddField from './AddField';


type Props = {
  open: boolean,
  children : React.ReactElement
};
 const DialogCommand : React.FC<Props> = ({open, children}) => {

  const [value, setValue] = React.useState() 
  const [loader, setLoader] = React.useState(false) 
  const [personne, setPersonne] = React.useState(false)
  const [groupe, setGroupe] = React.useState(false)
  const [number, setNumber] = React.useState(2)
  const HandleClose = () => {
    console.log('ici');
  };

  const handleChange = (event : React.ChangeEvent<HTMLInputElement>) => {
    setLoader(true);
     var value = event.target.value;
    if(value === "personne"){
        setLoader(false);
        setPersonne(true)
        setGroupe(false)

    } else  {
      setPersonne(false)
      setLoader(false);
      setGroupe(true)
    }
    
  }

  const addFieldGroup = () => {
    setNumber(number + 1)
  }
  


  const descriptionElementRef = React.useRef<HTMLElement>(null);

  
  React.useEffect(() => {
    if (open) {
      const { current: descriptionElement } = descriptionElementRef;
      if (descriptionElement !== null) {
        descriptionElement.focus();
      }
    }
  }, [open]);

  return (
    <div>
      <Dialog
        open={open}
        onClose={HandleClose}
        aria-labelledby="scroll-dialog-title"
        aria-describedby="scroll-dialog-description"
      >
        <DialogTitle id="scroll-dialog-title">Valider la commande</DialogTitle>
        <DialogContent >
        
        <Box>
            <FormControl>
                <FormLabel id="demo-row-radio-buttons-group-label">Type de Commande</FormLabel>
                <RadioGroup
                    row
                    aria-labelledby="demo-row-radio-buttons-group-label"
                    name="row-radio-buttons-group"
                >
                    <FormControlLabel value="emporter" sx={{ marginRight : "300px" }} control={<Radio />} label="A emporter" />
                        
                    <FormControlLabel value="sur place" control={<Radio />} label="Deguster sur place" />
                </RadioGroup>
            </FormControl>
        </Box>
        <Box>
            <FormControl>
                <FormLabel id="demo-row-radio-buttons-group-label">Moyen de payement</FormLabel>
                <RadioGroup
                    row
                    value={value}
                    onChange={handleChange}
                    aria-labelledby="demo-row-radio-buttons-group-label"
                    name="row-radio-buttons-group"
                >
                    <FormControlLabel value="personne" sx={{ marginRight : "300px" }} control={<Radio />} label="une Personne" />
                        
                    <FormControlLabel value="groupe" control={<Radio />} label="en Groupe" />
                </RadioGroup>
            </FormControl>
        </Box>
        <Box>
          {loader && <CircularProgress  sx={{ textAlign : "center" }} />}
          {personne && [...new Array(1)]
              .map(
                () =>  <AddField />,
              )}
          {groupe && [...new Array(number)]
              .map(
                () =>  <AddField />,
              )}
          {groupe && <Button onClick={addFieldGroup} variant="outlined">Ajouter</Button>}
        </Box>
        </DialogContent>
        {children}
      </Dialog>
    </div>
  );
}

export default DialogCommand
