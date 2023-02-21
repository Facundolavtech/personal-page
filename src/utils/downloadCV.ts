import fileSaver from "file-saver";

export default function downloadCV() {
  fileSaver.saveAs(
    process.env.NEXT_PUBLIC_CLIENT_URL + "/assets/cv2023.pdf",
    "CV-2023-ENG.pdf"
  );
}
