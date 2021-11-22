const SUPABASE_URL = 'https://gxwgjhfyrlwiqakdeamc.supabase.co';
const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTYzNjQxMTMxMiwiZXhwIjoxOTUxOTg3MzEyfQ.PHekiwfLxT73qQsLklp0QFEfNx9NlmkssJFDnlvNIcA';

const client = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

export async function getDogs() {
    const response = await client
        .from('dogs')
        .select();

    return checkError(response);    
}

export async function getDog(id) {
    const response = await client
        .from('dogs')
        .select()
        .match({ id: id })
        .single();

    return checkError(response);    
}

function checkError({ data, error }) {
    return error ? console.error(error) : data;
}