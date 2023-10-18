import styles from "./CountryList.module.css";
import Spinner from "./Spinner";
import CountryItem from "./CityItem";
import Message from "./Message";

function CountryList({ cities, isLoading }) {
  const countries = cities.map((city) => city.country);
  if (isLoading) return <Spinner />;
  if (!cities.length)
    return (
      <Message message="Add first city by clicking on a city on the map" />
    );

  return (
    <ul className={styles.countryList}>
      {countries.map((country) => (
        <CountryItem country={country} />
      ))}
    </ul>
  );
}

export default CountryList;
