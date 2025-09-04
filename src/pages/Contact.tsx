import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, Clock, CheckCircle, Calendar, Globe, Linkedin, Github, Award, Users, Briefcase } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Badge } from '@/components/ui/badge';
import { useState } from 'react';
import { businessInfo, contactInfo, services, socialLinks } from '@/data';
import AnimatedBackground from '@/components/common/AnimatedBackground';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });
    const [isSubmitted, setIsSubmitted] = useState(false);



    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Simulate form submission
        setIsSubmitted(true);
        setTimeout(() => setIsSubmitted(false), 3000);

        // Create mailto link with form data
        const subject = encodeURIComponent(formData.subject || 'Contact from Portfolio');
        const body = encodeURIComponent(
            `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
        );
        window.location.href = `mailto:tamjidzihan@gmail.com?subject=${subject}&body=${body}`;
    };

    return (
        <div className="min-h-screenok">
            {/* Hero Section */}
            <section className="relative py-24 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-blue-950/20 dark:via-indigo-950/20 dark:to-purple-950/20 overflow-hidden">
                <AnimatedBackground />
                {/* Background Pattern */}
                <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
                <div className="absolute top-20 left-20 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl"></div>
                <div className="absolute bottom-20 right-20 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl"></div>

                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-center mb-16"
                    >
                        <div className="inline-flex items-center gap-2 bg-green-500/10 text-green-700 dark:text-green-400 px-6 py-3 rounded-full text-sm font-semibold mb-8 border border-green-500/20">
                            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                            Available for New Projects
                        </div>
                        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-8">
                            <span className="block text-foreground mb-2">Let's Build</span>
                            <span className="block bg-gradient-to-r from-blue-600 via-purple-600 to-teal-600 bg-clip-text text-transparent">
                                Something Amazing
                            </span>
                        </h1>
                        <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed mb-8">
                            Transform your vision into reality with professional web development services.
                            I specialize in creating scalable, modern applications that drive business growth.
                        </p>

                        {/* Business Stats */}
                        <div className="flex flex-wrap justify-center gap-8 mt-12">
                            {businessInfo.map((info, index) => {
                                const Icon = info.icon;
                                return (
                                    <motion.div
                                        key={info.title}
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.3 + index * 0.1 }}
                                        className="text-center"
                                    >
                                        <div className="w-16 h-16 mx-auto mb-3 bg-primary/10 rounded-full flex items-center justify-center">
                                            <Icon className="w-8 h-8 text-primary" />
                                        </div>
                                        <div className="text-2xl font-bold text-foreground">{info.value}</div>
                                        <div className="text-sm font-medium text-primary">{info.title}</div>
                                        <div className="text-xs text-muted-foreground">{info.description}</div>
                                    </motion.div>
                                );
                            })}
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Contact Form & Info */}
            <section className="py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-16">
                        {/* Contact Form */}
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                        >
                            <Card className="border-border/50 bg-card/50 backdrop-blur-sm">
                                <CardHeader>
                                    <CardTitle className="text-2xl flex items-center gap-3">
                                        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500/10 to-purple-600/10 flex items-center justify-center border border-blue-500/20">
                                            <Send className="w-6 h-6 text-primary" />
                                        </div>
                                        Send Message
                                    </CardTitle>
                                    <p className="text-muted-foreground">
                                        Fill out the form below and I'll get back to you within 24 hours.
                                    </p>
                                </CardHeader>
                                <CardContent>
                                    {isSubmitted ? (
                                        <motion.div
                                            initial={{ opacity: 0, scale: 0.8 }}
                                            animate={{ opacity: 1, scale: 1 }}
                                            className="text-center py-8"
                                        >
                                            <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                                            <h3 className="text-xl font-semibold mb-2">Message Sent!</h3>
                                            <p className="text-muted-foreground">
                                                Thank you for reaching out. I'll respond to your message soon.
                                            </p>
                                        </motion.div>
                                    ) : (
                                        <form onSubmit={handleSubmit} className="space-y-6">
                                            <div className="grid sm:grid-cols-2 gap-4">
                                                <div className="space-y-2">
                                                    <Label htmlFor="name">Full Name *</Label>
                                                    <Input
                                                        id="name"
                                                        name="name"
                                                        value={formData.name}
                                                        onChange={handleInputChange}
                                                        placeholder="Your full name"
                                                        required
                                                        className="bg-background/50"
                                                    />
                                                </div>
                                                <div className="space-y-2">
                                                    <Label htmlFor="email">Email Address *</Label>
                                                    <Input
                                                        id="email"
                                                        name="email"
                                                        type="email"
                                                        value={formData.email}
                                                        onChange={handleInputChange}
                                                        placeholder="your.email@example.com"
                                                        required
                                                        className="bg-background/50"
                                                    />
                                                </div>
                                            </div>
                                            <div className="space-y-2">
                                                <Label htmlFor="subject">Subject *</Label>
                                                <Input
                                                    id="subject"
                                                    name="subject"
                                                    value={formData.subject}
                                                    onChange={handleInputChange}
                                                    placeholder="What's this about?"
                                                    required
                                                    className="bg-background/50"
                                                />
                                            </div>
                                            <div className="space-y-2">
                                                <Label htmlFor="message">Message *</Label>
                                                <Textarea
                                                    id="message"
                                                    name="message"
                                                    value={formData.message}
                                                    onChange={handleInputChange}
                                                    placeholder="Tell me about your project, timeline, and any specific requirements..."
                                                    rows={6}
                                                    required
                                                    className="bg-background/50 resize-none"
                                                />
                                            </div>
                                            <Button type="submit" size="lg" className="w-full group">
                                                <Send className="w-4 h-4 mr-2 group-hover:translate-x-1 transition-transform" />
                                                Send Message
                                            </Button>
                                        </form>
                                    )}
                                </CardContent>
                            </Card>
                        </motion.div>

                        {/* Contact Info & Services */}
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="space-y-8"
                        >
                            {/* Contact Information */}
                            <Card className="border-border/50 bg-card/50 backdrop-blur-sm">
                                <CardHeader>
                                    <CardTitle className="text-2xl flex items-center gap-3">
                                        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500/10 to-purple-600/10 flex items-center justify-center border border-blue-500/20">
                                            <Mail className="w-6 h-6 text-primary" />
                                        </div>
                                        Contact Information
                                    </CardTitle>
                                    <p className="text-muted-foreground">
                                        Professional communication channels for business inquiries and collaboration.
                                    </p>
                                </CardHeader>
                                <CardContent className="space-y-4">
                                    {contactInfo.map((info, index) => {
                                        const Icon = info.icon;
                                        return (
                                            <motion.div
                                                key={info.label}
                                                initial={{ opacity: 0, y: 20 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                transition={{ delay: 0.3 + index * 0.1 }}
                                                className="group p-5 rounded-xl bg-gradient-to-r from-background/50 to-background/30 hover:from-primary/5 hover:to-primary/10 border border-border/50 hover:border-primary/20 transition-all duration-300"
                                            >
                                                <div className="flex items-start gap-4">
                                                    <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary/10 to-primary/20 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                                                        <Icon className="w-6 h-6 text-primary" />
                                                    </div>
                                                    <div className="flex-1">
                                                        <div className="flex items-center justify-between mb-2">
                                                            <h4 className="font-semibold text-lg">{info.label}</h4>
                                                            <Badge variant="outline" className="text-xs">
                                                                {info.availability}
                                                            </Badge>
                                                        </div>
                                                        <p className="text-muted-foreground text-sm mb-3">{info.description}</p>
                                                        {info.href !== '#' ? (
                                                            <a
                                                                href={info.href}
                                                                className="text-primary hover:underline font-medium text-lg group-hover:text-primary/80 transition-colors"
                                                            >
                                                                {info.value}
                                                            </a>
                                                        ) : (
                                                            <span className="font-medium text-lg">{info.value}</span>
                                                        )}
                                                    </div>
                                                </div>
                                            </motion.div>
                                        );
                                    })}
                                </CardContent>
                            </Card>
                        </motion.div>
                        {/* Social Media & Professional Links */}
                        <Card className="border-border/50 bg-card/50 backdrop-blur-sm">
                            <CardHeader>
                                <CardTitle className="text-2xl flex items-center gap-3">
                                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-green-500/10 to-blue-500/10 flex items-center justify-center border border-green-500/20">
                                        <Globe className="w-6 h-6 text-primary" />
                                    </div>
                                    Professional Profiles
                                </CardTitle>
                                <p className="text-muted-foreground">
                                    Connect with me on professional platforms and view my work.
                                </p>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                {socialLinks.map((social, index) => {
                                    const Icon = social.icon;
                                    return (
                                        <motion.div
                                            key={social.label}
                                            initial={{ opacity: 0, x: -20 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            transition={{ delay: 0.5 + index * 0.1 }}
                                            className="group"
                                        >
                                            <a
                                                href={social.href}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="flex items-center gap-4 p-4 rounded-xl bg-gradient-to-r from-background/50 to-background/30 hover:from-primary/5 hover:to-primary/10 border border-border/50 hover:border-primary/20 transition-all duration-300"
                                            >
                                                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/10 to-primary/20 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                                                    <Icon className="w-5 h-5 text-primary" />
                                                </div>
                                                <div className="flex-1">
                                                    <h4 className="font-semibold">{social.label}</h4>
                                                    <p className="text-muted-foreground text-sm mb-1">{social.description}</p>
                                                    <span className="text-primary font-medium group-hover:underline">
                                                        {social.value}
                                                    </span>
                                                </div>
                                            </a>
                                        </motion.div>
                                    );
                                })}
                            </CardContent>
                        </Card>

                        {/* Services Offered */}
                        <Card className="border-border/50 bg-card/50 backdrop-blur-sm">
                            <CardHeader>
                                <CardTitle className="text-2xl flex items-center gap-3">
                                    <Clock className="w-6 h-6 text-primary" />
                                    Services I Offer
                                </CardTitle>
                                <p className="text-muted-foreground">
                                    Specialized in modern web development and scalable solutions.
                                </p>
                            </CardHeader>
                            <CardContent>
                                <div className="grid gap-3">
                                    {services.map((service, index) => (
                                        <motion.div
                                            key={service}
                                            initial={{ opacity: 0, x: -20 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            transition={{ delay: 0.5 + index * 0.1 }}
                                            className="flex items-center gap-3 p-3 rounded-lg bg-background/30"
                                        >
                                            <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                                            <span className="font-medium">{service}</span>
                                        </motion.div>
                                    ))}
                                </div>
                            </CardContent>
                        </Card>

                    </div>
                </div>
            </section>

            {/* Professional Commitment */}
            <section className="py-20 bg-muted/30">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <Card className="border-border/50 bg-card/50 backdrop-blur-sm overflow-hidden relative">
                        <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 to-blue-500/5"></div>
                        <CardContent className="p-8 relative">
                            <div className="text-center">
                                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-green-500/20 to-blue-500/20 flex items-center justify-center mx-auto mb-6 border-2 border-green-500/20">
                                    <Clock className="w-10 h-10 text-green-500" />
                                </div>
                                <h3 className="text-2xl font-bold mb-3">Professional Commitment</h3>
                                <p className="text-muted-foreground mb-6 leading-relaxed">
                                    I prioritize clear communication and timely responses. Your project success is my commitment.
                                </p>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                                    <div className="p-4 rounded-lg bg-background/50">
                                        <div className="text-2xl font-bold text-green-500">&lt; 4hrs</div>
                                        <div className="text-sm text-muted-foreground">Initial Response</div>
                                    </div>
                                    <div className="p-4 rounded-lg bg-background/50">
                                        <div className="text-2xl font-bold text-blue-500">24/7</div>
                                        <div className="text-sm text-muted-foreground">Email Support</div>
                                    </div>
                                </div>
                                <Badge variant="secondary" className="bg-green-500/10 text-green-700 dark:text-green-400 px-4 py-2">
                                    Professional Service Guarantee
                                </Badge>
                            </div>
                        </CardContent>
                    </Card>

                </div>
            </section>
            {/* FAQ Section */}
            <section className="py-20 bg-muted/30">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-3xl font-bold mb-4">Frequently Asked Questions</h2>
                        <p className="text-muted-foreground">
                            Quick answers to common questions about working together.
                        </p>
                    </motion.div>

                    <div className="grid gap-6">
                        {[
                            {
                                question: "What's your typical project timeline?",
                                answer: "Project timelines vary based on complexity. Simple websites take 1-2 weeks, while complex applications can take 4-8 weeks. I'll provide a detailed timeline after understanding your requirements."
                            },
                            {
                                question: "Do you work with international clients?",
                                answer: "Absolutely! I work with clients worldwide and am comfortable with different time zones. I maintain clear communication through email, video calls, and project management tools."
                            },
                            {
                                question: "What technologies do you specialize in?",
                                answer: "I specialize in React, TypeScript, Node.js, Python, and modern web technologies. I'm also experienced with cloud platforms like AWS and deployment tools."
                            },
                            {
                                question: "Do you provide ongoing support?",
                                answer: "Yes, I offer post-launch support and maintenance packages. This includes bug fixes, updates, and feature enhancements to keep your application running smoothly."
                            }
                        ].map((faq, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                            >
                                <Card className="border-border/50 bg-card/50 backdrop-blur-sm">
                                    <CardContent className="p-6">
                                        <h3 className="font-semibold text-lg mb-3">{faq.question}</h3>
                                        <p className="text-muted-foreground leading-relaxed">{faq.answer}</p>
                                    </CardContent>
                                </Card>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Contact;