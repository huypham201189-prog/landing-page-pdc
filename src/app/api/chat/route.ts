import { NextResponse } from 'next/server';
import OpenAI from 'openai';
import fs from 'fs';
import path from 'path';

const openai = new OpenAI({
  apiKey: 'sk-4bd27113b7dc78d1-lh6jld-f4f9c69f',
  baseURL: 'https://9router.vuhai.io.vn/v1',
});

export async function POST(req: Request) {
  try {
    const { messages } = await req.json();

    // Read system prompt from file
    const promptPath = path.join(process.cwd(), 'src/data/system_prompt.txt');
    let systemPrompt = 'Bạn là một trợ lý ảo hữu ích.';
    
    if (fs.existsSync(promptPath)) {
      systemPrompt = fs.readFileSync(promptPath, 'utf8');
    }

    const response = await openai.chat.completions.create({
      model: 'ces-chatbot-gpt-5.4',
      messages: [
        { role: 'system', content: systemPrompt },
        ...messages
      ],
      temperature: 0.7,
    });

    return NextResponse.json({ 
      content: response.choices[0].message.content 
    });

  } catch (error: any) {
    console.error('Chat API Error:', error);
    return NextResponse.json(
      { error: 'Đã có lỗi xảy ra khi xử lý yêu cầu.' },
      { status: 500 }
    );
  }
}
