const baseRepository = model => {
  const create = data => model.create(data);

  const updateById = async (id, data) => {
    const result = await model.update(data, {
      where: { id }
    });

    return result;
  };

  const deleteById = id => model.destroy({
    where: { id }
  });

  const getAll = () => model.findAll();

  const getById = id => model.findByPk(id);

  return {
    getAll,
    getById,
    create,
    updateById,
    deleteById
  };
};

export default baseRepository;
