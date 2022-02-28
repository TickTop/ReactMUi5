import { BottomNavigation, Container, Paper, Typography } from "@mui/material";
import { Box } from "@mui/system";
import CustomizedAccordions from "../components/Acocordion";
import ImageCollage from "../components/ImageCollage";
import BasicModal from "../components/Modal";

const Tour = () =>(
    <Container sx={{width: 900}}>
        <Typography variant="h3" component="h1" marginTop={3}>
            Explore the World in Vegas
        </Typography>
        <Box marginTop={3} sx={{display:"flex"}}>
           <img 
             src="https://images.unsplash.com/photo-1583207884889-d79abf0d0aa3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1184&q=80"
             alt="no"
             height={325}
           />
           <ImageCollage />
        </Box>
        <Box>
        <Typography variant="h6" component="h4" marginTop={3}>
                About this ticket
        </Typography>
        <Typography variant="paragraph" component="p" marginTop={3}>
        The office issued an abrupt statement today, the final day of public consultation on the proposal, urging the federal government to change course. 
        It wants Ottawa to focus instead on a multilateral plan for a global tax regime for so-called multinational enterprises — tech giants like Meta, 
        Facebook's parent company, and Alphabet Inc., which owns Google. 
        </Typography>
        </Box>
        <Box marginBottom={20}>
        <Typography variant="h6" component="h4" marginTop={3} marginBottom={3}>
                Frequently Asked Questions
        </Typography>
        <CustomizedAccordions />
        </Box>
        <Paper sx={{position:"fixed", bottom:0, left:0, right:0}}>
        <BottomNavigation>
           <BasicModal />
        </BottomNavigation>
        </Paper>
    </Container>



);



export default Tour;