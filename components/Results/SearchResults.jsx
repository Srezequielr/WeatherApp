import Image from "next/image";
import styles from "./Results.module.css";

export default function SearchResult(props) {
  const data = props.data;

  console.log(data.cod);

  if (data.cod == 404) {
    return (
      <section className={styles.resultsContainer}>
        <h3 className={styles.message}>Ciudad no encontrada</h3>
      </section>
    );
  } 

  if (data.cod == 200) {
    return (
      <section className={styles.resultsContainer}>
        <div className={styles.nameConteiner}>
          <h4>{data.name}</h4>
        </div>
        {/* <div className={styles.dataContainer}> */}
        <img
          src={`https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`}
          width="20%"
        />
        <h5>{data.main.temp}</h5>
        {/* </div> */}
      </section>
    );
  }

    return (
      <section className={styles.resultsContainer}>
        <h3 className={styles.message}>Busque una ciudad</h3>
      </section>
    );
}
