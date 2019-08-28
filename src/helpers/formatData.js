const formatData = (listsArray, itemsArray) => {
  return listsArray.map(list => {
    list.item = itemsArray.filter(e => e.list_id === list.id);
    return list;
  });
};

module.exports = formatData;
