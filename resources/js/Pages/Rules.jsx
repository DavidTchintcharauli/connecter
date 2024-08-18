import GuestLayout from '@/Layouts/GuestLayout';
import Footer from '@/Components/Footer';
import AuthHeader from '@/Components/AuthHeader';


export default function Rules() {
    return (
        <div>
            <AuthHeader />
            <GuestLayout>
                <div>
                    Rules
                </div>
                <Footer />
            </GuestLayout>
        </div>
    );
}