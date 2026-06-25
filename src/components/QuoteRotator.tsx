import { useEffect, useState } from "react";
import { useI18n } from "../i18n";

const quotes = {
  ru: [
    "Уважение — это умение видеть в другом человеке целый мир.",
    "Согласие — самое привлекательное слово.",
    "Слушай, чтобы понять, а не чтобы ответить.",
    "Границы не отдаляют — они делают близость безопасной.",
    "Честность экономит время обоим.",
    "«Нет» — это конец темы, а не начало переговоров.",
    "Искренность выигрывает в долгую.",
    "Достоинство — самое привлекательное, что у тебя есть.",
    "Интересно — скажи. Не интересно — не держи на крючке.",
    "Безопасность — это забота, а не контроль.",
  ],
  en: [
    "Respect is the skill to see a whole world inside another person.",
    "Consent is the most attractive word.",
    "Listen to understand — not to reply.",
    "Boundaries don’t distance — they make closeness safe.",
    "Honesty saves both people time.",
    "‘No’ ends the topic — it doesn’t open negotiation.",
    "Authenticity wins long-term.",
    "Dignity is the most attractive thing you own.",
    "Interested — say it. Not interested — don’t keep them on the line.",
    "Safety is care, not control.",
  ]
};

export default function QuoteRotator() {
  const { lang } = useI18n();
  const list = quotes[lang];
  const [i, setI] = useState(0);

  useEffect(() => {
    setI(0);
  }, [lang]);

  useEffect(() => {
    const id = setInterval(() => setI((p) => (p + 1) % list.length), 5200);
    return () => clearInterval(id);
  }, [list.length]);

  return (
    <div className="hidden sm:flex flex-1 justify-center px-5 min-w-0 overflow-hidden">
      <p
        key={lang + "-" + i}
        title={list[i]}
        className="quote-enter italic text-[12.5px] sm:text-[13px] text-zinc-400 truncate max-w-[460px] select-none"
      >
        <span className="text-[#c9a3ff] mr-1">❝</span>
        {list[i]}
        <span className="text-[#c9a3ff] ml-1">❞</span>
      </p>
    </div>
  );
}
