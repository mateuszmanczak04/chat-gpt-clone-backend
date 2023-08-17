import { Request, Response } from 'express';

export const sendPrompt = async (req: Request, res: Response) => {
  try {
    const promptText = req.body.promptText;

    if (!promptText) {
      return res.status(400).json({ message: 'Missing prompt content.' });
    }

    const openaiResponse = await fetch(
      'https://api.openai.com/v1/chat/completions',
      {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${process.env.OPENAI_API_SECRET_KEY}`,
        },
        method: 'POST',
        body: JSON.stringify({
          model: 'gpt-3.5-turbo',
          messages: [{ role: 'user', content: promptText }],
        }),
      }
    );

    const data = await openaiResponse.json();

    res.status(200).json(data.choices[0].message.content);
  } catch (err: any) {
    res.status(500).json({ message: 'Server error, please try again later.' });
  }
};
