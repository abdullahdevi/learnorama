import { jsPDF } from 'jspdf';

const generateCertificate = ({ studentName, courseTitle, completedAt, certificateId }) => {
  // Fallback guards
  const name = studentName || 'Student';
  const title = courseTitle || 'Course';
  const dateStr = completedAt
    ? new Date(completedAt).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })
    : new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
  const certId = certificateId || 'LRNO-00000000';

  const doc = new jsPDF({ orientation: 'landscape', unit: 'px', format: [794, 562] });

  const W = 794;
  const H = 562;

  // Background
  doc.setFillColor(6, 10, 8);
  doc.rect(0, 0, W, H, 'F');

  // Outer border
  doc.setDrawColor(93, 202, 165);
  doc.setLineWidth(2);
  doc.rect(24, 24, W - 48, H - 48, 'S');

  // Inner border
  doc.setDrawColor(40, 80, 65);
  doc.setLineWidth(0.5);
  doc.rect(32, 32, W - 64, H - 64, 'S');

  // Top accent line
  doc.setDrawColor(93, 202, 165);
  doc.setLineWidth(1);
  doc.line(80, 90, W - 80, 90);

  // "learn" (grey)
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(13);
  doc.setTextColor(150, 150, 150);
  doc.text('learn', W / 2 - 14, 72, { align: 'right' });

  // "orama" (green)
  doc.setFont('helvetica', 'bold');
  doc.setTextColor(93, 202, 165);
  doc.text('orama.', W / 2 + 20, 72, { align: 'right' });

  // Certificate of Completion label
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(11);
  doc.setTextColor(150, 150, 150);
  doc.text('CERTIFICATE OF COMPLETION', W / 2, 130, { align: 'center' });

  // Dots
  doc.setFillColor(93, 202, 165);
  doc.circle(W / 2 - 20, 148, 1.5, 'F');
  doc.circle(W / 2, 148, 1.5, 'F');
  doc.circle(W / 2 + 20, 148, 1.5, 'F');

  // "This certifies that"
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(12);
  doc.setTextColor(160, 160, 160);
  doc.text('This certifies that', W / 2, 185, { align: 'center' });

  // Student name
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(36);
  doc.setTextColor(255, 255, 255);
  doc.text(name, W / 2, 233, { align: 'center' });

  // Underline under name
  const nameWidth = doc.getTextWidth(name);
  doc.setDrawColor(93, 202, 165);
  doc.setLineWidth(0.8);
  doc.line(W / 2 - nameWidth / 2, 240, W / 2 + nameWidth / 2, 240);

  // "has successfully completed"
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(12);
  doc.setTextColor(160, 160, 160);
  doc.text('has successfully completed', W / 2, 270, { align: 'center' });

  // Course title
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(20);
  doc.setTextColor(93, 202, 165);
  doc.text(title, W / 2, 304, { align: 'center' });

  // Bottom divider
  doc.setDrawColor(40, 80, 65);
  doc.setLineWidth(0.5);
  doc.line(80, 355, W - 80, 355);

  // Date label
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(10);
  doc.setTextColor(100, 100, 100);
  doc.text('DATE OF COMPLETION', 120, 382);
  doc.setFontSize(12);
  doc.setTextColor(200, 200, 200);
  doc.text(dateStr, 120, 400);

  // Certificate ID label
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(10);
  doc.setTextColor(100, 100, 100);
  doc.text('CERTIFICATE ID', W - 120, 382, { align: 'right' });
  doc.setFontSize(12);
  doc.setTextColor(200, 200, 200);
  doc.text(certId, W - 120, 400, { align: 'right' });

  // Signature line
  doc.setDrawColor(60, 60, 60);
  doc.setLineWidth(0.5);
  doc.line(W / 2 - 60, 428, W / 2 + 60, 428);
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(10);
  doc.setTextColor(100, 100, 100);
  doc.text('Learnorama', W / 2, 442, { align: 'center' });

  doc.save('Learnorama-Certificate-' + certId + '.pdf');
};

export default generateCertificate;