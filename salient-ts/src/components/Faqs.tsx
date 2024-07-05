import Image from 'next/image'

import { Container } from '@/components/Container'
import backgroundImage from '@/images/background-faqs.jpg'

const faqs = [
  [
    {
      question: 'How does it work?',
      answer: 'Privify streamlines the ISO/IEC 27001:2022 compliance process by automating the collection and analysis of your company’s security controls, policies, and procedures. It provides detailed reports and recommendations to ensure the organization meets all necessary standards. It simplifies the audit process so that you can focus on decision making.'
    },
    {
      question: 'What kind of Technologies are used?',
      answer: 'The tool leverages advanced Gen AI, machine learning algorithms, natural language processing, and secure cloud-based infrastructures to efficiently audit and provide insights on your security posture.'
    },
    {
      question: 'Will this replace all consultants?',
      answer: 'While our tool significantly reduces the repetitive aspects of audits, it is designed to complement the work of consultants. It provides comprehensive data and insights that consultants can use to focus on high-level strategic planning and remediation.'
    }
  ],
  [
    {
      question: 'How can I start using it?',
      answer: 'To start using our AI-based auditing tool, Contact us over email at support@privify.org. Our support team is available to assist you at every step.'
    },
    {
      question: 'How much will this cost me?',
      answer: 'The cost varies based on the size of your organization and the specific requirements of your audit. Privify sells licences for each organisation. Please contact our sales team for a detailed quote tailored to your needs.'
    },
    {
      question: 'What all certifications does it cover?',
      answer: 'Our tool is designed to help with ISO/IEC 27001:2022 compliance specifically. However, it can also assist with aligning your practices to other related standards and regulations such as GDPR, HIPAA, and NIST frameworks.'
    }
  ],
  [
    {
      question: 'How is this sold?',
      answer: 'The auditing tool is available through a subscription-based/license model. You can choose from monthly or annual plans, with options to scale based on the size and complexity of your organization.'
    },
    {
      question: 'How will I get a discount if I buy multiple licenses?',
      answer: 'We offer volume discounts for organizations purchasing multiple licenses. Please contact our sales team to discuss your specific needs and receive a customized discounted plan.'
    },
    {
      question: 'What to do if I lose my password?',
      answer: 'If you lose your password, you can ping at support@privify.org. If you need further assistance, our support team is available to help you reset your password securely.'
    }
  ]
];


export function Faqs() {
  return (
    <section
      id="faq"
      aria-labelledby="faq-title"
      className="relative overflow-hidden bg-slate-50 py-20 sm:py-32"
    >
      <Image
        className="absolute left-1/2 top-0 max-w-none -translate-y-1/4 translate-x-[-30%]"
        src={backgroundImage}
        alt=""
        width={1558}
        height={946}
        unoptimized
      />
      <Container className="relative">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2
            id="faq-title"
            className="font-display text-3xl tracking-tight text-slate-900 sm:text-4xl"
          >
            Frequently asked questions
          </h2>
          <p className="mt-4 text-lg tracking-tight text-slate-700">
            If you can’t find what you’re looking for, email our support team at support @ privify.org
            and if we will get back to you.
          </p>
        </div>
        <ul
          role="list"
          className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 lg:max-w-none lg:grid-cols-3"
        >
          {faqs.map((column, columnIndex) => (
            <li key={columnIndex}>
              <ul role="list" className="flex flex-col gap-y-8">
                {column.map((faq, faqIndex) => (
                  <li key={faqIndex}>
                    <h3 className="font-display text-lg leading-7 text-slate-900">
                      {faq.question}
                    </h3>
                    <p className="mt-4 text-sm text-slate-700">{faq.answer}</p>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  )
}
