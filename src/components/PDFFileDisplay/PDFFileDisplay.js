import React, { useState } from "react";
import { Document, Page } from "react-pdf";
import { Box, Pagination } from "@mui/material";
import PerfectScrollbar from "react-perfect-scrollbar";

const PDFFileDisplay = ({ pdf, className }) => {
  const [numPages, setNumPages] = useState(1);
  const [pageNumber, setPageNumber] = useState(1);

  function onDocumentLoadSuccess(pageInfo) {
    setNumPages(pageInfo.numPages);
  }

  const handleChange = (event, value) => {
    setPageNumber(value);
  };

  return (
    <>
      <PerfectScrollbar
        style={{
          height: "100%",
          maxHeight: "calc(100vh - 155px)",
          overflowX: "hidden",
        }}
      >
        <Document
          file={pdf}
          options={{ workerSrc: "/pdf.worker.js" }}
          onLoadSuccess={onDocumentLoadSuccess}
        >
          <Page pageNumber={pageNumber} />
        </Document>
      </PerfectScrollbar>
      <Box className={className}>
        <p>
          Page {pageNumber} of {numPages}
        </p>
        <Pagination
          count={numPages}
          variant="outlined"
          color="primary"
          onChange={handleChange}
        />
      </Box>
    </>
  );
};

export default PDFFileDisplay;
