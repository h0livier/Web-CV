import { Box, Button, Link } from "@chakra-ui/react";
//import { PDFDownloadLink } from "@react-pdf/renderer";
//import CvPdf from "./cv-pdf";
import CV from "../../../public/olivier_hayot_cv_septembre_2024.pdf" 

export default function CvShower(){
    return(
        <Box>
            <Button>
                <Link href={CV} target="_blank" download>Download my CV now!</Link>
                {/*
                <PDFDownloadLink document={<CvPdf />} fileName="olivier_hayot_cv.pdf">
                    {({loading}) => (loading ? 'Loading document...' : 'Download my CV now!')}
                </PDFDownloadLink>*/}
            </Button>
        </Box>
    );
}