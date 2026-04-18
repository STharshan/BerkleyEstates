import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { IoCloseOutline, IoChevronForwardOutline, IoChevronDownOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

const categories = [
    {
        id: "necessary",
        title: "Necessary",
        status: "Always Active",
        description: "Necessary cookies are required to enable the basic features of this site, such as providing secure log-in or adjusting your consent preferences. These cookies do not store any personally identifiable data.",
    },
    {
        id: "functional",
        title: "Functional",
        description: "Functional cookies help perform certain functionalities like sharing the content of the website on social media platforms, collecting feedback, and other third-party features.",
    },
    {
        id: "analytics",
        title: "Analytics",
        description: "Analytical cookies are used to understand how visitors interact with the website. These cookies help provide information on metrics such as the number of visitors, bounce rate, traffic source, etc.",
    },
    {
        id: "performance",
        title: "Performance",
        description: "Performance cookies are used to understand and analyse the key performance indexes of the website which helps in delivering a better user experience for the visitors.",
    },
    {
        id: "advertisement",
        title: "Advertisement",
        description: "Advertisement cookies are used to provide visitors with customised advertisements based on the pages you visited previously and to analyse the effectiveness of the ad campaigns.",
    },
];

export default function GDPRConsent() {
    const [visible, setVisible] = useState(false);
    const [showPreferences, setShowPreferences] = useState(false);
    const [showIcon, setShowIcon] = useState(false);
    const [expandedCategory, setExpandedCategory] = useState(null);
    const [isTextExpanded, setIsTextExpanded] = useState(false);

    useEffect(() => {
        const consent = localStorage.getItem("gdprConsent");
        if (consent) {
            setShowIcon(true);
        } else {
            setVisible(true);
        }
    }, []);

    const toggleCategory = (id) => {
        setExpandedCategory(expandedCategory === id ? null : id);
    };

    const handleSave = () => {
        localStorage.setItem("gdprConsent", "custom");
        closeAll();
    };

    const closeAll = () => {
        setVisible(false);
        setShowPreferences(false);
        setShowIcon(true);
    };

    return (
        <>
            {/* 1. Initial Banner */}
            <AnimatePresence>
                {visible && !showPreferences && (
                    <motion.div 
                        initial={{ y: 50, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        exit={{ y: 50, opacity: 0 }}
                        className="fixed bottom-4 left-4 right-4 md:bottom-6 md:left-6 md:right-auto max-w-full md:max-w-xs p-5 rounded-lg shadow-2xl z-50 bg-[#0E0E0E] border border-[#2E2B28] text-white"
                    >
                        <p className="text-sm mb-4">We use cookies to improve your experience.</p>
                        <div className="flex flex-col gap-3">
                            <Link to="/privacy-policy" className="text-[white] hover:underline text-center">
                                See our Privacy Policy
                            </Link>
                            <div className="flex gap-2">
                                <button onClick={closeAll} className="flex-1 bg-[#1A1917] border border-[#3A3633] py-2 rounded text-sm text-white">Reject</button>
                                <button onClick={closeAll} className="flex-1 bg-[#001C56] text-white py-2 rounded text-sm font-bold">Accept</button>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* 2. Preferences Modal */}
            <AnimatePresence>
                {showPreferences && (
                    <motion.div 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-100 flex items-end md:items-center justify-center p-0 md:p-4 bg-black/60"
                    >
                        <motion.div
                            initial={{ y: "100%", opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            exit={{ y: "100%", opacity: 0 }}
                            transition={{ type: "spring", damping: 55, stiffness: 200 }}
                            className="bg-white w-full max-w-4xl rounded-t-2xl md:rounded-lg shadow-2xl overflow-hidden flex flex-col max-h-[95vh] md:max-h-[85vh]"
                        >
                            {/* Header */}
                            <div className="flex justify-between p-4 md:p-6 items-center border-b border-gray-100">
                                <h2 className="text-xl font-semibold text-black">Customise Consent Preferences</h2>
                                <button onClick={() => setShowPreferences(false)} className="text-gray-400 hover:text-black transition">
                                    <IoCloseOutline size={28} />
                                </button>
                            </div>

                            {/* Scrollable Content */}
                            <div className="flex-1 p-4 md:p-6 overflow-y-auto">
                                <div className="mb-4">
                                    <p className="text-base text-[#212121] leading-relaxed">
                                        We use cookies to help you navigate efficiently and perform certain functions. You will find detailed information about all cookies under each consent category below.
                                    </p>
                                </div>

                                <div className="text-base text-[#212121] leading-relaxed">
                                    <p className="inline">
                                        The cookies that are categorised as "Necessary" are stored on your browser as they are essential for enabling the basic functionalities of the site.
                                    </p>

                                    {!isTextExpanded && (
                                        <>
                                            <span className="text-[#212121]"> ... </span>
                                            <button
                                                onClick={() => setIsTextExpanded(true)}
                                                className="text-[#1863dc] font-semibold"
                                            >
                                                Show more
                                            </button>
                                        </>
                                    )}

                                    <AnimatePresence>
                                        {isTextExpanded && (
                                            <motion.span
                                                initial={{ opacity: 0, height: 0 }}
                                                animate={{ opacity: 1, height: "auto" }}
                                                exit={{ opacity: 0, height: 0 }}
                                                className="block"
                                            >
                                                <p className="mt-4">
                                                    We also use third-party cookies that help us analyse how you use this website, store your preferences, and provide the content and advertisements that are relevant to you. These cookies will only be stored in your browser with your prior consent.
                                                </p>
                                                <p className="mt-4">
                                                    You can choose to enable or disable some or all of these cookies but disabling some of them may affect your browsing experience.{" "}
                                                </p>
                                                <button
                                                    onClick={() => setIsTextExpanded(false)}
                                                    className="text-[#1863dc] font-semibold mt-3 mb-4"
                                                >
                                                    Show less
                                                </button>
                                            </motion.span>
                                        )}
                                    </AnimatePresence>
                                </div>

                                {/* Categories */}
                                <div className="space-y-2 mt-4">
                                    {categories.map((cat) => (
                                        <div key={cat.id} className="border-b border-gray-100 last:border-0 pb-2">
                                            <div
                                                className="flex items-start gap-3 py-3 cursor-pointer group"
                                                onClick={() => toggleCategory(cat.id)}
                                            >
                                                <div className="mt-1 text-[#212121]">
                                                    {expandedCategory === cat.id ? <IoChevronDownOutline size={15} /> : <IoChevronForwardOutline size={15} />}
                                                </div>
                                                <div className="flex-1">
                                                    <div className="flex justify-between items-center">
                                                        <h3 className="font-bold text-[#212121] text-[15px]">{cat.title}</h3>
                                                        {cat.status && <span className="text-[#008000] text-base font-semibold">{cat.status}</span>}
                                                    </div>
                                                    <p className="text-[15px] text-[#212121] mt-1 leading-relaxed">
                                                        {cat.description}
                                                    </p>
                                                </div>
                                            </div>

                                            <AnimatePresence>
                                                {expandedCategory === cat.id && (
                                                    <motion.div
                                                        initial={{ height: 0, opacity: 0 }}
                                                        animate={{ height: "auto", opacity: 1 }}
                                                        exit={{ height: 0, opacity: 0 }}
                                                        className="overflow-hidden"
                                                    >
                                                        <div className="ml-8 mb-4 mt-2 p-4 bg-[#f4f4f4] rounded border border-[#ebebeb]">
                                                            <p className="text-xs text-[#212121] italic">No cookies to display.</p>
                                                        </div>
                                                    </motion.div>
                                                )}
                                            </AnimatePresence>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Footer */}
                            <div className="p-5 md:p-6 flex flex-col md:flex-row justify-between items-center gap-4 bg-white border-t border-gray-100">
                                <button
                                    onClick={closeAll}
                                    className="w-full md:flex-1 py-3 px-2 border-2 border-[#001C56] text-[#001C56] rounded-sm font-semibold text-[14px] hover:bg-gray-50 transition-colors"
                                >
                                    Reject All
                                </button>

                                <button
                                    onClick={handleSave}
                                    className="w-full md:flex-1 py-3 px-2 border-2 border-[#001C56] text-[#001C56] rounded-sm font-semibold text-[14px] hover:bg-gray-50 transition-colors"
                                >
                                    Save My Preferences
                                </button>

                                <button
                                    onClick={closeAll}
                                    className="w-full md:flex-1 py-3 px-2 bg-[#001C56] border-2 border-[#001C56] text-white rounded-sm font-semibold text-[14px] hover:bg-[#001440] transition-colors"
                                >
                                    Accept All
                                </button>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* 3. Revisit Icon */}
            {showIcon && !visible && !showPreferences && (
                <div className="fixed bottom-4 left-4 md:bottom-6 md:left-6 z-40">
                    <button
                        onClick={() => setShowPreferences(true)}
                        className="w-12 h-12 rounded-full bg-[#001C56] shadow-xl border border-[#001C56]/50 flex items-center justify-center hover:scale-110 active:scale-95 transition cursor-pointer group"
                    >
                        <img
                            src="/revisit.svg"
                            alt="Cookie Icon"
                            loading="lazy"
                            className="w-6 h-6 object-contain"
                            style={{ filter: "sepia(100%) saturate(300%) hue-rotate(5deg)" }}
                        />
                        <span className="absolute left-14 bg-black text-white text-[10px] px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
                            Cookie Settings
                        </span>
                    </button>
                </div>
            )}
        </>
    );
}