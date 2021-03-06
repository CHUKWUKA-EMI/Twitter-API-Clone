"use strict";
const sequelize = require("../DB/connection");
const { DataTypes } = require("sequelize");

const Follow = sequelize.define(
  "Follow",
  {
    id: {
      allowNull: false,
      primaryKey: true,
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
    },
    UserId: {
      type: DataTypes.UUID,
      allowNull: false,
    },
    targetid: {
      type: DataTypes.UUID,
      allowNull: false,
    },
    value: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
  },
  {}
);
module.exports = Follow;
