'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      User.hasMany(models.Post, { foreignKey: 'userId' });
      User.belongsTo(models.Location, { foreignKey: 'locationId' });
      User.hasMany(models.Follower, { foreignKey: 'userId' });
      User.hasMany(models.Follower, { foreignKey: 'followedId' });
      User.hasMany(models.LikePost, { foreignKey: 'userId' });
      User.hasMany(models.Message, { foreignKey: 'senderId' });
      User.hasMany(models.Message, { foreignKey: 'receiverId' });
      User.hasMany(models.Notification, { foreignKey: 'userId' });
      User.hasMany(models.Review, { foreignKey: 'userId' });
    }
  }
  User.init({
    firstname: {
      type: DataTypes.STRING(30),
      allowNull: false,
    },
    lastname: DataTypes.STRING(30),
    email: {
      type: DataTypes.STRING(50),
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true
      }
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    phone: {
      type: DataTypes.STRING(20),
      unique: true
    },
    locationId: {
      type: DataTypes.INTEGER,
      field: 'location_id'
    },
    avatar: {
      type: DataTypes.TEXT,
      defaultValue: 'image',
    },
    isValid: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
      field: 'is_valid'
    },
    isActived: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
      field: 'is_actived'
    },
  }, {
    sequelize,
    modelName: 'User',
    tableName: 'users'
  });
  return User;
};