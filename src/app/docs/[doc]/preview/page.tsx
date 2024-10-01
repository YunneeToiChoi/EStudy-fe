"use client"
import { Worker,Viewer} from '@react-pdf-viewer/core';

export default function viewPdf(){
    return(
        <Worker workerUrl="https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.4.120/pdf.worker.min.js">
        <Viewer fileUrl="https://firebasestorage.googleapis.com/v0/b/estudy-426108.appspot.com/o/UserDocuments%2F8b53f27b-6bb2-494e-937d-f19d861e9c5e%2Fb4_C%C3%A1c%20ch%E1%BB%A9c%20n%C4%83ng%20c%E1%BB%A7a%20App%20qu%E1%BA%A3n%20l%C3%BD%20doan%20nghi%E1%BB%87p.pdf?alt=media" />
        </Worker>
    )
}
