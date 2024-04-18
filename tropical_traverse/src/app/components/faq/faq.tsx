'use client';
import { SetStateAction, useState } from "react";
import { ChevronDown } from 'lucide-react';
import './faq.css'


export default function Page() {

    const [selected, setSelected] = useState(null)
    const toggle = (i) =>{
        if (selected === i){
            return setSelected(null)
        }
        setSelected(i)
    }

    const ques = [

        {
            question: 'How do I book a driver for my trip?',
            answer: `Booking a driver for your trip is easy! Simply visit 
            our website and enter your location, date, and time of travel. 
            Our system will then display available drivers in your area. 
            You can choose the one that best fits your needs and budget, 
            and proceed to book them directly through our platform.`,
        },
        {
            question: 'Can I select a specific type of vehicle for my trip?',
            answer: `Yes, you can! During the booking process, you\'ll have 
            the option to specify your preferred type of vehicle, such as sedan, 
            SUV, or minivan. Additionally, you can indicate any special requirements 
            or preferences you may have, such as child seats or wheelchair accessibility. 
            Our platform will then match you with drivers who meet your criteria.`,
        },
        {
            question: 'What safety measures are in place for passengers?',
            answer: `The safety and security of our passengers are our 
            top priorities. All drivers on our platform undergo a thorough 
            screening process, including background checks and vehicle inspections, 
            to ensure they meet our safety standards. Additionally, we provide real-time 
            tracking of rides, so you can share your trip details with friends or family 
            for added peace of mind. We also have a feedback system in place, allowing 
            passengers to rate and review their experience with drivers, helping us 
            maintain a high level of service quality.`,
        }
    ];

    return (
    <>
    <div className="faq-wrapper">
        <h3 className="faq-title">FAQs</h3>
        <div className="faqs">
            {ques.map((q, i) =>(
                <div className="faq-item">
                    <div className="item-title" onClick={() => toggle(i)}>
                        <h2>{q.question}</h2>
                        <span><ChevronDown /></span>
                    </div>
                    <div className={selected === i ? "item-content show" : "item-content"} >{q.answer}</div>
                </div>
                
            ))}
        </div>
    </div>
    </>
    );
  }
  