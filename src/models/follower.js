'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Follower extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Follower.belongsTo(models.User, { foreignKey: 'userId' });
      Follower.belongsTo(models.User, { foreignKey: 'followedId' });
    }
  }
  Follower.init({
    userId: {
      type: DataTypes.INTEGER,
      field: 'user_id'
    },
    followedId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: 'followed_id'
    },
    isAccepted: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
      field: 'is_accepted'
    }
  }, {
    sequelize,
    modelName: 'Follower',
    tableName: 'followers'
  });
  return Follower;
};