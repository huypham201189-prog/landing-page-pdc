'use client';

import React, { useState, useEffect, useRef } from 'react';
import { MessageCircle, X, RotateCcw, Send } from 'lucide-react';
import { marked } from 'marked';

// Component to render Markdown content safely
const MarkdownContent = ({ content }: { content: string }) => {
  // marked.parse can return a Promise if async is true, but by default it's sync.
  // We'll wrap it in a try-catch for safety.
  let html = '';
  try {
    html = marked.parse(content) as string;
  } catch (e) {
    console.error('Markdown parsing error:', e);
    html = content;
  }

  return (
    <div 
      className="chat-markdown prose prose-sm prose-zinc max-w-none text-inherit 
                 prose-p:leading-relaxed prose-pre:bg-black/5 prose-pre:p-2 prose-pre:rounded-lg"
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
};

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{ role: 'user' | 'assistant', content: string }[]>([]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [isRefreshing, setIsRefreshing] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    // Initial greeting
    if (isOpen && messages.length === 0) {
      setMessages([{ role: 'assistant', content: 'Xin chào! Tôi là trợ lý ảo của **Chuyên gia HuyPQ**. Tôi có thể giúp gì cho bạn?' }]);
    }
    scrollToBottom();
  }, [isOpen, messages]);

  const handleRefresh = () => {
    setIsRefreshing(true);
    // Logic: rotate icon, clear history, repeat greeting, stop rotation after 500ms
    setTimeout(() => {
      setMessages([{ role: 'assistant', content: 'Chào bạn! Lịch sử chat đã được làm mới. Tôi là trợ lý ảo của **Chuyên gia HuyPQ**, hãy đặt câu hỏi cho tôi nhé!' }]);
      setIsRefreshing(false);
    }, 500);
  };

  const handleSend = async (e?: React.FormEvent) => {
    e?.preventDefault();
    if (!input.trim() || isTyping) return;

    const userMessage = { role: 'user' as const, content: input };
    const newMessages = [...messages, userMessage];
    setMessages(newMessages);
    setInput('');
    setIsTyping(true);

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ messages: newMessages }),
      });

      const data = await response.json();

      if (data.error) {
        throw new Error(data.error);
      }

      setMessages(prev => [...prev, { 
        role: 'assistant', 
        content: data.content 
      }]);
    } catch (error) {
      console.error('Chat Error:', error);
      setMessages(prev => [...prev, { 
        role: 'assistant', 
        content: 'Rất tiếc, tôi đang gặp khó khăn khi kết nối. Vui lòng thử lại sau giây lát.' 
      }]);
    } finally {
      setIsTyping(false);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-[100]">
      {/* Floating Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`bg-[#006d31] text-white p-4 rounded-full shadow-2xl hover:scale-110 active:scale-95 transition-all duration-300 flex items-center justify-center ${isOpen ? 'rotate-90 opacity-0 scale-0 pointer-events-none' : 'rotate-0 opacity-100 scale-100'}`}
      >
        <MessageCircle size={28} />
      </button>

      {/* Chat Window */}
      <div
        className={`absolute bottom-0 right-0 w-[380px] sm:w-[420px] h-[600px] max-h-[85vh] 
                   bg-white/70 backdrop-blur-2xl border border-white/40 rounded-[2rem] 
                   shadow-[0_24px_80px_rgba(0,0,0,0.15)] flex flex-col overflow-hidden 
                   transition-all duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)] origin-bottom-right 
                   ${isOpen ? 'scale-100 opacity-100 translate-y-0' : 'scale-75 opacity-0 translate-y-12 pointer-events-none'}`}
      >
        {/* Header */}
        <div className="p-5 bg-white/20 border-b border-black/5 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="relative">
              <div className="w-11 h-11 bg-gradient-to-tr from-[#006d31] to-[#00a950] rounded-2xl flex items-center justify-center text-white shadow-lg shadow-[#006d31]/20">
                <span className="font-black text-lg tracking-tighter">AI</span>
              </div>
              <div className="absolute -bottom-0.5 -right-0.5 w-3.5 h-3.5 bg-green-500 border-[2.5px] border-white rounded-full animate-pulse shadow-sm"></div>
            </div>
            <div>
              <div className="font-extrabold text-[#1b1c1c] text-sm tracking-tight">Trợ Lý HuyPQ</div>
              <div className="text-[10px] text-[#006d31] font-bold uppercase tracking-[0.1em] flex items-center gap-1.5 ring-1 ring-[#006d31]/10 px-1.5 py-0.5 rounded-full mt-0.5 bg-[#006d31]/5">
                Đang trực tuyến
              </div>
            </div>
          </div>
          <div className="flex items-center gap-1.5">
            <button 
              onClick={handleRefresh}
              title="Làm mới hội thoại"
              className={`p-2.5 hover:bg-black/5 rounded-xl transition-all active:scale-90 ${isRefreshing ? 'animate-spin text-[#006d31]' : 'text-zinc-500'}`}
            >
              <RotateCcw size={18} />
            </button>
            <button 
              onClick={() => setIsOpen(false)}
              title="Đóng"
              className="p-2.5 hover:bg-red-50 text-zinc-500 hover:text-red-500 rounded-xl transition-all active:scale-90"
            >
              <X size={20} />
            </button>
          </div>
        </div>

        {/* Messages Container */}
        <div className="flex-1 overflow-y-auto p-5 space-y-5 scrollbar-thin scrollbar-thumb-zinc-200">
          {messages.map((msg, i) => (
            <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'} animate-in fade-in slide-in-from-bottom-2 duration-300`}>
              <div className={`max-w-[85%] p-4 rounded-2xl text-[0.9375rem] leading-relaxed shadow-sm
                ${msg.role === 'user' 
                  ? 'bg-[#006d31] text-white rounded-tr-none' 
                  : 'bg-white/80 backdrop-blur-sm border border-white/60 text-zinc-800 rounded-tl-none'}`}
              >
                {msg.role === 'assistant' ? (
                  <MarkdownContent content={msg.content} />
                ) : (
                  msg.content
                )}
              </div>
            </div>
          ))}
          {isTyping && (
            <div className="flex justify-start animate-in fade-in duration-200">
              <div className="bg-white/80 backdrop-blur-sm border border-white/60 p-4 rounded-2xl rounded-tl-none shadow-sm flex gap-1.5 items-center">
                <div className="w-1.5 h-1.5 bg-[#006d31]/40 rounded-full animate-bounce"></div>
                <div className="w-1.5 h-1.5 bg-[#006d31]/60 rounded-full animate-bounce [animation-delay:0.2s]"></div>
                <div className="w-1.5 h-1.5 bg-[#006d31] rounded-full animate-bounce [animation-delay:0.4s]"></div>
                <span className="text-[10px] font-bold text-zinc-400 ml-1.5 uppercase tracking-widest">Đang nhập...</span>
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        {/* Input Area */}
        <div className="p-5 bg-white/30 backdrop-blur-md border-t border-black/5">
          <form 
            onSubmit={handleSend}
            className="relative flex items-center group"
          >
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Nhập câu hỏi của bạn..."
              className="w-full bg-white/80 border border-white/60 rounded-2xl py-4 pl-5 pr-14 text-[0.9375rem] 
                         focus:outline-none focus:ring-4 focus:ring-[#006d31]/10 focus:border-[#006d31]/30
                         transition-all placeholder:text-zinc-400 shadow-inner"
            />
            <button
              type="submit"
              disabled={!input.trim() || isTyping}
              className="absolute right-2.5 p-2.5 bg-[#006d31] text-white rounded-xl 
                         hover:bg-[#00a950] disabled:opacity-30 disabled:hover:scale-100
                         hover:scale-105 active:scale-95 transition-all shadow-lg shadow-[#006d31]/20"
            >
              <Send size={18} />
            </button>
          </form>
          <div className="mt-3 text-center">
            <p className="text-[10px] text-zinc-400 font-medium">
              Powered by **HuyPQ AI Engine**
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
