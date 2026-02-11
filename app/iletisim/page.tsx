import Navbar from "@/components/Navbar";

export default function Iletisim() {
    return (
        <main className="min-h-screen bg-zinc-50 dark:bg-black pt-24 px-6">
            <div className="container mx-auto">
                <h1 className="text-4xl md:text-5xl font-bold text-zinc-900 dark:text-white mb-8">İletişim</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    <div>
                        <p className="text-zinc-600 dark:text-zinc-400 text-lg mb-4">
                            Projeleriniz veya sorularınız için bizimle iletişime geçmekten çekinmeyin.
                        </p>
                        <div className="space-y-4">
                            <div className="flex items-center space-x-3 text-zinc-800 dark:text-zinc-300">
                                <span>📧</span>
                                <a href="mailto:info@kayraksoftware.com" className="hover:underline">info@kayraksoftware.com</a>
                            </div>
                            {/* Add more contact info here */}
                        </div>
                    </div>
                    {/* Optional: Add a contact form here later */}
                </div>
            </div>
        </main>
    );
}
