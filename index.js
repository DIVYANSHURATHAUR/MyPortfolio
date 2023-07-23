document.getElementById("downloadBtn").addEventListener("click", function() {
       downloadPDF();
 });

        // Function to trigger PDF download
        function downloadPDF() {
            // Replace "path/to/your/file.pdf" with the actual path to your PDF file
            const pdfUrl = "imgs\RESUME.pdf";
            const fileName = "RESUME.pdf";

            const link = document.createElement("a");
            link.href = pdfUrl;
            link.download = fileName;
            link.target = "_blank"; 

            document.body.appendChild(link);
            link.click();

            document.body.removeChild(link);
        }
