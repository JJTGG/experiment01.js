import { useState } from "react";
import Navigation from "../components/Navigation";
import styles from "../styles/Track.module.css";

export default function Track() {
  const [transportation, setTransportation] = useState("");
  const [energyUse, setEnergyUse] = useState("");
  const [diet, setDiet] = useState("Vegetarian");
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event) {
    event.preventDefault();

    const activityData = {
      transportation: transportation.trim(),
      energyUse: Number(energyUse),
      diet,
    };

    console.log("EcoTrack Mini Activity:", activityData);

    setSubmitted(true);
  }

  return (
    <>
      <Navigation />

      <main className={styles.main}>
        <section className={styles.card}>
          <h1>Track Your Activity</h1>

          <p className={styles.description}>
            Enter your daily activities to start tracking
            your environmental impact.
          </p>

          <form
            onSubmit={handleSubmit}
            className={styles.form}
          >
            <div className={styles.field}>
              <label htmlFor="transportation">
                Transportation
              </label>

              <input
                id="transportation"
                name="transportation"
                type="text"
                placeholder="e.g. Car, Bus, Bicycle"
                value={transportation}
                onChange={(event) => {
                  setTransportation(event.target.value);
                  setSubmitted(false);
                }}
                required
              />
            </div>

            <div className={styles.field}>
              <label htmlFor="energyUse">
                Energy Use (kWh)
              </label>

              <input
                id="energyUse"
                name="energyUse"
                type="number"
                min="0"
                step="any"
                placeholder="e.g. 8.5"
                value={energyUse}
                onChange={(event) => {
                  setEnergyUse(event.target.value);
                  setSubmitted(false);
                }}
                required
              />
            </div>

            <div className={styles.field}>
              <label htmlFor="diet">Diet</label>

              <select
                id="diet"
                name="diet"
                value={diet}
                onChange={(event) => {
                  setDiet(event.target.value);
                  setSubmitted(false);
                }}
              >
                <option value="Vegetarian">Vegetarian</option>
                <option value="Vegan">Vegan</option>
                <option value="Omnivore">Omnivore</option>
              </select>
            </div>

            <button type="submit" className={styles.button}>
              Submit Activity
            </button>

            {submitted && (
              <p className={styles.success} role="status">
                Activity submitted. Check your browser
                developer console to view the data.
              </p>
            )}
          </form>
        </section>
      </main>
    </>
  );
}