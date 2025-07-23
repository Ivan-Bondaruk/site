import React, {useState} from 'react';
import { useTranslation } from 'react-i18next';

const languages = [
    { code: 'en', name: 'English', flag: '🇬🇧' },
    { code: 'ru', name: 'Русский', flag: '🇷🇺' },
];

export const NavSwitcher = () => {
    const { i18n } = useTranslation();
    const [open, setOpen] = useState(false);

    const currentLang = languages.find((l) => l.code === i18n.language) || languages[0];

    const changeLanguage = (code) => {
        i18n.changeLanguage(code);
        setOpen(false);
    };

    return (
        <div className="relative inline-block text-left">
            <button
                onClick={() => setOpen(!open)}
                className="flex items-center gap-2 px-3 py-2 bg-white text-black border border-gray-300 rounded hover:bg-gray-100 transition"
            >
                <span>{currentLang.flag}</span>
                <span>{currentLang.name}</span>
                <svg className="w-4 h-4" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M5.5 7l4.5 4.5L14.5 7" />
                </svg>
            </button>

            {open && (
                <div className="absolute right-0 mt-2 w-40 bg-white border border-gray-200 rounded shadow-md z-50">
                    {languages.map((lang) => (
                        <button
                            key={lang.code}
                            onClick={() => changeLanguage(lang.code)}
                            className="flex items-center w-full px-4 py-2 text-left text-black hover:bg-gray-100"
                        >
                            <span className="mr-2">{lang.flag}</span>
                            {lang.name}
                        </button>
                    ))}
                </div>
            )}
        </div>
    );
};

export default NavSwitcher;