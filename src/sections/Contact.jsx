import { contactData } from "../data/data";
import SectionWrapper from "../components/SectionWrapper";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { FaPaperPlane, FaEnvelope, FaMapMarkerAlt, FaPhone, FaCheckCircle, FaExclamationCircle } from "react-icons/fa";

const Contact = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: ""
    });

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [status, setStatus] = useState({ type: "", message: "" });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!formData.name || !formData.email || !formData.message) {
            setStatus({ type: "error", message: "Please fill in all required fields." });
            return;
        }

        setIsSubmitting(true);
        setStatus({ type: "", message: "" });

        // ⚠️ Web3Forms Access Key
        const ACCESS_KEY = "2c0c8de9-9981-4fbe-b361-8887433ae84d";

        const submissionData = {
            ...formData,
            access_key: ACCESS_KEY,
            from_name: formData.name,
            subject: "📩 New Contact Message from Portfolio Website",
        };

        try {
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json",
                },
                body: JSON.stringify(submissionData),
            });

            const result = await response.json();

            if (result.success) {
                setStatus({ type: "success", message: "Thank you! Your message has been sent successfully." });
                setFormData({ name: "", email: "", subject: "", message: "" });
            } else {
                console.error("Web3Forms Submission Error:", result);
                setStatus({ type: "error", message: result.message || "Something went wrong. Please try again later." });
            }
        } catch (error) {
            console.error("Network Error:", error);
            setStatus({ type: "error", message: "Failed to connect. Please check your internet connection." });
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <SectionWrapper id="contact" className="relative overflow-hidden">
            {/* Background Decorative Element */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-[var(--accent-color)] opacity-5 blur-[100px] -z-10 rounded-full"></div>
            <div className="absolute bottom-0 left-0 w-72 h-72 bg-blue-500 opacity-5 blur-[100px] -z-10 rounded-full"></div>

            <div className="text-center mb-16 relative z-10">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    className="text-4xl md:text-5xl font-bold mb-4"
                >
                    Let's Connect
                </motion.h2>
                <div className="w-24 h-1.5 mx-auto rounded-full bg-gradient-to-r from-[var(--accent-color)] to-[var(--accent-hover)]"></div>
                <p className="mt-6 text-[var(--text-secondary)] max-w-2xl mx-auto text-lg">
                    Have a project in mind or just want to chat? My inbox is always open!
                </p>
            </div>

            <div className="max-w-6xl mx-auto grid lg:grid-cols-5 gap-12 items-start">
                {/* Contact Info (2/5) */}
                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="lg:col-span-2 space-y-8"
                >
                    <div className="bg-[var(--bg-panel)] p-8 rounded-3xl shadow-2xl border border-white/5 relative overflow-hidden group backdrop-blur-md">
                        <h3 className="text-2xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-[var(--text-primary)] to-[var(--accent-color)]">
                            Contact Details
                        </h3>

                        <div className="space-y-6">
                            <ContactItem
                                icon={<FaEnvelope />}
                                label="Email"
                                value={contactData.email}
                                link={`mailto:${contactData.email}`}
                            />
                            <ContactItem
                                icon={<FaPhone />}
                                label="Phone"
                                value={contactData.phone}
                                link={`tel:${contactData.phone.replace(/\s/g, "")}`}
                            />
                            <ContactItem
                                icon={<FaMapMarkerAlt />}
                                label="Location"
                                value={contactData.address}
                            />
                        </div>

                        {/* Social Link Hint */}
                        <div className="mt-10 p-4 bg-white/5 rounded-2xl text-center border border-white/5">
                            <p className="text-sm font-medium text-[var(--text-secondary)]">
                                Response time: usually within 24 hours
                            </p>
                        </div>
                    </div>
                </motion.div>

                {/* Contact Form (3/5) */}
                <motion.div
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="lg:col-span-3"
                >
                    <form
                        onSubmit={handleSubmit}
                        className="bg-[var(--bg-panel)] p-8 md:p-10 rounded-3xl shadow-2xl border border-white/5 relative overflow-hidden backdrop-blur-xl bg-opacity-70"
                    >
                        {/* Status Message */}
                        <AnimatePresence>
                            {status.message && (
                                <motion.div
                                    initial={{ opacity: 0, y: -20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -20 }}
                                    className={`mb-6 p-4 rounded-xl flex items-center gap-3 font-bold text-sm ${status.type === "success"
                                        ? "bg-green-500/10 text-green-400 border border-green-500/20"
                                        : "bg-red-500/10 text-red-400 border border-red-500/20"
                                        }`}
                                >
                                    {status.type === "success" ? <FaCheckCircle /> : <FaExclamationCircle />}
                                    {status.message}
                                </motion.div>
                            )}
                        </AnimatePresence>

                        <div className="grid md:grid-cols-2 gap-6 mb-6">
                            <FormInput
                                label="Your Name"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                placeholder="Enter your full name"
                                required
                            />
                            <FormInput
                                label="Email Address"
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                placeholder="name@example.com"
                                required
                            />
                        </div>

                        <FormInput
                            label="Subject"
                            name="subject"
                            value={formData.subject}
                            onChange={handleChange}
                            placeholder="How can I help you?"
                            className="mb-6"
                        />

                        <div className="flex flex-col gap-2 mb-8">
                            <label className="text-sm font-bold text-[var(--text-primary)] px-1 uppercase tracking-widest text-[10px]">Message <span className="text-red-500">*</span></label>
                            <textarea
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                rows="5"
                                placeholder="Share your message or project details here..."
                                required
                                className="w-full px-5 py-4 rounded-2xl bg-[var(--bg-secondary)] border-2 border-transparent focus:border-[var(--accent-color)] focus:bg-[var(--bg-primary)] outline-none transition-all resize-none shadow-inner text-[var(--text-primary)] placeholder:text-[var(--text-secondary)]"
                            ></textarea>
                        </div>

                        <motion.button
                            type="submit"
                            disabled={isSubmitting}
                            className={`w-full py-4 rounded-2xl text-white font-bold flex items-center justify-center gap-3 transition-all relative overflow-hidden group shadow-xl ${isSubmitting ? "bg-gray-700 cursor-not-allowed" : ""
                                }`}
                            style={!isSubmitting ? { background: "var(--accent-gradient)" } : {}}
                            whileHover={!isSubmitting ? { scale: 1.02, boxShadow: "0 20px 25px -5px rgba(197, 160, 89, 0.3)" } : {}}
                            whileTap={!isSubmitting ? { scale: 0.98 } : {}}
                        >
                            {isSubmitting ? (
                                <>
                                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                                    <span>Sending...</span>
                                </>
                            ) : (
                                <>
                                    <span>Send Message</span>
                                    <FaPaperPlane className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                                </>
                            )}
                        </motion.button>
                    </form>
                </motion.div>
            </div>
        </SectionWrapper>
    );
};

