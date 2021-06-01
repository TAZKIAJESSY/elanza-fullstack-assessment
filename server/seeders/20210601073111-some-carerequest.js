"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert("carerequests", [
      {
        careType: "household",
        startDate: "2021-06-01",
        endDate: "2021-06-02",
        clientName: "jessy",
        extraInformation: "no",
        isOpen: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        careType: "medical",
        startDate: "2021-06-03",
        endDate: "2021-06-04",
        clientName: "tazkia",
        extraInformation: "no",
        isOpen: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("carerequests", null, {});
  },
};
