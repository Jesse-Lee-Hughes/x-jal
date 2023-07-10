export const load = async ({ fetch }) => {
    try {
      const response = await fetch('/api');
  
      return await response.json();
    } catch (error) {
      console.error(`Error in load function for : ${error}`);
    }
  };
/** @type {import('@sveltejs/adapter-vercel').Config} */
export const config = {
  runtime: 'nodejs18.x'
};