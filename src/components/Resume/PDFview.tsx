import { useState } from 'react';
import { Document, Page } from 'react-pdf';
import pdf from "../../Assets/Tamzid_zihan.pdf";
import { Container } from 'react-bootstrap';
import { pdfjs } from 'react-pdf';

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
    'pdfjs-dist/build/pdf.worker.min.mjs',
    import.meta.url,
).toString();

function pdfViewer() {
    const [numPages, setNumPages] = useState<number>();
    const [pageNumber, setPageNumber] = useState<number>(1);

    function onDocumentLoadSuccess({ numPages }: { numPages: number }): void {
        setNumPages(numPages);
    }

    return (
        <div>
            <Container fluid className="resume-section min-vh-100">
                <Document file={pdf} onLoadSuccess={onDocumentLoadSuccess}>
                    <Page pageNumber={pageNumber} />
                </Document>
                <p>
                    Page {pageNumber} of {numPages}
                </p>
            </Container>

        </div>
    );
}


export default pdfViewer;