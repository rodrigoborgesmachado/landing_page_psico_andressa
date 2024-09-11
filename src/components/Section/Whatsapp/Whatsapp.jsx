import { useEffect, useState } from 'react';
import { FloatingWhatsApp } from 'react-floating-whatsapp';

export default function Whatsapp() {
    const [isMobile, setIsMobile] = useState(false);

    // Verifica o tamanho da tela para ajustar a posição do botão
    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768); // Define como mobile se a largura da tela for menor ou igual a 768px
        };

        handleResize(); // Executa na primeira renderização
        window.addEventListener('resize', handleResize); // Adiciona o listener para o resize

        return () => window.removeEventListener('resize', handleResize); // Remove o listener ao desmontar o componente
    }, []);

    return (
        <FloatingWhatsApp
            phoneNumber='+553496545701'
            accountName='Psicóloga Andressa'
            chatMessage='Olá! 🌟 Seja bem-vindo(a) ao nosso espaço de acolhimento e apoio. Como posso te ajudar?'
            statusMessage='Disponível'
            placeholder='Digite a sua mensagem'
            allowClickAway={true}
            allowEsc={true}
            darkMode={false}
            messageDelay={2}
            notification={true}
            notificationDelay={10}
            notificationSound={true}
            avatar='/images/whatsApp_Andressa.png'
            buttonStyle={isMobile ? {
                position: 'fixed',
                bottom: '120px',  // Altura para mobile
                right: '40px',   // Posição para mobile
                zIndex: 1000
            } : {
                position: 'fixed',
                bottom: '60px', // Altura para desktop
                right: '60px',   // Posição para desktop
                zIndex: 1000
            }}
        />
    );
}
