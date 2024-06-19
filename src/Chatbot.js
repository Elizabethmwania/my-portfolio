import React, { useEffect } from 'react';

const Chatbot = () => {
  useEffect(() => {
    const scriptConfig = document.createElement('script');
    scriptConfig.innerHTML = `
      window.GPTTConfig = {
        uuid: "f943af876bcf4715a8273a16fe18245f"
      };
    `;
    document.body.appendChild(scriptConfig);

    const script = document.createElement('script');
    script.src = 'https://app.gpt-trainer.com/widget/f943af876bcf4715a8273a16fe18245f';
    script.defer = true;
    document.body.appendChild(script);

    // Cleanup function to remove the scripts when the component is unmounted
    return () => {
      document.body.removeChild(scriptConfig);
      document.body.removeChild(script);
    };
  }, []);

  return null;
};

export default Chatbot;
