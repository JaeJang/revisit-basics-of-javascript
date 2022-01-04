const carService = function () {
  const carList = [];
  return {
    addCar: function (car) {
      carList.push(car);
    },
    getList: function () {
      return carList;
    },
  };
};

export default carService;
