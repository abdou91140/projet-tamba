// pages/_error.js or pages/_error.tsx
import React from 'react';

const CustomError = ({ statusCode }) => {
  return (
    <div className="container mx-auto">
    <h1 className="text-4xl text-center sm:text-5xl font-semibold tracking-wide text-main-color"> {statusCode} - Erreur</h1>
      <h2>Désolé, Y'a un problème.</h2>
      <p>Nous somme sur le dossier pour réparer le bug</p>
    </div>
  );
};

CustomError.getInitialProps = ({ err, res, xhr }) => {
  const statusCode = res ? res.statusCode : xhr ? xhr.status : null;
  return { statusCode };
};

export default CustomError;
