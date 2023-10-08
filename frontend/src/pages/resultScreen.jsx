import React, { useState, useEffect } from 'react';
import ResultCard from '../components/resultCard';
import fileDownload from 'js-file-download';

const ResultScreen = () => {

    const [resultFile, setResultFile] = useState(null);

    useEffect(() => {
        // Load the file data when the component mounts
        fetch('./ANNOTATED.pdf')
            .then(response => response.blob())
            .then(blob => {
                setResultFile(URL.createObjectURL(blob));
            });
    }, []);

    const handleDownloadClick = () => {
        // Specify the file name and MIME type for your PDF file
        const fileURL = process.env.PUBLIC_URL + './ANNOTATED.pdf';
        const mimeType = 'application/pdf';
        const a = document.createElement('a');
        a.href = fileURL;
        a.download = 'ANNOTATED.pdf'; // You can set the desired filename here
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);

        // Trigger the file download
        //fileDownload(null, fileName, mimeType);
    };

    return (
        <div>
            <div id='#body' className='text-center items-center'>
                <div className='font-bold text-4xl' style={{
                    marginTop: '40px'
                }}>
                    Documents have been annotated
                </div>
                <div style={{
                    marginTop: '40px'
                }}>
                    <ResultCard resultFile={resultFile} setResultFile={setResultFile} />
                </div>
                <div className='align-center justify-center'>
                    <button
                        className='text-white text-lg'
                        style={{
                            backgroundColor: '#404ED1',
                            width: '280px',
                            height: '60px',
                            top: '465px',
                            left: '580px',
                            borderRadius: '8px'
                        }}
                        onClick={() => handleDownloadClick()}
                    >
                        Download annotated document
                    </button>
                </div>
            </div>
        </div>
    )
}

export default ResultScreen