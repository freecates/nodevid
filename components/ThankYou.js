const ThankYou = () => {
  return (
    <div className='fade-in'>
      <h1>Moltes gràcies per inscriure el teu projecte a Nodevid!</h1>
      <p>
        <small>
          Hem desat les teves dades de projecte. En breu ens posarem en contacte
          amb tu via correu-e.
        </small>
      </p>

      <style jsx>{`
        .fade-in {
          animation-name: fadeIn;
          animation-duration: 1.3s;
          animation-timing-function: cubic-bezier(0, 0, 0.4, 1);
          animation-fill-mode: forwards;
        }
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
      `}</style>
    </div>
  );
};

export default ThankYou;
