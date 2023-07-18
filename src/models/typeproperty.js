'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class TypeProperty extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      TypeProperty.hasMany(models.Post, { foreignKey: 'typePropertyId' });
    }
  }
  TypeProperty.init({
    type: {
      type: DataTypes.STRING(20),
      allowNull: false,
    }
  }, {
    sequelize,
    modelName: 'TypeProperty',
    tableName: 'type_properties'
  });
  return TypeProperty;
};