"use server"

import { z } from 'zod'
import { v4 as uuidv4 } from 'uuid';
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL as string;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY as string;
const supabase = createClient(supabaseUrl, supabaseKey);

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

export async function dummyFunction(prevState: any, formData: FormData) {
    console.log("dummy function log");
    return {
        ...prevState,
        message: {
            body: formData,
        },
        success: true,
    }
}

export async function createUser(prevState: any, formData: FormData) {
    const uuid = uuidv4();
    
    // Extract form data
    const formInfo = {
        first_name: formData.get('first_name') as string,
        last_name: formData.get('last_name') as string,
        email: formData.get('email') as string,
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

    const { data: fetch_results, error: fetch_error } = await supabase
        .from('contact_form_request')
        .select('request_id')
        .or(`email.eq.${formInfo.email},phone_number.eq.${formInfo.phone}`)
        .limit(1)
        .maybeSingle()

    if (fetch_results) {
        console.log("email_or_phone_exists");

    }
        
    console.log(fetch_results);
    if (fetch_results) {
        console.log(fetch_results);
    }

    if (fetch_error) {
        console.error('Error inserting user into Supabase:', fetch_error.message)
        return {
            ...prevState,
            message: {
                body: `Error occured during form submission. Please try again later. ${fetch_error.message}`,
                uuid: null,
            },
            success: false,
        }
    }

    // Save user to Supabase database
    // const { error: insert_error } = await supabase
    //     .from('contact_form_request')
    //     .insert([
    //         {
    //             request_guid: uuid,
    //             first_name: formInfo.first_name,
    //             last_name: formInfo.last_name,
    //             email: formInfo.email,
    //             phone_number: formInfo.phone,
    //             preferred_contact: formInfo.preferred_contact,
    //             confirmation_email: formInfo.confirmation_email,
    //             confirmation_text: formInfo.confirmation_text,
    //             message: formInfo.message,
    //         }
    //     ])

    // if (insert_error) {
    //     console.error('Error inserting user into Supabase:', insert_error.message)
    //     return {
    //         ...prevState,
    //         message: {
    //             body: `Failed to save user: ${insert_error.message}`,
    //             uuid: null,
    //         },
    //         success: false,
    //     }
    // }    

    return {
        ...prevState,
        message: {
            body: `Successfully submitted form`,
            uuid: uuid,
        },
        success: true,
    }
}
