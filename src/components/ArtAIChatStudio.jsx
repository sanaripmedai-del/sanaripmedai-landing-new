import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, Sparkles, Bot, User, Paperclip, Mic, Stethoscope, CheckCircle2, ShieldCheck } from 'lucide-react';

const INITIAL_MESSAGES = [
  {
    id: 1,
    sender: 'ai',
    text: 'Здравствуйте! Я клинический ИИ-ассистент Sanarip Med AI. Опишите ваши симптомы или выберите запрос ниже для экспресс-диагностики.',
    time: 'Только что',
    risk: null,
  },
  {
    id: 2,
    sender: 'user',
    text: 'У меня пульсирующая головная боль в области висков и повышенная чувствительность к свету второй день.',
    time: 'Только что',
    risk: null,
  },
  {
    id: 3,
    sender: 'ai',
    text: 'На основе первичного анализа симптомов (мигренозный характер боли, фотофобия), предварительный клинический профиль с вероятностью 89% соответствует первичной мигрени без ауры.',
    time: 'Только что',
    risk: 'moderate',
    recommendation: 'Рекомендован прием невролога / терапевта. Ведите дневник приступов.',
  },
];

const PROMPT_CHIPS = [
  { label: '🩺 Первичная мигрень', query: 'У меня пульсирующая головная боль в области висков второй день' },
  { label: '📊 Анализ крови (Общий)', query: 'Расшифруйте лейкоциты 11.2 и СОЭ 24 мм/ч в анализе крови' },
  { label: '💊 Совместимость препаратов', query: 'Проверьте совместимость ибупрофена и парацетамола' },
  { label: '❤️ Тахикардия и давление', query: 'Пульс 95 в покое и давление 135/85 - это норма?' },
];