const ContactItem = ({ icon, label, value, link }) => (
    <div className="flex items-start gap-5 group/item">
        <div className="w-12 h-12 rounded-2xl flex items-center justify-center bg-[var(--bg-secondary)] text-[var(--accent-color)] shadow-sm group-hover/item:bg-[var(--accent-color)] group-hover/item:text-[var(--bg-primary)] transition-all duration-300 transform group-hover/item:rotate-6">
            {icon}
        </div>
        <div className="flex-1">
            <p className="text-xs font-bold uppercase tracking-wider text-[var(--text-secondary)] mb-1">{label}</p>
            {link ? (
                <a href={link} className="text-lg font-semibold hover:text-[var(--accent-color)] transition-colors break-all">
                    {value}
                </a>
            ) : (
                <p className="text-lg font-semibold">{value}</p>
            )}
        </div>
    </div>
);

const FormInput = ({ label, type = "text", name, value, onChange, placeholder, required, className = "" }) => (
    <div className={`flex flex-col gap-2 ${className}`}>
        <label className="text-sm font-bold text-[var(--text-primary)] px-1">
            {label} {required && <span className="text-red-500">*</span>}
        </label>
        <input
            type={type}
            name={name}
            value={value}
            onChange={onChange}
            placeholder={placeholder}
            required={required}
            className="w-full px-5 py-3.5 rounded-2xl bg-[var(--bg-secondary)] border-2 border-transparent focus:border-[var(--accent-color)] focus:bg-[var(--bg-primary)] outline-none transition-all shadow-inner placeholder:text-[var(--text-secondary)]"
        />
    </div>
);

export default Contact;
