import React, { useState, useContext } from "react";
import styles from "./css/FilterModalForm.module.css";

import Select from "react-select";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilter, faTrashCan } from "@fortawesome/free-solid-svg-icons";

import { MainContext } from "../context/MainContext";

const FilterModalForm = ({ closeModal }) => {
  const { data, filterData, changeFilter } = useContext(MainContext);
  const { topic, sector, country, region, source, end_year } = filterData;

  const [topicOption, setTopicOption] = useState({ value: topic });
  const [sectorOption, setSectorOption] = useState({ value: sector });
  const [countryOption, setCountryOption] = useState({ value: country });
  const [regionOption, setReiginOption] = useState({ value: region });
  const [sourceOption, setSourceOption] = useState({ value: source });
  const [endYearOption, setEndYearOption] = useState({ value: end_year });

  const formData = [
    {
      label: "Topics",
      defaultValue: topicOption,
      onChange: setTopicOption,
      options: getUniqueOptions("topic", data),
      placeholder: topic || "Select topic",
    },
    {
      label: "Sectors",
      defaultValue: sectorOption,
      onChange: setSectorOption,
      options: getUniqueOptions("sector", data),
      placeholder: sector || "Select sector",
    },
    {
      label: "Countries",
      defaultValue: countryOption,
      onChange: setCountryOption,
      options: getUniqueOptions("country", data),
      placeholder: country || "Select country",
    },
    {
      label: "Regions",
      defaultValue: regionOption,
      onChange: setReiginOption,
      options: getUniqueOptions("region", data),
      placeholder: region || "Select region",
    },
    {
      label: "Sources",
      defaultValue: sourceOption,
      onChange: setSourceOption,
      options: getUniqueOptions("source", data),
      placeholder: source || "Select source",
    },
    {
      label: "End Year",
      defaultValue: endYearOption,
      onChange: setEndYearOption,
      options: getUniqueOptions("end_year", data),
      placeholder: end_year || "Select end year",
    },
  ];

  const submitHandler = (event) => {
    event.preventDefault();
    const filter = {
      topic: topicOption.value,
      sector: sectorOption.value,
      country: countryOption.value,
      region: regionOption.value,
      source: sourceOption.value,
      end_year: endYearOption.value,
    };

    changeFilter({ ...filter });
    closeModal();
  };

  const clearFilter = () => {
    changeFilter({
      topic: "",
      country: "",
      region: "",
      sector: "",
      end_year: "",
      source: "",
    });
    closeModal();
  };

  return (
    <form className={styles.form} onSubmit={submitHandler}>
      {formData.map(
        ({ defaultValue, onChange, options, placeholder, label }, i) => {
          return (
            <div className={styles.inputContainer} key={i}>
              <label>{label}</label>
              <Select
                defaultValue={defaultValue.value}
                onChange={onChange}
                options={options}
                placeholder={placeholder}
                className={styles.select}
              />
            </div>
          );
        }
      )}

      <div className={styles.buttonContainer}>
        <button type="submit" className={styles.filterButton}>
          Filter <FontAwesomeIcon icon={faFilter} />
        </button>
        <button
          type="reset"
          className={styles.clearButton}
          onClick={clearFilter}
        >
          Clear <FontAwesomeIcon icon={faTrashCan} />
        </button>
      </div>
    </form>
  );
};

const getUniqueOptions = (key, data) => {
  let result = [];

  data.forEach((element) => {
    if (element[key].length > 0) {
      const index = result.findIndex(({ value }) => value === element[key]);

      if (index === -1) {
        result.push({ value: element[key], label: element[key] });
      }
    }
  });

  result.sort((a, b) => {
    if (a.value < b.value) return -1;
    if (a.value > b.value) return 1;
    return 0;
  });

  return result;
};

export default FilterModalForm;
