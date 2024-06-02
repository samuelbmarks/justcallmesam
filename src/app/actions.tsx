"use server"

import { z } from 'zod'

// Define the schema
const schema = z.object({
    email: z.string().email({ message: "Invalid email address" }),
    first_name: z.string().min(1, { message: "First name is required" }),
    last_name: z.string().min(1, { message: "Last name is required" }),
    phone: z.string().regex(/a/, { message: "Invalid phone number" }),
    preferred_contact: z.enum(['prefers_email', 'prefers_text', 'prefers_call']),
    confirmation_email: z.boolean(),
    confirmation_text: z.boolean(),
    message: z.string().optional(),
})

export async function createUser(prevState: any, formData: FormData) {
    // Extract form data
    const formInfo = {
        email: formData.get('email') as string,
        first_name: formData.get('first_name') as string,
        last_name: formData.get('last_name') as string,
        phone: formData.get('phone') as string,
        preferred_contact: formData.get('preferred_contact') as string,
        confirmation_email: formData.get('confirmation_email') === 'true',
        confirmation_text: formData.get('confirmation_text') === 'true',
        message: formData.get('message') as string,
    }

    // Validate the form data
    const validatedFields = schema.safeParse(formInfo)

    // Return early if the form data is invalid
    if (!validatedFields.success) {
        return {
            ...prevState,
            message: validatedFields.error.errors.map(err => err.message).join(', ')
        }
    }

    // Handle the form submission logic (e.g., save to a database)
    // For demonstration purposes, we'll just return a success message
    // In real use, you might perform database operations or other side effects here
    return {
        ...prevState,
        message: "User created successfully"
    }
}
