import aiosmtplib
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart
from app.core.config import settings
from app.schemas.contact import ContactRequest


async def send_contact_email(contact_data: ContactRequest) -> bool:
    """
    Send contact form email using SMTP
    
    Args:
        contact_data: Contact form data
        
    Returns:
        bool: True if email sent successfully, False otherwise
    """
    try:
        # Create message
        message = MIMEMultipart("alternative")
        message["From"] = settings.EMAIL_FROM
        message["To"] = settings.EMAIL_TO
        message["Subject"] = f"Portfolio Contact: {contact_data.subject or 'New Message'}"
        
        # Create HTML and plain text versions
        text_content = f"""
New message from your portfolio website:

Name: {contact_data.name}
Email: {contact_data.email}
Subject: {contact_data.subject or 'No subject'}

Message:
{contact_data.message}

---
This email was sent from your portfolio contact form.
        """
        
        html_content = f"""
<!DOCTYPE html>
<html>
<head>
    <style>
        body {{ font-family: Arial, sans-serif; line-height: 1.6; color: #333; }}
        .container {{ max-width: 600px; margin: 0 auto; padding: 20px; }}
        .header {{ background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 20px; border-radius: 8px 8px 0 0; }}
        .content {{ background: #f9f9f9; padding: 20px; border-radius: 0 0 8px 8px; }}
        .info-row {{ margin: 10px 0; }}
        .label {{ font-weight: bold; color: #667eea; }}
        .message-box {{ background: white; padding: 15px; border-left: 4px solid #667eea; margin-top: 20px; }}
        .footer {{ text-align: center; margin-top: 20px; color: #666; font-size: 12px; }}
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <h2>New Portfolio Contact Message</h2>
        </div>
        <div class="content">
            <div class="info-row">
                <span class="label">From:</span> {contact_data.name}
            </div>
            <div class="info-row">
                <span class="label">Email:</span> <a href="mailto:{contact_data.email}">{contact_data.email}</a>
            </div>
            <div class="info-row">
                <span class="label">Subject:</span> {contact_data.subject or 'No subject'}
            </div>
            <div class="message-box">
                <p style="margin: 0;"><strong>Message:</strong></p>
                <p style="white-space: pre-wrap;">{contact_data.message}</p>
            </div>
            <div class="footer">
                This email was sent from your portfolio contact form.
            </div>
        </div>
    </div>
</body>
</html>
        """
        
        # Attach both versions
        part1 = MIMEText(text_content, "plain")
        part2 = MIMEText(html_content, "html")
        message.attach(part1)
        message.attach(part2)
        
        # Send email
        await aiosmtplib.send(
            message,
            hostname=settings.SMTP_HOST,
            port=settings.SMTP_PORT,
            username=settings.SMTP_USER,
            password=settings.SMTP_PASSWORD,
            start_tls=True,
        )
        
        return True
        
    except Exception as e:
        print(f"Error sending email: {str(e)}")
        return False
