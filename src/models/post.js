'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Post extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Post.belongsTo(models.User, { foreignKey: 'userId' });
      Post.hasMany(models.FilePost, { foreignKey: 'postId' });
      Post.belongsTo(models.TypePost, { foreignKey: 'typePostId' });
      Post.belongsTo(models.TypeProperty, { foreignKey: 'typePropertyId' });
    }
  }
  Post.init({
    title: {
      type: DataTypes.STRING(200),
      allowNull: false,
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    typePostId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: 'type_post_id'
    },
    typePropertyId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: 'type_property_id'
    },
    locationId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: 'location_id'
    },
    price: {
      type: DataTypes.REAL,
      allowNull: false,
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: 'user_id'
    },
    statePost: {
      type: DataTypes.BOOLEAN,
      field: 'state_post'
    },
    isActived: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
      field: 'is_actived'
    },
  }, {
    sequelize,
    modelName: 'Post',
    tableName: 'posts'
  });
  return Post;
};