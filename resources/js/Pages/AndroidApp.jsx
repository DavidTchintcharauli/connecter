import GuestLayout from '@/Layouts/GuestLayout';
import Footer from '@/Components/Footer';
import AuthHeader from '@/Components/AuthHeader';

export default function Android() {
    return (
        <div>
            <AuthHeader />
            <GuestLayout>
                <div>
                    Android App
                </div>
                <Footer />
            </GuestLayout>
        </div>
    );
}