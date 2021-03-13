const CvInPdf = () => {

    const downloadPdf = () => {

        const link = document.createElement("a");
        
        link.setAttribute('download', "");
        link.href = "/CV_Juraj_Zovinec.pdf";
        document.body.appendChild(link);
        link.click();
        link.remove();
    };

    return (<div className="cv-in-pdf">
        <button className="cv-in-pdf__download-button" onClick={downloadPdf}>
            Download CV.pdf
        </button>
    </div>);
}

export default CvInPdf;