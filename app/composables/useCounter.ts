export const useCounter = () => {
  const shirts = useState("shirts", () => 0);
  const pants = useState("pants", () => 0);

  const addShirt = () => shirts.value++;
  const addPant = () => pants.value++;

  // to remove
  const removeShirt = () => {
    if (shirts.value > 0) shirts.value--;
  };
  const removePant = () => {
    if (pants.value > 0) pants.value--;
  };

  return {
    shirts,
    pants,
    addShirt,
    addPant,
    removeShirt,
    removePant,
  };
};
