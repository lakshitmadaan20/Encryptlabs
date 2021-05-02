import React from "react";
import Faq from "react-faq-component";

const data = {
    title: "FAQ (For Makeup Classes)",
    rows: [
        {
            title: "Will academy provide makeup products?",
            content: `We will be providing practice materials during the course, however, you will need to get your own personal hygiene materials like facial vipes, face towel, ear buds, dry tissues & tools such as beauty blender, brush set.`,
        },
        {
            title: "How can I register for the classes?",
            content:
                "To register for classes you will need to make the payment in advance prior to the classes. As soon as you register, you will get a confirmation email from us",
        },
        {
            title: "How can I make the payment",
            content: `We accept bank transfer, UPI & Gpay`,
        },
        {
            title: "How can I contact you?",
            content: <p>You can contacts us by filling the contact us form, you can also contact us on our social media platforms, it will take just a minute</p>,
        },
        {
            title: "Who can enroll for the classes",
            content: <p>Anyone, who is going to be a bride, are working females, are housewives or are makeup enthusiasts</p>,
        },
        {
            title: "What will be the duration",
            content: <p>Minimum of 3-4 hours</p>
        },
        {
            title: "What will I get in return?",
            content: <p>We will provide you with a certificate and an expertise knowledge to how to kickstart your career in makeup industry, how to rise on social media as well as a personalised photoshoot(but only in offline makeup classes)</p>
        }
    ]
};

const styles = {
    bgColor: 'white',
    titleTextColor: "black",
    rowTitleColor: "black",
    rowContentColor: 'blue',
    // arrowColor: "red",
};

const config = {
    animate: true,
    // arrowIcon: "V",
    tabFocus: true
};

const Questions = () => {
    return (
        <div className="mt-4 mb-4">
            <div className="container">
            <Faq
            data={data}
            styles={styles}
            config={config}
        />
         </div>
    </div>
    )
}

export default Questions;
