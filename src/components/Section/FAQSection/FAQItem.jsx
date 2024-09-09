import React from 'react';
import styles from './FAQSection.module.css';

function FAQItem({ index, item, isOpen, onToggle }) {
    console.log('Pergunta', index, 'isOpen:', isOpen); 
    return (
        <div
            className={`${styles.faqDetails} ${isOpen ? styles.faqDetailsOpen : ''}`}
            onClick={() => onToggle(index)}
        >
            <summary className={styles.faqSummary}>
                <span className={styles.faqSummaryIcon}></span>
                {item.pergunta}
            </summary>
            {/* O <p> está sempre no DOM, o controle de visibilidade será feito via CSS */}
            <p className={`${styles.faqDetailsContent} ${isOpen ? styles.faqContentOpen : ''}`}>
                {item.resposta}
            </p>
        </div>
    );
}

export default FAQItem;
