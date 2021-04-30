import React from "react";
import Faq from "react-faq-component";

const data = {
    title: "FAQ (How it works)",
    rows: [
        {
            title: "Which Brands do you use for bridal makeup?",
            content: `Our bridal vanity comprises only of highend international brands such as Huda Beauty, Two faced, Mav, Estee Lauder, Makeup Forver and many more`,
        },
        {
            title: "Which one should I use, HD or Airbrush",
            content:
                "For clear flawless skin you can go with HD makeup. However, acne prone or pigmented skin Air Brush is more advisable",
        },
        {
            title: "Which one stays longer HD or Airbrush",
            content: `We use high international products for all our makeups. THE MAKEU STAYS INTACT FOR 15-16 HOURS`,
        },
        {
            title: "How much time will it take to do the makeup",
            content: <p>We need approximately 3 hours for bridal makeup.</p>,
        },
        {
            title: "How do I book?",
            content: <p>For bookings get in touch with our managers, connect with us on social media plaforms and you can also mail us at info.dikshita@gmail.com</p>,
        },,
        {
            title: "How much do I need to pay in advance",
            content: <p>you have to the advance of 50% of the total value</p>
        },
        {
            title: "Do I have to bring flowers and accessories?",
            content: <p>Yes, brides carry flowers with them on the wedding date.</p>
        },
        {
            title: "How to enroll for makeup classes",
            content: <p>You contact us for the enrollment of makeup classes</p>
        }
    ],
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
