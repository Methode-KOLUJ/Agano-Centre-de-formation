import Link from "next/link";

export default function Home() {
  return (
    <main className="container">
      <img
        className="cone"
        src="/Chantier.png"
        alt="Cône de chantier"
      />

      <h1>Mise à jour du site</h1>

      <p>
        Nous travaillons sur la mise à jour du site d'Agano Centre de
        Formation.{" "}
        <Link
          href="https://aganoservicesconsultances.com"
          target="_blank"
        >
          Cliquez ici
        </Link>{" "}
        pour en apprendre davantage sur la société mère !
      </p>

      <div className="progress-container">
        <div className="progress-bar"></div>
      </div>

      <div className="progress-text">
        Travaux en cours...
      </div>
    </main>
  );
}