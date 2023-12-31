import * as React from 'react';
import { styled } from '@mui/material/styles';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';

const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
    backgroundColor: 'rgba(79, 79, 79)',
    border: `1px solid rgba(0, 0, 0)`,
    '&:not(:last-child)': {
        borderBottom: 0,
    },
    '&:before': {
        display: 'none',
    },
}));

const AccordionSummary = styled((props) => (
  <MuiAccordionSummary
    expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: '20px', color:"White"}} />}
    {...props}
  />
))(({ theme }) => ({
    color: 'rgba(255, 255, 255)',
    backgroundColor:
        theme.palette.mode === 'dark'
        ? 'rgba(79, 79, 79)': 'rgba(79, 79, 79)',
    flexDirection: 'row-reverse',
    '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
        transform: 'rotate(90deg)',
    },
    '& .MuiAccordionSummary-content': {
        marginLeft: theme.spacing(1),
    },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
    color: 'rgba(255, 255, 255)',
    padding: theme.spacing(3),
    borderTop: '1px solid rgba(0, 0, 0)',
}));

export default function CustomizedAccordions() {
  const [expanded, setExpanded] = React.useState('panel1');

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <div style={{fontSize:"2rem"}}>
      <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
        <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
          <Typography sx={{fontSize:"1rem", fontFamily:"Montserrat", fontWeight:"600",color:"var(--textColor2)"}}>What is Animotion?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography sx={{fontSize:"15px", fontFamily:"Montserrat", fontWeight:"400"}}>
            Animotion is a streaming service that offers a wide variety of anime, movies 
            and more – on thousands of internet-connected devices.
            <br/><br/>
            You can watch as much as you want, whenever you want, without a single ad 
            – all for one low monthly price. There's always something new to discover, 
            and new TV shows and movies are added every week!
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
        <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
          <Typography sx={{fontSize:"1rem", fontFamily:"Montserrat", fontWeight:"600", color:"var(--textColor2)"}}>How much does Animotion cost?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography sx={{fontSize:"15px", fontFamily:"Montserrat", fontWeight:"400"}}>
            Watch Animotion on your smartphone, tablet, laptop, or streaming device,
            all for one fixed monthly fee. Plans range from ₹79 to ₹99 a month. No extra
            costs, no contracts.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
        <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
          <Typography sx={{fontSize:"1rem", fontFamily:"Montserrat", fontWeight:"600",color:"var(--textColor2)"}}>What can I watch on Animotion?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography sx={{fontSize:"15px", fontFamily:"Montserrat", fontWeight:"400"}}>
            Animotion has an extensive library of documentaries, TV shows, anime,
            and more. Watch as much as you want, anytime you want.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
        <AccordionSummary aria-controls="panel4d-content" id="panel4d-header">
          <Typography sx={{fontSize:"1rem", fontFamily:"Montserrat", fontWeight:"600",color:"var(--textColor2)"}}>Where can I watch?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography sx={{fontSize:"15px", fontFamily:"Montserrat", fontWeight:"400"}}>
            Watch anywhere, anytime. Sign in with your Animotion account to watch instantly on the 
            web at animotion-two.vercel.app from your personal computer, 
            including smart TVs, smartphones, tablets, streaming media players.
            <br/><br/>
            You can also download your favourite shows.
            Use downloads to watch while you're on the go and without an internet connection.
            Take Animotion with you anywhere.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}