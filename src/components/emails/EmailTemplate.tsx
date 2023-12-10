type EmailTemplateProps = {
  emailSender: string;
  message: string;
};

export const EmailTemplate = ({ emailSender, message }: EmailTemplateProps) => {
  return (
    <div>
      <h1>Recived email from: {emailSender}</h1>
      <p>By the message: {message}</p>
    </div>
  );
};
