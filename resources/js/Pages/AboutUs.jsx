import GuestLayout from '@/Layouts/GuestLayout';
import Footer from '@/Components/Footer';
import AuthHeader from '@/Components/AuthHeader';

export default function About() {
    return (
        <div>
            <AuthHeader />
            <GuestLayout>
                <div>
                    About Us
                </div>
                <Footer />
            </GuestLayout>
        </div>
    );
}