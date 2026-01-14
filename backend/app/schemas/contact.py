from pydantic import BaseModel, EmailStr, Field
from typing import Optional


class ContactRequest(BaseModel):
    """Contact form request schema"""
    name: str = Field(..., min_length=2, max_length=100)
    email: EmailStr
    subject: Optional[str] = Field(None, max_length=200)
    message: str = Field(..., min_length=10, max_length=1000)

    class Config:
        json_schema_extra = {
            "example": {
                "name": "John Doe",
                "email": "john@example.com",
                "subject": "Project Inquiry",
                "message": "I would like to discuss a potential project..."
            }
        }


class ContactResponse(BaseModel):
    """Contact form response schema"""
    success: bool
    message: str

    class Config:
        json_schema_extra = {
            "example": {
                "success": True,
                "message": "Your message has been sent successfully!"
            }
        }


class HealthResponse(BaseModel):
    """Health check response schema"""
    status: str
    message: str
