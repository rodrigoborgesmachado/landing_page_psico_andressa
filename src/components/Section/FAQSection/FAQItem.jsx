import React from 'react';
import styles from './FAQSection.module.css';

function FAQItem({ index, item, isOpen, onToggle }) {
    return (
        <div
            className={`${styles.faqDetails} ${isOpen ? styles.faqDetailsOpen : ''}`}
            onClick={() => onToggle(index)}
        >
            <summary className={styles.faqSummary}>
                <span className={styles.faqSummaryIcon}></span>
                {item.pergunta}
            </summary>
            <p className={`${styles.faqDetailsContent} ${isOpen ? styles.faqContentOpen : ''}`}>
                {item.resposta}
            </p>
        </div>
    );
}

export default FAQItem;
