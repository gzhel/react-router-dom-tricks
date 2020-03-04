import React from "react";

import GoBack from "../GoBack";
import Push from "../Push";
import CustomHistory from "../CustomHistory";
import useStyles from "./styles";

const ClosePopupPage = () => {
  const styles = useStyles();

  return (
    <div className={styles.container}>
      <GoBack dialogClassName={styles.dialog} />
      <Push dialogClassName={styles.dialog} />
      <CustomHistory dialogClassName={styles.dialog} />
    </div>
  );
};

export default ClosePopupPage;
