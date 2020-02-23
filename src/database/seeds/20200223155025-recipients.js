module.exports = {
  up: QueryInterface => {
    return QueryInterface.bulkInsert(
      'recipients',
      [
        {
          name: "Alberto",
          street: "Av. Romualdo Galvao",
          number: "456",
          complement: "",
          city: "Natal",
          state: "RN",
          zipcode: "59123321",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: "Pedro",
          street: "Av. Prudente de Morais",
          number: "159",
          complement: "",
          city: "Natal",
          state: "RN",
          zipcode: "59123159",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: "Carlos",
          street: "Av. Lima e Silva",
          number: "789",
          complement: "",
          city: "Natal",
          state: "RN",
          zipcode: "59123456",
          created_at: new Date(),
          updated_at: new Date(),
        },
      ],
      {}
    );
  },

  down: () => {},
};
