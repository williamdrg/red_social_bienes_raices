'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class TypePost extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      TypePost.hasMany(models.Post, { foreignKey: 'typePostId' });
    }
  }
  TypePost.init({
    type: {
      type: DataTypes.STRING(20),
      allowNull: false,
    }
  }, {
    sequelize,
    modelName: 'TypePost',
    tableName: 'tipeposts'
  });
  return TypePost;
};