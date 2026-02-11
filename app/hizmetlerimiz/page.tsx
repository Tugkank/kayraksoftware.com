import Services from "@/components/Services";
import Navbar from "@/components/Navbar";

export default function Hizmetlerimiz() {
    return (
        <main className="min-h-screen bg-zinc-50 dark:bg-black">
            <div className="pt-20"> {/* Add padding top to account for fixed navbar */}
                <Services />
            </div>
        </main>
    );
}
