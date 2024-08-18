import GuestLayout from '@/Layouts/GuestLayout';
import Footer from '@/Components/Footer';
import AuthHeader from '@/Components/AuthHeader';


export default function HelpAndSupport() {
    return (
        <div>
            <AuthHeader />
            <GuestLayout>
                <div>
                    Help And Support
                </div>
                <Footer />
            </GuestLayout>
        </div>
    );
}