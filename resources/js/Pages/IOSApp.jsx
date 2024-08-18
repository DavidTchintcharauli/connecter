import GuestLayout from '@/Layouts/GuestLayout';
import Footer from '@/Components/Footer';
import AuthHeader from '@/Components/AuthHeader';


export default function IOSApp() {
    return (
        <div>
            <AuthHeader />
            <GuestLayout>
                <div>
                    IOSApp
                </div>
                <Footer />
            </GuestLayout>
        </div>
    );
}