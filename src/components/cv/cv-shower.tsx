import { Box, Button } from "@chakra-ui/react";
import { PDFDownloadLink } from "@react-pdf/renderer";
import CvPdf from "./cv-pdf";

export default function CvShower(){
    return(
        <Box>
            <Button>
                <PDFDownloadLink document={<CvPdf />} fileName="olivier_hayot_cv.pdf">
                    {({loading}) => (loading ? 'Loading document...' : 'Download my CV now!')}
                </PDFDownloadLink>
            </Button>
        </Box>
    );
}