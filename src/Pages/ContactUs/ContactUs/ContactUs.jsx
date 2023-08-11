import React from 'react';
import useTitle from '../../../hooks/useTitle';
import ContactForm from '../ContactForm/ContactForm';
import ContactUsHeader from '../ContactUsHeader/ContactUsHeader';
import OfficeAddresses from '../OfficeAddresses/OfficeAddresses';

function ContactUs() {
    useTitle('Contact Us | Pro Peak');
    return (
        <>
            <ContactUsHeader />
            <div className="max-w-[1115px] mx-auto">
                <OfficeAddresses />
                <ContactForm />
            </div>
        </>
    );
}

export default ContactUs;
