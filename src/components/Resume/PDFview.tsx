import { useState } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
import pdfFile from '../../Assets/Tamzid_zihan.pdf'; // Import your PDF file
import { Container } from 'react-bootstrap';

// Set the workerSrc to properly load the PDF worker
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

const PdfViewer: React.FC = () => {
    const [numPages, setNumPages] = useState<number | null>(null);
    const [pageNumber, setPageNumber] = useState<number>(1);

    const onDocumentLoadSuccess = ({ numPages }: { numPages: number }) => {
        setNumPages(numPages);
    };

    return (
        <div >
            <Container fluid className="resume-section min-vh-100">
                <Document file={pdfFile} onLoadSuccess={onDocumentLoadSuccess}>
                    <Page pageNumber={pageNumber} />
                </Document>
                <div>
                    <p>
                        Page {pageNumber} of {numPages}
                    </p>
                    <button disabled={pageNumber <= 1} onClick={() => setPageNumber(pageNumber - 1)}>
                        Previous
                    </button>
                    <button disabled={pageNumber >= (numPages || 1)} onClick={() => setPageNumber(pageNumber + 1)}>
                        Next
                    </button>
                </div>
            </Container>
        </div>

    );
};

export default PdfViewer;
