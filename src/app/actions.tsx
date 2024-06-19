"use server"

import { z } from 'zod'
import { v4 as uuidv4 } from 'uuid';

// Define the schema
const schema = z.object({
    email: z.string().email({ message: "invalid email address" }),
    first_name: z.string().min(1, { message: "first name is required" }),
    last_name: z.string().min(1, { message: "last name is required" }),
    phone: z.string().regex(/^(\(\d{3}\) \d{3} - \d{4}|)$/, { message: "invalid phone number" }),
    preferred_contact: z.enum(['prefers_email', 'prefers_text', 'prefers_call']),
    confirmation_email: z.boolean(),
    confirmation_text: z.boolean(),
    message: z.string().optional(),
})

export async function createUser(prevState: any, formData: FormData) {
    const uuid = uuidv4();

    console.log(`creating user with id ${uuid}`);
    
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
    const validatedFields = schema.safeParse(formInfo);

    // Return early if the form data is invalid
    if (!validatedFields.success) {
        const errorsList = `${validatedFields.error.errors.map(err => err.message).join(', ')}`

        if (validatedFields.error.issues.filter(issue => issue.path[0] === 'email').length > 0) {
            return {
                ...prevState,
                message: {
                    body: `You must provide a valid email to submit the form`,
                    uuid: null,
                },
                success: false,
            }
        }
    }

    return {
        ...prevState,
        message: {
            body: `Successfully submitted form`,
            uuid: uuid,
        },
        success: true,
    }
}