export const ArtAIChatStudio = () => {
  const [messages, setMessages] = useState(INITIAL_MESSAGES);
  const [inputText, setInputText] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const chatEndRef = useRef(null);

  const scrollToBottom = () => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  const handleSend = (textToSend) => {
    const query = textToSend || inputText;
    if (!query.trim()) return;

    const userMsg = {
      id: Date.now(),
      sender: 'user',
      text: query,
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    };

    setMessages((prev) => [...prev, userMsg]);
    if (!textToSend) setInputText('');
    setIsTyping(true);

    setTimeout(() => {
      let aiText = '';
      let riskLevel = 'low';
      let rec = 'Рекомендован осмотр врача общей практики.';

      if (query.includes('кров') || query.includes('анализ')) {
        aiText = 'Анализ биомаркеров указывает на легкий воспалительный ответ (небольшой лейкоцитоз). Повышение СОЭ часто сопровождает острые фазы или восстановление после ОРВИ.';
        riskLevel = 'moderate';
        rec = 'Сдайте повторный ОАК через 5 дней и проконсультируйтесь с терапевтом.';
      } else if (query.includes('давление') || query.includes('Пульс')) {
        aiText = 'Показатели артериального давления 135/85 мм рт. ст. соответствуют высокому нормальному давлению. Тахикардия покоя требует контроля ЕКГ.';
        riskLevel = 'moderate';
        rec = 'Запишитесь на прием к кардиологу и пройдите суточный мониторинг ЭКГ.';
      } else {
        aiText = `Интеллектуальная система Sanarip Med AI обработала ваш запрос: "${query}". Ваша симптоматика классифицирована в реальном времени. Все данные сохранены в вашем защищенном электронном профиле.`;
        riskLevel = 'low';
        rec = 'При сохранении симптомов свыше 48 часов обратитесь к специалисту.';
      }

      const aiMsg = {
        id: Date.now() + 1,
        sender: 'ai',
        text: aiText,
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        risk: riskLevel,
        recommendation: rec,
      };

      setMessages((prev) => [...prev, aiMsg]);
      setIsTyping(false);
    }, 1100);
  };

  return (
    <section id="ai-chat" className="py-20 md:py-28 bg-white text-slate-900 border-t border-slate-200">
      <div className="max-w-[1600px] mx-auto px-6 sm:px-10 lg:px-16">
        
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-12 gap-6">
          <div>
            <span className="text-xs font-extrabold uppercase tracking-widest text-[#0A6B97]">
              [ 02 / 05 ] ИИ-ТЕРМИНАЛ
            </span>
            <h2 className="mt-3 text-3xl sm:text-5xl font-extrabold tracking-tight text-slate-900">
              Студия Интерактивной ИИ-Консультации
            </h2>
          </div>
          <p className="text-slate-500 text-xs sm:text-sm max-w-md font-medium">
            Опишите проблему или симптомы — ИИ-врач проведет экспресс-диагностику и подготовит клинический отчет.
          </p>
        </div>

        {/* Swiss Gallery Terminal Window */}
        <div className="rounded-3xl border border-slate-200 bg-[#F8FAFC] shadow-2xl overflow-hidden">
          
          {/* Header */}
          <div className="p-4 sm:p-5 bg-white border-b border-slate-200 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-2xl bg-[#0A6B97] text-white flex items-center justify-center font-bold">
                <Bot className="w-5 h-5 text-[#49DCB8]" />
              </div>
              <div>
                <h3 className="font-extrabold text-sm sm:text-base text-slate-900 flex items-center gap-2">
                  Sanarip Clinical AI Copilot
                  <span className="w-2 h-2 rounded-full bg-[#49DCB8] animate-ping" />
                </h3>
                <p className="text-[11px] text-slate-500 font-semibold">Модель: Med-LLaMA-3-Clinical • 24/7 Онлайн</p>
              </div>
            </div>

            <div className="hidden sm:flex items-center gap-2 text-xs font-bold text-slate-600 bg-slate-100 px-3.5 py-1.5 rounded-full border border-slate-200">
              <ShieldCheck className="w-4 h-4 text-emerald-600" />
              <span>Шифрование AES-256</span>
            </div>
          </div>

          {/* Prompt Chips */}
          <div className="p-3 bg-white/60 border-b border-slate-200 flex items-center gap-2 overflow-x-auto scrollbar-none">
            <span className="text-xs font-bold text-slate-400 whitespace-nowrap pl-2 flex items-center gap-1">
              <Sparkles className="w-3.5 h-3.5 text-[#0A6B97]" /> Быстрый выбор:
            </span>
            {PROMPT_CHIPS.map((chip, idx) => (
              <button
                key={idx}
                onClick={() => handleSend(chip.query)}
                className="px-3.5 py-1.5 text-xs font-bold rounded-full bg-white border border-slate-200 text-slate-700 hover:border-[#0A6B97] hover:text-[#0A6B97] transition-all whitespace-nowrap shadow-sm"
              >
                {chip.label}
              </button>
            ))}
          </div>

          {/* Message List */}
          <div className="p-4 sm:p-6 h-[400px] sm:h-[440px] overflow-y-auto space-y-4">
            <AnimatePresence initial={false}>
              {messages.map((msg) => (
                <motion.div
                  key={msg.id}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ type: 'spring', stiffness: 350, damping: 25 }}
                  className={`flex gap-3 ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  {msg.sender === 'ai' && (
                    <div className="w-8 h-8 rounded-xl bg-[#0A6B97] text-white flex items-center justify-center shrink-0 mt-1 shadow-md">
                      <Bot className="w-4 h-4 text-[#49DCB8]" />
                    </div>
                  )}

                  <div className={`max-w-[85%] sm:max-w-[75%] rounded-2xl p-4 text-xs sm:text-sm leading-relaxed ${
                    msg.sender === 'user'
                      ? 'bg-[#0A6B97] text-white rounded-br-none shadow-md'
                      : 'bg-white text-slate-800 border border-slate-200 rounded-bl-none shadow-sm'
                  }`}>
                    <p>{msg.text}</p>

                    {msg.risk && (
                      <div className="mt-3 pt-3 border-t border-slate-100 space-y-2">
                        <span className={`inline-block px-2.5 py-0.5 rounded-full text-[10px] font-bold ${
                          msg.risk === 'high'
                            ? 'bg-red-100 text-red-700 border border-red-200'
                            : msg.risk === 'moderate'
                            ? 'bg-amber-100 text-amber-800 border border-amber-200'
                            : 'bg-emerald-100 text-emerald-700 border border-emerald-200'
                        }`}>
                          {msg.risk === 'high' ? '⚠️ Высокий риск' : msg.risk === 'moderate' ? '⚡ Умеренный риск' : '✅ Низкий риск'}
                        </span>

                        {msg.recommendation && (
                          <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-200/80 text-slate-700 text-xs flex items-start gap-2">
                            <Stethoscope className="w-4 h-4 text-[#0A6B97] shrink-0 mt-0.5" />
                            <span><strong>Рекомендация:</strong> {msg.recommendation}</span>
                          </div>
                        )}
                      </div>
                    )}
                  </div>

                  {msg.sender === 'user' && (
                    <div className="w-8 h-8 rounded-xl bg-slate-200 flex items-center justify-center text-slate-600 shrink-0 mt-1">
                      <User className="w-4 h-4" />
                    </div>
                  )}
                </motion.div>
              ))}
            </AnimatePresence>

            {isTyping && (
              <div className="flex items-center gap-2 text-xs text-slate-500 p-2">
                <Bot className="w-4 h-4 text-[#0A6B97] animate-bounce" />
                <span className="font-semibold text-[#0A6B97]">Sanarip AI генерирует клинический ответ...</span>
              </div>
            )}
            <div ref={chatEndRef} />
          </div>

          {/* Input Bar */}
          <div className="p-4 bg-white border-t border-slate-200 flex items-center gap-2">
            <button title="Файл" className="p-2.5 rounded-full text-slate-400 hover:text-[#0A6B97] hover:bg-slate-100">
              <Paperclip className="w-5 h-5" />
            </button>
            <button title="Голос" className="p-2.5 rounded-full text-slate-400 hover:text-[#0A6B97] hover:bg-slate-100">
              <Mic className="w-5 h-5" />
            </button>
            <input
              type="text"
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSend()}
              placeholder="Опишите симптомы или задайте вопрос ИИ..."
              className="flex-1 px-4 py-2.5 rounded-full border border-slate-200 focus:outline-none focus:border-[#0A6B97] text-xs sm:text-sm text-slate-900 bg-slate-50"
            />
            <button onClick={() => handleSend()} className="p-3 rounded-full bg-[#0A6B97] text-white hover:bg-[#085579] shadow-md">
              <Send className="w-4 h-4 text-[#49DCB8]" />
            </button>
          </div>

        </div>

      </div>
    </section>
  );
};
