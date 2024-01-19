import React from 'react';

const CustomError = ({ statusCode }) => {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="container mx-auto text-center">
        <h1 className="text-4xl sm:text-5xl font-semibold tracking-wide text-main-color pb-10">{statusCode} - Erreur</h1>
        <h2>Désolé, Y'a un problème. Nous sommes sur le dossier pour réparer le bug ...</h2>
      </div>
    </div>
  );
};

CustomError.getInitialProps = ({ err, res, xhr }) => {
  const statusCode = res ? res.statusCode : xhr ? xhr.status : null;
  return { statusCode };
};

export default CustomError;
