import axios from 'axios';
const FORM_KEY = process.env.NEXT_PUBLIC_FORM_KEY;

export default async function handler(req, res) {
  if (req.method === 'POST') {
    try {
      // Forward the form data to your email using a service like Formspree
      
      const response = await axios.post('https://formspree.io/f/'+FORM_KEY, req.body);

      if (response.status === 200) {
        res.status(200).json({ success: true });
      } else {
        res.status(500).json({ success: false, error: 'Failed to send message' });
      }
    } catch (error) {
      console.error('Error sending message:', error);
      res.status(500).json({ success: false, error: 'Internal server error' });
    }
  } else {
    res.status(405).json({ success: false, error: 'Method Not Allowed' });
  }
}
