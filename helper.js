const formatReturn = (data) => {
  let valFormat = [];
  let stateCategory = "";
  for (let i = 0; i < data.length; i++) {
    if (stateCategory != data[i].category) {
      stateCategory = data[i].category;
      valFormat.push({
        id: data[i].id_category,
        category: data[i].category,
        menu: [],
      });
    } else {
      valFormat.forEach((item, index) => {
        if (item.category === stateCategory) {
          valFormat[index].menu.push({
            id: data[i].id_menu,
            name: data[i].name,
            price: data[i].price,
          });
        }
        console.log(index);
      });
    }
  }
  return valFormat;
};

module.exports = formatReturn;
