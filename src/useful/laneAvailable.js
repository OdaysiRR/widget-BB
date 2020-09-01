
const laneAvailable = (total, max, lanes, lane) => {
   const laneInicial =
      total > max
        ? total % max !== 0
          ? Math.floor(total / max) + 1
          : total / max
        : lane;
   const laneFinal = total >= lanes ? lanes : total;
    return laneInicial <= lane && lane <= laneFinal ? true : false;
  };

  export default laneAvailable;