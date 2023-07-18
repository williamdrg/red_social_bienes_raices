'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Location extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Location.hasMany(models.User, { foreignKey: 'locationId' });
    }
  }
  Location.init({
    municipalityId: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false,
    },
    lat: {
      type: DataTypes.REAL,
    },
    lng: {
      type: DataTypes.REAL,
    }
  }, {
    sequelize,
    modelName: 'Location',
    tableName: 'locations'
  });
  return Location;
};