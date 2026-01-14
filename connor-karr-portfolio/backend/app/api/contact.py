from fastapi import APIRouter, HTTPException, status
from app.schemas.contact import ContactRequest, ContactResponse
from app.core.email import send_contact_email

router = APIRouter(prefix="/contact", tags=["contact"])


@router.post("", response_model=ContactResponse, status_code=status.HTTP_200_OK)
async def submit_contact_form(contact_data: ContactRequest):
    """
    Submit contact form
    
    - **name**: Your full name (2-100 characters)
    - **email**: Valid email address
    - **subject**: Optional message subject
    - **message**: Your message (10-1000 characters)
    """
    try:
        # Send email
        email_sent = await send_contact_email(contact_data)
        
        if not email_sent:
            raise HTTPException(
                status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
                detail="Failed to send email. Please try again later."
            )
        
        return ContactResponse(
            success=True,
            message="Your message has been sent successfully! I'll get back to you soon."
        )
        
    except HTTPException:
        raise
    except Exception as e:
        print(f"Unexpected error in contact form: {str(e)}")
        raise HTTPException(
            status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
            detail="An unexpected error occurred. Please try again later."
        )
