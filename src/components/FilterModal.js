import React, { useState } from "react";
import styles from "./css/FilterModal.module.css";

import FilterModalForm from "./FilterModalForm";

import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilter } from "@fortawesome/free-solid-svg-icons";

const FilterModal = () => {
  const [open, setOpen] = useState(false);

  const onOpenModal = () => setOpen(true);
  const onCloseModal = () => setOpen(false);


  return (
    <div>
      <button onClick={onOpenModal}>
        Filter <FontAwesomeIcon icon={faFilter} />
      </button>

      <Modal open={open} onClose={onCloseModal} center>
        <div className={styles.modalContainer}>
          <h1 className={styles.title}>
            Filter options <FontAwesomeIcon icon={faFilter} />
          </h1>
          <FilterModalForm closeModal={onCloseModal}/>
        </div>
      </Modal>
    </div>
  );
};

export default FilterModal;
